import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FlameKindling, MapPin, Mail, ExternalLink, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Page } from '../types';
import { STATS, NEWS, COLLABORATIONS } from '../data';
import type { CollabCategory } from '../data';

interface HomePageProps {
  onNavigate: (p: Page) => void;
  onOpenNews: (slug: string) => void;
}

const HERO_SLIDES = [
  { img: './UTM-main-gate.jpg', position: 'center 60%' },
  { img: './hiref-e06-building.webp', position: 'center 60%' },
];

const FEATURE_CARDS = [
  {
    label: 'Research',
    title: 'Combustion & Thermofluid Engineering',
    desc: 'World-class experimental platforms for high-speed reacting flow investigation.',
    img: './research-activities/co-pyrolysis-1-fixed.jpg',
    page: 'background-vision-mission' as Page,
  },
  {
    label: 'Our Experts',
    title: 'Meet the Researchers',
    desc: 'Faculty members and researchers driving innovation in combustion science.',
    img: './research-activities/engine-1.jpeg',
    page: 'meet-our-expert' as Page,
  },
  {
    label: 'Facilities',
    title: 'State-of-the-Art Lab Equipment',
    desc: 'Rotating detonation engines, Schlieren imaging rigs, and more.',
    img: './research-activities/syngas-2.jpg',
    page: 'facilities' as Page,
  },
];

export default function HomePage({ onNavigate, onOpenNews }: HomePageProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideVisible, setSlideVisible] = useState(true);
  const [collabTab, setCollabTab] = useState<CollabCategory>('Industry');
  const [collabOffset, setCollabOffset] = useState(0);
  const slideTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const collabTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const COLLAB_TABS: CollabCategory[] = ['Industry', 'National', 'International', 'Academic', 'Government'];
  const CARDS_VISIBLE = 4;

  useEffect(() => {
    setCollabOffset(0);
  }, [collabTab]);

  useEffect(() => {
    const items = COLLABORATIONS[collabTab];
    collabTimer.current = setInterval(() => {
      setCollabOffset(o => (o + 1) % items.length);
    }, 2800);
    return () => { if (collabTimer.current) clearInterval(collabTimer.current); };
  }, [collabTab]);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setSlideVisible(false);
      setTimeout(() => {
        setSlideIndex(i => (i + 1) % HERO_SLIDES.length);
        setSlideVisible(true);
      }, 700);
    }, 6000);
    return () => { if (slideTimer.current) clearInterval(slideTimer.current); };
  }, []);

  return (
    <>
      {/* ── HERO ── Full-bleed cinematic, JPL style */}
      <section className="relative h-screen min-h-[680px] flex flex-col justify-center overflow-hidden">
        {/* Sliding background images */}
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.img}
            className={`absolute inset-0 transition-opacity duration-700 ${i === slideIndex && slideVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.position,
            }}
          />
        ))}
        {/* Gradient overlays — deep from bottom and left like JPL */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20">
          <p className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-orange-400 inline-block" />
            Universiti Teknologi Malaysia
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-white mb-10 max-w-5xl">
            Sustainable Energy and Reacting Flow (SERF)
            <span className="block mt-4 text-gray-300 font-light text-2xl sm:text-3xl lg:text-4xl tracking-normal">Research Group</span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-7 py-3.5 rounded text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore SERF <ArrowRight size={15} />
            </a>
            <button
              onClick={() => onNavigate('grants')}
              className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white font-medium px-7 py-3.5 rounded text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Research Grants
            </button>
          </div>
        </div>

        {/* Bottom slide dots */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setSlideVisible(false); setTimeout(() => { setSlideIndex(i); setSlideVisible(true); }, 300); }}
                className={`h-0.5 transition-all duration-300 rounded-full ${i === slideIndex ? 'w-10 bg-orange-400' : 'w-4 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── Dark band, JPL-style live ticker */}
      <section className="bg-[#0a0a0a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-800">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="px-6 py-5 flex flex-col items-center lg:items-start gap-0.5 group">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={13} className="text-orange-400 shrink-0" />
                  <span className="text-2xl font-black text-white tracking-tight">{value}</span>
                </div>
                <span className="text-gray-500 text-[11px] font-medium uppercase tracking-wider text-center lg:text-left leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── JPL featured-card layout */}
      <section id="news" className="bg-[#111111] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-orange-400 text-xs font-bold tracking-[0.25em] uppercase mb-2 flex items-center gap-3">
                <span className="w-6 h-px bg-orange-400" /> Latest Updates
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-white">News</h2>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold transition-colors group"
            >
              All News <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Featured + side stack */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-4">
            {/* Featured large card */}
            {NEWS[0] && (
              <div onClick={() => onOpenNews(NEWS[0].slug)} className="relative rounded-xl overflow-hidden group cursor-pointer h-[360px] lg:h-auto lg:min-h-[480px]">
                <img
                  src={NEWS[0].img}
                  alt={NEWS[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">{NEWS[0].tag}</span>
                  <time className="text-white/60 text-xs mb-2">{NEWS[0].date}</time>
                  <h3 className="text-white text-xl lg:text-2xl font-black leading-snug mb-3 group-hover:text-orange-300 transition-colors">{NEWS[0].title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{NEWS[0].desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-orange-400 text-xs font-bold">
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            )}

            {/* Stacked smaller cards */}
            <div className="flex flex-col gap-4">
              {NEWS.slice(1, 4).map(item => (
                <div key={item.title} onClick={() => onOpenNews(item.slug)} className="flex gap-4 bg-[#1a1a1a] rounded-xl overflow-hidden group cursor-pointer hover:bg-[#222] transition-colors">
                  <div className="w-28 h-28 shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 py-4 pr-4 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-wider">{item.tag}</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <time className="text-gray-500 text-[10px]">{item.date}</time>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-orange-400 text-[11px] font-bold">
                      Read More <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── Dark panel split, JPL "Who We Are" style */}
      <section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="./research-activities/combustion-1.jpeg"
                  alt="HiREF Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -right-4 lg:right-[-2rem] bg-orange-500 text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-black">2012</p>
                <p className="text-orange-200 text-xs font-medium mt-0.5">Established</p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-orange-500 text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-orange-500" /> Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900 mb-6">
                High Speed<br />Reacting Flow<br />Laboratory
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                SERF is dedicated to developing accurate turbulence and thermochemical models for diverse combustion applications, building state-of-the-art experimental platforms for supersonic shock wave investigations.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                We conduct fundamental and applied research in combustion, heat transfer, microscale reacting flow, supersonic combustion, and flame-based synthesis of nanomaterials — bridging academic excellence with real-world energy challenges.
              </p>

              {/* Research group badges */}
              <div className="space-y-3 mb-10">
                {[
                  { name: 'SERF', full: 'Sustainable Energy and Reacting Flow Research Group', color: 'bg-orange-500' },
                  { name: 'HiREF', full: 'High Speed Reacting Flow Laboratory', color: 'bg-sky-600' },
                  { name: 'GTC', full: 'Gas Turbine Combustion Research Group', color: 'bg-emerald-600' },
                ].map(g => (
                  <div key={g.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className={`w-2 h-10 ${g.color} rounded-full shrink-0`} />
                    <div>
                      <p className="font-black text-gray-900 text-sm">{g.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{g.full}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('message-from-head')}
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-7 py-3.5 rounded text-sm hover:bg-gray-800 transition-colors group"
              >
                Message From Head <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── JPL "Explore" dark tile grid */}
      <section className="bg-[#0d0d0d] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-orange-400 text-xs font-bold tracking-[0.25em] uppercase mb-2 flex items-center gap-3">
                <span className="w-6 h-px bg-orange-400" /> Explore
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Research & Facilities</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FEATURE_CARDS.map(card => (
              <button
                key={card.title}
                onClick={() => onNavigate(card.page)}
                className="relative rounded-xl overflow-hidden group h-[300px] text-left w-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-2">{card.label}</p>
                  <h3 className="text-white font-black text-lg leading-snug mb-2 group-hover:text-orange-300 transition-colors">{card.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-2">{card.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-orange-400 text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore <ArrowRight size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATIONS ── Tabbed carousel */}
      <section id="collaborations" className="bg-[#0d0d0d] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-orange-400 text-xs font-bold tracking-[0.25em] uppercase mb-2 flex items-center gap-3">
              <span className="w-6 h-px bg-orange-400" /> Industry & Academia
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Collaborations</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl">
              Partnering with leading industries and institutions to translate fundamental research into real-world impact.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {COLLAB_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setCollabTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all ${
                  collabTab === tab
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Carousel */}
          {COLLAB_TABS.map(tab => {
            const items = COLLABORATIONS[tab];
            const doubled = [...items, ...items];
            return (
              <div
                key={tab}
                className={`${collabTab === tab ? 'block' : 'hidden'}`}
              >
                <div className="relative overflow-hidden">
                  {/* Nav arrows */}
                  <button
                    onClick={() => setCollabOffset(o => (o - 1 + items.length) % items.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCollabOffset(o => (o + 1) % items.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <div className="mx-10 overflow-hidden">
                    <div
                      className="flex gap-4 transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(calc(-${collabOffset * (100 / CARDS_VISIBLE)}%))` }}
                    >
                      {doubled.map((item, i) => (
                        <div
                          key={`${item.abbr}-${i}`}
                          className="flex-shrink-0 border border-gray-800 rounded-xl p-5 hover:border-orange-500/40 hover:bg-white/[0.03] transition-all group flex flex-col items-center text-center gap-3"
                          style={{ width: `calc(${100 / CARDS_VISIBLE}% - ${(3 * 16) / CARDS_VISIBLE}px)` }}
                        >
                          <div className="w-full h-16 flex items-center justify-center bg-white rounded-lg px-3">
                            <img
                              src={item.logo}
                              alt={item.abbr}
                              className="max-h-10 max-w-full object-contain"
                              onError={e => {
                                const img = e.currentTarget;
                                img.style.display = 'none';
                                const fb = img.nextElementSibling as HTMLElement | null;
                                if (fb) fb.style.display = 'flex';
                              }}
                            />
                            <span
                              className="hidden items-center justify-center text-gray-700 font-black text-sm leading-tight text-center w-full"
                            >
                              {item.abbr}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-6">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCollabOffset(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === collabOffset % items.length
                          ? 'w-6 h-1.5 bg-orange-500'
                          : 'w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ── Light section with map-style feel */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-start">
            {/* Left: contact details */}
            <div className="lg:pr-12">
              <p className="text-orange-500 text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-orange-500" /> Get in Touch
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">Interested in collaboration, postgraduate opportunities, or research partnerships?</p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', lines: ['hirefofficial@gmail.com'] },
                  { icon: MapPin, label: 'Location', lines: ['SERF, Block E06, Faculty of Mechanical Engineering', 'Universiti Teknologi Malaysia', '81310 Skudai, Johor'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={17} className="text-gray-700" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm mb-1">{label}</p>
                      {lines.map(l => <p key={l} className="text-gray-500 text-sm leading-relaxed">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-gray-100" />

            {/* Right: hours + social */}
            <div className="lg:pl-12 space-y-6">
              <div>
                <p className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Office Hours
                </p>
                <div className="space-y-0">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Saturday & Sunday', hours: 'Closed', open: false },
                    { day: 'Public Holidays', hours: 'Closed', open: false },
                  ].map(({ day, hours, open }) => (
                    <div key={day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className={`font-semibold ${open ? 'text-green-600' : 'text-gray-400'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-900 font-bold text-sm mb-4">Follow SERF</p>
                <div className="space-y-2">
                  {[
                    { label: 'www.utm.my/hiref', href: 'https://www.utm.my/hiref', icon: ExternalLink },
                    { label: 'LinkedIn — HIREF', href: 'https://lnkd.in/gahnE2W9', icon: Users },
                    { label: 'Facebook — HIREF', href: 'http://facebook.com/profile.php?id=100084659865225', icon: Users },
                  ].map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 group transition-all"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors shrink-0">
                        <Icon size={14} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <span className="text-gray-600 group-hover:text-orange-600 text-sm font-medium transition-colors flex-1">{label}</span>
                      <ArrowRight size={12} className="text-gray-300 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── Dark, structured like JPL */}
      <footer className="bg-[#0a0a0a] text-white border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <FlameKindling size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-lg tracking-widest uppercase">SERF</p>
                  <p className="text-gray-400 text-sm">Sustainable Energy and Reacting Flow Research Group</p>
                </div>
              </div>
              <p className="text-gray-300 text-[15px] leading-relaxed max-w-sm mb-6">
                Advancing the frontiers of thermofluids, combustion, and supersonic reacting flow research at Universiti Teknologi Malaysia.
              </p>
              <p className="text-gray-400 text-sm">
                Part of the Faculty of Mechanical Engineering, UTM Johor Bahru.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-white font-bold text-xs tracking-widest uppercase mb-5">Explore</p>
              <div className="space-y-3">
                {[
                  { label: 'About SERF', page: 'background-vision-mission' as Page },
                  { label: 'Our Experts', page: 'meet-our-expert' as Page },
                  { label: 'Research Grants', page: 'grants' as Page },
                  { label: 'Facilities', page: 'facilities' as Page },
                  { label: 'Vacancy', page: 'vacancy' as Page },
                ].map(({ label, page }) => (
                  <button
                    key={label}
                    onClick={() => onNavigate(page)}
                    className="block text-gray-300 text-[15px] hover:text-orange-400 transition-colors text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white font-bold text-xs tracking-widest uppercase mb-5">Contact</p>
              <div className="space-y-3 text-[15px] text-gray-300">
                <p>Block E06, Faculty of Mechanical Engineering</p>
                <p>UTM, 81310 Skudai, Johor</p>
                <a href="mailto:hirefofficial@gmail.com" className="block hover:text-orange-400 transition-colors mt-4">hirefofficial@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SERF, Universiti Teknologi Malaysia. All rights reserved.</p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>UTM Johor Bahru</span>
              <span>Faculty of Mechanical Engineering</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}