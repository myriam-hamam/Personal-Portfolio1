import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Shield, GitBranch, Cpu, Bot, Cloud } from 'lucide-react';
import { currentlyExploring } from '../data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Server, Shield, GitBranch, Cpu, Bot, Cloud,
};

export default function CurrentlyExploring() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Always Growing</p>
          <h2 className="section-heading">
            Currently <span className="gradient-text">Exploring</span>
          </h2>
          <p className="section-subheading">
            Technologies and concepts I'm actively learning and applying.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyExploring.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Server;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-mono">Learning</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
