# Jeff Keltner's Blog

Personal blog hosted on GitHub Pages using Jekyll.

## Build & Serve

```bash
script/server          # wrapper script
bundle exec jekyll serve  # direct command
```

Site available at `http://localhost:4000` after building.

## Theme

- **Minima 3.0** via `remote_theme: jekyll/minima`
- Skin: `classic` (light)
- Customization hooks:
  - `_sass/minima/custom-variables.scss` — override Minima variables (fonts, colors, widths)
  - `_sass/minima/custom-styles.scss` — custom CSS rules
  - `_includes/custom-head.html` — inject into `<head>` (e.g., Google Fonts)

## Key Directories

- `_posts/` — blog posts, named `YYYY-MM-DD-title.md`
- `_includes/` — HTML partials (overrides theme defaults)
- `_sass/minima/` — SCSS customization files
- `assets/images/` — static images (headshot, etc.)

## Deployment

Push to `main` branch. GitHub Pages builds and deploys automatically.

## Config

`_config.yml` — site title, author info, social links, theme settings, plugins (jekyll-feed, jekyll-seo-tag).
