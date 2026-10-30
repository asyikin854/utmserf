import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { NEWS } from '../data';

interface Props {
  slug: string;
  onNavigate: (p: Page) => void;
  onOpenNews: (slug: string) => void;
}

export default function NewsDetailPage({ slug, onNavigate, onOpenNews }: Props) {
  const index = NEWS.findIndex(n => n.slug === slug);
  const item = NEWS[index];
  if (!item) return null;

  // NEWS is newest first, so the previous index is the newer post
  const newer = NEWS[index - 1];
  const older = NEWS[index + 1];
  const related = NEWS.filter(n => n.tag === item.tag && n.slug !== item.slug).slice(0, 3);

  return (
    <PageLayout
      title="News"
      breadcrumbs={[{ label: 'Home' }, { label: 'News' }, { label: item.tag }]}
      onNavigate={onNavigate}
    >
      <button
        onClick={() => onNavigate('news')}
        className="-mt-6 mb-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
      >
        <ArrowLeft size={14} /> All News
      </button>

      <article className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-600">
            {item.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
            <CalendarDays size={14} /> {item.date}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-8">{item.title}</h2>

        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-8">
          <img src={item.img} alt={item.title} className="w-full h-auto" />
        </div>

        {item.body.length > 0 && (
          <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed [overflow-wrap:anywhere]">
            {item.body.map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}
          </div>
        )}

        {item.gallery && item.gallery.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {item.gallery.map(src => (
              <div key={src} className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img src={src} alt={item.title} loading="lazy" className="w-full h-auto" />
              </div>
            ))}
          </div>
        )}
      </article>

      {/* Newer / older post */}
      <nav className="max-w-3xl mt-12 pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
        {newer ? (
          <button onClick={() => onOpenNews(newer.slug)} className="group text-left rounded-xl border border-gray-100 p-4 hover:border-orange-200 hover:bg-orange-50/40 transition-all">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wide mb-1"><ArrowLeft size={12} /> Newer</span>
            <span className="block text-sm font-semibold text-gray-700 group-hover:text-orange-600 line-clamp-2">{newer.title}</span>
          </button>
        ) : <span />}
        {older && (
          <button onClick={() => onOpenNews(older.slug)} className="group text-right rounded-xl border border-gray-100 p-4 hover:border-orange-200 hover:bg-orange-50/40 transition-all">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Older <ArrowRight size={12} /></span>
            <span className="block text-sm font-semibold text-gray-700 group-hover:text-orange-600 line-clamp-2">{older.title}</span>
          </button>
        )}
      </nav>

      {related.length > 0 && (
        <section className="mt-14">
          <h3 className="text-lg font-black text-gray-900 mb-5">More {item.tag} news</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(r => (
              <button
                key={r.slug}
                onClick={() => onOpenNews(r.slug)}
                className="group flex flex-col text-left bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <time className="text-xs text-gray-400">{r.date}</time>
                  <p className="mt-1 text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">{r.title}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
