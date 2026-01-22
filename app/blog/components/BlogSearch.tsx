"use client";

import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { BlogPostMeta } from '@/types/blog';
import { useLanguage } from '@/app/context/language-context';

interface BlogSearchProps {
  posts: BlogPostMeta[];
  onSearch: (results: BlogPostMeta[]) => void;
}

export default function BlogSearch({ posts, onSearch }: BlogSearchProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'excerpt', 'category', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    [posts]
  );

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      onSearch(posts);
    } else {
      const results = fuse.search(searchQuery).map((result) => result.item);
      onSearch(results);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={t('blog_search_placeholder')}
        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
