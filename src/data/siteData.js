export const siteData = {
  brand: {
    name: "TechBerrys",
    tagline: "Simplifying Technology. Empowering Growth.",
    subtext: "TechBerry's simplifies technology, automates workflows, streamlines operations, and empowers businesses to grow with smart digital solutions.",
    logo: "/images/brand-logo.png",
    favicon: "/images/favicon.png",
    heroImage: "/images/hero-sphere.png",
    heroBackground: "/images/hero-nebula-bg.png",
    heroCube: "/images/hero-crystal-cube.png",
    floatingBadges: [
      { id: "galleon", label: "GALLEON", top: "45%", left: "33%" },
      { id: "jaune", label: "JAUNE", top: "46%", right: "34%" },
      { id: "spacex", label: "SPACE-X", top: "58%", left: "42%" },
      { id: "atmosfer", label: "ATMOSFER-1-3", top: "58%", right: "23%" },
      { id: "apollo", label: "APOLLO", top: "72%", left: "33%" },
      { id: "artemis", label: "ARTEMIS", top: "72%", right: "34%" },
    ]
  },

  // 2. Languages & Technologies
  techStack: [
    { name: "HTML5", icon: "/images/tech-html5.png" },
    { name: "CSS3", icon: "/images/tech-css3.png" },
    { name: "JavaScript", icon: "/images/tech-javascript.png" },
    { name: "React.js", icon: "/images/tech-react.png" },
    { name: "Express.js", icon: "/images/tech-express.png" },
    { name: "Next.js", icon: "/images/tech-nextjs.png" },
    { name: "Shopify", icon: "/images/tech-shopify.png" },
    { name: "Python", icon: "/images/tech-python.png" },
    { name: "MongoDB", icon: "/images/tech-mongodb.png" },
    { name: "Tailwind", icon: "/images/tech-tailwind.png" },
    { name: "Angular", icon: "/images/tech-angular.png" },
    { name: "GitHub", icon: "/images/tech-github.png" },
    { name: "Docker", icon: "/images/tech-docker.png" },
    { name: "AWS", icon: "/images/tech-aws.png" },
    { name: "Google Cloud", icon: "/images/tech-gcp.png" },
    { name: "Figma", icon: "/images/tech-figma.png" },
    { name: "Firebase", icon: "/images/tech-firebase.png" },
    { name: "Android", icon: "/images/tech-android.png" },
  ],

  // 3. Trusted Brands Section Data
  trustedBrands: [
    { name: "FinEdge Global", tier: "Fintech Leader", logoText: "FINEDGE", symbol: "✦" },
    { name: "OmniHealth AI", tier: "Healthcare Network", logoText: "OMNIHEALTH", symbol: "❖" },
    { name: "NovaRetail", tier: "E-Commerce Enterprise", logoText: "NOVA RETAIL", symbol: "▲" },
    { name: "ApexLogix", tier: "Global Logistics", logoText: "APEXLOGIX", symbol: "◈" },
    { name: "Skyline Cloud", tier: "Enterprise SaaS", logoText: "SKYLINE", symbol: "◆" },
    { name: "QuantIQ Labs", tier: "AI Research", logoText: "QUANTI·Q", symbol: "✶" },
    { name: "Vanguard Tech", tier: "Industrial Robotics", logoText: "VANGUARD", symbol: "⦿" },
    { name: "HyperScale Corp", tier: "Fintech Infrastructure", logoText: "HYPERSCALE", symbol: "⬡" }
  ],

  // 4. AI Integration Section Data
  aiIntegration: {
    badge: "Next-Gen AI Ecosystem",
    title: "Seamless Enterprise AI Integration",
    subtitle: "We embed cognitive AI agents, custom LLMs, and real-time autonomous intelligence directly into your existing software stack and cloud infrastructure.",
    pillars: [
      {
        id: "llm-core",
        title: "Proprietary & Open LLMs",
        desc: "Fine-tuned models customized on your private business data with zero data leakage and enterprise-grade privacy boundaries.",
        tags: ["GPT-4o", "Claude 3.5 Sonnet", "Llama 3", "DeepSeek", "Mistral"]
      },
      {
        id: "rag-vector",
        title: "Vector Memory & RAG",
        desc: "Instant real-time retrieval from multi-terabyte internal documents, knowledge bases, customer history, and inventory databases.",
        tags: ["Pinecone", "pgvector", "Milvus", "Hybrid Search", "Semantic Rerank"]
      },
      {
        id: "autonomous-agents",
        title: "Autonomous Action Agents",
        desc: "AI agents that execute multi-step workflows: querying databases, drafting proposals, updating ERPs, and routing complex tickets.",
        tags: ["Tool Use", "Function Calling", "Self-Correction", "Multi-Agent Swarm"]
      },
      {
        id: "telemetry",
        title: "Observability & Guardrails",
        desc: "Full observability into latency, token economics, hallucination mitigation, compliance guardrails, and role-based permissions.",
        tags: ["Langfuse", "OpenTelemetry", "Hallucination Gates", "SOC2 Compliance"]
      }
    ]
  },

  // Measurable Impact Stats
  impactStats: [
    {
      value: "98%",
      label: "Task automation rate",
      desc: "Automating repetitive tasks across workflows."
    },
    {
      value: "40 hrs",
      label: "Saved per week",
      desc: "Reducing manual work every week."
    },
    {
      value: "3.2x",
      label: "Productivity increase",
      desc: "Improving efficiency through automation."
    },
    {
      value: "150+",
      label: "Automated workflows",
      desc: "Building smarter business operations."
    }
  ],

  // 5. Our Services Section Data
  services: [
    {
      id: "shopify",
      num: "-01",
      title: "Shopify Development",
      desc: "Build powerful Shopify stores with custom themes, seamless app integrations, high-converting checkout funnels, and optimized shopping experiences.",
      icon: "/images/service-shopify.png",
      features: ["Custom Liquid & Hydrogen", "Third-Party ERP Integrations", "Sub-second Page Speeds", "Conversion Rate Optimization"]
    },
    {
      id: "web-development",
      num: "-02",
      title: "Website Development",
      desc: "Create modern, responsive, and high-performance websites tailored to your business goals and customer needs using Next.js and React.",
      icon: "/images/service-website.png",
      features: ["Ultra-fast Next.js / React", "Scalable Headless Architecture", "Enterprise Security Hardening", "Pixel-Perfect Responsive UI"]
    },
    {
      id: "app-development",
      num: "-03",
      title: "App Development",
      desc: "Transform your ideas into powerful mobile applications with seamless functionality, offline sync, and intuitive user experiences.",
      icon: "/images/service-app-development.png",
      features: ["React Native & Flutter", "Native iOS & Android", "Real-Time WebSocket Sync", "Biometric & Secure Storage"]
    },
    {
      id: "seo-services",
      num: "-04",
      title: "SEO Services",
      desc: "Improve search visibility, attract high-intent organic traffic, and outrank competitors with rigorous data-driven SEO strategies.",
      icon: "/images/service-seo.png",
      features: ["Technical Audit & Core Web Vitals", "Programmatic SEO Architecture", "Schema.org Rich Snippets", "Competitor Keyword Conquesting"]
    },
    {
      id: "digital-marketing",
      num: "-05",
      title: "Digital Marketing",
      desc: "Reach the right audience, build brand awareness, and drive sustainable revenue through high-ROI multi-channel campaigns.",
      icon: "/images/service-digital-marketing.png",
      features: ["Performance Meta & Google Ads", "Automated Retention Funnels", "High-Converting Copywriting", "Multi-Touch Attribution"]
    },
    {
      id: "ui-ux",
      num: "-06",
      title: "UI/UX Design",
      desc: "Create delightful, user-friendly digital experiences with intuitive design systems, motion micro-interactions, and usability testing.",
      icon: "/images/service-ui-ux.png",
      features: ["Interactive Figma Prototypes", "Design System & Token Library", "User Research & Usability Audits", "Micro-Interactions & Animation"]
    },
    {
      id: "cloud-cybersecurity",
      num: "-07",
      title: "Cloud & Cybersecurity Services",
      desc: "Secure, scalable cloud infrastructure and advanced defensive security solutions to protect your proprietary assets 24/7.",
      icon: "/images/service-cloud-security.png",
      features: ["AWS / GCP / Azure Architecture", "CI/CD & Kubernetes Orchestration", "Zero-Trust & Penetration Testing", "SOC2 / HIPAA Compliance Readiness"]
    },
    {
      id: "ai-development",
      num: "-08",
      title: "AI Development Services",
      desc: "Unlock smarter business possibilities with custom autonomous AI agents, intelligent workflow automation, and proprietary model fine-tuning.",
      icon: "/images/service-ai-development.png",
      features: ["Autonomous Multi-Agent Systems", "Private RAG & Vector Search", "Predictive Analytics & Forecasting", "Custom Voice & Chat Assistants"]
    }
  ],

  // 6. Our Projects
  projects: [
    {
      id: "leads",
      title: "AI-Powered Lead Management",
      desc: "Automatically score, categorize, and route inbound leads with real-time intent signals, CRM synchronization, and predictive analytics.",
      image: "/images/project-lead-management.png",
      category: "AI & Automation",
      metrics: "340% Higher Conversion Rate",
      stack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"]
    },
    {
      id: "contracts",
      title: "Automated Contract & Proposal Generation",
      desc: "Generate error-free customized enterprise proposals and contracts in seconds with smart template variables and digital signing.",
      image: "/images/project-contract-generation.png",
      category: "Enterprise SaaS",
      metrics: "90% Reduction in Drafting Time",
      stack: ["Next.js", "Node.js", "DocuSign API", "AWS Lambda"]
    },
    {
      id: "reporting",
      title: "Intelligent Executive Reporting",
      desc: "Unified business intelligence dashboards aggregating cross-channel metrics with automated anomaly alerts and executive AI briefs.",
      image: "/images/project-executive-reporting.png",
      category: "Data Intelligence",
      metrics: "Real-time Telemetry across 12 Datastores",
      stack: ["React", "Tailwind CSS", "ClickHouse", "Python"]
    },
    {
      id: "support",
      title: "24/7 AI Customer Support",
      desc: "Omnichannel intelligent chatbots delivering instant human-grade answers, empathetic resolutions, and resolving 85%+ of inquiries.",
      image: "/images/project-ai-customer-support.png",
      category: "Conversational AI",
      metrics: "Under 1.2s Response Latency",
      stack: ["WebSockets", "Claude 3.5", "Pinecone", "Node.js"]
    },
    {
      id: "hiring",
      title: "Smart Hiring & Onboarding",
      desc: "AI screening, automatic calendar orchestration, automated candidate scorecards, and frictionless employee document verification.",
      image: "/images/project-smart-hiring.png",
      category: "HR Automation",
      metrics: "65% Faster Time-to-Hire",
      stack: ["React", "FastAPI", "MongoDB", "OpenAI"]
    }
  ],

  // 7. Our Process
  processSteps: [
    {
      step: 1,
      name: "Deep Systems Analysis",
      desc: "We analyze your existing workflows, identify manual bottlenecks, evaluate technical architecture, and uncover high-impact opportunities for automation and modern web scaling.",
      image: "/images/process-systems-analysis.jpg"
    },
    {
      step: 2,
      name: "Custom Architecture & Build",
      desc: "We engineer customized, robust digital experiences, high-performance web applications, and autonomous AI workflows engineered specifically for your organizational needs.",
      image: "/images/process-custom-architecture.jpg"
    },
    {
      step: 3,
      name: "Deployment & Optimization",
      desc: "We implement your automation systems, monitor telemetry, conduct rigorous load testing, and continuously improve workflows to deliver reliable, scalable performance.",
      image: "/images/process-deployment-optimization.png"
    }
  ],

  // 8. Industries We Serve Section Data
  industries: [
    {
      id: "fintech",
      name: "FinTech & Banking",
      desc: "High-security payment gateways, automated loan underwriting pipelines, fraud detection, and regulatory compliance workflows.",
      stats: "$420M+ Processed Securely",
      icon: "Landmark"
    },
    {
      id: "healthcare",
      name: "Healthcare & MedTech",
      desc: "HIPAA-compliant patient portals, AI clinical note summarizers, appointment dispatching, and telemedicine platforms.",
      stats: "99.99% Data Privacy Uptime",
      icon: "Activity"
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Retail",
      desc: "Ultra-fast headless Shopify stores, real-time inventory synchronization, dynamic personalized pricing, and cart recovery bots.",
      stats: "4.8x Average ROI Boost",
      icon: "ShoppingBag"
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      desc: "Fleet tracking telemetry, predictive arrival estimations, automated bill-of-lading processing, and warehouse management.",
      stats: "38% Faster Dispatch Time",
      icon: "Truck"
    },
    {
      id: "saas",
      name: "SaaS & Cloud Platforms",
      desc: "Modern multi-tenant cloud architectures, self-service subscription portals, usage-based metering, and microservices.",
      stats: "100k+ Active End Users",
      icon: "Layers"
    },
    {
      id: "edtech",
      name: "EdTech & Higher Learning",
      desc: "Interactive learning management systems, adaptive student testing AI, virtual classrooms, and automated certification workflows.",
      stats: "250k+ Lessons Delivered",
      icon: "GraduationCap"
    }
  ],

  // 9. Involving Section Data
  involving: {
    badge: "Agile Engagement Models",
    title: "How We Involve With Your Team",
    subtitle: "Flexible, outcome-driven collaboration models engineered to integrate smoothly with your existing technical roadmap.",
    models: [
      {
        id: "dedicated-pod",
        title: "Dedicated AI & Engineering Pod",
        desc: "A fully dedicated squad of senior full-stack developers, AI architects, and QA engineers working exclusively on your product sprints.",
        commitment: "Full-Time Dedicated",
        bestFor: "Fast-growing scaleups & venture-backed products needing velocity"
      },
      {
        id: "fixed-scope",
        title: "End-to-End Product Delivery",
        desc: "From initial product discovery and UI/UX design to final production deployment with milestone-based governance and fixed guarantees.",
        commitment: "Milestone-Driven Sprints",
        bestFor: "New product launches, digital transformations, & full site redesigns"
      },
      {
        id: "agentic-modernization",
        title: "Autonomous AI Modernization",
        desc: "Specialized engineering sprint to retrofit legacy systems with autonomous agent workflows, RAG search, and automated operations.",
        commitment: "4 - 8 Week Focused Sprints",
        bestFor: "Enterprises seeking to drastically cut manual operating expenses"
      }
    ]
  },

  // 10. Intelligent Systems & Autonomous Workflows Data
  intelligentWorkflows: {
    badge: "Cognitive Automation",
    title: "Intelligent Workflows That Think & Act",
    subtitle: "Replace brittle manual scripts with self-monitoring autonomous workflows that adapt to business changes in real-time.",
    features: [
      {
        title: "Self-Healing Data Pipelines",
        desc: "Autonomous monitors detect API changes or corrupted records, execute automatic schema reconciliation, and resume processing without downtime.",
        icon: "Cpu"
      },
      {
        title: "Context-Aware Agent Swarms",
        desc: "Specialized micro-agents communicate over shared protocol channels to research, draft, verify, and execute complex business actions.",
        icon: "Network"
      },
      {
        title: "Predictive Capacity Scaling",
        desc: "Machine learning models analyze traffic patterns to pre-warm serverless instances and database connections before load spikes occur.",
        icon: "TrendingUp"
      },
      {
        title: "Zero-Trust Security Interceptors",
        desc: "Every automated transaction is validated against cryptographic integrity checks and strict anomaly detection boundaries.",
        icon: "ShieldCheck"
      }
    ]
  },

  // 11. Do You Need Section Data
  doYouNeed: {
    badge: "Diagnostic Solution Finder",
    title: "Do You Need To Solve Any Of These?",
    subtitle: "Select the challenge your team is facing today to see how TechBerrys delivers immediate measurable impact.",
    scenarios: [
      {
        q: "Do you need faster software release cycles?",
        a: "We implement modern CI/CD pipelines, modular component architectures, and automated testing suites that slash release cycles from months to days."
      },
      {
        q: "Do you need custom AI agents integrated into your software?",
        a: "We build secure, private LLM agents connected to your databases that handle customer support, data entry, lead qualification, and reporting 24/7."
      },
      {
        q: "Do you need an eCommerce store that converts 3x higher?",
        a: "We craft custom headless Shopify experiences with sub-second page loads, intuitive mobile UX, streamlined one-click checkouts, and upsell logic."
      },
      {
        q: "Do you need scalable, rock-solid cloud infrastructure?",
        a: "We architect resilient cloud environments on AWS & GCP with automated failover, autoscaling, and hardened zero-trust network boundaries."
      }
    ]
  },

  // 12. About TechBerry's
  about: {
    badge: "About TechBerry's",
    title: "Building Digital Experiences. Powering Business Growth.",
    desc1: "TechBerrys is a technology and digital solutions company helping businesses transform ideas into powerful digital experiences. We combine creativity, technology, and strategic thinking to build solutions that simplify operations, strengthen online presence, and drive sustainable growth.",
    desc2: "From modern websites and mobile applications to AI-powered automation and digital marketing, we help businesses navigate the digital world with confidence.",
    highlight: "100,000+",
    highlightLabel: "Businesses & Professionals Reached",
    philosophy: "We believe technology should do more than just work — it should create opportunities. Our team focuses on building scalable, user-focused, and innovative solutions that help businesses stay competitive, work smarter, and grow in an evolving digital landscape.",
    image: "/images/about-vr-experience.png",
    avatarStack: "/images/about-avatars-stacked.png",
    avatars: [
      "/images/avatar-user-1.png",
      "/images/avatar-user-2.png",
      "/images/avatar-user-3.png"
    ]
  },

  // 13. Our Blogs Section & Blog Page Data
  blogs: [
    {
      id: "future-of-autonomous-agents",
      title: "The Architecture of Autonomous AI Agents in Modern Enterprise",
      summary: "How multi-agent systems and cognitive tool calling are transforming traditional business logic into adaptive, self-improving workflows.",
      category: "AI & Machine Learning",
      date: "Nov 22, 2026",
      readTime: "6 min read",
      author: "TechBerrys AI Lab",
      image: "/images/service-ai-development.png",
      content: `Autonomous AI agents represent the biggest leap in software architecture since microservices. Instead of deterministic procedural code that fails whenever unexpected inputs arrive, agentic systems use LLMs as reasoning engines to decide which APIs to call, verify output correctness, and recover from failures in real time.

In this deep dive, we explore how TechBerrys designs production agent swarms: separating research agents, execution agents, and validation agents with immutable audit logging. By enforcing strict schema validation and bounded tool access, enterprises can safely deploy autonomous agents across finance, customer support, and inventory operations without risking security or compliance.`
    },
    {
      id: "headless-shopify-performance",
      title: "Maximizing eCommerce Conversions with Headless Shopify & Next.js",
      summary: "Why leading eCommerce brands are abandoning monolithic themes in favor of sub-second headless storefronts that drive higher GMV.",
      category: "Web & E-Commerce",
      date: "Nov 15, 2026",
      readTime: "5 min read",
      author: "E-Commerce Team",
      image: "/images/service-shopify.png",
      content: `Every 100ms delay in page load time costs eCommerce merchants an average of 1% in conversion rate. Traditional monolithic themes often become bloated with dozens of unoptimized app scripts and heavy CSS stylesheets.

By decoupling the frontend using Next.js and Shopify's Storefront GraphQL API, TechBerrys achieves perfect 100/100 Lighthouse scores, instant page transitions, and personalized cart upsells that consistently deliver double-digit revenue gains for our retail partners.`
    },
    {
      id: "zero-trust-cloud-architecture",
      title: "Zero-Trust Cloud Architecture: Defending Modern Cloud Native Apps",
      summary: "Practical guide to implementing end-to-end encryption, ephemeral IAM credentials, and micro-segmentation in AWS and GCP.",
      category: "Cloud & Security",
      date: "Nov 08, 2026",
      readTime: "7 min read",
      author: "Cloud Infrastructure Group",
      image: "/images/service-cloud-security.png",
      content: `Perimeter-based network security is officially dead. In the modern cloud ecosystem, every microservice and database interaction must assume that the network is hostile.

We explore our battle-tested zero-trust blueprints: utilizing mutual TLS (mTLS) with Linkerd, short-lived OIDC tokens for GitHub Actions CI/CD pipelines, and automated runtime intrusion detection that intercepts suspicious container behaviors in milliseconds.`
    },
    {
      id: "rag-best-practices",
      title: "Overcoming Hallucinations in Enterprise RAG Systems",
      summary: "How hybrid vector search, reciprocal rank fusion (RRF), and cross-encoder re-ranking eliminate inaccuracies in enterprise search.",
      category: "AI & Machine Learning",
      date: "Oct 29, 2026",
      readTime: "8 min read",
      author: "TechBerrys AI Lab",
      image: "/images/project-lead-management.png",
      content: `Vector embeddings alone are not enough for high-stakes enterprise search. When users search for specific product SKUs or legal contract clauses, cosine similarity frequently returns plausible-sounding but technically incorrect documents.

At TechBerrys, we implement a two-stage hybrid retrieval strategy: combining BM25 keyword matching with dense vector embeddings, followed by cross-encoder re-ranking and semantic citation guards to guarantee 99.8% precision on proprietary corpora.`
    },
    {
      id: "react-native-vs-flutter-2026",
      title: "Cross-Platform Mobile in 2026: React Native with Expo vs. Flutter",
      summary: "A comprehensive benchmark of developer velocity, bundle size, native bridge performance, and long-term maintainability.",
      category: "Mobile Engineering",
      date: "Oct 18, 2026",
      readTime: "6 min read",
      author: "Mobile Solutions Team",
      image: "/images/service-app-development.png",
      content: `Building mobile apps no longer requires maintaining two completely separate native codebases. With the advent of the New Architecture in React Native (TurboModules & Fabric) and Flutter's Impeller graphics engine, both frameworks provide 120 FPS buttery-smooth performance.

We evaluate real client case studies to help engineering leaders choose the exact right framework depending on team talent, ecosystem integrations, and deployment cycles.`
    },
    {
      id: "scaling-modern-b2b-growth",
      title: "Data-Driven B2B Demand Generation & Growth Loops",
      summary: "Moving beyond vanity metrics to implement programmatic SEO, high-intent outbound funnels, and retention-focused product analytics.",
      category: "Growth & Strategy",
      date: "Oct 05, 2026",
      readTime: "4 min read",
      author: "Growth Marketing Practice",
      image: "/images/service-digital-marketing.png",
      content: `Sustainable growth is engineered, not guessed. By connecting product analytics directly with marketing funnels, businesses can identify the precise moments of customer activation and trigger targeted automated touchpoints that drive lasting retention and viral referral loops.`
    }
  ],

  // 14. FAQ Section & FAQ Page Data
  faqs: [
    {
      category: "General",
      q: "What services does TechBerrys offer?",
      a: "TechBerrys offers a comprehensive suite of digital and engineering services, including custom website development, mobile application engineering (iOS & Android), Shopify eCommerce storefronts, AI & autonomous workflow automation, SEO and digital growth marketing, UI/UX design systems, cloud architecture, and cybersecurity engineering."
    },
    {
      category: "General",
      q: "Can TechBerrys build custom websites and mobile applications from scratch?",
      a: "Yes. We build bespoke web and mobile applications tailored precisely to your business requirements, workflow logic, brand identity, and scalability targets using modern stacks like Next.js, React Native, Python, and cloud-native serverless backends."
    },
    {
      category: "E-Commerce",
      q: "Do you provide Shopify store development and eCommerce solutions?",
      a: "Yes. We design and build high-converting Shopify stores with custom Liquid and headless Hydrogen themes, custom app integrations, checkout optimization, ERP inventory sync, and multi-currency global sales setups."
    },
    {
      category: "AI & Automation",
      q: "How can AI and automation help my business reduce overhead?",
      a: "AI agents and automated workflows eliminate repetitive manual data entry, streamline customer support with 24/7 human-grade responses, auto-generate sales proposals, score and route leads, and monitor business metrics, saving teams 40+ hours per week."
    },
    {
      category: "Process & Delivery",
      q: "How long does it take to complete a project?",
      a: "Timelines depend on project scope. A focused modern website or Shopify store typically takes 2 to 4 weeks. Complex custom web platforms, mobile apps, or enterprise AI integrations generally require 6 to 12 weeks with milestone-driven sprints and weekly staging demos."
    },
    {
      category: "Security",
      q: "How do you ensure data security and privacy with AI integrations?",
      a: "We implement strict zero-trust boundaries and private LLM instances. Your proprietary business data is never used to train public foundation models, and all data in transit and at rest is secured with AES-256 encryption and role-based access control (RBAC)."
    },
    {
      category: "Pricing & Support",
      q: "Do you offer post-launch maintenance and continuous support?",
      a: "Absolutely. We provide dedicated support agreements that include 24/7 uptime monitoring, cloud infrastructure management, security patching, feature enhancements, and ongoing performance optimization."
    }
  ],

  // 15. Case Study Page Data
  caseStudies: [
    {
      id: "finedge-lead-engine",
      title: "FinEdge Global: 340% Boost in Qualified Inbound Leads",
      client: "FinEdge Global",
      industry: "FinTech & Wealth Management",
      timeframe: "3 Months",
      heroMetric: "+340%",
      heroMetricLabel: "Increase in Qualified Leads",
      secondaryMetric: "1.4s",
      secondaryMetricLabel: "Average Page Load Speed",
      overview: "FinEdge was struggling with a slow, outdated CMS that led to high bounce rates and manual lead triage bottlenecks that took 48+ hours per prospect.",
      challenge: "Legacy WordPress platform with 6.2-second load times, disconnected lead capture forms, and an overburdened sales development team spending 60% of their day manually copying contact info into Salesforce.",
      solution: "TechBerrys engineered a lightning-fast headless Next.js portal paired with an intelligent AI lead scoring agent that calculates financial intent signals in real time and automatically schedules discovery calls.",
      results: [
        "Inbound lead volume increased by 340% within 90 days of launch",
        "Lead response time dropped from 48 hours to under 60 seconds",
        "Page load time improved from 6.2s to 1.4s, achieving 99/100 Core Web Vitals",
        "Sales team saved 25 hours per rep every week in administrative paperwork"
      ],
      techStack: ["Next.js", "Tailwind CSS", "FastAPI", "OpenAI", "Salesforce API", "AWS"],
      image: "/images/project-lead-management.png"
    },
    {
      id: "omnihealth-patient-portal",
      title: "OmniHealth AI: HIPAA-Compliant Telehealth & Automated Triage",
      client: "OmniHealth Network",
      industry: "Healthcare & MedTech",
      timeframe: "4 Months",
      heroMetric: "85%",
      heroMetricLabel: "Automated Inquiry Resolution",
      secondaryMetric: "99.99%",
      secondaryMetricLabel: "HIPAA Compliant Uptime",
      overview: "A national healthcare network needed an omnichannel digital portal for patient appointments, symptom triage, and medical records access.",
      challenge: "High phone queue wait times (over 28 minutes on average) causing patient frustration, alongside strict HIPAA regulatory requirements preventing the use of standard off-the-shelf chatbot tools.",
      solution: "We architected a zero-retention, end-to-end encrypted telehealth portal with a private clinical assistant that guides patients through preliminary symptom intake before connecting them to licensed clinicians.",
      results: [
        "Call center wait times plunged by 78% in the first month",
        "Over 85% of general patient administrative queries resolved autonomously",
        "Patient satisfaction score (CSAT) surged to 4.9 / 5.0",
        "Passed third-party HIPAA and SOC2 Type II compliance audits with zero findings"
      ],
      techStack: ["React Native", "Node.js", "PostgreSQL", "Claude 3.5", "Docker", "GCP"],
      image: "/images/project-ai-customer-support.png"
    },
    {
      id: "novaretail-ecommerce",
      title: "NovaRetail: Scaling Headless Shopify to $12M+ Annual GMV",
      client: "Nova Retail Group",
      industry: "E-Commerce & Luxury Lifestyle",
      timeframe: "6 Weeks",
      heroMetric: "+42%",
      heroMetricLabel: "Checkout Conversion Lift",
      secondaryMetric: "-65%",
      secondaryMetricLabel: "Cart Abandonment Rate",
      overview: "A rapidly scaling direct-to-consumer lifestyle brand needed to migrate from a sluggish monolithic Shopify theme to a high-speed custom storefront.",
      challenge: "The existing theme suffered severe mobile performance lag, broken checkout scripts during seasonal flash sales, and inability to support international currencies smoothly.",
      solution: "TechBerrys built a bespoke headless storefront using Next.js and Shopify Storefront GraphQL, featuring instantaneous page transitions, AI-driven personalized product recommendations, and multi-currency routing.",
      results: [
        "Mobile conversion rate climbed by 42% in the first quarter",
        "Checkout abandonment dropped by 65% with simplified one-page purchasing",
        "Handled 150,000 concurrent visitors during Black Friday with zero downtime",
        "Average Order Value (AOV) grew by $18.50 via smart dynamic cross-sells"
      ],
      techStack: ["Shopify Plus", "Hydrogen", "Next.js", "Tailwind CSS", "Klaviyo", "Stripe"],
      image: "/images/service-shopify.png"
    }
  ],

  // 16. Careers Page Data
  careers: {
    hero: {
      badge: "Join TechBerrys",
      title: "Build The Future Of Digital Intelligence With Us",
      subtitle: "We are an ambitious team of engineers, designers, and innovators passionate about creating world-class software that solves meaningful problems."
    },
    perks: [
      { title: "Remote-First Culture", desc: "Work from anywhere with flexible hours and trust-based autonomy.", icon: "Globe" },
      { title: "Competitive Compensation", desc: "Top-tier salary packages, performance bonuses, and equity options.", icon: "Award" },
      { title: "Learning & Conference Budget", desc: "$2,500 annual stipend for courses, certifications, and international tech conferences.", icon: "BookOpen" },
      { title: "Latest Hardware", desc: "M3 Max MacBook Pro, 4K displays, and premium workspace ergonomics.", icon: "Laptop" },
      { title: "Comprehensive Health", desc: "Full medical, dental, vision coverage, and wellness mental health benefits.", icon: "Heart" },
      { title: "Paid Time Off", desc: "25 days paid vacation plus national holidays and parental leave.", icon: "Calendar" }
    ],
    openings: [
      {
        id: "sr-fullstack-ai",
        title: "Senior Full-Stack & AI Engineer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-Time",
        experience: "4+ Years",
        desc: "Lead the architecture and implementation of enterprise AI agents, React/Next.js interfaces, and scalable Python/FastAPI microservices.",
        skills: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "LLM APIs", "Docker"]
      },
      {
        id: "lead-ui-ux",
        title: "Lead Product Designer (UI/UX)",
        department: "Design",
        location: "Remote",
        type: "Full-Time",
        experience: "3+ Years",
        desc: "Craft high-fidelity web and mobile design systems, micro-interactions, responsive prototypes, and collaborate closely with developers.",
        skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Tailwind CSS Basics"]
      },
      {
        id: "cloud-devops-architect",
        title: "Cloud & DevOps Solutions Architect",
        department: "Infrastructure",
        location: "Remote",
        type: "Full-Time",
        experience: "5+ Years",
        desc: "Design and manage resilient multi-cloud environments on AWS & GCP, automated CI/CD pipelines, Kubernetes clusters, and zero-trust security.",
        skills: ["AWS", "Kubernetes", "Terraform", "GitHub Actions", "Docker", "mTLS"]
      },
      {
        id: "growth-marketing-lead",
        title: "Growth Marketing & SEO Specialist",
        department: "Growth",
        location: "Remote",
        type: "Full-Time",
        experience: "3+ Years",
        desc: "Drive multi-channel acquisition, programmatic SEO, paid campaign performance, and analytics attribution for TechBerrys and key clients.",
        skills: ["Technical SEO", "Google Ads", "Meta Ads", "Conversion Rate Optimization", "Analytics"]
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Michael Roberts",
      role: "Marketing Director",
      rating: "5.0/5.0",
      quote: "“TechBerrys helped us simplify complex processes and improve our team's productivity. Their solutions have made our workflow faster and efficient.”",
      avatar: "/images/testimonial-michael-roberts.png"
    },
    {
      name: "Sarah Mitchell",
      role: "Website Client",
      rating: "5.0/5.0",
      quote: "“TechBerrys streamlined our workflows and reduced manual work, giving our team more time to focus on growth.”",
      avatar: "/images/testimonial-sarah-mitchell.png"
    },
    {
      name: "Olivia Bennett",
      role: "Business Owner",
      rating: "5.0/5.0",
      quote: "“Since working with TechBerrys, managing our daily operations has become much easier. Their professional approach stands out.”",
      avatar: "/images/testimonial-olivia-bennett.png"
    },
    {
      name: "Daniel Foster",
      role: "Operations Manager",
      rating: "5.0/5.0",
      quote: "“TechBerrys has transformed the way our team works. We've improved efficiency, reduced repetitive tasks, and gained more time for what matters most.”",
      avatar: "/images/testimonial-daniel-foster.png"
    },
    {
      name: "ECommerce Client",
      role: "Store Founder",
      rating: "5.0/5.0",
      quote: "“The team understood exactly what we needed for our online store. The design is elegant, easy to navigate, and the overall shopping experience feels much better.”",
      avatar: "/images/testimonial-ecommerce-client.png"
    }
  ],

  // Call To Action
  cta: {
    title: "Build your intelligence layer",
    subtitle: "Discover how businesses partner with TechBerrys to build better digital experiences, streamline operations, and bring their ideas to life through technology.",
    buttonText: "Book a call",
    buttonLink: "/contact"
  },

  // Contact Info
  contact: {
    email: "contact@techberrys.com",
    phone: "+1 (555) 123-4567",
    location: "Global Digital Operations & Innovation Hub",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM EST"
  },

  // Comprehensive Enterprise Footer (Aligned with Al Hadaya structure)
  footer: {
    company: {
      name: "TechBerrys",
      tagline: "Simplifying Technology. Empowering Growth.",
      desc: "TechBerrys empowers modern brands and forward-thinking enterprises with bespoke web engineering, intelligent AI workflows, and scalable digital solutions.",
      logo: "/images/brand-logo.png"
    },
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Case Study", href: "/case-study" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" }
    ],
    services: [
      { label: "Shopify Store Development", href: "/services" },
      { label: "Custom Web Application", href: "/services" },
      { label: "Mobile App Development", href: "/services" },
      { label: "AI & Workflow Automation", href: "/services" },
      { label: "Cloud & Cybersecurity", href: "/services" },
      { label: "UI/UX Design Systems", href: "/services" },
      { label: "SEO & Digital Growth", href: "/services" }
    ],
    contactInfo: {
      email: "contact@techberrys.com",
      phone: "+1 (555) 123-4567",
      address: "100 Innovation Blvd, Tech Corridor, Suite 400",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM EST"
    },
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
      { label: "X / Twitter", href: "https://x.com", icon: "Twitter" },
      { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
      { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
      { label: "GitHub", href: "https://github.com/ubosachin/techberry", icon: "Github" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security & Compliance", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ],
    copyright: "© 2026 TechBerrys. All rights reserved.",
    taglineBottom: "Empowering businesses worldwide with digital craftsmanship & artificial intelligence."
  }
};
