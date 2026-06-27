import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, MessageSquare, Users, Zap, Star, RefreshCw, Target, Clock } from 'lucide-react';
import { softSkills } from '../data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Brain, MessageSquare, Users, Zap, Star, RefreshCw, Target, Clock,
};

export default function SoftSkills() {
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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Beyond Technical</p>
          <h2 className="section-heading">
            Soft <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Brain;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-5 rounded-2xl text-center hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
