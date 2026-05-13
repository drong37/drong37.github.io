import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to determine active link styling
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-slate-900 border-b-2 border-slate-900' 
        : 'text-slate-500 hover:text-slate-900'
    }`;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/publications', label: 'Publications' },
    { path: '/projects', label: 'Projects' },
    { path: '/cv', label: 'CV' },
  ];

  const SocialIcons = ({ className = "" }: { className?: string }) => (
    <div className={className}>
      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-900 transition-colors">
        <Mail size={18} />
        <span className="sr-only">Email</span>
      </a>
      <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
        <Github size={18} />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={PERSONAL_INFO.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
        </svg>
        <span className="sr-only">Google Scholar</span>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-slate-100/50 shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <header className="py-8 sm:py-12 flex justify-between items-center bg-white sticky top-0 z-50 bg-opacity-95 backdrop-blur-sm">
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <NavLink to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-900" onClick={closeMenu}>
              {PERSONAL_INFO.name}
            </NavLink>
            <span className="text-xs text-slate-500 font-sans tracking-wide uppercase mt-1 hidden sm:block">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Social Icons moved to Header - visible on small screens and up */}
          <div className="hidden sm:block pt-1"> 
             <SocialIcons className="flex items-center space-x-5" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={getLinkClass}>
              {item.label}
            </NavLink>
          ))}
          
          {/* Visitor Map Widget (ClustrMaps Placeholder) */}
          <div className="flex items-center pl-4 border-l border-slate-200">
            <a href="https://clustrmaps.com/site/1bfj" title="Visit tracker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
               <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">Visitors</span>
               <img src="https://clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=yQ1f-G8M1b5f6I6t4-k_9Z08_x0z_L1E9Z2u7w6j5O4" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    alt="Map" className="h-5 w-auto rounded-sm border border-slate-200 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mb-8 space-y-2 border-t border-slate-100 pt-4">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              onClick={closeMenu}
              className={({ isActive }) => 
                `block py-2 px-3 rounded-md text-base font-medium ${
                  isActive ? 'bg-slate-50 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Mobile Visitor Map */}
          <div className="py-2 px-3 mt-4 border-t border-slate-100 pt-4">
            <span className="block text-sm font-medium text-slate-500 mb-2">Visitors</span>
            <a href="https://clustrmaps.com/site/1bfj" title="Visit tracker" target="_blank" rel="noopener noreferrer" className="inline-block opacity-80 hover:opacity-100 transition-opacity">
               <img src="https://clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=yQ1f-G8M1b5f6I6t4-k_9Z08_x0z_L1E9Z2u7w6j5O4" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    alt="Visitor Map" className="h-6 w-auto rounded-sm border border-slate-200" />
            </a>
          </div>
          {/* Social Icons for Mobile */}
          <div className="px-3 pt-4 mt-2 border-t border-slate-50">
             <SocialIcons className="flex space-x-6" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow py-4 sm:py-8 fade-in">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-slate-100 mt-12 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;