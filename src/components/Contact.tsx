import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    setErrorMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      setErrorMsg('Contact form not configured. Please email directly: Myriamhmam20@gmail.com');
      setState('error');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact from ${form.name}`,
          message: form.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please email directly: Myriamhmam20@gmail.com');
      setState('error');
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Personal Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Mail, label: 'University Email', value: personalInfo.universityEmail, href: `mailto:${personalInfo.universityEmail}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Open for opportunities and collaborations. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Availability badge */}
            <div className="glass-card p-5 rounded-2xl border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-emerald-400 font-semibold text-sm">Available for Opportunities</p>
                  <p className="text-slate-500 text-xs">Open to internships, freelance work, and full-time roles.</p>
                </div>
              </div>
            </div>

            {contactItems.map((item, i) => (
              <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white text-sm hover:text-blue-400 transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-white text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 text-sm font-medium"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-300 text-sm font-medium"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {state === 'success' ? (
              <div className="glass-card p-10 rounded-3xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6 max-w-xs">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setState('idle')} className="btn-primary">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-4">
                <h3 className="text-white font-bold text-lg mb-1">Send a Message</h3>
                <p className="text-slate-500 text-xs mb-5">
                  Messages are sent directly to Myriamhmam20@gmail.com
                </p>

                {state === 'error' && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-500 text-xs mb-1.5 block">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration / Job Opportunity / ..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-slate-500 text-xs mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={20}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {state === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Or email directly:{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
