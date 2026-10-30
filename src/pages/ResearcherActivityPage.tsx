import type { Page } from '../types';
import PageLayout from '../components/PageLayout';

export interface ActivityItem {
  title: string;
  period?: string;
  desc: string;
  category: string;
  images: string[];
}

interface Props {
  onNavigate: (p: Page) => void;
  pageTitle: string;
  breadcrumbs: { label: string }[];
  researcherName: string;
  researcherTitle: string;
  researcherPhoto: string;
  researcherIntro: string;
  activities: ActivityItem[];
}

function ActivityCard({ title, period, desc, category, images }: ActivityItem) {
  return (
    <article className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all">
      {images.length > 0 && (
        <div className={`grid ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'} gap-1 bg-gray-100 p-1`}>
          {images.map((src, j) => (
            <div key={j} className="flex h-40 items-center justify-center overflow-hidden rounded-lg bg-white sm:h-44">
              <img
                src={src}
                alt={`${title} — photo ${j + 1}`}
                className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-600">
            {category}
          </span>
          {period && <span className="text-xs font-semibold text-gray-400">{period}</span>}
        </div>
        <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}

export default function ResearcherActivityPage({
  onNavigate, pageTitle, breadcrumbs, researcherName, researcherTitle, researcherPhoto, researcherIntro, activities,
}: Props) {
  return (
    <PageLayout title={pageTitle} breadcrumbs={breadcrumbs} onNavigate={onNavigate}>
      {/* Researcher header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-orange-50 to-gray-50 flex items-center justify-center overflow-hidden ring-1 ring-gray-100">
          <img
            src={researcherPhoto}
            alt={researcherName}
            className="w-full h-full object-contain p-1"
            onError={e => { e.currentTarget.src = './MAWfrontnobg_half.png'; }}
          />
        </div>
        <div>
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Research Activities</span>
          <h2 className="text-xl font-black text-gray-900 mb-1">{researcherName}</h2>
          <p className="text-orange-600 text-sm font-semibold mb-2">{researcherTitle}</p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">{researcherIntro}</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {activities.map((activity, i) => (
          <ActivityCard key={i} {...activity} />
        ))}
      </div>
    </PageLayout>
  );
}
