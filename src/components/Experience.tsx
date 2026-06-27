import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Cpu, GraduationCap, Code2 } from 'lucide-react';
import { experiences } from '../data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Briefcase, Cpu, GraduationCap, Code2,
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subheading">
            My professional journey, programs, and academic milestones.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500/50 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = iconMap[exp.icon] ?? Briefcase;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-slate-950 hidden sm:flex items-center justify-center shadow-lg`}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="glass-card p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-white font-semibold">{exp.role}</h3>
                            <p className="text-blue-400 text-sm">{exp.org}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs">{exp.type}</span>
                            <span className="text-slate-600 text-xs font-mono">{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{exp.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, j) => (
                            <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Future placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="sm:pl-16 relative"
            >
              <div className="absolute left-3 top-6 w-6 h-6 rounded-full border-2 border-dashed border-blue-500/40 hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse" />
              </div>
              <div className="glass-card p-5 rounded-2xl border-dashed border-blue-500/20">
                <p className="text-slate-500 text-sm text-center">Next Chapter — Internship / Full-Time Role</p>
                <p className="text-slate-600 text-xs text-center mt-1 font-mono">Open for opportunities • 2026–2027</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
