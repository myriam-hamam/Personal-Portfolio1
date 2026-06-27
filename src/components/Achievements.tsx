import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Shield, Rocket, Code2 } from 'lucide-react';
import { achievements } from '../data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Award, Star, Shield, Rocket, Code2,
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Milestones</p>
          <h2 className="section-heading">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Highlights of my academic and professional accomplishments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] ?? Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{ach.title}</h3>
                  <span className="text-slate-600 text-xs font-mono flex-shrink-0">{ach.year}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{ach.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
