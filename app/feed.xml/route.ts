import RSS from 'rss';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const posts = getAllPosts();

  const feed = new RSS({
    title: 'Cristian Alvis - Blog',
    description: 'Artículos sobre DevOps, Cloud, y desarrollo de software',
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    language: 'es',
    pubDate: posts[0]?.date ? new Date(posts[0].date) : new Date(),
    copyright: `${new Date().getFullYear()} Cristian Alvis`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      guid: post.slug,
      categories: [post.category, ...post.tags],
      author: post.author,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
