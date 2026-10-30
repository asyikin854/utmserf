import { useEffect, ReactNode } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import type { Page } from '../types';
import SiteFooter from './SiteFooter';

interface BreadcrumbItem {
  label: string;
  page?: Page;
}

interface PageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  heroImg?: string;
  onNavigate: (p: Page) => void;
  children: ReactNode;
}

// Landscape photos from the research activities, reused as page header backgrounds
const HERO_IMAGES = [
  './research-activities/combustion-1.jpeg',
  './research-activities/co-pyrolysis-1-fixed.jpg',
  './research-activities/syngas-2.jpg',
  './research-activities/combustion-2.jpeg',
  './research-activities/mgt-1-fixed.jpg',
  './research-activities/engine-3.jpeg',
];

// Pages in menu order, so neighbouring pages get different photos
const PAGE_ORDER = [
  'Welcome to SERF', 'Background, Vision & Mission', 'Organization Structure — Academic Staff',
  'Meet Our Expert', 'Expertise Showcase', 'Research Grants', 'Honor & Awards', 'Publication',
  "Dr. Norazila's Research", "Dr. Faizal's Research", "Dr. Fairus's Research", "Dr. Zamri's Research",
  "Dr. Norikhwan's Research", 'HiREF Facilities', 'HiREF Services', 'Vacancy', 'Training Programs', 'News',
];

// Same page always gets the same photo
function heroFor(title: string) {
  const i = PAGE_ORDER.indexOf(title);
  if (i >= 0) return HERO_IMAGES[i % HERO_IMAGES.length];
  let h = 0;
  for (const ch of title) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return HERO_IMAGES[h % HERO_IMAGES.length];
}

export default function PageLayout({ title, breadcrumbs, heroImg, onNavigate, children }: PageLayoutProps) {
  const bg = heroImg ?? heroFor(title);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page hero */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={11} className="text-gray-400" />}
                <span className={i === breadcrumbs.length - 1 ? 'text-orange-400 font-semibold' : 'text-white/60'}>{item.label}</span>
              </span>
            ))}
          </nav>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-16">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors mb-10 group"
        >
          <Home size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </button>
        {children}
      </div>

      <SiteFooter />
    </div>
  );
}
