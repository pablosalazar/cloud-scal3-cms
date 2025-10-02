// data/posts/index.ts
import { BlogPost } from "@/types/blog";
import { post1 } from "./post-1";

export const allPosts: BlogPost[] = [post1];

export function getAllPosts(): BlogPost[] {
  return allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}
