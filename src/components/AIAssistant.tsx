import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const responses: Array<{ keywords: string[]; reply: string }> = [
  {
    keywords: ['skill', 'tech', 'stack', 'language', 'know'],
    reply: "Myriam's core stack includes React.js, TypeScript, Node.js, Express.js, MongoDB, and Python. She also works with Java/Kotlin for Android, Power BI for data analytics, and Cisco tools for networking.",
  },
  {
    keywords: ['project', 'portfolio', 'work', 'built', 'aura', 'triplink'],
    reply: "Her featured projects include Aura Luxury E-Commerce (live on Vercel), TripLink travel booking app, BI Analytics Dashboard with Power BI, and a Java Recruitment System. Check the Projects section for details!",
  },
  {
    keywords: ['available', 'hire', 'freelance', 'job', 'internship', 'opportunity'],
    reply: "Yes! Myriam is open to internships, freelance projects, and part-time opportunities. She's especially interested in full-stack development and backend roles. Reach out via the Contact section.",
  },
  {
    keywords: ['certification', 'certificate', 'ibm', 'google', 'course'],
    reply: "Myriam has 7+ certifications including IBM SkillsBuild (Software Development, Project Management, Neural Networks, Interview Essentials) and Google Build with AI Masr Edition. See the Certifications section!",
  },
  {
    keywords: ['education', 'university', 'miu', 'degree', 'study'],
    reply: "She's a 3rd-year student at Misr International University (MIU) pursuing a B.Sc. in Computer Science — majoring in Software Engineering, minoring in Software Development. Expected graduation: 2027.",
  },
  {
    keywords: ['tutor', 'mentoring', 'teach', 'lesson'],
    reply: "Myriam offers tutoring in Data Structures, Algorithms, OOP, Networking, Software Engineering, and Database Systems. Contact her via the Contact section to book a session.",
  },
  {
    keywords: ['contact', 'email', 'reach', 'message'],
    reply: "You can reach Myriam at Myriamhmam20@gmail.com or via LinkedIn at linkedin.com/in/myriam-hamam-6980a72a0. She typically responds within 24 hours.",
  },
  {
    keywords: ['location', 'cairo', 'egypt', 'where'],
    reply: "Myriam is based in Cairo, Egypt. She's open to remote work with international teams!",
  },
  {
    keywords: ['cv', 'resume', 'download'],
    reply: "You can download Myriam's latest CV from the Resume section. There's also a Cover Letter available for download.",
  },
  {
    keywords: ['ai', 'machine learning', 'deep learning', 'python'],
    reply: "Myriam is passionate about AI! She's certified in Neural Networks & Deep Learning and Building Multi-Agent Systems with LangGraph on Google Cloud. Currently exploring Agentic AI Systems.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    reply: "Hi there! I'm Myriam's AI assistant. Ask me about her skills, projects, certifications, experience, or anything else!",
  },
];

function getReply(input: string): string {
  const lower = input.toLowerCase();
  for (const r of responses) {
    if (r.keywords.some(k => lower.includes(k))) return r.reply;
  }
  return "I'm not sure about that specific topic. Try asking about Myriam's skills, projects, certifications, education, or availability. Or contact her directly at Myriamhmam20@gmail.com!";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Myriam's AI assistant. Ask me anything about her skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', text }]);
    setTyping(true);
    await new Promise(r => setTimeout(r, 800 + Math.random() * 400));
    setTyping(false);
    setMessages(m => [...m, { role: 'bot', text: getReply(text) }]);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => { setOpen(true); setMinimized(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
        style={{ display: open && !minimized ? 'none' : 'flex' }}
      >
        <Bot size={24} className="text-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Myriam's Assistant</p>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setMinimized(true)} className="p-1.5 rounded-lg hover:bg-white/15 text-white/70 hover:text-white transition-colors">
                  <Minimize2 size={14} />
                </button>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-white/15 text-white/70 hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto bg-slate-950/95 backdrop-blur-xl p-4 space-y-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-sm'
                      : 'bg-white/8 border border-white/8 text-slate-300 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/8 border border-white/8 px-3.5 py-2.5 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-slate-500"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-slate-950/95 backdrop-blur-xl border-t border-white/5 p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Myriam..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white disabled:opacity-40 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
