import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Server, Smartphone, Palette, Network, BarChart3, Code2, Cpu } from 'lucide-react';
import { services } from '../data';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Globe, Server, Smartphone, Palette, Network, BarChart3, Code2, Cpu,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            Comprehensive software development services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{service.desc}</p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-1"
                >
                  Get in touch →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
