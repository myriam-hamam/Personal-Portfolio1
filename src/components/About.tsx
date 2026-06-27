import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Target, Compass, Cpu, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className="font-black gradient-text text-4xl">
      {inView ? value : 0}{suffix}
    </span>
  );
}

const cards = [
  {
    icon: Heart,
    title: 'About Me',
    color: 'from-pink-500 to-rose-400',
    content: "I'm Myriam Hamam, a passionate Software Engineering student at Misr International University. I build elegant solutions to complex problems — from scalable web platforms to AI-powered intelligent systems.",
  },
  {
    icon: Target,
    title: 'Career Goals',
    color: 'from-blue-500 to-cyan-400',
    content: 'I aim to join a world-class tech company as a Full-Stack or Backend Engineer, contributing to impactful products while growing my expertise in AI, system design, and cloud-native development.',
  },
  {
    icon: Compass,
    title: 'Areas of Interest',
    color: 'from-emerald-500 to-teal-400',
    content: 'Full-Stack Development, AI & Machine Learning, Generative AI, Agentic AI Systems, Backend Architecture, Data Analytics, Mobile Development, and Networking.',
  },
  {
    icon: Cpu,
    title: 'AI Background',
    color: 'from-orange-500 to-amber-400',
    content: 'Certified in Neural Networks, Deep Learning, and Generative AI through IBM SkillsBuild. Participated in Google Build with AI Masr Edition. Built computer vision projects using Python, OpenCV, and MediaPipe.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Full-Stack Developer with growing expertise in AI, intelligent systems, and data-driven applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: photo + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="glass-card p-6 rounded-2xl flex gap-4 items-start">
              <img
                src={personalInfo.photo2 || personalInfo.photo}
                alt="Myriam Hamam"
                loading="lazy"
                className="w-24 h-24 rounded-2xl object-cover object-top border border-blue-500/20 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">Software Engineering Student & AI Enthusiast</p>
                <div className="flex flex-col gap-1.5 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><MapPin size={13} className="text-blue-400" /> {personalInfo.location}</span>
                  <span className="flex items-center gap-2"><Calendar size={13} className="text-blue-400" /> 4th Year @ MIU (2023–2027)</span>
                </div>
              </div>
            </div>

            {/* AI highlight */}
            <div className="glass-card p-5 rounded-2xl border-blue-500/20 bg-blue-500/5">
              <h4 className="text-blue-400 font-semibold text-sm mb-3 flex items-center gap-2">
                <Cpu size={15} />
                AI & Machine Learning Background
              </h4>
              <ul className="space-y-2">
                {[
                  'IBM Neural Networks & Deep Learning certification',
                  'Google Build with AI Masr Edition (5,000+ developers)',
                  'IBM Granite AI-Assisted Software Development',
                  'Computer Vision: Python, OpenCV, MediaPipe',
                  'Generative AI & Multi-Agent Systems (LangGraph)',
                  'Python Machine Learning fundamentals',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl text-center">
                <Counter value={personalInfo.stats.projects} suffix="+" />
                <p className="text-slate-500 text-sm mt-1">Projects Built</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center">
                <Counter value={personalInfo.stats.certifications} suffix="+" />
                <p className="text-slate-500 text-sm mt-1">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Right: cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass-card p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon size={18} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}