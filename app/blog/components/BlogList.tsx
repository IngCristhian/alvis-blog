"use client";

import { useState, useMemo } from 'react';
import { BlogPostMeta, BlogCategory } from '@/types/blog';
import { useLanguage } from '@/app/context/language-context';
import BlogCard from './BlogCard';
import BlogSearch from './BlogSearch';
import CategoryFilter from './CategoryFilter';

interface BlogListProps {
  initialPosts: BlogPostMeta[];
  categories: BlogCategory[];
}

export default function BlogList({ initialPosts, categories }: BlogListProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<BlogPostMeta[] | null>(null);

  const displayPosts = useMemo(() => {
    let posts = searchResults !== null ? searchResults : initialPosts;

    if (selectedCategory) {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    return posts;
  }, [initialPosts, searchResults, selectedCategory]);

  const handleSearch = (results: BlogPostMeta[]) => {
    if (results.length === initialPosts.length) {
      setSearchResults(null);
    } else {
      setSearchResults(results);
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
        <BlogSearch posts={initialPosts} onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </div>

      {displayPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {searchResults !== null ? t('blog_no_results') : t('blog_no_posts')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
