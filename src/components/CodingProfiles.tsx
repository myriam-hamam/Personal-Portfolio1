import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { codingProfiles } from '../data';

export default function CodingProfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">Coding Platforms</p>
          <h3 className="text-2xl font-bold text-white">
            Coding <span className="gradient-text">Profiles</span>
          </h3>
          <p className="text-slate-500 text-sm mt-2">Active across multiple competitive programming and data science platforms.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}>
                  {p.logo}
                </div>
                <span className={`px-2 py-0.5 rounded-lg text-xs font-medium bg-gradient-to-r ${p.badgeColor} text-white`}>
                  {p.badge}
                </span>
              </div>

              <p className="text-white font-semibold text-sm mb-0.5">{p.name}</p>
              <p className="text-slate-500 text-xs font-mono mb-2">@{p.username}</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">{p.desc}</p>

              {/* Note for beginner platforms */}
              {p.note && (
                <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8">
                  <TrendingUp size={11} className="text-blue-400 flex-shrink-0" />
                  <span className="text-blue-400 text-xs">{p.note}</span>
                </div>
              )}

              {/* Stats */}
              <div className="flex gap-2 mb-3">
                {p.stats.map((s, j) => (
                  <div key={j} className="flex-1 text-center p-2 rounded-xl bg-white/5">
                    <p className="text-white font-semibold text-xs">{s.value}</p>
                    <p className="text-slate-600 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/30 text-xs font-medium transition-all duration-200"
              >
                <ExternalLink size={12} />
                View Profile
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
