---
layout: post
title: "Building as a Generalist"
date: 2026-04-16
---

I shipped an iPhone app last month. It's called Whose Turn — it does one simple thing: tracks who paid last when you and a friend take turns picking up the check. ([It's in the App Store here](https://apps.apple.com/us/app/pay-turn/id6747739247) if you want to see it.)

<!--more-->

I'm not a developer. I have a CS degree and wrote code professionally — in college, more than twenty years ago. I've spent my career since then in product, partnerships, and business roles. I've been thinking about products my entire career, but thinking through a product and actually shipping one are separated by a wall of implementation that used to require a team to get over.

That wall is coming down. And I think the implications are bigger than most people realize.

## How I actually built it

I built Whose Turn using Claude Code, Anthropic's AI coding tool. And I want to be specific about what that means, because my own process evolved in a way I didn't expect.

When I first started using Claude to write code, I did what most technical people probably do — I'd write some code, then use Claude for assistance, and I'd carefully read the code it wrote. I was still thinking of myself as the developer, with AI as a helper.

The big unlock was when I stopped looking at the code entirely.

I don't mean I got lazy. I mean I realized that my value wasn't in reviewing Swift syntax — it was in knowing what the app should do, how it should feel, and what tradeoffs to make. So I started treating Claude as my entire development team. I describe what I want. I test what it builds. I give feedback on what's wrong. I iterate. But I have never once read the actual source code of Whose Turn. I couldn't tell you what it says.

That felt uncomfortable at first. It felt like cheating, or like I was giving up control. But the product is better for it — because instead of spending my time parsing code I haven't written professionally in two decades, I spent it on the things I'm actually good at: product decisions, UX tradeoffs, and knowing when something doesn't feel right.

## It's not all magic

I should be honest about the rough edges. Building a mobile app is still hard — not the code, but everything around it. Getting an Apple Developer account, configuring signing certificates, navigating App Store review, dealing with provisioning profiles. That part is still genuinely technical and frustrating, and AI doesn't fully smooth it over.

If I were advising someone who wanted to build their first thing, I'd actually steer them away from mobile. The simplest path right now is a web app — something like Supabase for your database and auth, deployed on Vercel. That stack is remarkably accessible, and AI tools can handle almost all of the implementation. You can go from idea to live product in a weekend. Mobile adds real friction that the tools haven't fully eliminated yet.

## The disciplines are collapsing

For decades, building software has been organized around three distinct disciplines: product management (what should we build and why), design (how should it look and feel), and engineering (how do we make it work). Companies hire separate people for each. There are entire career tracks, job titles, and org charts built around this division.

That division existed for a practical reason — each discipline required deep, specialized skill that took years to develop. You couldn't just pick up iOS development on a weekend. You couldn't design a good interface without training your eye over hundreds of iterations. The specialization was a response to complexity.

But what happens when the implementation complexity drops dramatically? When the cost of turning an idea into working software falls by 10x or 100x?

The disciplines don't disappear — but they collapse into fewer people. Instead of needing a PM, a designer, and two engineers to ship a simple app, you need one person who can think across all three and use AI to execute. The specialist roles don't vanish for complex systems, but the threshold for what one person can build alone has shifted enormously.

I've [written before](https://jeffkeltner.com/ai-and-work-augmenting-vs-replacing-humans/) about how the "augmenting vs. replacing" framing for AI misses the point — the real story is usually about how work reorganizes around the technology. This is a vivid example. AI isn't replacing engineers. It's changing the shape of who can build what, and how many people it takes.

## Why generalists win here

This is where it connects to something I believe deeply about careers: the most valuable people in any organization are the ones who can think across disciplines. Not the "knows a little about a lot" kind of generalist — the kind who knows enough about product, design, engineering, business, and operations to see how changes in one area ripple through the others.

AI tools like Claude Code are an enormous lever for exactly this kind of person. If you understand what users need, can reason about design tradeoffs, and can think systematically about how software should work — you can now *build the thing yourself*. The bottleneck used to be implementation. For a huge class of problems, it isn't anymore.

This is a genuine shift in who gets to build. Not just developers using AI to code faster — though that's happening too — but product thinkers, designers, and domain experts who can now bring their ideas to life without waiting for engineering bandwidth.

I've always believed that [asking the right questions](https://jeffkeltner.com/how-asking-basic-questions-is-a-superpower/) matters more than having the right technical skills. That's even more true now — because the technical skills are increasingly something you can delegate.

## What this means

I don't think this replaces professional software engineers. Complex systems, infrastructure, performance-critical code, large-scale architecture — all of that still requires deep expertise. What changes is the floor. The minimum viable team to ship a useful product just got a lot smaller, and the range of people who can participate in building just got a lot wider.

If you're someone who's always had ideas for things you wanted to build but couldn't — the tools are here. The barrier isn't gone, but it's dramatically lower. And if you're the kind of person who's spent your career learning across disciplines rather than going deep in one — that breadth is about to become a lot more valuable.
