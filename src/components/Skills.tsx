import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState('frontend');

  const current = skillCategories.find(c => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading">
            A comprehensive toolkit across full-stack development, AI, networking, and software engineering.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${current.color}`}>
              {current.label}
            </div>
            <span className="text-slate-500 text-sm">{current.skills.length} technologies</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {current.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  <span className={`text-xs font-mono font-semibold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${current.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech bubbles overview */}
        <motion.div
          className="mt-10 flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {skillCategories.flatMap(c => c.skills).map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="px-3 py-1 rounded-lg text-xs text-slate-400 border border-white/5 bg-white/3 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200"
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
