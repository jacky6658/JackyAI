
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
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12"> {/* 改為 pt-32 */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">作品案例</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          這裡展示了我如何運用 AI 技術與全端開發能力解決真實世界的商業問題。
        </p>
      </div>

      {/* Filters & Tools */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="搜尋案例或技術關鍵字..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2 bg-slate-900/50 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${activeTag === tag ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-3 py-2 rounded-xl">
            <ArrowUpDown size={16} className="text-slate-500" />
            <select 
              className="bg-transparent text-sm focus:outline-none text-slate-300"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="newest" className="bg-slate-900">由新到舊</option>
              <option value="oldest" className="bg-slate-900">由舊到新</option>
            </select>
          </div>
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              layout
              key={work.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col h-full rounded-2xl bg-slate-900/30 border border-slate-800 overflow-hidden hover:border-slate-600 transition-all"
            >
              <Link to={`/works/${work.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={work.coverImage} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-md uppercase tracking-widest">{work.year}</span>
                    <span className="text-xs text-slate-500">{work.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{work.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6">{work.summary}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                    {work.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded">
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
        <div className="text-center py-40 border border-dashed border-slate-800 rounded-3xl">
          <p className="text-slate-500 text-lg">沒有找到符合條件的作品案例</p>
          <button 
            onClick={() => {setSearch(''); setActiveTag('All');}}
            className="mt-4 text-blue-400 hover:underline"
          >
            重置過濾條件
          </button>
        </div>
      )}
    </div>
  );
};
