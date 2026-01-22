"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { useLanguage } from '@/app/context/language-context';
import { BlogPost } from '@/types/blog';

interface PostHeaderProps {
  post: BlogPost;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const { language, t } = useLanguage();
  const locale = language === 'es' ? es : enUS;

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t('blog_back_to_blog')}
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
          {post.category}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.readingTime.replace('read', t('blog_min_read'))}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
        <span>{post.author}</span>
        <span>•</span>
        <time dateTime={post.date}>
          {format(new Date(post.date), 'PPP', { locale })}
        </time>
      </div>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {post.coverImage && (
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
    </motion.header>
  );
}
