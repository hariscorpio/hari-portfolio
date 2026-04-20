import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Harikrishnan Ramadass — Product SME",
  author: "Harikrishnan Ramadass",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/hari.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hariramadass/" },
    { text: "Github", href: "https://github.com/hariscorpio" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Harikrishnan Ramadass",
    specialty: "Agentforce, Data360 & Marketing Cloud",
    summary:
      "I specialize as a product SME in Agentforce, Data 360 & Marketing Cloud.",
    email: "hariscorpio@gmail.com",
  },
  experience: [
    {
      company: "Salesforce",
      position: "Senior Success Architect - Marketing Cloud Next",
      startDate: "Apr 2022",
      endDate: "Present",
      summary: [
        "Collaborating closely with Product teams to influence the Marketing Cloud roadmap for core capabilities, including Email, SMS, WhatsApp, and real-time personalization.",
        "Leading the integration of Agentforce, Data Cloud, and Marketing Cloud to align technical features with customer-defined business value.",
        "Directing cross-functional teams to integrate complex systems, achieving a 20% improvement in operational efficiency and a 15% increase in customer ROI.",
        "Evangelized Salesforce's Data360 + Agentforce + Marketing Cloud platform vision across executive forums and conferences (Connections, World Tour), shaping industry adoption and enabling $10M+ in renewals/upsells.",
        "Experience prototyping and validating Generative AI product experience cycles using AI tools such as Cursor.",
      ],
    },
    {
      company: "CVS Health (Aetna), NY",
      position: "Senior Marketing Cloud Architect - Behavior Change",
      startDate: "May 2019",
      endDate: "Apr 2022",
      summary: [
        "Owned end-to-end lifecycle for an AI-powered real-time personalization platform driving content decisions across Email, SMS, and IVR, reducing campaign latency from 24 hours to 30 minutes and delivering $2M–$5M annual savings.",
        "Partnered with engineering and data science to design event-driven decisioning pipelines, integrating claims, pharmacy, and engagement telemetry into a unified predictive ML-ready feature layer.",
        "Partnered with data science teams to build decisioning models and identity resolution pipelines, ensuring personalized content delivery across 30M+ members.",
        "Mentored product and engineering squads to shift from campaign-execution mindset to platform-led product development, improving delivery velocity by 40%.",
      ],
    },
    {
      company: "WW (formerly WeightWatchers Inc), NY",
      position: "Salesforce Marketing Cloud - Product SME",
      startDate: "Aug 2016",
      endDate: "May 2019",
      summary: [
        "Led the technical product strategy for WellnessWins, a new tiered loyalty program. Integrated CrowdTwist with Salesforce Marketing Cloud to drive member retention across the US & Canada.",
        "Collaborated on the roadmap for omni-channel messaging capabilities (SMS, push, and email), collaborating with engineering, UX, and marketing to prioritize features that improved onboarding, retention, and customer lifetime value.",
        "Implemented Movable Ink and OneSpot to automate content personalization, reducing manual creative workload and boosting app ratings from 1.0 to 4.1.",
        "Prevented the migration from Salesforce Marketing Cloud to Braze by counseling stakeholders on risks of platform migration, identifying architectural optimizations to meet the evolving needs of 25M+ members across North America and Europe.",
      ],
    },
    {
      company: "TATA Consultancy Services, India / NY-USA",
      position: "MarTech Consultant / Salesforce Analyst",
      startDate: "Jan 2009",
      endDate: "Aug 2016",
      summary: [
        "Designed cross-channel customer and order-engagement journeys across email, SMS, and push as part of the Salesforce Centre of Excellence (CoE).",
        "Managed enterprise-scale Salesforce Sales Cloud + Marketing Cloud implementations for 4,000+ users.",
        "Authored migration and implementation proposals ($2M+) driving full-scale adoption of Salesforce Marketing Cloud.",
      ],
    },
  ],
  projects: [
    {
      name: "Email Force",
      summary: "EmailForce is an intelligent email marketing platform designed to move beyond automation to autonomy. This prototype showcases how AI agents can autonomously design, optimize, and personalize revenue-generating email campaigns.",
      linkPreview: "https://email-force.vercel.app/dashboard.html",
      linkSource: "https://github.com/hariscorpio/EmailForce",
      image: "/emailforce.png",
    },
    {
      name: "Kite",
      summary: "This prototype demonstrates the user interface and interactions for Kite, an intelligent middleware layer designed to identify and block non-billable events (AIT, Scripting Arbitrage, and Billing Evasion) for Salesforce Marketing Cloud.",
      linkPreview: "https://kite-fdass.vercel.app/index.html",
      linkSource: "https://github.com/hariscorpio/kite",
      image: "/kite-fdass.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Harikrishnan Ramadass — a product-focused MarTech leader with 15+ years of experience building data-driven, multi-channel engagement strategies. Currently a Senior Success Architect & Product SMEat Salesforce, I specialize in aligning Data 360, Marketing Cloud, and Agentforce solutions to drive measurable customer outcomes and product adoption.

      I excel at translating complex customer needs into product roadmaps, particularly within the Data 360 and Agentic AI ecosystems. I’ve led high-stakes technical engagements for global enterprise brands and have evangelized Salesforce’s platform vision across executive forums and major conferences like Connections and World Tour — enabling $10M+ in renewals and upsells.
    `,
    image: "/hari.png",
  },
};

// #5755ff
