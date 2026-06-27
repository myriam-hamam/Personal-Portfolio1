import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, X, Calendar, Tag, ExternalLink, Shield } from 'lucide-react';
import { certifications } from '../data';

const categories = ['All', 'Google & AI', 'IBM SkillsBuild', 'Professional Programs'];

function CertModal({ cert, onClose }: { cert: typeof certifications[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        className="relative z-10 w-full max-w-lg glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient top bar */}
        <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

        {/* Certificate preview card */}
        <div className={`bg-gradient-to-br ${cert.color} bg-opacity-10 p-8 relative`}>
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
          <div className="relative flex flex-col items-center text-center">
            {/* Issuer brand */}
            <div className="mb-4">
              {cert.issuerBrand === 'IBM' ? (
                <div className="text-2xl font-black text-white tracking-wider">IBM <span className="font-normal text-lg">SkillsBuild</span></div>
              ) : cert.issuerBrand === 'Google' ? (
                <div className="flex items-center gap-1 text-xl font-bold">
                  <span className="text-blue-400">G</span>
                  <span className="text-red-400">o</span>
                  <span className="text-yellow-400">o</span>
                  <span className="text-blue-400">g</span>
                  <span className="text-green-400">l</span>
                  <span className="text-red-400">e</span>
                  <span className="text-white font-normal ml-1">for Developers</span>
                </div>
              ) : (
                <div className="text-xl font-bold text-white">{cert.issuer}</div>
              )}
            </div>

            <div className="w-14 h-14 rounded-full border-4 border-yellow-400/80 flex items-center justify-center mb-3">
              <Award size={22} className="text-yellow-400" />
            </div>

            <p className="text-white/70 text-xs mb-1">This certificate is presented to</p>
            <p className="text-white font-bold text-lg mb-2">Myriam Hamam Ebrahim</p>
            <p className="text-white/60 text-xs mb-1">for the completion of</p>
            <h3 className="text-white font-bold text-base leading-snug">{cert.title}</h3>

            {cert.credential && (
              <p className="text-white/40 text-xs font-mono mt-2">({cert.credential})</p>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Calendar size={12} />
              Completion date: {cert.date}
            </div>
            <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
              {cert.category}
            </span>
          </div>

          <p className="text-slate-400 text-xs font-semibold mb-2">Skills Acquired</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {cert.skills.map((skill, j) => (
              <span
                key={j}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs"
              >
                <Tag size={9} />
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/30 text-sm font-medium transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/30 text-white/60 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<typeof certifications[0] | null>(null);

  const filtered = filter === 'All' ? certifications : certifications.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Professional certifications from Google, IBM, and leading tech organizations. Click any card to preview.
          </p>
        </motion.div>

        {/* Filter */}
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
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((cert, i) => (
              <motion.button
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelected(cert)}
                className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 text-left"
              >
                {/* Top gradient */}
                <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

                {/* Certificate mock preview */}
                <div className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden flex flex-col items-center justify-center gap-2`}>
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-black to-transparent" />

                  {/* Issuer branding */}
                  {cert.issuerBrand === 'IBM' ? (
                    <div className="text-white font-black text-sm tracking-widest opacity-90">IBM</div>
                  ) : cert.issuerBrand === 'Google' ? (
                    <div className="flex items-center gap-0.5 text-sm font-bold">
                      <span className="text-white">G</span>
                      <span className="text-white/80">oogle</span>
                    </div>
                  ) : (
                    <div className="text-white font-bold text-sm opacity-90">{cert.issuer}</div>
                  )}

                  <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center">
                    <Award size={14} className="text-white/80" />
                  </div>

                  <p className="text-white/60 text-xs px-3 text-center leading-tight line-clamp-2">
                    {cert.title}
                  </p>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h3 className="text-white font-semibold text-xs leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                    <ExternalLink size={12} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5" />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                    <span className="text-slate-600 text-xs flex items-center gap-1">
                      <Calendar size={10} />
                      {cert.date}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-1">
                    <Shield size={10} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Certified</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="text-center text-slate-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Click any certificate to view details
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
