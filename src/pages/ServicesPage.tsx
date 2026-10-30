import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { LAB_SERVICES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function ServicesPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="HiREF Services"
      breadcrumbs={[{ label: 'Home' }, { label: 'Facilities & Services' }, { label: 'HiREF Services' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">What We Offer</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Laboratory Services</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          HiREF offers advanced testing and simulation services for combustion and thermofluid research, available to academic and industry partners.
        </p>
      </div>

      <div className="space-y-8">
        {LAB_SERVICES.map((service, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="bg-gray-50 min-h-[220px] flex items-center justify-center overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  onError={e => { e.currentTarget.src = service.fallback; }}
                />
              </div>
              <div className="p-7 lg:p-8">
                <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Service {i + 1}</span>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-10 bg-orange-50 border border-orange-100 rounded-2xl p-7">
        <h3 className="font-black text-gray-900 text-lg mb-2">Interested in Our Services?</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          For service inquiries, collaboration proposals, or to discuss your research needs, contact our team directly.
        </p>
        <a
          href="mailto:hirefofficial@gmail.com"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          Contact HiREF
        </a>
      </div>
    </PageLayout>
  );
}
