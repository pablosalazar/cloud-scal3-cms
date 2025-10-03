export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML string
  tags: string[];
  publishedAt: string;
  coverImage?: {
    url: string;
    alt: string;
  };
}
