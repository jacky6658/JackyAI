
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WORKS } from '../constants.tsx';

export const Works: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    WORKS.forEach(w => w.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredWorks = useMemo(() => {
    let result = WORKS.filter(w => {
      const matchSearch = w.title.toLowerCase().includes(search.toLowerCase()) || 
                          w.summary.toLowerCase().includes(search.toLowerCase());
      const matchTag = activeTag === 'All' || w.tags.includes(activeTag);
      return matchSearch && matchTag;
    });

    if (sortBy === 'newest') {
      result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    } else {
      result.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    }

    return result;
  }, [search, activeTag, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 italic tracking-tight uppercase">作品案例 <span className="text-blue-500">/</span> Case Studies</h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl font-light">
          運用 AI 技術與全端開發能力解決真實世界的商業問題。
        </p>
      </div>

      {/* Filters & Tools */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="搜尋案例或技術關鍵字..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* 滑動標籤區 */}
          <div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap uppercase tracking-widest ${activeTag === tag ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-3 rounded-2xl w-full sm:w-auto justify-center">
            <ArrowUpDown size={16} className="text-slate-500" />
            <select 
              className="bg-transparent text-xs font-bold focus:outline-none text-slate-300 uppercase tracking-widest cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="newest" className="bg-slate-900">NEWEST</option>
              <option value="oldest" className="bg-slate-900">OLDEST</option>
            </select>
          </div>
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              layout
              key={work.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col h-full rounded-[40px] bg-slate-900/30 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all shadow-xl active:scale-[0.98]"
            >
              <Link to={`/works/${work.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={work.coverImage} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-blue-400 bg-blue-400/10 px-3 py-1 rounded-lg uppercase tracking-[0.2em] border border-blue-500/10">{work.year}</span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{work.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors tracking-tight leading-tight">{work.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-8 font-light italic">{work.summary}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {work.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] font-black text-slate-500 bg-white/5 px-2.5 py-1 rounded-lg uppercase tracking-wider border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-32 md:py-40 border-2 border-dashed border-white/5 rounded-[48px]">
          <p className="text-slate-500 text-lg font-light mb-6">沒有找到符合條件的作品案例</p>
          <button 
            onClick={() => {setSearch(''); setActiveTag('All');}}
            className="px-8 py-3 bg-blue-600/10 text-blue-400 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95"
          >
            重置過濾條件
          </button>
        </div>
      )}
    </div>
  );
};
