import { Mail, CheckCircle } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';

interface Props { onNavigate: (p: Page) => void; }

export default function VacancyPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Vacancy"
      breadcrumbs={[{ label: 'Home' }, { label: 'Vacancy' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-10">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Join Our Team</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Open Positions</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          We welcome motivated researchers and students to join the HiREF laboratory at Universiti Teknologi Malaysia.
        </p>
      </div>

      {/* PhD / MSc */}
      <section className="mb-14">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-gray-900 px-7 py-5">
            <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">Research Positions</span>
            <h3 className="text-white font-black text-xl mt-1">Master / PhD Positions</h3>
          </div>
          <div className="p-7 lg:p-8">
            <h4 className="font-black text-gray-900 text-lg mb-5">PhD / MSc Full Time Researcher Opportunity</h4>

            {/* Position details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Institution', value: 'Universiti Teknologi Malaysia, Skudai, Johor, Malaysia (On-site)' },
                { label: 'Type', value: 'Postgraduate position (PhD/MSc Researcher) — UTM Johor Bahru, Faculty of Mechanical Engineering' },
                { label: 'Research Focus', value: 'Multidisciplinary experimental research — developing a combustion-based synthesis process for producing carbon nanotubes' },
                { label: 'Stipend', value: 'A monthly stipend will be provided' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4">
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            {/* Eligibility */}
            <div className="mb-8">
              <h5 className="font-bold text-gray-900 mb-3 text-sm">Eligibility Requirements</h5>
              <div className="space-y-2">
                {[
                  'BSc Mechanical Engineering (or related) with CGPA > 3.10 → enrol as MSc student',
                  'BSc Mechanical Engineering (or related) with CGPA > 3.65 → enrol as PhD student',
                  'MSc Mechanical Engineering (or related) with CGPA > 3.50 → enrol as normal PhD student',
                ].map(req => (
                  <div key={req} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-lg px-4 py-3">
                    <CheckCircle size={15} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Profile */}
            <div className="mb-8">
              <h5 className="font-bold text-gray-900 mb-3 text-sm">Candidate Profile</h5>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Interest in research related to combustion and material science',
                  'Ability to work independently to design and develop test rig (training provided)',
                  'Experience with CFD tools such as Ansys Fluent is a plus',
                  'Proficient in English (Written and Spoken)',
                  'Enthusiastic, self-motivated, independent and hardworking',
                  'Open for Malaysian candidates only',
                  'Expected start date: negotiable',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Apply */}
            <div className="bg-[#1a3a5c] text-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide font-semibold mb-1">Apply To</p>
                <p className="font-bold">Dr. Norikhwan Hamzah</p>
              </div>
              <a
                href="mailto:norikhwan@utm.my"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm shrink-0"
              >
                <Mail size={14} /> norikhwan@utm.my
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-[#1a3a5c] px-7 py-5">
            <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">Student Programme</span>
            <h3 className="text-white font-black text-xl mt-1">Internship</h3>
          </div>
          <div className="p-7 lg:p-8">
            <h4 className="font-black text-gray-900 text-lg mb-4">Internship Programme</h4>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6">
              <p className="text-gray-700 text-[15px] leading-relaxed">
                HiREF has internship positions open <span className="font-bold text-gray-900">throughout the year</span> for a minimum of <span className="font-bold text-orange-600">12 weeks</span>. Interested students should email their CVs to the contacts below.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Contact 1', name: 'Dr Mohd Fairus Mohd Yasin', email: 'mohdfairus@mail.fkm.utm.my' },
                { label: 'Contact 2', name: 'Dr Norikhwan Hamzah', email: 'norikhwan@utm.my' },
              ].map(({ label, name, email }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-5">
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-wide mb-2">{label}</p>
                  <p className="text-gray-900 font-bold text-sm mb-2">{name}</p>
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
                    <Mail size={13} /> {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
