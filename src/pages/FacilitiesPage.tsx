import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { LAB_FACILITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function FacilitiesPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="HiREF Facilities"
      breadcrumbs={[{ label: 'Home' }, { label: 'Facilities & Services' }, { label: 'HiREF Facilities' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8" id="research-facilities">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Lab Equipment</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Research Facilities</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          HiREF provides world-class research facilities to conduct high-impact research in combustion, thermofluid engineering and nanomaterial synthesis.
        </p>
      </div>

      <div className="space-y-8">
        {LAB_FACILITIES.map((facility, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="bg-gray-50 min-h-[220px] flex items-center justify-center overflow-hidden">
                <img
                  src={facility.img}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.src = facility.fallback; }}
                />
              </div>
              <div className="p-7 lg:p-8">
                <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">{facility.subtitle}</p>
                <h3 className="text-xl font-black text-gray-900 mb-4">{facility.name}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{facility.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GTC note */}
      <div className="mt-10 bg-[#1a3a5c] text-white rounded-2xl p-7">
        <h3 className="font-black text-lg mb-2">GTC — Gas Turbine Combustion Research Group</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          The Gas Turbine Combustion Research Group (GTCRG) operates under the SERF umbrella and has its own dedicated facilities. For detailed GTC facility information, please contact the lab directly.
        </p>
      </div>
    </PageLayout>
  );
}
