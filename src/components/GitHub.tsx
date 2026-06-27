import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

const pinnedRepos = [
  { name: 'aura-luxury-ecommercee', desc: 'Premium luxury e-commerce platform', stars: 5, forks: 2, lang: 'TypeScript', color: '#3178c6' },
  { name: 'TripLink', desc: 'Multi-booking travel application', stars: 3, forks: 1, lang: 'JavaScript', color: '#f1e05a' },
  { name: 'BI-Project', desc: 'Business Intelligence dashboard', stars: 4, forks: 2, lang: 'Python', color: '#3572A5' },
  { name: 'Software-Project-management', desc: 'SDLC & Agile documentation', stars: 2, forks: 1, lang: 'Markdown', color: '#083fa1' },
];

const langStats = [
  { lang: 'JavaScript', pct: 35, color: '#f1e05a' },
  { lang: 'Python', pct: 25, color: '#3572A5' },
  { lang: 'TypeScript', pct: 18, color: '#3178c6' },
  { lang: 'Java', pct: 12, color: '#b07219' },
  { lang: 'HTML/CSS', pct: 10, color: '#e34c26' },
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Open Source</p>
          <h2 className="section-heading">
            <span className="gradient-text">GitHub</span> Activity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">myriam-hamam</p>
                <p className="text-slate-500 text-xs">GitHub Profile</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Repositories', value: personalInfo.stats.repositories + '+' },
                { label: 'Projects', value: personalInfo.stats.projects + '+' },
                { label: 'Technologies', value: personalInfo.stats.technologies + '+' },
                { label: 'Certifications', value: personalInfo.stats.certifications + '+' },
              ].map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 text-center">
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full text-sm"
            >
              <Github size={16} />
              View Profile
            </a>
          </motion.div>

          {/* Pinned repos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            <p className="text-slate-400 text-sm font-medium mb-4">Pinned Repositories</p>
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={i}
                href={`${personalInfo.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center justify-between glass-card p-4 rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Code2 size={14} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">{repo.name}</p>
                    <p className="text-slate-500 text-xs">{repo.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 text-slate-500 text-xs">
                    <span className="flex items-center gap-1"><Star size={11} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                      {repo.lang}
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.a>
            ))}

            {/* Language stats */}
            <div className="glass-card p-5 rounded-xl mt-4">
              <p className="text-slate-400 text-sm font-medium mb-4">Language Distribution</p>
              <div className="flex rounded-full overflow-hidden h-2 mb-3">
                {langStats.map((l, i) => (
                  <motion.div
                    key={i}
                    style={{ backgroundColor: l.color, width: `${l.pct}%` }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {langStats.map((l, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: l.color }} />
                    {l.lang} {l.pct}%
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
