import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import type { Theme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 z-[9999] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'mx-4 mt-2'
            : 'mx-0 mt-0'
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'backdrop-blur-2xl bg-slate-900/80 dark:bg-slate-900/80 border border-white/10 rounded-2xl shadow-2xl shadow-black/20 px-4 py-2'
              : 'bg-transparent px-6 py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-sm gradient-text hidden sm:block font-mono tracking-wider">MH</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href.slice(1)
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="hidden sm:flex btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </button>
              <button
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-4 mt-2 backdrop-blur-2xl bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl p-4 lg:hidden"
            >
              <div className="grid grid-cols-2 gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                      active === link.href.slice(1)
                        ? 'bg-blue-500/15 text-blue-400'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-primary w-full text-sm py-2.5"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
