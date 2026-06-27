import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Star, Code2, Network, Cpu, Database, Globe } from 'lucide-react';
import { projects } from '../data';

const categories = ['All', 'Full Stack', 'AI', 'Data Analytics', 'Networking', 'Java', 'Web Development', 'Software Engineering'];

function ProjectPlaceholder({ category }: { category: string[] }) {
  const cat = category[0];
  const config: Record<string, { gradient: string; Icon: React.FC<{ size?: number; className?: string }> }> = {
    'AI': { gradient: 'from-pink-900/60 to-rose-900/40', Icon: Cpu },
    'Full Stack': { gradient: 'from-blue-900/60 to-cyan-900/40', Icon: Globe },
    'Data Analytics': { gradient: 'from-orange-900/60 to-amber-900/40', Icon: Database },
    'Networking': { gradient: 'from-yellow-900/60 to-orange-900/40', Icon: Network },
    'Java': { gradient: 'from-slate-800 to-zinc-900', Icon: Code2 },
    'Software Engineering': { gradient: 'from-slate-800 to-slate-900', Icon: Code2 },
    'Web Development': { gradient: 'from-blue-900/60 to-indigo-900/40', Icon: Globe },
  };
  const { gradient, Icon } = config[cat] ?? { gradient: 'from-slate-800 to-slate-900', Icon: Code2 };
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <Icon size={44} className="text-white/15" />
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            A showcase of projects spanning full-stack web, AI, data analytics, and networking.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Featured projects */}
            {featured.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                {featured.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-card rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        </>
                      ) : (
                        <ProjectPlaceholder category={project.category} />
                      )}

                      {project.featured && (
                        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
                          <Star size={11} />
                          Featured
                        </div>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:text-blue-400 transition-colors">
                            <ExternalLink size={14} />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:text-blue-400 transition-colors">
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.category.map((cat, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">{cat}</span>
                        ))}
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                      <p className="text-slate-400 text-sm mb-3">{project.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs font-mono">{t}</span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                      >
                        {expanded === project.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {expanded === project.id ? 'Hide' : 'View'} Case Study
                      </button>

                      <AnimatePresence>
                        {expanded === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-white/10">
                              <p className="text-slate-400 text-sm mb-3">{project.longDesc}</p>
                              <p className="text-slate-300 text-xs font-semibold mb-2">Key Achievements</p>
                              <ul className="space-y-1">
                                {project.achievements.map((a, j) => (
                                  <li key={j} className="flex items-center gap-2 text-slate-400 text-xs">
                                    <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Other projects */}
            {others.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {others.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    {/* Compact image strip */}
                    <div className="h-24 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <ProjectPlaceholder category={project.category} />
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors leading-tight flex-1 pr-2">{project.title}</h3>
                        <div className="flex gap-1.5 flex-shrink-0">
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                              <ExternalLink size={13} />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                              <Github size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-500 text-xs mb-3 leading-relaxed line-clamp-2">{project.desc}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 4).map((t, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-500 text-xs font-mono">{t}</span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-600 text-xs">+{project.tech.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-slate-600 py-10">No projects in this category yet.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
