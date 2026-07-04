export const caseStudies = [
  {
    worldNumber: 1,
    title: "VENTURE: YUKI",
    company: "yukihq.com",
    role: "Founder — CPO, CTO, CMO",
    icon: "🌟",
    context:
      "Stop managing your life. Start living it. Yuki runs silently in the background—tracking expenses, organizing your day, and filtering emails—so you never have to. It is designed to deliver three distinct ROI metrics to the user: Save Time. Save Money. Kill the Stress.",
    problem: [
      "Severe App Overload: Users juggle hundreds of siloed apps, creating massive information scatter and daily context-switching fatigue",
      "The Inbox Black Hole: Critical deadlines, meetings, and communications are routinely buried in overwhelming email inboxes",
      "The Cost of Chaos: Lack of organization spikes user stress and results in missed financial opportunities",
      "The Missing Layer: No predictable, secure, unified platform exists to extract actionable clarity from a thousand different apps",
    ],
    roleScope: [
      "CPO (Product & Strategy): Defined core vision, designed trust-first UX, iterated rapidly toward product-market fit",
      "CTO (Engineering & Architecture): Built the complete MVP, architecting scalable, cost-efficient LLM routing and API integrations",
      "CMO (Marketing & Growth): Crafted brand positioning and executed go-to-market strategy for early user acquisition",
    ],
    whatBuilt: [
      "Shipped MVP: Took the app from whiteboard concept to a functional, testable product",
      "Lean AI routing architecture that drastically reduced per-query LLM costs",
      "Proactive alert system balancing helpful AI interventions against notification fatigue",
      "Rapid iteration cycle translating beta feedback into shipped features in days",
    ],
    impact: [
      { metric: "MVP", value: "Shipped" },
      { metric: "LLM Costs", value: "Optimized" },
      { metric: "User Testing", value: "Active" },
      { metric: "Iteration", value: "Days" },
    ],
    learning:
      "Building 0→1 as a solo founder teaches you that conviction without validation is just opinion. Ship fast, listen harder.",
  },
  {
    worldNumber: 2,
    title: "GROWTH, EXPERIMENTATION & PLATFORMS",
    company: "N26",
    role: "Lead Product Manager — Platforms",
    icon: "🚀",
    context:
      "N26 was scaling rapidly across Europe, growing from ~1.8M to 5M+ MAUs. Growth velocity exposed bottlenecks in experimentation, analytics, reliability, and developer experience.",
    problem: [
      "Slow decision-making due to fragmented data",
      "Experimentation was hard to scale",
      "Platform teams operated reactively (DevOps firefighting)",
      "Incident detection and resolution were slow",
    ],
    roleScope: [
      "Lead Product Manager for Platform & Developer Experience",
      "Built the Platform PM function from first PM → team of 4",
      "Owned Product Analytics, Experimentation, DevEx, Observability",
      "Partnered with Engineering, Data, UX, and Product Marketing",
    ],
    whatBuilt: [
      "Company-wide experimentation platform (20+ A/B tests/month)",
      "Product analytics frameworks and self-serve dashboards",
      "Incident detection and alerting improvements",
      "Automation, dashboards, and delivery frameworks",
      "Modern design system covering 80%+ of the app",
      "Shifted DevOps into a product-led platform organization",
    ],
    impact: [
      { metric: "MAU Growth", value: "1.8M→5M+" },
      { metric: "Conversion", value: "+30%" },
      { metric: "Time-to-Market", value: "21d→<7d" },
      { metric: "Incident Detect", value: "48h→<1h" },
    ],
    learning:
      "At scale, growth is a platform problem. Teams move as fast as their internal tools allow.",
  },
  {
    worldNumber: 3,
    title: "SMART HOME & HOSPITALITY",
    company: "Octo Telematics",
    role: "Group Product Manager",
    icon: "🏠",
    context:
      "Octo was expanding beyond automotive telematics into Smart Home and Hospitality, combining hardware, mobile apps, and B2B partnerships. The challenge: finding product–market fit across multiple verticals while owning P&L.",
    problem: [
      "Fragmented customer needs across safety, access, and energy",
      "Hardware + software dependencies slowed iteration",
      "Need to prove commercial viability fast",
    ],
    roleScope: [
      "Group Product Manager for Smart Home & Hospitality",
      "Owned product strategy, discovery, and roadmap",
      "Managed P&L responsibility for the division",
      "Worked cross-functionally with UX, Sales, Marketing, and Engineering",
    ],
    whatBuilt: [
      "Launched Homebox 2.0, a unified smart home platform",
      "Mobile app for safety, security, keyless entry, and energy management",
      "Conducted deep user research and competitive analysis",
      "Defined vertical strategies and GTM approaches",
      "Shaped hardware + software integration models",
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
    worldNumber: 4,
    title: "AI CHATBOTS, KYC & AML",
    company: "Bank of America",
    role: "Product Developer (Erica)",
    icon: "🤖",
    context:
      "Bank of America was scaling its mobile banking platform to 40M+ customers, with customer support costs growing faster than usage. KYC and AML regulations were becoming stricter, increasing friction across onboarding and account flows.",
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
      "Integrated chatbot as primary entry point into the mobile app",
      "Built features supporting AML and KYC processes",
      "Defined KPIs linking chatbot usage → CS deflection → cost reduction",
    ],
    impact: [
      { metric: "CS Deflection", value: "20%+" },
      { metric: "Customers", value: "40M+" },
      { metric: "Ops Costs", value: "Flat" },
      { metric: "Onboarding", value: "Improved" },
    ],
    learning:
      "In regulated environments, trust is the growth lever. AI only works when UX, compliance, and incentives align.",
  },
  {
    worldNumber: 5,
    title: "WAREHOUSE MANAGEMENT SYSTEMS",
    company: "Prospecta Technologies",
    role: "Product Lead",
    icon: "🏭",
    context:
      "Prospecta was a growing B2B SaaS company focused on warehouse management systems (WMS), initially built for a niche airline logistics use case. The product had strong fundamentals but was over-specialized, limiting growth and market expansion. Team size: ~15 people, ARR: ~$250K, heavy dependency on custom solutions.",
    problem: [
      "Product solved real operational problems but not packaged for scale",
      "High customer acquisition costs (~$9,500 per customer)",
      "Heavy dependency on airline-specific workflows",
      "Lack of self-serve onboarding and monetization clarity",
    ],
    roleScope: [
      "First Product Lead at the company",
      "Owned product strategy, roadmap, and monetization",
      "Worked directly with Engineering, Sales, and Founders",
      "Introduced formal product practices and discovery rituals",
    ],
    whatBuilt: [
      "Re-architected the product from airline-specific → configurable WMS platform",
      "Defined reusable warehouse primitives (inventory, fulfillment, routing)",
      "Designed B2B & B2B2C onboarding flows",
      "Introduced pricing tiers and use-case based packaging",
      "Built an upper-funnel website and positioning strategy",
    ],
    impact: [
      { metric: "ARR Growth", value: "$250K→$5M" },
      { metric: "CAC Reduction", value: "~47%" },
      { metric: "Team Scale", value: "15→50" },
      { metric: "New Verticals", value: "SMB" },
    ],
    learning:
      "Systems thinking matters before growth tactics. If the product isn't modular, growth is expensive.",
  },
  {
    worldNumber: 6,
    title: "ENTERPRISE OPERATIONS",
    company: "CGI",
    role: "Software Engineer",
    icon: "💻",
    context:
      "CGI provided large-scale IT and consulting services for major telecom clients. The role focused on bridging engineering execution with business requirements, while maintaining and optimizing critical production applications for Bell Canada.",
    problem: [
      "Routine application health checkups were manual and time-consuming",
      "Slow issue resolution turnaround times impacted SLAs",
      "Lack of visibility into issue trends across major applications",
      "New feature requirements needed clear translation into technical specs",
    ],
    roleScope: [
      "Software Engineer supporting 3 major Bell Canada applications",
      "Translated new features into detailed business requirements",
      "Communicated design and functionality across the organization",
      "Owned monitoring, issue resolution, and automation initiatives",
    ],
    whatBuilt: [
      "Automated and extensible solution for routine application health checkups",
      "Daily and weekly dashboards tracking issue logs and trends",
      "Detailed business requirement documents for new features",
      "Streamlined communication of design and functionality org-wide",
    ],
    impact: [
      { metric: "Cost Reduction", value: "60%" },
      { metric: "Apps Managed", value: "3 Major" },
      { metric: "Dashboards", value: "Daily/Weekly" },
      { metric: "Resolution", value: "Faster" },
    ],
    learning:
      "Enterprise taught me that operational excellence is invisible when done right — and catastrophic when ignored.",
  },
  {
    worldNumber: 7,
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
      "B.Tech — Electronics & Communication Engineering",
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
    worldNumber: 8,
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
