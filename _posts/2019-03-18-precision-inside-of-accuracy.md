---
layout: post
title: Precision Inside of Accuracy
---

Many people use the words -precision- and -accuracy- more or less
interchangeably. However, they do have specific and quite different meanings.

**Precision** is defined as how close together a series of measurements are.
Measurements can be quite precise and yet inaccurate.

**Accuracy** is a measure of how close to the “real” answer measurements are.
Measurements could be quite accurate, but not particularly precise.


The difference between precision and accuracy comes up most frequently for me
in relation to predictions. We may be creating a model to predict customer
demand, proper pricing, future cash flows, or really anything. Obviously, the
ideal scenario is to be both precise and accurate — but often that’s not
entirely possible.

As we approach a forecasting or prediction problem, we often pull out Google
Spreadsheets and start building formulas on top of formulas on top of
formulas. If we’re doing it well, we pull our assumptions out into another tab
so we can evaluate what happens as we change those assumptions.

However, there is a risk in becoming more interested in the precision of the
model — how many pieces are we measuring, have we accounted for X drop off, or
Y ratio — that we lose sight of the big picture. In essence, we become so
focused on the precision that we may lose focus on the accuracy, which is
typically driven much more by the assumptions and construct of the model than
it’s level of detail.

This problem can be exacerbated when a model produces a very precise numerical
answer (24.39%). This seems like it must be quite close to true, though in
reality, it may only be accurate in our minds to /- 20%. Showing that precise
an answer often falsely signals that it also has a high degree of accuracy.

When I start to see this problem — or when I see us spending too much time
building a model where we have only a very rough idea of values for our
assumptions — I will often ask the team if our precision is inside our
accuracy. It’s a good question to ask whenever you’re building a model —
because ultimately for this sort of problem accuracy is much more important
than precision.

