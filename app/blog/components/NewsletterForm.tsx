"use client";

import { useState } from 'react';
import { useLanguage } from '@/app/context/language-context';

export default function NewsletterForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-2">{t('blog_newsletter_title')}</h3>
      <p className="text-blue-100 mb-6">{t('blog_newsletter_desc')}</p>

      {status === 'success' ? (
        <p className="text-green-200 font-medium">{t('blog_newsletter_success')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('blog_newsletter_placeholder')}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '...' : t('blog_newsletter_button')}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-3 text-red-200">{t('blog_newsletter_error')}</p>
      )}
    </div>
  );
}
