export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  author: string;
  coverImage?: string;
  featured: boolean;
  draft: boolean;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  author: string;
  coverImage?: string;
  featured: boolean;
  draft: boolean;
  readingTime: string;
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface BlogTag {
  name: string;
  count: number;
}
