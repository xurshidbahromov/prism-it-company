export const caseStudies = [
  {
    slug: "ecommerce",
    title: "E-Commerce Transformation",
    client: "Retail Brand X",
    timeline: "3 Months",
    role: "Full-Stack Development",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Payme API"],
    challenge: "The client was struggling with an outdated WooCommerce platform that crashed during high traffic sales events and had a confusing checkout flow resulting in high cart abandonment.",
    solution: "We built a custom headless e-commerce solution using Next.js for lightning-fast frontend performance and a robust Node.js backend. We integrated local payment gateways (Payme, Click) and optimized the mobile checkout flow for a frictionless experience.",
    results: [
      "300% increase in mobile conversion rate",
      "0 downtime during Black Friday sales",
      "Sub-second page load times across the entire catalog"
    ],
    image: "/projects/ecommerce.png",
    color: "rgba(59, 130, 246, 0.2)"
  },
  {
    slug: "telegram",
    title: "Automated Telegram Mini App",
    client: "Service Provider Y",
    timeline: "6 Weeks",
    role: "Telegram Solutions",
    tech: ["Telegram WebApps API", "React", "Express.js", "MongoDB", "Click API"],
    challenge: "The business relied on human operators to manually take bookings and answer FAQs on Telegram, leading to slow response times and lost revenue during off-hours.",
    solution: "We developed a comprehensive Telegram Mini App that allows users to browse services, select time slots, and pay directly within Telegram. A companion admin dashboard was built for the staff to manage the schedule in real-time.",
    results: [
      "847 active users in the first week",
      "Automated 95% of customer inquiries",
      "24/7 booking capability unlocked"
    ],
    image: "/projects/telegram-bot.png",
    color: "rgba(14, 165, 233, 0.2)"
  },
  {
    slug: "crm",
    title: "Custom Business CRM",
    client: "Enterprise Z",
    timeline: "4 Months",
    role: "Business Automation",
    tech: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
    challenge: "The company was managing its sales pipeline and inventory across 15 different messy spreadsheets, causing data silos, lost leads, and operational bottlenecks.",
    solution: "We engineered a centralized CRM and inventory management dashboard. It features role-based access, real-time analytics, automated lead assignment, and a custom API to sync with their warehouse hardware.",
    results: [
      "Saved 20+ hours per week in manual data entry",
      "Increased lead conversion by 40%",
      "Achieved 100% inventory accuracy"
    ],
    image: "/projects/crm.png",
    color: "rgba(139, 92, 246, 0.2)"
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
