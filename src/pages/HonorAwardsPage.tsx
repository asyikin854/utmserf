import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { AWARDS_BY_YEAR } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const medalColors: Record<string, string> = {
  Gold: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Silver: 'bg-gray-100 text-gray-600 border-gray-200',
  Bronze: 'bg-amber-100 text-amber-700 border-amber-200',
};

function getMedalTag(text: string) {
  for (const medal of ['Gold', 'Silver', 'Bronze']) {
    if (text.includes(medal)) return medal;
  }
  return null;
}

export default function HonorAwardsPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Honor & Awards"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: 'Honor & Awards' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Recognition</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Awards & Honours</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          Recognising the achievements of our researchers, students and alumni across national and international platforms from 2008 to present.
        </p>
      </div>

      <div className="space-y-10">
        {AWARDS_BY_YEAR.map(({ year, items }) => (
          <div key={year} className="flex gap-6">
            {/* Year badge */}
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm">{year}</span>
              </div>
            </div>
            {/* Awards */}
            <div className="flex-1 space-y-2 pt-1">
              {items.map((item, i) => {
                const medal = getMedalTag(item);
                return (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3.5 hover:border-orange-100 transition-colors">
                    {medal && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border shrink-0 mt-0.5 ${medalColors[medal]}`}>
                        {medal}
                      </span>
                    )}
                    {!medal && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-2" />}
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
