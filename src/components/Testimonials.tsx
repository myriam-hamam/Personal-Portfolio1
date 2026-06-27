import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 rounded-3xl border-blue-500/20"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
            <Clock size={24} className="text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Recommendations <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Professional recommendations and references will be added in the future. Currently building a track record through academic projects, certifications, and real-world experience.
          </p>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 text-sm font-medium transition-all duration-200"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
