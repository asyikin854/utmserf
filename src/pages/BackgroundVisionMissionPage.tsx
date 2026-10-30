import type { Page } from '../types';
import PageLayout from '../components/PageLayout';

interface Props { onNavigate: (p: Page) => void; }

export default function BackgroundVisionMissionPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Background, Vision & Mission"
      breadcrumbs={[{ label: 'Home' }, { label: 'About Us' }, { label: 'Background, Vision & Mission' }]}
      onNavigate={onNavigate}
    >
      <div className="max-w-4xl">
        {/* Background */}
        <section className="mb-14">
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Story</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Background</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-6">
            <p className="text-gray-700 font-semibold">
              HiREF (High Speed Reacting Flow Laboratory) was established in <span className="text-orange-600 font-black">2012</span> at Universiti Teknologi Malaysia.
            </p>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
            <p>
              It was created to generate new and exciting innovative research projects related to combustion and heat transfer. This focus has driven the group to engage in cutting-edge research areas such as combustion turbulence modelling and experiments, detonation engine combustion, flame synthesis and flameless combustion.
            </p>
            <p>
              The prime focus of HiREF is the engineering applications of high-speed reacting flows in the presence of various physical phenomena such as combustion and heat transfer. This has driven the group to engage in cutting-edge research areas such as combustion turbulence modelling and experiments, pulse combustion, flameless combustion, and the development of Pulse Combustion Engines.
            </p>
            <p>
              The HiREF team is currently working to develop accurate turbulence and thermochemical models for different combustion applications, to build state-of-the-art experimental platforms for supersonic shock wave investigations, to synthesise combustion-based nanomaterials, and to establish a knowledge base for multidisciplinary thermofluid research topics.
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">Active Research Areas</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              'Development of Pulse Detonation Engines',
              'Flameless Combustion for Biogas and Biomass',
              'Combustion Safety',
              'Pulse Combustion for Boiler and Drying Applications',
              'Mesoscale Vortex Combustion',
              'Combustion-based Synthesis of Nanomaterials',
              'Combustion Modelling',
              'Nanofluids Heat Transfer Enhancement — macroscale and microscale',
              'Heat Transfer and Combustion Measurement and Diagnostics',
            ].map(area => (
              <div key={area} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-2" />
                <span className="text-gray-600 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-14">
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Where We're Headed</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Vision</h2>
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <div className="w-12 h-1 bg-orange-500 rounded-full mx-auto mb-5" />
            <p className="text-xl sm:text-2xl font-black leading-snug">
              To become a hub of novel flame technology for the nation
            </p>
          </div>
        </section>

        {/* Mission */}
        <section>
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Purpose</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Mission</h2>
          <div className="bg-[#1a3a5c] text-white rounded-2xl p-8 text-center">
            <div className="w-12 h-1 bg-orange-500 rounded-full mx-auto mb-5" />
            <p className="text-xl sm:text-2xl font-black leading-snug">
              To establish HiREF as a world-renowned centre of excellence in Research, Development and Innovation (R&D&I)
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
