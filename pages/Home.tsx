
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star, Sparkles, Cpu, Bot, Zap, Code2, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, WORKS, COURSES } from '../constants.tsx';

const FloatingNode = ({ children, delay = 0, className = "" }: { children?: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.4, 0.7, 0.4],
      y: [0, -20, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute hidden lg:flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-2xl text-[10px] font-bold text-slate-300 uppercase tracking-widest z-10 ${className}`}
  >
    {children}
  </motion.div>
);

const BackgroundGlow = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -50, 80, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{
        x: [0, -80, 60, 0],
        y: [0, 100, -40, 0],
        scale: [1, 1.1, 1.2, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/15 blur-[140px] rounded-full"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  </div>
);

export const Home: React.FC = () => {
  // 優先展示 ReelMind 與 RecruitAI
  const featuredSlugs = ['reelmind-ai-video-agent', 'recruit-ai-agent'];
  const featuredWorks = WORKS.sort((a, b) => {
    const aIndex = featuredSlugs.indexOf(a.slug);
    const bIndex = featuredSlugs.indexOf(b.slug);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  }).slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-6 pt-40 pb-24 md:pt-56 md:pb-40 max-w-7xl mx-auto text-center overflow-visible">
        <BackgroundGlow />
        
        <FloatingNode className="top-40 left-10" delay={0}>
          <Cpu size={14} className="text-blue-400" /> RAG System
        </FloatingNode>
        <FloatingNode className="top-60 right-20" delay={2}>
          <Bot size={14} className="text-indigo-400" /> AI Agents
        </FloatingNode>
        <FloatingNode className="bottom-40 left-20" delay={4}>
          <Zap size={14} className="text-yellow-400" /> Workflow
        </FloatingNode>
        <FloatingNode className="bottom-60 right-10" delay={1}>
          <Code2 size={14} className="text-emerald-400" /> Automation
        </FloatingNode>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md relative overflow-hidden group"
          >
            <Sparkles size={14} className="animate-pulse" />
            Leading AI Automation Expert
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black mb-10 leading-[0.95] tracking-tight"
          >
            讓 AI 成為妳的 <br />
            <motion.span 
              animate={{ 
                backgroundImage: [
                  "linear-gradient(to right, #60A5FA, #67E8F9, #818CF8)",
                  "linear-gradient(to right, #818CF8, #60A5FA, #67E8F9)",
                  "linear-gradient(to right, #67E8F9, #818CF8, #60A5FA)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400"
            >
              最強競爭力
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            我們不只開發系統，更重新設計妳的商業邏輯。透過高效的 LLM 整合與自動化工作流，將生產力提升至全新維度。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-3 group w-full md:w-auto text-lg active:scale-95"
            >
              預約技術診斷 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={BRAND.portfolioPdf} 
              className="px-12 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black transition-all flex items-center gap-3 w-full md:w-auto border border-white/5 justify-center active:scale-95 shadow-xl"
            >
              <Download size={20} className="text-blue-400" /> 作品集 PDF
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Courses */}
      <section className="px-6 py-32 bg-slate-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tight">教育培訓 <span className="text-blue-500">/</span> Education</h2>
              <p className="text-slate-500 text-lg leading-relaxed">透過實戰教學，將我們在業界積累的自動化經驗直接轉移給您的團隊，縮短學習曲線。</p>
            </div>
            <Link to="/courses" className="px-6 py-3 rounded-xl border border-slate-800 text-slate-400 font-bold hover:text-white hover:border-blue-500 transition-all">
              瀏覽所有課程
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {COURSES.map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ y: -12 }}
                className="group relative bg-slate-900/40 border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/5"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={course.coverImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={course.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {course.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-black rounded-lg uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-yellow-500/80 mb-6">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{course.studentCount} 名學員共同推薦</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">{course.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-2xl font-black text-white">{course.price}</span>
                    <Link to={`/courses/${course.slug}`} className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-blue-600/20">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Now Left-Aligned and Matched Layout */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tight uppercase">精選實戰案例 <span className="text-blue-500">/</span> Projects</h2>
              <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-slate-500 text-lg leading-relaxed font-light">
                每一項專案都是針對特定商業痛點的精準打擊。透過多模態 AI 與自動化架構，我們將不可能變為現實。
              </p>
            </div>
            <Link to="/works" className="px-6 py-3 rounded-xl border border-slate-800 text-slate-400 font-bold hover:text-white hover:border-blue-500 transition-all hidden md:block">
              瀏覽所有作品
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {featuredWorks.map((work) => (
              <motion.div 
                key={work.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <Link to={`/works/${work.slug}`} className="block">
                  <div className="relative aspect-[16/10] md:aspect-[16/11] rounded-[40px] md:rounded-[56px] overflow-hidden mb-10 border border-white/5 shadow-2xl bg-slate-900 group-hover:shadow-blue-500/10 transition-all duration-700">
                    <img 
                      src={work.coverImage} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out" 
                      alt={work.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    {work.links.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.15 }}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full glass border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-blue-600/30 group-hover:border-blue-400/50 transition-all duration-500"
                        >
                          <Play fill="white" size={32} className="text-white translate-x-1" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-row gap-3 md:gap-5 mb-8">
                    {work.metrics.map(m => (
                      <div 
                        key={m.label} 
                        className="flex-1 bg-slate-900/60 backdrop-blur-sm p-5 md:p-7 rounded-[28px] md:rounded-[36px] border border-white/5 hover:border-blue-500/20 hover:bg-slate-900/80 transition-all duration-500"
                      >
                        <p className="text-blue-400 font-black text-2xl md:text-4xl mb-2 tracking-tighter leading-none">{m.value}</p>
                        <p className="text-slate-500 text-[10px] md:text-[11px] uppercase font-black tracking-[0.2em] leading-none">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="px-2 md:px-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl md:text-4xl font-black group-hover:text-blue-400 transition-colors tracking-tighter italic">
                        {work.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                    <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed line-clamp-2">
                      {work.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link 
              to="/works" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white border border-white/5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all group active:scale-95"
            >
              瀏覽更多實戰作品 <ExternalLink size={18} className="text-blue-500 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
