export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  industry: string;
  readingTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-bay-area-restaurant-saved-20-hours-with-ai-chatbot",
    title:
      "How a Bay Area Restaurant Saved 20 Hours a Week with an AI Chatbot",
    excerpt:
      "Learn how a San Jose restaurant automated reservation inquiries and FAQ responses, freeing staff to focus on in-person guests.",
    date: "2026-04-10",
    author: "Apex Automation",
    tags: ["AI Chatbots", "Customer Support", "Restaurant"],
    industry: "Restaurant",
    readingTime: "5 min read",
  },
  {
    slug: "5-property-management-tasks-to-automate",
    title: "5 Property Management Tasks You Should Automate Right Now",
    excerpt:
      "Stop spending hours on rent reminders, maintenance routing, and lease renewals. Here are the five property management workflows that are easiest to automate — and highest impact.",
    date: "2026-04-17",
    author: "Apex Automation",
    tags: ["Workflow Automation", "Property Management"],
    industry: "Property Management",
    readingTime: "4 min read",
  },
  {
    slug: "ai-automation-small-logistics-companies",
    title:
      "How Small Logistics Companies Can Cut Manual Work with AI Automation",
    excerpt:
      "Dispatching, invoicing, status updates, document processing — small logistics operations run on repetitive manual work. Here's how AI automation changes that.",
    date: "2026-04-17",
    author: "Apex Automation",
    tags: ["AI Automation", "Logistics", "Document Processing"],
    industry: "Logistics",
    readingTime: "5 min read",
  },
  {
    slug: "ai-chatbot-for-med-spa",
    title:
      "AI Chatbots for Med Spas: How to Handle More Clients Without Hiring More Staff",
    excerpt:
      "Your front desk can only do so much. An AI chatbot handles inquiries, books appointments, and follows up with leads — 24/7, without adding headcount.",
    date: "2026-04-17",
    author: "Apex Automation",
    tags: ["AI Chatbots", "Healthcare", "Med Spa"],
    industry: "Healthcare / Med Spa",
    readingTime: "4 min read",
  },
  {
    slug: "zapier-vs-custom-automation-small-business",
    title:
      "Zapier vs. Custom Automation: Which One Is Right for Your Small Business?",
    excerpt:
      "Zapier is powerful — but it's not always the right tool. Here's a plain-language guide to when no-code automation works, and when a custom solution makes more sense.",
    date: "2026-04-17",
    author: "Apex Automation",
    tags: ["Workflow Automation", "Zapier", "Custom Software"],
    industry: "General",
    readingTime: "4 min read",
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
