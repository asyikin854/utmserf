import { BookOpen, Users, Phone, Atom, Linkedin } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';

interface Props { onNavigate: (p: Page) => void; }

export default function MessageFromHeadPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Welcome to SERF"
      breadcrumbs={[{ label: 'Home' }, { label: 'About Us' }, { label: 'Message From Head of Research Group' }]}
      onNavigate={onNavigate}
    >
      <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: Professor card */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-[320px] mb-6">
            <img
              src="./experts/mazlan.png"
              alt="Prof. Dr. Mazlan Bin Abdul Wahid"
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">The Head of Research Group</p>
          <h2 className="text-gray-900 text-xl font-black leading-snug mb-4">Prof. Dr. Mazlan Bin Abdul Wahid</h2>
          <a
            href="https://linkedin.com/in/mazlan-abdul-wahid-1a265099"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0077B5] hover:bg-[#005f91] transition-colors"
          >
            <Linkedin size={18} className="text-white" />
          </a>
        </div>

        {/* Right: Message */}
        <div>
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Message From Head of Research Group</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8">Welcome!</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
            <p>Welcome to the High Speed Reacting Flow Laboratory at the Faculty of Mechanical Engineering, Universiti Teknologi Malaysia.</p>
            <p>The prime focus of HiREF Laboratory is the engineering applications of high-speed reacting flows in the presence of various physical phenomena such as combustion and heat transfer. This focus, in principle, has driven the group to engage in cutting-edge related research areas such as combustion turbulence modelling and experiments, pulse combustion, flameless combustion and development of Pulse Combustion Engines.</p>
            <p>HiREF team is currently working to develop accurate turbulence and thermochemical models for different combustion applications, to build state-of-the art experimental platforms for supersonic shock wave investigations and to establish a knowledge base for multidisciplinary thermofluids research topics.</p>
            <p>The group is also active in conducting research in heat transfer enhancement, nanofluids, binary gas mixtures, macroscale and microscale fluid flow.</p>
            <p>For further information please feel free to contact us.</p>
          </div>

          {/* CTA cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Background, Vision & Mission', icon: BookOpen, page: 'background-vision-mission' as Page },
              { label: 'Organization Structure', icon: Users, page: 'academic-staff' as Page },
              { label: 'Contact Us', icon: Phone, page: 'home' as Page },
              { label: 'Our Research Areas', icon: Atom, page: 'home' as Page },
            ].map(({ label, icon: Icon, page }) => (
              <button
                key={label}
                onClick={() => onNavigate(page)}
                className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:border-orange-200 hover:bg-orange-50/40 transition-all group text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                  <Icon size={16} className="text-orange-500" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
