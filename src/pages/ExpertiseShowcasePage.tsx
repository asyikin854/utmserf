import { ArrowRight, Award, MapPin } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { EVENTS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function ExpertiseShowcasePage({ onNavigate }: Props) {
  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming');
  const pastEvents = EVENTS.filter(e => e.status === 'ended');

  return (
    <PageLayout
      title="Expertise Showcase"
      breadcrumbs={[{ label: 'Home' }, { label: 'Our Expert' }, { label: 'Expertise Showcase' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-10">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Conferences & Workshops</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Events & Archive</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          SERF actively participates in and hosts international conferences, workshops, and scientific meetings focused on combustion, thermofluids, and sustainable energy research.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0">
        {/* Upcoming */}
        <div className="lg:pr-12">
          <p className="text-orange-500 text-xs font-bold tracking-[0.25em] uppercase mb-2 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse inline-block" /> Upcoming Events
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">Conferences &<br />Workshops</h3>
          <div className="space-y-4">
            {upcomingEvents.length > 0 ? upcomingEvents.map(ev => (
              <a
                key={ev.abbr}
                href="https://events.utm.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-100 rounded-xl p-6 hover:border-orange-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-black text-gray-900 text-sm tracking-wider uppercase">{ev.abbr}</span>
                  <span className="text-[10px] bg-orange-50 text-orange-600 border border-orange-200 px-2.5 py-1 rounded-full font-bold">Upcoming</span>
                </div>
                <h4 className="text-gray-700 font-semibold text-sm leading-snug mb-4 group-hover:text-gray-900 transition-colors">{ev.name}</h4>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><Award size={11} /> {ev.dates}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={11} /> {ev.location}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-orange-500 text-xs font-bold group-hover:gap-2.5 transition-all">
                  Register <ArrowRight size={11} />
                </span>
              </a>
            )) : (
              <p className="text-gray-400 text-sm">No upcoming events scheduled.</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block bg-gray-100" />

        {/* Past events */}
        <div className="lg:pl-12">
          <p className="text-gray-400 text-xs font-bold tracking-[0.25em] uppercase mb-2 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full inline-block" /> Past Events
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">Archive</h3>
          <div className="space-y-0">
            {pastEvents.map((ev, i) => (
              <a
                key={ev.abbr}
                href="https://events.utm.my/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 py-4 ${i < pastEvents.length - 1 ? 'border-b border-gray-100' : ''} group hover:bg-gray-50 -mx-2 px-2 rounded transition-colors`}
              >
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <span className="text-gray-300 font-black text-xs tracking-widest uppercase pt-0.5 w-16 sm:w-20 shrink-0">{ev.abbr}</span>
                  <p className="text-gray-600 text-sm leading-snug group-hover:text-gray-900 transition-colors">{ev.name}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 pl-[76px] sm:pl-0">
                  <span className="text-gray-400 text-xs whitespace-nowrap">{ev.dates}</span>
                  <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-medium">Ended</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
