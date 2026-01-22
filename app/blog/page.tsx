import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogHeader from './components/BlogHeader';
import BlogList from './components/BlogList';
import NewsletterForm from './components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog | Cristian Alvis',
  description: 'Artículos sobre DevOps, Cloud, y desarrollo de software',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BlogHeader />
        <BlogList initialPosts={posts} categories={categories} />
        <div className="mt-16">
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}
