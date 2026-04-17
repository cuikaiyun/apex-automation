import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {post.industry}
        </span>
        <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
