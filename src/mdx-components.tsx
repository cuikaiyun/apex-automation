import type { MDXComponents } from "mdx/types";
import BlogCTA from "@/components/BlogCTA";

const components: MDXComponents = {
  BlogCTA,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
