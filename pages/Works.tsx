
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WORKS } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

export const Works: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // 標籤分類與顏色映射
  const tagConfig: Record<string, { label: string; color: string; bgColor: string }> = {
    'All': { label: '全部', color: 'text-white', bgColor: 'bg-blue-600' },
    'AI Agent': { label: 'AI 智能體', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
    'Automation': { label: '自動化', color: 'text-emerald-400', bgColor: 'bg-emerald-500/20' },
    'RAG': { label: '知識庫', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
    'Platform': { label: '平台', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
    'HR Tech': { label: '人資科技', color: 'text-pink-400', bgColor: 'bg-pink-500/20' },
    'Content Tech': { label: '內容科技', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
    'Media Tech': { label: '媒體科技', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
    'Data Analysis': { label: '數據分析', color: 'text-indigo-400', bgColor: 'bg-indigo-500/20' },
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    WORKS.forEach(w => w.tags.forEach(t => tags.add(t)));
    // 按照配置順序排序
    const orderedTags = Array.from(tags).sort((a, b) => {
      const aOrder = Object.keys(tagConfig).indexOf(a);
      const bOrder = Object.keys(tagConfig).indexOf(b);
      if (aOrder === -1 && bOrder === -1) return 0;
      if (aOrder === -1) return 1;
      if (bOrder === -1) return -1;
      return aOrder - bOrder;
    });
    return orderedTags;
  }, []);

  const filteredWorks = useMemo(() => {
    let result = WORKS.filter(w => {
      const matchSearch = search === '' || 
        w.title.toLowerCase().includes(search.toLowerCase()) || 
        w.summary.toLowerCase().includes(search.toLowerCase()) ||
        w.stack.some(tech => tech.toLowerCase().includes(search.toLowerCase())) ||
        w.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
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

  const hasActiveFilters = search !== '' || activeTag !== 'All';

  return (
    <>
      <SEO
        title="作品案例 | AI 自動化專案展示 - Jacky / AIJob"
        description="運用 AI 技術與全端開發能力解決真實世界的商業問題。展示 ReelMind 短影音智能體、RecruitAI 智能招募系統、AI 全能工具箱等企業級 AI 應用案例。"
        keywords="AI 專案案例, AI 自動化案例, ReelMind, RecruitAI, AI 智能體開發, 企業 AI 應用, AI 系統開發案例"
        url="https://www.aijob.com.tw/#/works"
      />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <div className="mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-3 md:mb-6 italic tracking-tight uppercase px-2 md:px-0">
          作品案例 <span className="text-blue-500">/</span> Case Studies
        </h1>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl font-light px-2 md:px-0">
          運用 AI 技術與全端開發能力解決真實世界的商業問題。
        </p>
      </div>

      {/* 搜尋與過濾區域 */}
      <div className="mb-12 space-y-6">
        {/* 搜尋框 */}
        <div className="relative group">
          <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="搜尋作品名稱、技術棧或標籤..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 pl-12 sm:pl-14 pr-10 sm:pr-12 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* 標籤過濾器與排序 */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* 標籤區 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={16} className="text-slate-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">分類篩選</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap bg-slate-900/30 p-2 rounded-2xl border border-slate-800/50">
              {allTags.map(tag => {
                const config = tagConfig[tag] || { label: tag, color: 'text-slate-400', bgColor: 'bg-slate-800/50' };
                const isActive = activeTag === tag;
                return (
                  <motion.button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap uppercase tracking-widest border ${
                      isActive 
                        ? `${config.bgColor} ${config.color} border-current shadow-lg shadow-current/20` 
                        : 'text-slate-500 hover:text-white hover:bg-white/5 border-slate-800'
                    }`}
                  >
                    {config.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 排序 */}
          <div className="flex items-center gap-3 bg-slate-900/30 border border-slate-800/50 px-4 py-3 rounded-2xl">
            <ArrowUpDown size={16} className="text-slate-500" />
            <select 
              className="bg-transparent text-xs font-bold focus:outline-none text-slate-300 uppercase tracking-widest cursor-pointer appearance-none pr-6"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="newest" className="bg-slate-900">最新優先</option>
              <option value="oldest" className="bg-slate-900">最舊優先</option>
            </select>
          </div>
        </div>

        {/* 活動過濾器顯示 */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">已套用：</span>
            {search && (
              <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold flex items-center gap-2">
                <Sparkles size={12} />
                搜尋: "{search}"
                <button onClick={() => setSearch('')} className="hover:text-white transition-colors">
                  <X size={12} />
                </button>
              </span>
            )}
            {activeTag !== 'All' && (
              <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold flex items-center gap-2">
                {tagConfig[activeTag]?.label || activeTag}
                <button onClick={() => setActiveTag('All')} className="hover:text-white transition-colors">
                  <X size={12} />
                </button>
              </span>
            )}
            <button
              onClick={() => { setSearch(''); setActiveTag('All'); }}
              className="px-3 py-1.5 bg-slate-800/50 text-slate-400 hover:text-white rounded-lg text-xs font-bold transition-colors"
            >
              清除全部
            </button>
          </motion.div>
        )}

        {/* 結果計數 */}
        <div className="text-sm text-slate-500 font-light">
          顯示 <span className="text-white font-bold">{filteredWorks.length}</span> / {WORKS.length} 個作品
        </div>
      </div>

      {/* Works Grid */}
      <AnimatePresence mode="wait">
        {filteredWorks.length > 0 ? (
          <motion.div
            key="works-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                layout
                key={work.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col h-full rounded-[40px] bg-slate-900/30 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 active:scale-[0.98]"
              >
                <Link to={`/works/${work.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={work.coverImage} 
                      alt={work.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
                    {/* 標籤標記 */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {work.tags.slice(0, 2).map(tag => {
                        const config = tagConfig[tag] || { bgColor: 'bg-slate-800/80' };
                        return (
                          <span 
                            key={tag}
                            className={`${config.bgColor} backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-wider border border-white/10`}
                          >
                            {tagConfig[tag]?.label || tag}
                          </span>
                        );
                      })}
                    </div>
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
                      {work.stack.length > 3 && (
                        <span className="text-[10px] font-black text-slate-600 px-2.5 py-1">
                          +{work.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-32 md:py-40 border-2 border-dashed border-white/5 rounded-[48px] bg-slate-900/20"
          >
            <div className="mb-6">
              <Search size={48} className="mx-auto text-slate-600 mb-4" />
              <p className="text-slate-500 text-lg font-light mb-2">沒有找到符合條件的作品案例</p>
              <p className="text-slate-600 text-sm">試試調整搜尋關鍵字或選擇其他分類</p>
            </div>
            <button 
              onClick={() => {setSearch(''); setActiveTag('All');}}
              className="px-8 py-3 bg-blue-600/10 text-blue-400 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-blue-500/20"
            >
              重置過濾條件
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};
