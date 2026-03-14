(function () {
  var idx, documents;

  function initSearch() {
    fetch('/search.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        documents = data;
        idx = lunr(function () {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('excerpt', { boost: 5 });
          this.field('content');

          data.forEach(function (doc) { this.add(doc); }, this);
        });

        // If the page loaded with a ?q= param, run the search immediately
        var params = new URLSearchParams(window.location.search);
        var q = params.get('q');
        if (q) {
          document.getElementById('search-input').value = q;
          displayResults(performSearch(q), q);
        }
      });
  }

  function performSearch(query) {
    if (!idx || !query.trim()) return [];
    try {
      return idx.search(query).map(function (r) {
        return documents.find(function (d) { return d.url === r.ref; });
      }).filter(Boolean);
    } catch (e) {
      // If lunr query syntax is invalid, fall back to wildcard
      try {
        return idx.search(query + '*').map(function (r) {
          return documents.find(function (d) { return d.url === r.ref; });
        }).filter(Boolean);
      } catch (e2) {
        return [];
      }
    }
  }

  function displayResults(results, query) {
    var container = document.getElementById('search-results');
    if (!container) return;

    if (!query || !query.trim()) {
      container.innerHTML = '';
      return;
    }

    if (results.length === 0) {
      container.innerHTML = '<p class="search-no-results">No results for \u201c' +
        escapeHtml(query) + '\u201d</p>';
      return;
    }

    var html = '<p class="search-count">' + results.length +
      ' result' + (results.length !== 1 ? 's' : '') +
      ' for \u201c' + escapeHtml(query) + '\u201d</p>';
    html += '<ul class="search-results-list">';

    results.forEach(function (doc) {
      var excerpt = (doc.excerpt || doc.content || '').substring(0, 180);
      if (excerpt.length >= 180) excerpt += '\u2026';

      html += '<li class="search-result-item">' +
        '<span class="post-meta">' + (doc.date || '') + '</span>' +
        '<h3><a href="' + doc.url + '">' + escapeHtml(doc.title) + '</a></h3>' +
        '<p>' + escapeHtml(excerpt) + '</p>' +
        '</li>';
    });

    html += '</ul>';
    container.innerHTML = html;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSearch();

    var input = document.getElementById('search-input');
    if (!input) return;

    input.addEventListener('input', function () {
      var q = input.value;
      if (q.length > 2) {
        displayResults(performSearch(q), q);
      } else {
        document.getElementById('search-results').innerHTML = '';
      }
    });

    input.closest('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value;
      displayResults(performSearch(q), q);
    });
  });
})();
