import { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, FlameKindling, Mail, Menu, X } from 'lucide-react';
import type { NavChild, NavItem, NavSubChild } from '../types';
import type { Page } from '../types';
import { NAV_ITEMS } from '../data';

interface HeaderProps {
  scrolled: boolean;
  currentPage: Page;
  onNavigate: (p: Page) => void;
}

export default function Header({ scrolled, currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const solid = scrolled || currentPage !== 'home';

  const handleNavEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleNavLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 120);
  };

  const handleChildClick = (child: NavChild | NavSubChild) => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setMenuOpen(false);
    setMobileExpanded(null);
    if (child.page && child.href) {
      const samePage = currentPage === child.page;
      onNavigate(child.page);
      setTimeout(() => {
        const el = document.querySelector(child.href!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, samePage ? 0 : 300);
    } else if (child.page) {
      onNavigate(child.page);
    } else if (child.href) {
      if (currentPage !== 'home') onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(child.href!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, currentPage !== 'home' ? 300 : 0);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className={`border-b transition-all duration-300 ${solid ? 'border-gray-100 bg-white' : 'border-white/10 bg-black/20 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="mailto:hirefofficial@gmail.com" className={`text-xs flex items-center gap-1.5 transition-colors ${solid ? 'text-gray-500 hover:text-gray-800' : 'text-white/80 hover:text-white'}`}>
              <Mail size={11} /> <span className="hidden sm:inline">hirefofficial@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('news')}
              className={`text-xs font-semibold transition-colors ${solid ? 'text-gray-600 hover:text-orange-500' : 'text-white/80 hover:text-white'}`}
            >News</button>
            <button
              onClick={() => { onNavigate('home'); setTimeout(() => document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
              className={`text-xs font-semibold transition-colors ${solid ? 'text-gray-600 hover:text-orange-500' : 'text-white/80 hover:text-white'}`}
            >Announcement</button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24 lg:h-28">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="SERF home"
        >
          <div className="relative flex flex-col items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 rounded-full bg-blue-900 shadow-md ring-2 ring-white/20 overflow-hidden">
            <FlameKindling size={21} className="text-orange-400 mb-0.5" strokeWidth={2.2} />
            <span className="text-white text-[15px] sm:text-base lg:text-lg font-black tracking-[0.16em] leading-none pl-[0.16em]">SERF</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-stretch h-full" onMouseLeave={handleNavLeave}>
          {NAV_ITEMS.map((item: NavItem) => (
            <div key={item.label} className="relative flex items-stretch" onMouseEnter={() => handleNavEnter(item.label)}>
              <button className={`flex items-center gap-1 px-4 text-sm font-semibold tracking-wide uppercase transition-all relative ${
                solid ? 'text-gray-700 hover:text-orange-600' : 'text-white/90 hover:text-white'
              } ${activeDropdown === item.label ? (solid ? 'text-orange-600' : 'text-white') : ''}`}>
                {item.label}
                {item.children.length > 0 && <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 transition-all duration-200 origin-left ${activeDropdown === item.label ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
              </button>
              {item.children.length > 0 && (
                <div
                  className={`absolute left-0 top-full min-w-[260px] bg-white shadow-2xl border-t-2 border-orange-500 rounded-b-lg py-2 transition-all duration-200 ${
                    activeDropdown === item.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  {item.children.map((child: NavChild) => (
                    <div
                      key={child.label}
                      className="relative"
                      onMouseEnter={() => child.children ? setActiveSubmenu(child.label) : setActiveSubmenu(null)}
                    >
                      <button
                        onClick={() => handleChildClick(child)}
                        className={`flex w-full items-center justify-between gap-4 px-5 py-2.5 text-left text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors uppercase tracking-wide whitespace-nowrap ${
                          activeSubmenu === child.label ? 'text-orange-600 bg-orange-50' : ''
                        }`}
                      >
                        {child.label}
                        {child.children && <ChevronRight size={12} className="text-gray-400" />}
                      </button>
                      {child.children && activeSubmenu === child.label && (
                        <div className="absolute left-full top-0 bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-[200px] z-10">
                          {child.children.map(sub => (
                            <button
                              key={sub.label}
                              onClick={() => handleChildClick(sub)}
                              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium whitespace-nowrap"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className={`hidden lg:flex items-center justify-center w-9 h-9 rounded-full transition-colors ${solid ? 'text-gray-400 hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button
          className={`lg:hidden p-2 rounded transition-colors ${solid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>


      {/* Mobile menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-y-auto transition-all duration-300 ${menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        {NAV_ITEMS.map((item: NavItem) => (
          <div key={item.label} className="border-b border-gray-50">
            <button
              onClick={() => setMobileExpanded(prev => prev === item.label ? null : item.label)}
              className="flex w-full items-center justify-between px-4 sm:px-6 py-3.5"
            >
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">{item.label}</span>
              <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-[60vh]' : 'max-h-0'}`}>
              {item.children.map((child: NavChild) => (
                <div key={child.label}>
                  <button
                    onClick={() => handleChildClick(child)}
                    className="flex w-full items-center gap-2 pl-8 sm:pl-10 pr-4 sm:pr-6 py-3 text-sm text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-colors text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-300 shrink-0" />
                    {child.label}
                  </button>
                  {child.children && (
                    <div className="bg-gray-50/50">
                      {child.children.map((sub: NavSubChild) => (
                        <button
                          key={sub.label}
                          onClick={() => handleChildClick(sub)}
                          className="flex w-full items-center gap-2 pl-14 sm:pl-16 pr-4 sm:pr-6 py-2.5 text-xs text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors text-left"
                        >
                          <span className="w-1 h-1 rounded-full bg-orange-200 shrink-0" />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
