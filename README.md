# Hi, I'm Sid Polisiti

This repository contains the code for my portfolio website.

I'm a Product Manager and solo founder with 9+ years of experience building consumer apps, internal developer platforms, and developer tools. I currently lead the AI Developer Platform at N26, and on nights and weekends, I build my own products from scratch.

## About Yuki

I am the founder of [Yuki](https://yukihq.com/), an AI personal assistant designed to eliminate digital chores. It automatically organizes your email, calendar, travel, expenses, subscriptions, and reminders.

We launched recently and the app has passed 10,000 downloads. It's built to be a push-first intelligence engine that anticipates what you need before you have to ask.

## Solo Entrepreneur 0 to 1: How I Develop Apps Faster

When you are building alone, your biggest enemies are time and costs. You cannot afford to spend weeks configuring infrastructure, writing boilerplate, or worrying about expensive monthly bills before finding product-market fit. You have to optimize for developer velocity, ease of maintenance, and runway.

Here is the pragmatic stack I chose to get Yuki from whiteboard to 10,000+ downloads as fast as possible.

### Why I chose React Native

As a solo developer, maintaining two separate codebases for iOS and Android is a death sentence for momentum. React Native lets me build once and ship native experiences on both platforms while still benefiting from a huge open-source ecosystem.

### Why I chose Expo

Expo removes a lot of the native setup pain. I don't have to spend my time fighting Xcode or Android Studio configuration. It gives me fast prototyping, strong local development, and OTA updates so I can fix bugs quickly without waiting on the App Store review cycle for every JS change. Their [free tier](https://expo.dev/pricing) is also genuinely useful for early teams: enough Android and iOS builds to keep shipping, store submission support, CI/CD workflow time, updates for early users, and access to tools like [Launch](https://launch.expo.dev/) and [Observe](https://expo.dev/solutions/expo-observe) before you are ready to pay for more infrastructure.

### Why I chose Supabase

I chose Supabase because it gave me the benefits of a managed Postgres database without turning the backend into a black box. I wanted full control over the data model and SQL layer, but I did not want to spend weeks standing up infrastructure, building auth, wiring storage, or maintaining basic APIs before I had real user demand. Supabase gave me the right product primitives out of the box: Postgres as the source of truth, managed authentication, storage, realtime capabilities, and edge functions for lightweight backend workflows. For a solo founder, that was the ideal tradeoff. I could move quickly early on without giving up data ownership, portability, or the ability to grow into a more complex architecture later.

### Why I chose Google Cloud and Vertex AI

For an AI assistant, the models and infrastructure need to be reliable and scalable, but they also need to be realistic for a founder budget. Google Cloud and Vertex AI gave me a strong foundation for running Yuki's agentic workflows, and the [Google for Startups Cloud Program](https://cloud.google.com/startup) helped remove a lot of the financial friction early on. The same was true for Google Workspace startup perks. Small things like setting up official email, calendars, and the basic company infrastructure matter more than people think when you're trying to look credible while still moving fast. When I needed a simpler managed option for smaller services, [Render](https://render.com/) was a good low-ops alternative. It is not free in the same way Cloudflare is, but it is often worth paying for when you want straightforward deployment for a microservice without taking on more platform complexity.

### Why I chose Cloudflare for the marketing site

I used [Cloudflare](https://www.cloudflare.com/) to host yukihq.com because it is one of those tools that quietly removes a lot of hassle. For an early-stage marketing site, the free tier is generous enough to get real traction without forcing infrastructure decisions too early. Roughly speaking, it gives you room for around 5,000 daily active users or about 100,000 requests a day before you need to think much harder about cost. It let me keep the site fast and cheap while the product itself got most of my attention. If I wanted a similarly strong alternative with a great developer workflow, [Vercel](https://vercel.com/home) would have been a very reasonable choice too.

### Why I chose Docusaurus for docs

For documentation, I wanted something free, structured, and easy to maintain without inventing my own docs stack. [Docusaurus](https://docusaurus.io/) was a great fit for that. It let me stand up a proper documentation experience quickly and deploy it to Cloudflare, which meant docs could be treated like a real product surface instead of an afterthought.

### Why I chose Sentry

As a solo founder, silent failures are brutal. Sentry helped me catch crashes and production issues early, and that visibility mattered more than almost any feature once real users started depending on the app. Their [startup program](https://sentry.io/for/startups/apply/) also helped because it meant I could treat observability as part of the product from day one, not as something to bolt on later when things started breaking.

### Why I chose PostHog

Analytics are essential, but they get expensive fast. PostHog gave me enough room to instrument activation, engagement, and retention without feeling like every new event was something I had to second-guess. Their [pricing](https://posthog.com/pricing) includes 1 million free events per month, which was more than enough to get real product visibility early without introducing cost anxiety into basic instrumentation decisions.

### Why I chose RevenueCat

Subscriptions are one of those things that sound simple until you actually build them. RevenueCat let me avoid weeks of payment edge cases, webhook complexity, and app store subscription logic. I also liked that their [pricing](https://www.revenuecat.com/pricing) scales with you: free up to $2,500 in monthly tracked revenue, then 1% after that. For an early product, that is exactly how tooling should feel. It supports monetization without demanding serious fixed cost before the business is ready.

### Why I chose GitHub

For a small startup, [GitHub](https://github.com/) does much more than host code. It gave me private repos, CI/CD through GitHub Actions, enough runner time to automate a real development workflow, and a simple place to keep project management and issue tracking close to the code. That mattered because I did not want engineering execution split across five different tools before the company had even earned that complexity. If someone wanted a strong alternative, [GitLab's startup program](https://about.gitlab.com/solutions/startups/) is worth looking at too.

### Other early-stage leverage that helped

One of the biggest lessons from building Yuki is that early-stage speed is not just about architecture. It is also about removing small operational burdens before they pile up. For outbound transactional emails, I used [Resend](https://resend.com/pricing) instead of overengineering the setup, and their free tier of $0/month for up to 3,000 emails was exactly the kind of simple, founder-friendly default I wanted. For support and operations tooling, [FounderPass](https://www.founderpass.com/) was genuinely useful because it helped me access discounts on tools like Help Scout and keep the company stack lean while I was still proving out the product. I also use Canva for brand and marketing assets, and I am still learning as I go there too.

## What building and shipping Yuki taught me

One thing I learned very quickly is that speed only matters if you can keep shipping safely. OTA updates are amazing, but once a few thousand users depend on your product, you need much tighter discipline around staging, production, migrations, and observability than you think at the start.

I also learned that product quality is usually won or lost in the unglamorous details. Cross-platform UI polish, background sync reliability, subscription edge cases, feature flags, and silent failure handling all matter more than people expect. Those were the areas that repeatedly determined whether a launch felt smooth or fragile.

The biggest founder lesson was to choose leverage over novelty. The fastest path was almost never building custom infrastructure. It was picking boring, reliable tools, keeping the stack simple, instrumenting everything early, and saving my time for the product decisions users could actually feel.

I share all of this because these tools genuinely helped me build faster. I am not getting paid by any of these companies. I am just documenting what worked for me as I go, and I will keep sharing what I learn.

## Yuki architecture (open reference for solo founders)

If you want to see how this stack fits together in practice, I open-sourced a high-level architecture overview of Yuki — how I structure Supabase Edge Functions, Postgres with RLS, Google SSO auth, and agentic background workflows, without exposing any proprietary code.

- Architecture overview: [github.com/siddharthpolisiti/yuki-architecture](https://github.com/siddharthpolisiti/yuki-architecture)
- Product docs: [docs.yukihq.com](https://docs.yukihq.com)

The intent is simple: share the real tech landscape a solo founder can use to ship fast on a small budget.

## Let's connect

- [LinkedIn](https://www.linkedin.com/in/siddharthpolisiti/)
- siddharth.polisiti@gmail.com
