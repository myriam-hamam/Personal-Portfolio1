import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Eye, FileText, GraduationCap, Code2, Award } from 'lucide-react';
import { personalInfo } from '../data';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    { icon: GraduationCap, label: 'Education', value: 'B.Sc. CS — Misr International University', color: 'from-blue-500 to-cyan-400' },
    { icon: Code2, label: 'Top Skills', value: 'React, Node.js, Python, Java, SQL', color: 'from-emerald-500 to-teal-400' },
    { icon: Award, label: 'Certifications', value: `${personalInfo.stats.certifications}+ professional certifications`, color: 'from-yellow-500 to-orange-400' },
    { icon: FileText, label: 'Projects', value: `${personalInfo.stats.projects}+ completed projects`, color: 'from-violet-500 to-purple-400' },
  ];

  return (
    <section id="resume" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Documents</p>
          <h2 className="section-heading">
            Resume & <span className="gradient-text">Cover Letter</span>
          </h2>
          <p className="section-subheading">
            Download my latest resume and cover letter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-5">Resume Highlights</h3>
            {highlights.map((h, i) => (
              <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-blue-500/30 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center flex-shrink-0`}>
                  <h.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{h.label}</p>
                  <p className="text-white text-sm font-medium">{h.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Download cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* CV */}
            <div className="glass-card p-6 rounded-2xl border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <FileText size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Curriculum Vitae</h4>
                  <p className="text-slate-500 text-sm">Latest updated resume with all skills, projects, and certifications.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={personalInfo.cvPath}
                  download
                  className="btn-primary flex items-center gap-2 text-sm py-2.5 flex-1 justify-center"
                >
                  <Download size={15} />
                  Download CV
                </a>
                <a
                  href={personalInfo.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2 text-sm py-2.5 px-4"
                >
                  <Eye size={15} />
                  Preview
                </a>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="glass-card p-6 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <FileText size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Cover Letter</h4>
                  <p className="text-slate-500 text-sm">A personalized cover letter highlighting my passion, goals, and fit.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={personalInfo.coverLetterPath}
                  download
                  className="flex items-center gap-2 text-sm py-2.5 flex-1 justify-center px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  <Download size={15} />
                  Download Letter
                </a>
                <a
                  href={personalInfo.coverLetterPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2 text-sm py-2.5 px-4"
                >
                  <Eye size={15} />
                  Preview
                </a>
              </div>
            </div>

            {/* Note */}
            <p className="text-slate-600 text-xs text-center">
              Documents are regularly updated. Last updated: June 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
