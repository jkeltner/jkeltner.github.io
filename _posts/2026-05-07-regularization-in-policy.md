---
layout: post
title: "Regularization in Policy"
date: 2026-05-07
---

A few years ago, when I was learning machine learning concepts — mostly so I could explain them to others — I came across an idea that I haven't been able to stop thinking about. Not because of what it means for AI, but because of what it means for everything else.

<!--more-->

The concept is called regularization. In machine learning, when you're training a model, there's a constant temptation to make it more complex. Add more parameters. Capture more nuance. Fit the training data as closely as possible. And the model *will* get better at matching the data you trained it on. But there's a catch: the more complex you make it, the worse it tends to perform on new data it hasn't seen before. It memorized the past instead of learning the pattern.

Regularization is the fix. It's a technique that deliberately penalizes complexity — it pushes the model toward simpler explanations, even if that means a slightly worse fit to the training data. The insight is counterintuitive: **a simpler model that's a little bit wrong about the past will usually be more right about the future.**

I think this is one of the most underappreciated ideas I've encountered. Not because of what it tells us about machine learning, but because the exact same mistake — over-optimizing for complexity — is one we make constantly in public policy.

## The Complexity Trap

Here's how I think about it. When we write a new law or regulation, the instinct is almost always to be as specific and comprehensive as possible. Anticipate every scenario. Close every loophole. Craft the perfect set of incentives so people behave exactly the way we want them to. On paper, it looks smart. You've thought of everything.

But in practice, you get the U.S. tax code.

The tax code is maybe the best example of what happens when you keep optimizing without regularization. Every provision made sense to somebody at some point. Every deduction, credit, exemption, and phase-out was added to solve a specific problem or create a specific incentive. Each individual addition was clever. And the result is a system so complex that it's essentially incomprehensible — not just to ordinary people, but to the professionals who work in it every day.

Nobody understands the whole thing. Nobody can predict with confidence how a given change will ripple through the system. The complexity hasn't made the tax code better at achieving its goals. It's made it better at being gamed by people with expensive advisors and worse at being understood by everyone else.

That's the trap. Each increment of complexity feels justified on its own terms. But the cumulative effect is a system that's too clever by half — one that's been so optimized for the specific scenarios its authors imagined that it fails badly in the real world, where things are messy and unpredictable.

## Simplicity Isn't Simplistic

I want to be careful here, because "just make it simpler" is easy to say and often gets used as a lazy argument against any regulation at all. That's not what I'm arguing. Regularization doesn't mean building a stupid model. It means building the simplest model that still captures the important patterns. There's a big difference.

In policy terms, that means starting with a clear goal and asking: what's the simplest set of rules that would actually achieve this? Not the most comprehensive. Not the most airtight. The simplest that works.

Take carbon pricing. You could write thousands of pages of sector-specific emissions regulations — different rules for power plants, manufacturing, transportation, agriculture, each with their own standards, exemptions, and enforcement mechanisms. Or you could put a price on carbon and let the market figure out where the reductions come from. The first approach tries to be clever about every scenario. The second establishes a simple principle and lets it propagate.

I'm not saying carbon pricing is easy to implement or that there aren't real complications. But the *principle* is simple enough that a normal person can understand it: if you put carbon into the atmosphere, you pay for it. That clarity is worth something. When people understand the rule, they can plan around it, comply with it, and hold their representatives accountable for how it's designed. When they can't understand it, you've already lost most of the benefit.

## Why We Keep Adding Complexity

If simplicity is so powerful, why do we keep choosing complexity? I think there are a few reasons, and they map pretty well to why ML practitioners overtrain models.

The first is that it feels like progress. Adding a new provision, addressing a new edge case — it feels like you're making things better. You're solving a visible problem. The cost of the added complexity is diffuse and delayed, while the benefit of addressing the specific case is immediate and concrete. It's the same dynamic in ML: adding parameters improves your training metrics, and you have to be disciplined enough to care about what you can't measure yet.

The second is institutional. Complex systems create their own constituencies. Tax preparers, compliance consultants, lobbyists, regulatory specialists — all of these roles exist because the system is complex. I'm not attributing malice here. But the people best positioned to explain why a rule is necessary are often the same people whose jobs depend on the complexity continuing. In ML, we don't let the model vote on its own architecture. In policy, we kind of do.

The third — and maybe the most insidious — is overconfidence. The authors of complex policies believe they can anticipate how the world will respond. They think they can design the right incentive structure, predict the behavioral responses, and engineer the outcome they want. But the real world is messier than any model. People respond in unexpected ways. Markets shift. Technology changes the equation. The [law of unintended consequences](https://jeffkeltner.com/the-law-of-unintended-consequences/) is always lurking, and the more specific your policy, the more brittle it is when reality doesn't match your assumptions.

In machine learning, this is literally the problem regularization solves. You're telling the model: *don't be so sure you've figured everything out. Leave room for what you haven't seen yet.*

## The Case for Policy Regularization

I'll be honest — I'm not a policy expert. I'm a tech person who learned a concept in machine learning and [can't stop seeing it everywhere](https://jeffkeltner.com/the-circle-theory-of-knowledge/). So take this for what it is: one person's framework, not a prescription.

But I do think we'd be better off if the people writing laws asked themselves the question that ML engineers ask constantly: **is this model more complex than it needs to be?** Are we adding provisions because they genuinely improve outcomes, or because we're trying to be clever? Would a simpler approach — one that's a little less precise, a little less tailored to every edge case — actually perform better in the real world, where things are unpredictable?

The U.S. tax code could be dramatically simpler. Healthcare regulation could be more straightforward. Financial regulation could establish clearer principles instead of cataloging every prohibited behavior. In each case, we'd lose some theoretical precision. But we'd gain something potentially more valuable: rules that people can understand, systems that can adapt to change, and outcomes that are more predictable and more fair.

Regularization isn't about being lazy or imprecise. It's about having the discipline to resist unnecessary complexity — to build the simplest thing that actually works, and to trust that simplicity will generalize better than cleverness.

I've found that's true in machine learning. I suspect it's true in a lot of other places, too.
