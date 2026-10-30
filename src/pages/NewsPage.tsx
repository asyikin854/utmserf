import { useMemo, useState } from 'react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { NEWS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function NewsPage({ onNavigate }: Props) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => Array.from(new Set(NEWS.map(n => n.tag))).sort(), []);
  const items = tag ? NEWS.filter(n => n.tag === tag) : NEWS;

  return (
    <PageLayout
      title="News"
      breadcrumbs={[{ label: 'Home' }, { label: 'News' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Latest Updates</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Our News</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          Achievements, grants, awards, new members and activities from the SERF research group and HiREF Laboratory.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setTag(null)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${!tag ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          All News
        </button>
        {tags.map(t => (
          <button
            key={t}
            onClick={() => setTag(tag === t ? null : t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${tag === t ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-6 text-sm text-gray-400">
        Showing {items.length} news item{items.length !== 1 ? 's' : ''}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => {
          const Card = item.url ? 'a' : 'div';
          return (
            <Card
              key={item.title}
              {...(item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-orange-600">
                    {item.tag}
                  </span>
                  <time className="text-xs text-gray-400">{item.date}</time>
                </div>
                <h3 className="font-black text-gray-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                {item.desc && <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.desc}</p>}
                {item.url && (
                  <span className="mt-auto pt-4 inline-flex items-center gap-1 text-orange-500 text-xs font-bold">
                    Read on HiREF website <ArrowUpRight size={12} />
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {items.length === 0 && (
        <div className="text-center py-16">
          <Newspaper size={40} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">No news in this category.</p>
        </div>
      )}
    </PageLayout>
  );
}
