import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Tag, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data';

const allCategories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = blogPosts.filter(p => {
    const matchCat = filter === 'All' || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="blog" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Knowledge Sharing</p>
          <h2 className="section-heading">
            Blog & <span className="gradient-text">Articles</span>
          </h2>
          <p className="section-subheading">
            Sharing insights on web development, AI, networking, and software engineering.
          </p>
        </motion.div>

        {/* Search + filter */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 text-slate-300 placeholder-slate-600 bg-transparent focus:outline-none focus:border-blue-500/50 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'glass border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className={`h-1 bg-gradient-to-r ${post.color}`} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gradient-to-r ${post.color} text-white`}>
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="text-xs text-yellow-400 font-semibold">Featured</span>
                  )}
                </div>

                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag, j) => (
                    <span key={j} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 text-slate-500 text-xs">
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex items-center gap-3 text-slate-600 text-xs">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <span className="text-blue-400 text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-600 text-sm">More articles coming soon. Follow on LinkedIn for updates.</p>
        </motion.div>
      </div>
    </section>
  );
}
