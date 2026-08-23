export const caseStudies = [
  {
    worldNumber: 1,
    title: "YUKI - AI DIGITAL ASSISTANT",
    company: "yukihq.com",
    role: "Founder — CPO, CTO, CMO",
    icon: "🌟",
    context:
      "Built and launched Yuki, an AI personal assistant that automatically organizes email, calendars, travel, expenses, subscriptions, reminders, and shared responsibilities for individuals, couples, and families.",
    problem: [
      "Severe App Overload: Users juggle hundreds of siloed apps, creating massive information scatter and daily context-switching fatigue",
      "The Inbox Black Hole: Critical deadlines, meetings, and communications are routinely buried in overwhelming email inboxes",
      "The Cost of Chaos: Lack of organization spikes user stress and results in missed financial opportunities",
      "The Missing Layer: No predictable, secure, unified platform exists to extract actionable clarity from a thousand different apps",
    ],
    roleScope: [
      "Built the product end to end as founder, covering product strategy, UX, engineering, and go-to-market",
      "Designed a full-stack MVP on Supabase with relational data, edge functions, storage, and Google SSO",
      "Kept infrastructure lean to preserve runway and ship quickly",
      "Iterated rapidly from user feedback to strengthen product-market fit",
    ],
    whatBuilt: [
      "Built and launched an AI personal assistant from scratch",
      "Scaled the product to 3,000 active users within two months of launch",
      "Designed a scalable data architecture for real-time sync and agentic background workflows",
      "Prioritized rapid MVP delivery while keeping infrastructure costs low",
    ],
    impact: [
      { metric: "Active Users", value: "3,000+" },
      { metric: "Time to Scale", value: "2 Months" },
      { metric: "Backend", value: "Supabase" },
      { metric: "Build", value: "Solo, Full-stack" },
    ],
    learning:
      "Building 0→1 as a solo founder teaches you that conviction without validation is just opinion. Ship fast, listen harder.",
  },
  {
    worldNumber: 2,
    title: "AI DEVELOPER PLATFORM & PRODUCTIVITY",
    company: "N26",
    role: "Lead Product Manager",
    icon: "🧠",
    context:
      "Led the 0-to-1 launch of N26's internal AI Developer Platform, integrating Claude and GitHub Copilot to improve AI scalability and quality across engineering workflows.",
    problem: [
      "Idea-to-production cycles were slow (~20 days)",
      "AI tooling was fragmented and not yet trusted for real engineering work",
      "No safe, governed way to expose internal APIs to coding agents",
      "Debugging and operational support consumed large amounts of engineering time",
    ],
    roleScope: [
      "Led the AI Developer Platform and Developer Productivity initiative",
      "Owned strategy, roadmap, and rollout across engineering teams",
      "Partnered with Platform Engineering, Security, and Developer Experience",
      "Defined guardrails for agentic workflows and internal API access",
    ],
    whatBuilt: [
      "Launched the internal AI Developer Platform",
      "Integrated Claude and GitHub Copilot into engineering workflows",
      "Created the foundation for AI-driven developer productivity at scale",
      "Helped engineers write, test, and ship code with AI assistance",
    ],
    impact: [
      { metric: "Impact", value: "Faster engineering workflows" },
      { metric: "AI Stack", value: "Claude + Copilot" },
      { metric: "Scope", value: "Internal platform" },
      { metric: "Launch", value: "0→1" },
    ],
    learning:
      "AI only compounds when the platform is trusted. Governance and developer experience are the product, not an afterthought.",
  },
  {
    worldNumber: 3,
    title: "GROWTH & ENGAGE",
    company: "N26",
    role: "Lead Product Manager — Growth & Engage",
    icon: "🚀",
    context:
      "Led experimentation and growth for N26's Growth & Engage group, running the experimentation platform and driving improvements across onboarding, sign-up, sign-in, home engagement, and feature adoption.",
    problem: [
      "Growth depended on a strong experimentation platform",
      "Onboarding, sign-up, and sign-in funnels carried avoidable friction",
      "Feature discoverability and home engagement needed improvement",
      "Growth decisions needed clearer signals from experiments",
    ],
    roleScope: [
      "Lead PM for the Growth & Engage group",
      "Owned the experimentation platform",
      "Optimized onboarding, sign-up, sign-in, and engagement flows",
      "Partnered with Engineering, Data, UX, and Product Marketing",
    ],
    whatBuilt: [
      "Experimentation platform for Growth & Engage",
      "Experimentation-led improvements across onboarding and activation",
      "Home engagement work to improve feature discoverability and adoption",
      "Self-serve analytics and dashboards for growth teams",
    ],
    impact: [
      { metric: "Impact", value: "Experimentation platform" },
      { metric: "Focus", value: "Funnels + engagement" },
      { metric: "Outcome", value: "Behavior change" },
      { metric: "Scope", value: "Growth & Engage" },
    ],
    learning:
      "Product-led growth compounds. Discoverability plus fast experimentation moves more users than any single feature.",
  },
  {
    worldNumber: 4,
    title: "SMART HOME & HOSPITALITY",
    company: "Octo Telematics",
    role: "Group Product Manager",
    icon: "🏠",
    context:
      "Octo was expanding beyond automotive telematics into Smart Home and Hospitality, combining hardware, mobile apps, and B2B2C partnerships to serve the $100B holiday rental market. The challenge: finding product–market fit across verticals while owning the division's P&L.",
    problem: [
      "Fragmented customer needs across safety, access, and energy",
      "Hardware + software dependencies slowed iteration",
      "Need to prove commercial viability and product–market fit fast",
    ],
    roleScope: [
      "Group Product Manager for Smart Home & Hospitality",
      "Owned product strategy, discovery, and roadmap",
      "Managed P&L responsibility for the division",
      "Led cross-functional teams across Leadership, Sales, CSM, UX, and Engineering",
    ],
    whatBuilt: [
      "Launched Homebox 2.0, a smart home app for safety, keyless entry, and energy management",
      "White-label platforms that enhanced security and automated check-ins for hospitality",
      "Deep user research, competitive analysis, and vertical GTM strategies",
      "Hardware + software integration models for B2B2C partners",
    ],
    impact: [
      { metric: "Revenue", value: "$12M" },
      { metric: "% of Total", value: "~15%" },
      { metric: "DAU Growth", value: "+20%" },
      { metric: "PMF", value: "Achieved" },
    ],
    learning:
      "Hardware multiplies complexity. Without tight discovery loops, execution speed collapses.",
  },
  {
    worldNumber: 5,
    title: "AI CHATBOTS, KYC & AML",
    company: "Bank of America",
    role: "Product Developer (Erica)",
    icon: "🤖",
    context:
      "Bank of America was scaling its mobile banking platform to 40M+ customers, with customer support costs growing faster than usage. I helped build Erica, the AI chatbot, to deflect support volume and guide users to self-serve — while KYC and AML flows demanded stricter, friction-aware experiences.",
    problem: [
      "Customer support channels were overloaded",
      "Live support costs were rising",
      "Users struggled to self-serve",
      "Compliance flows were seen as blockers, not product experiences",
    ],
    roleScope: [
      "Product Developer on Erica, the AI chatbot assistant",
      "Worked with Product, Engineering, Data, Legal, and Compliance",
      "Owned chatbot features focused on deflection, self-service, and guided flows",
    ],
    whatBuilt: [
      "AI chatbot experiences that answered common banking queries",
      "Guided users to self-service articles and in-app actions",
      "Launched the beta to the user base, driving 1M+ sign-ups",
      "Features supporting AML and KYC processes",
    ],
    impact: [
      { metric: "CS Deflection", value: "20%+" },
      { metric: "Beta Sign-ups", value: "1M+" },
      { metric: "Customers", value: "40M+" },
      { metric: "Ops Costs", value: "Linear" },
    ],
    learning:
      "In regulated environments, trust is the growth lever. AI only works when UX, compliance, and incentives align.",
  },
  {
    worldNumber: 6,
    title: "WAREHOUSE MANAGEMENT SYSTEMS",
    company: "Prospecta Technologies",
    role: "Product Lead",
    icon: "🏭",
    context:
      "Prospecta was a growing B2B SaaS company whose warehouse management system (WMS) began as a custom airline logistics tool. The product had strong fundamentals but was over-specialized, limiting growth. As the first Product Lead, I turned it into a flexible SaaS product for SMBs.",
    problem: [
      "Product solved real operational problems but was not packaged for scale",
      "Heavy dependency on airline-specific workflows",
      "Lack of self-serve onboarding and monetization clarity",
      "Company needed formal product practices to grow",
    ],
    roleScope: [
      "First Product Lead at the company",
      "Owned product strategy, roadmap, and monetization",
      "Worked directly with Engineering, Sales, and Founders",
      "Introduced formal product practices and a culture of shipping quickly",
    ],
    whatBuilt: [
      "Re-architected the product from airline-specific → configurable WMS platform",
      "Defined reusable warehouse primitives (inventory, fulfillment, routing)",
      "Designed B2B and B2B2C onboarding flows with clear pricing tiers",
      "Introduced use-case based packaging and upper-funnel positioning",
    ],
    impact: [
      { metric: "ARR Growth", value: "$250K→$5M" },
      { metric: "Team Scale", value: "15→50" },
      { metric: "New Market", value: "SMB SaaS" },
      { metric: "Product", value: "Configurable" },
    ],
    learning:
      "Systems thinking matters before growth tactics. If the product isn't modular, growth is expensive.",
  },
  {
    worldNumber: 7,
    title: "E-COMMERCE & TELECOM",
    company: "CGI",
    role: "Full Stack Engineer (Team Lead)",
    icon: "💻",
    context:
      "At CGI, I worked as a full-stack engineer and team lead building the Bell Canada e-commerce web app, driving the discovery and sales of mobile phones, SIM cards, and cellular plans at large scale.",
    problem: [
      "Users needed a reliable way to discover and buy phones, SIMs, and plans online",
      "Core flows had to scale to millions of monthly users",
      "Partner retail networks required deep technical integration",
      "Registration, purchase, and bill-payment flows had to stay reliable",
    ],
    roleScope: [
      "Full Stack Engineer and Team Lead on the Bell Canada e-commerce platform",
      "Owned core user flows: registration, purchases, and bill payments",
      "Led technical partner integrations with major retail networks",
      "Bridged engineering execution with business requirements",
    ],
    whatBuilt: [
      "Bell Canada e-commerce web app for phones, SIMs, and cellular plans",
      "Core user flows supporting ~8M monthly active users",
      "Partner integrations with major retailers including Best Buy and Walmart",
      "Reliable registration, purchase, and bill-payment experiences",
    ],
    impact: [
      { metric: "MAU Supported", value: "~8M" },
      { metric: "Partners", value: "Best Buy, Walmart" },
      { metric: "Role", value: "Team Lead" },
      { metric: "Domain", value: "E-commerce" },
    ],
    learning:
      "Engineering at scale taught me that reliability is a feature — millions of users feel every edge case.",
  },
  {
    worldNumber: 8,
    title: "EDUCATION & FOUNDATIONS",
    company: "Engineering & Business",
    role: "Academic Journey",
    icon: "🎓",
    context:
      "A dual foundation in engineering and business strategy that shapes how I approach product challenges.",
    problem: [
      "Need to understand both technical systems and business value",
      "Bridging the gap between engineering and strategy",
      "Building frameworks for digital transformation",
    ],
    roleScope: [
      "B.Tech — Electronics & Communication Engineering (Biju Patnaik University of Technology)",
      "MBA — Strategy & Digitalization (emlyon business school)",
      "Focus on product strategy and digital transformation",
    ],
    whatBuilt: [
      "Strong foundation in systems thinking and architecture",
      "Business strategy and go-to-market frameworks",
      "Cross-functional leadership capabilities",
      "Data-driven decision making skills",
    ],
    impact: [
      { metric: "Engineering", value: "B.Tech" },
      { metric: "Business", value: "MBA" },
      { metric: "Strategy", value: "✓" },
      { metric: "Digital", value: "✓" },
    ],
    learning:
      "Engineering taught me how systems break. Business taught me where they create value.",
  },
  {
    worldNumber: 9,
    title: "PASSIONS & POWER-UPS",
    company: "Life Beyond Work",
    role: "Interests & Hobbies",
    icon: "❤️",
    context:
      "The activities and interests that keep me balanced, creative, and continuously learning.",
    problem: [
      "Work-life balance is essential for sustained performance",
      "Diverse interests fuel creativity",
      "Learning never stops outside of work",
    ],
    roleScope: [
      "🎾 Padel — fast feedback, competitive learning",
      "🥾 Hiking — long-term thinking, endurance",
      "🍛 Cooking — systems + creativity",
      "🎲 Board games — strategy, people, tradeoffs",
    ],
    whatBuilt: [
      "A balanced lifestyle that fuels professional growth",
      "Mental frameworks from diverse experiences",
      "Community connections through shared activities",
      "Continuous learning mindset",
    ],
    impact: [
      { metric: "Padel", value: "🎾" },
      { metric: "Hiking", value: "🥾" },
      { metric: "Cooking", value: "🍛" },
      { metric: "Games", value: "🎲" },
    ],
    learning:
      "The best product ideas often come when you're not thinking about products at all.",
  },
];
