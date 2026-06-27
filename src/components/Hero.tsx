import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Download, Mail, ChevronDown, Github, Linkedin,
  Code2, Database, Cpu, Globe, Star, GitBranch
} from 'lucide-react';
import { personalInfo } from '../data';

const floatingIcons = [
  { Icon: Code2, x: '10%', y: '20%', delay: 0, color: 'text-blue-400' },
  { Icon: Database, x: '80%', y: '15%', delay: 0.5, color: 'text-cyan-400' },
  { Icon: Cpu, x: '85%', y: '70%', delay: 1, color: 'text-emerald-400' },
  { Icon: Globe, x: '5%', y: '65%', delay: 1.5, color: 'text-blue-300' },
  { Icon: Star, x: '50%', y: '5%', delay: 2, color: 'text-yellow-400' },
  { Icon: GitBranch, x: '15%', y: '80%', delay: 0.7, color: 'text-pink-400' },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.35 + 0.08,
      });
    }

    let animId: number;
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
        ctx.fill();
      });
      // Draw connections every other frame to reduce cost
      if (frame % 2 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < 7225) { // 85^2
              ctx.beginPath();
              ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - Math.sqrt(dist2) / 85)})`;
              ctx.lineWidth = 0.4;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      frame++;
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

function TypingText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c + 1), 60);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(c => c - 1), 35);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

export default function Hero() {

  const stats = [
    { value: personalInfo.stats.projects, label: 'Projects', suffix: '+' },
    { value: personalInfo.stats.certifications, label: 'Certifications', suffix: '+' },
    { value: personalInfo.stats.technologies, label: 'Technologies', suffix: '+' },
    { value: personalInfo.stats.repositories, label: 'Repositories', suffix: '+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-cyan-950/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <ParticleCanvas />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex ${color} opacity-20 hover:opacity-50 transition-opacity`}
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={28} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Open to work badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open To Work
              <span className="text-emerald-500/60">•</span>
              <MapPin size={13} />
              Cairo, Egypt
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Myriam</span>
              <br />
              <span className="gradient-text">Hamam</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypingText texts={personalInfo.typingRoles} />
            </motion.div>

            <motion.p
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href={personalInfo.cvPath} download className="btn-primary flex items-center gap-2">
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost flex items-center gap-2"
              >
                <Code2 size={16} />
                Explore Projects
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative group" style={{ transformStyle: 'preserve-3d' }}>
              {/* Glow rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/20 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-xl" />

              {/* Photo frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img
                  src={personalInfo.photo}
                  alt="Myriam Hamam"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-2xl border border-blue-500/20"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs text-slate-400">Availability</p>
                <p className="text-sm font-semibold text-emerald-400">Open to opportunities</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 glass-card px-3 py-2 rounded-xl border border-cyan-500/20"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-mono text-cyan-400">4th Year @ MIU</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-4 text-center rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
              <div className="text-3xl font-black gradient-text group-hover:scale-110 transition-transform duration-300">
                {s.value}{s.suffix}
              </div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}