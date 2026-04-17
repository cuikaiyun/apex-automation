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
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
