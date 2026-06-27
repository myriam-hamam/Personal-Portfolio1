import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold gradient-text font-mono tracking-wider text-lg">Myriam Hamam</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Software Engineering student passionate about building scalable applications, intelligent systems, and impactful digital experiences.
            </p>
            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-all duration-200">
                <Github size={17} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-500 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-200">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-white/10 text-slate-500 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-200">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href={personalInfo.cvPath} download className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Myriam Hamam. Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-600 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Cairo, Egypt
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
