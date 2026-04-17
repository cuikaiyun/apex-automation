import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Customer success stories and use cases showing how Bay Area small businesses save time and money with AI automation.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Customer Stories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real results from Bay Area businesses that automated with Apex.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
