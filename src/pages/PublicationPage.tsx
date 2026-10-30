import { useState, useMemo } from 'react';
import { Search, BookOpen, Filter, GraduationCap, ExternalLink } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { PUBLICATIONS, EXPERTS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const EXPERT_KEYS = [
  { key: 'Norazila', label: 'Norazila Othman' },
  { key: 'Faizal', label: 'Mohd Faizal Hasan' },
  { key: 'Norikhwan', label: 'Norikhwan Hamzah' },
  { key: 'Ibthisham', label: 'Mohd Ibthisham Ardani' },
  { key: 'Mazlan', label: 'Mazlan Abdul Wahid' },
  { key: 'Fairus', label: 'Mohd Fairus Mohd Yasin' },
  { key: 'Aminuddin', label: 'Aminuddin Saat' },
  { key: 'Natrah', label: 'Natrah Kamaruzaman' },
  { key: 'Mohsin', label: 'Mohsin Mohd Sies' },
  { key: 'Zamri', label: 'Mohd Zamri Mohd Yusop' },
];

export default function PublicationPage({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PUBLICATIONS.filter(p => {
      if (selectedExpert && !p.authors.includes(selectedExpert)) return false;
      if (search && !p.citation.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    }).sort((a, b) => b.year - a.year);
  }, [search, selectedExpert]);

  const groupedByYear = useMemo(() => {
    const groups: Record<number, typeof PUBLICATIONS> = {};
    for (const pub of filtered) {
      if (!groups[pub.year]) groups[pub.year] = [];
      groups[pub.year].push(pub);
    }
    return Object.entries(groups).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  return (
    <PageLayout
      title="Publication"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: 'Publication' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Research Output</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Selected Publications</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          A curated list of peer-reviewed journal articles, conference papers, and book publications by our research group members.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search publications by title, author, or journal..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Filter size={14} className="text-gray-400" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Filter by Expert</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedExpert(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                !selectedExpert
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Experts
            </button>
            {EXPERT_KEYS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedExpert(selectedExpert === key ? null : key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedExpert === key
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-400">
        Showing {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* Google Scholar link for selected expert */}
      {selectedExpert && (() => {
        const expertKey = EXPERT_KEYS.find(ek => ek.key === selectedExpert);
        const expert = expertKey
          ? EXPERTS.find(item => item.name.toLowerCase().includes(expertKey.label.toLowerCase()))
          : undefined;
        if (!expert?.scholarProfile) return null;
        return (
          <div className="mb-6">
            <a
              href={expert.scholarProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-300 bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700 shadow-sm hover:border-orange-500 hover:bg-orange-100 hover:shadow-md transition-all"
            >
              <GraduationCap size={20} />
              View {expertKey?.label ?? 'Expert'} on Google Scholar
              <ExternalLink size={16} />
            </a>
          </div>
        );
      })()}

      {/* Publications grouped by year */}
      {groupedByYear.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen size={40} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">No publications match your search.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {groupedByYear.map(([year, pubs]) => (
            <div key={year}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-black text-orange-500">{year}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
                <span className="text-xs text-gray-400 font-semibold">{pubs.length} publication{pubs.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="space-y-3">
                {pubs.map((pub, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-5 hover:border-orange-200 hover:shadow-md transition-all"
                  >
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                        <BookOpen size={16} className="text-orange-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 leading-relaxed">{pub.citation}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {pub.authors.map(a => {
                            const expert = EXPERTS.find(e =>
                              e.name.toLowerCase().includes(a.toLowerCase()) ||
                              (a === 'Norazila' && e.name.includes('Norazila')) ||
                              (a === 'Faizal' && e.name.includes('Faizal')) ||
                              (a === 'Norikhwan' && e.name.includes('Norikhwan')) ||
                              (a === 'Ibthisham' && e.name.includes('Ibthisham')) ||
                              (a === 'Mazlan' && e.name.includes('Mazlan')) ||
                              (a === 'Fairus' && e.name.includes('Fairus')) ||
                              (a === 'Aminuddin' && e.name.includes('Aminuddin')) ||
                              (a === 'Natrah' && e.name.includes('Natrah')) ||
                              (a === 'Mohsin' && e.name.includes('Mohsin')) ||
                              (a === 'Zamri' && e.name.includes('Zamri'))
                            );
                            return (
                              <button
                                key={a}
                                onClick={() => expert && onNavigate('meet-our-expert')}
                                className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[11px] font-medium hover:bg-orange-100 hover:text-orange-600 transition-colors"
                                title={expert ? `View ${expert.name}` : a}
                              >
                                {a}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
