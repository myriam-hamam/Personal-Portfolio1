import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const courses = [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Operating Systems',
    'Computer Networks',
    'Database Systems',
    'OOP & Design Patterns',
    'System Analysis & Design',
    'Mobile Development',
  ];

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading">
            Building a strong foundation in computer science and software engineering.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent hidden sm:block" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sm:pl-20 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-slate-950 hidden sm:flex items-center justify-center shadow-lg shadow-blue-500/40">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="glass-card p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <GraduationCap size={28} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
                      <p className="text-blue-400 font-semibold mt-1">Misr International University (MIU)</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        In Progress
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Calendar size={11} /> 2023 — 2027
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <Award size={14} className="text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-slate-500 text-xs">Major</p>
                        <p className="text-white text-sm font-semibold">Software Engineering</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <BookOpen size={14} className="text-cyan-400 flex-shrink-0" />
                      <div>
                        <p className="text-slate-500 text-xs">Minor</p>
                        <p className="text-white text-sm font-semibold">Software Development</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-white/5">
                    <div className="flex gap-2 text-sm text-slate-300">
                      <span className="text-slate-500">Current Status:</span>
                      <span className="font-semibold text-white">Fourth Year Student</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-500">Expected:</span>
                      <span className="font-semibold text-white">2027</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm mb-3 font-medium">Key Courses Taken</p>
                    <div className="flex flex-wrap gap-2">
                      {courses.map((c, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}