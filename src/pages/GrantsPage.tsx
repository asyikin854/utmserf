import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { CURRENT_GRANTS, HISTORICAL_GRANTS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function GrantsPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Research Grants"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: 'Grant' }]}
      onNavigate={onNavigate}
    >
      {/* Current grants */}
      <div className="mb-14">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Funding</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Current & Recent Grants</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Grant / Scheme', 'Project Title', 'Budget', 'Principal Investigator'].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {CURRENT_GRANTS.map((g, i) => (
                <tr key={i} className="bg-white hover:bg-orange-50/30 transition-colors">
                  <td className="px-5 py-4 font-bold text-orange-600 whitespace-nowrap">{g.scheme}</td>
                  <td className="px-5 py-4 text-gray-700 max-w-xs">{g.title}</td>
                  <td className="px-5 py-4 text-gray-600 whitespace-nowrap font-semibold">{g.budget}</td>
                  <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{g.pi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historical grants */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Historical Grants</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Grant / Scheme', 'Project Title', 'Period', 'Funding Body'].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {HISTORICAL_GRANTS.map((g, i) => (
                <tr key={i} className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-gray-600 whitespace-nowrap">{g.scheme}</td>
                  <td className="px-5 py-4 text-gray-700 max-w-xs">{g.title}</td>
                  <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{g.period}</td>
                  <td className="px-5 py-4 text-gray-500">{g.funder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
