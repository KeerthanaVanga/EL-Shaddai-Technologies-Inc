// ============================================================
// COMPANY CONFIGURATION — edit this file to rebrand
// ============================================================

export const company = {
  name: "EL-Shaddai Technologies Inc",
  shortName: "EL-Shaddai",
  tagline: "PREMIER IT STAFFING & WORKFORCE SOLUTIONS",
  headline: "EL-Shaddai\nTechnologies Inc",
  description:
    "Connecting America's top businesses with exceptional technology professionals — fast, reliably, and with care.",
  phone: "+91 7323059938",
  email: "shg@el-shaddaitechnologies.com",
  website: "https://el-shaddaitechnologies.com",

  logoUrl: "/elsaddai.jpeg",
  logoFallback: "EL SHADDAI",

  heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  hiringImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
  careersHeroImage: "/Home/HeroHiringImage.png",
  aboutHeroImage: "/About/HeroBannerImage.jpeg",
  contactHeroImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80",
  servicesHeroImage: "/Career/ai6image.jpg",
  whyUsHeroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
  productsHeroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",

  colors: {
    primary: "#8B1A1A",
    primaryLight: "#A52020",
    accent: "#C9A84C",
    dark: "#0D1117",
    darkSecondary: "#161B22",
  },

  stats: [
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industries Served" },
    { value: "24/7", label: "Dedicated Support" },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    {
      id: "it-staffing",
      icon: "👥",
      title: "IT Staffing",
      badge: "Most Popular",
      description: "Connecting businesses with top-tier technology professionals for both short and long-term engagements.",
      features: ["Rapid placement within 48-72 hours", "Rigorous technical screening process", "Skill-matched candidates only"],
    },
    {
      id: "direct-hire",
      icon: "💼",
      title: "Direct Hire",
      badge: "Full-Time",
      description: "Permanent placement services to build your core team with exceptional talent matched to your culture.",
      features: ["Complete candidate vetting", "Cultural alignment assessment", "90-day replacement guarantee"],
    },
    {
      id: "contract-staffing",
      icon: "🕐",
      title: "Contract Staffing",
      badge: "Flexible",
      description: "Scale your team up or down with flexible contract professionals. Perfect for project-based work.",
      features: ["Week-to-week or multi-year contracts", "Full benefits administration", "Seamless onboarding support"],
    },
    {
      id: "executive-search",
      icon: "🔍",
      title: "Executive Search",
      badge: "",
      description: "Strategic leadership recruitment for CTO, VP Engineering, and senior technology roles.",
      features: ["C-suite & VP-level search", "Confidential search process", "Leadership assessment included"],
    },
    {
      id: "workforce-solutions",
      icon: "⚙️",
      title: "Workforce Solutions",
      badge: "",
      description: "End-to-end talent pipeline management, RPO services, and workforce planning strategies.",
      features: ["RPO & BPO services", "Workforce analytics", "Talent pipeline development"],
    },
  ],

  trustedBy: ["MICROSOFT", "IBM", "DELOITTE", "ACCENTURE", "ORACLE"],

  about: {
    tagline: "OUR STORY",
    headline: "About EL-Shaddai\nTechnologies Inc",
    description: "Founded on faith, driven by excellence. We are a premier IT staffing firm dedicated to connecting America's businesses with world-class technology talent.",
    mission: "To empower businesses by providing innovative, efficient, and reliable IT talent solutions that drive growth, foster innovation, and create lasting value. We serve as the critical bridge between exceptional technology professionals and the organizations that need them.\n\nWe supply our talent network by building a deep understanding of both our clients' technical requirements and our candidates' career aspirations — ensuring a win-win for all parties.",
    vision: "To be the most trusted name in IT staffing across North America — recognized for our integrity, precision, and transformative impact on the careers and companies we serve.",
    values: [
      { icon: "excellence", title: "Excellence", description: "We hold ourselves to the highest standards in every placement, every interaction, and every solution we deliver." },
      { icon: "integrity", title: "Integrity", description: "Transparency and honesty form the foundation of every relationship we build with clients and candidates." },
      { icon: "innovation", title: "Innovation", description: "We continuously evolve our processes and leverage emerging technologies to stay ahead in talent acquisition." },
      { icon: "diversity", title: "Diversity", description: "We champion inclusive hiring practices and actively build diverse talent pipelines for every engagement." },
      { icon: "partnership", title: "Partnership", description: "We view ourselves as an extension of your team — aligned with your goals, culture, and long-term success." },
      { icon: "value", title: "Value", description: "We don't just fill roles; we help you build teams that drive ROI and move your business forward." },
    ],
    founder: {
      name: "Shanthi Chittala",
      title: "Founder & CEO",
      initials: "SC",
      imageUrl: "/About/FounderImage.png",
      bio: "Shanthi Chittala founded EL-Shaddai Technologies Inc with a clear vision: to create a staffing firm that genuinely cares about both clients and candidates. With extensive experience in IT workforce solutions, she built the company on principles of trust, transparency, and excellence.",
      phone: "+1 732-913-1541",
      email: "contact@elshaddai.com",
    },
  },

  whyUs: {
    tagline: "OUR DIFFERENCE",
    headline: "Why Choose EL-Shaddai\nTechnologies Inc?",
    description: "We go beyond resumes. We build careers, strengthen teams, and power IT organizations with talent that truly fits.",
    reasons: [
      { icon: "✅", title: "Pre-Vetted Candidates", description: "Every candidate goes through a rigorous screening process — technical assessments, background checks, and cultural fit evaluations." },
      { icon: "⚡", title: "Fast Placements", description: "Our deep talent network means we can fill critical roles in days, not months. Speed to hire is our competitive edge." },
      { icon: "👤", title: "Dedicated Account Managers", description: "You get a single point of contact who understands your business, your culture, and your technical requirements." },
      { icon: "🌎", title: "Nationwide Reach", description: "From coast to coast, our talent network spans all major tech hubs and remote markets." },
      { icon: "🧠", title: "Deep Technical Expertise", description: "Our recruiters have hands-on experience in IT fields — they speak your language." },
      { icon: "🏆", title: "Proven Track Record", description: "Trusted by Fortune 500 companies and fast-growing startups alike." },
    ],
    ctaHeadline: "Ready to Find Your Next",
    ctaAccent: "IT Star?",
    ctaDescription: "Let's talk about your hiring needs. Our team is standing by to help you build the IT workforce of tomorrow.",
  },

  careers: {
    tagline: "JOIN OUR TEAM",
    headline: "Build Your Career\nWith Us",
    description: "Join a team of passionate talent professionals making a real difference in people's careers and companies' success.",
    whyWorkHere: [
      { icon: "career-growth", title: "Career Growth", description: "Structured advancement paths with mentorship and professional development budgets." },
      { icon: "great-culture", title: "Great Culture", description: "Collaborative, inclusive environment where every voice is heard and valued." },
      { icon: "competitive-pay", title: "Competitive Pay", description: "Market-leading compensation with performance bonuses and equity opportunities." },
      { icon: "expert-team", title: "Expert Team", description: "Work alongside industry veterans and top performers who inspire excellence." },
    ],
    openPositions: [
      {
        title: "Java Developer",
        department: "Developer",
        location: "Hyderabad",
        type: "Full-Time",
        requirements: "Core Java, Java, Java Script"
      }
    ],
    noPositionsMessage: "We don't have any active job listings at the moment. However, we're always looking for talent!",
  },

  products: {
    tagline: "OUR OFFERINGS",
    headline: "Technology Products\n& Solutions",
    description: "Discover our curated suite of technology products and platform solutions designed to accelerate your business growth.",
    items: [],
    comingSoonMessage: "We're finalizing our product catalog. Check back soon for our exciting lineup of technology solutions.",
  },

  contact: {
    tagline: "GET IN TOUCH",
    headline: "Let's Start a\nConversation",
    description: "Whether you need to fill a critical role, explore our services, or simply want to learn more — we're here to help.",
    officeHours: [
      { day: "Mon - Fri", hours: "9:00 AM - 6:00 PM EST" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  footerLinks: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "IT Staffing", href: "/services#it-staffing" },
      { label: "Direct Hire", href: "/services#direct-hire" },
      { label: "Contract Staffing", href: "/services#contract-staffing" },
      { label: "Executive Search", href: "/services#executive-search" },
    ],
  },

  footerDescription: "Building high-performance IT talent pipelines. Your trusted partner in technology staffing and workforce solutions.",
};
