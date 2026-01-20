
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Cpu, Bot, Zap, Code2, Play, ExternalLink, MessageCircle, Users, Globe, Instagram, Youtube, AtSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, WORKS, COURSES } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

const TechMarquee = () => {
  // 更新後的技術標籤，更貼近目前 AI 自動化實戰與大眾認知
  const techs = ["OpenAI", "Gemini", "DeepSeek", "Cursor", "Zeabur", "n8n", "Python", "React", "Dify", "HeyGen", "Prompting", "Automation"];
  return (
    <div className="w-full py-8 md:py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap relative">
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#0B1220] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#0B1220] to-transparent z-10"></div>
      <div className="flex animate-marquee gap-10 md:gap-20 items-center">
        {[...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-slate-600 font-black text-lg md:text-2xl tracking-widest uppercase hover:text-blue-500 transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

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

// INP 優化：使用 CSS 動畫替代 Framer Motion（減少主線程負擔）
const BackgroundGlow = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[80px] md:blur-[120px] rounded-full animate-glow-1" />
    <div className="absolute bottom-[10%] right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-600/15 blur-[100px] md:blur-[140px] rounded-full animate-glow-2" />
  </div>
);

export const Home: React.FC = () => {
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
    <>
      <SEO
        title="Jacky / AIJob - AI 自動化顧問作品集 | 企業 AI 轉型專家"
        description="專注於企業級 AI 流程系統開發，致力於幫助創業者從繁瑣勞動中解放。提供 AI 自動化、RAG 知識庫、客製化 AI 應用開發與企業 AI 內訓服務。"
        keywords="AI 自動化, AI 顧問, 企業 AI 轉型, RAG 知識庫, AI Agent, 自動化工作流, AI 開發, 數位轉型, ChatGPT, Gemini, n8n, 企業 AI 內訓"
        url="https://www.aijob.com.tw/"
      />
      <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-12 md:pt-56 md:pb-20 max-w-7xl mx-auto text-center overflow-visible">
        <BackgroundGlow />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" />
            Leading AI Automation Expert
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[2rem] sm:text-[2.5rem] md:text-9xl font-black mb-6 md:mb-10 leading-[1.15] md:leading-[0.95] tracking-tighter px-2 md:px-0"
          >
            讓 AI 成為你的 <br className="md:hidden" />
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
            className="text-slate-400 text-sm sm:text-base md:text-2xl max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed font-light px-4 md:px-0"
          >
            我們不只開發系統，更重新設計你的商業邏輯。透過高效的 LLM 整合與自動化工作流，將生產力提升至全新維度。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 px-4 md:px-0"
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 w-full sm:w-auto text-base md:text-lg active:scale-95"
            >
              預約技術診斷 <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <TechMarquee />

      {/* About Preview Section */}
      <section className="px-6 py-24 md:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="aspect-[4/5] md:aspect-[4/5] rounded-[40px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-3xl bg-slate-900 relative z-10">
              <img 
                src="https://static.wixstatic.com/media/9705bb_c252c3bfe4104fd089c647a3a7aaa0a4~mv2.jpg" 
                alt="Jacky"
                loading="lazy"
                decoding="async" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-blue-500/20 blur-[80px] md:blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-1 w-10 md:w-12 bg-blue-600"></div>
              <span className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">Strategic AI Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-10 leading-[1.15] md:leading-[1.1] italic tracking-tighter">
              擁有 HR 靈魂的 <br/>
              <span className="text-white">AI 開發者。</span>
            </h2>
            <div className="space-y-5 md:space-y-8 text-slate-400 text-sm sm:text-base md:text-xl leading-relaxed font-light mb-10 md:mb-16">
              <p>
                我的背景並非傳統資工，而是人資與獵頭。這意味著我比一般工程師更懂得「流程中的人性痛點」。
              </p>
              <p>
                我將 AI 視為解決人力重複勞動的解藥，致力於將複雜的企業邏輯數位化，創造具備溫度的自動化體驗。
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-3 md:gap-6 px-8 py-4 md:px-10 md:py-5 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:border-blue-500/50 transition-all group active:scale-95 w-full md:w-auto"
            >
              探索我的跨域故事 <ArrowRight size={18} className="md:w-[22px] md:h-[22px] text-blue-500 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-6 py-24 md:py-32 bg-slate-900/20 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 md:mb-6 italic tracking-tight uppercase">實戰工作坊 <span className="text-blue-500">/</span> Learning</h2>
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">將自動化技術轉化為您團隊的核心武力。</p>
            </div>
            <Link to="/courses" className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-slate-800 text-slate-400 font-bold hover:text-white hover:border-blue-500 transition-all w-full sm:w-auto text-center text-sm md:text-base">
              查看所有教學
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {COURSES.map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ y: -12 }}
                className="group relative bg-slate-900/40 border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="h-56 md:h-64 relative overflow-hidden">
                  <img src={course.coverImage} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" alt={course.title} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-yellow-500/80 mb-3 md:mb-6">
                    <Star size={12} className="sm:w-[14px] sm:h-[14px] fill-currentColor" />
                    <span className="text-slate-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{course.studentCount} 位學員推薦</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">{course.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 md:mb-10 font-light line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto pt-4 md:pt-6 lg:pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-black text-white">{course.price}</span>
                    <Link to={`/courses/${course.slug}`} className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all active:scale-90">
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 italic tracking-tight uppercase">實戰系統案例 <span className="text-blue-500">/</span> Works</h2>
              <div className="w-20 md:w-24 h-1.5 bg-blue-600 rounded-full mb-6 md:mb-8"></div>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light">
                每一項專案都是針對特定商業痛點的精準打擊。
              </p>
            </div>
            <Link to="/works" className="px-6 py-3 rounded-xl border border-slate-800 text-slate-400 font-bold hover:text-white hover:border-blue-500 transition-all hidden md:block">
              瀏覽更多案例
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {featuredWorks.map((work) => (
              <motion.div 
                key={work.slug}
                className="group text-left"
              >
                <Link to={`/works/${work.slug}`} className="block">
                  <div className="relative aspect-[16/10] rounded-[40px] md:rounded-[48px] overflow-hidden mb-8 md:mb-10 border border-white/5 shadow-2xl bg-slate-900 group-hover:shadow-blue-500/10 transition-all duration-700">
                    <img 
                      src={work.coverImage} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[1500ms]" 
                      alt={work.title}
                      loading="lazy"
                      decoding="async" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="flex flex-row gap-2 md:gap-5 mb-8 md:mb-10">
                    {work.metrics.map(m => (
                      <div 
                        key={m.label} 
                        className="flex-1 bg-slate-900/40 backdrop-blur-md p-4 md:p-6 rounded-[24px] md:rounded-[32px] border border-white/5 group-hover:border-blue-500/20 transition-all"
                      >
                        <p className="text-blue-400 font-black text-xl md:text-3xl mb-1 tracking-tighter leading-none">{m.value}</p>
                        <p className="text-slate-500 text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em]">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="px-2 md:px-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-4xl font-black group-hover:text-blue-400 transition-colors tracking-tighter italic">
                        {work.title}
                      </h3>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 active:scale-90">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                    <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed line-clamp-2">
                      {work.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <Link to="/works" className="mt-12 px-10 py-5 bg-slate-900 border border-white/10 rounded-2xl text-slate-300 font-bold block md:hidden text-center active:scale-95 transition-all">
            瀏覽更多案例
          </Link>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-6 py-24 md:py-32 bg-[#050B18] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 italic tracking-tight uppercase">AI 先行者社群 <span className="text-blue-500">/</span> Connect</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              加入我們的社群，與數百位 AI 愛好者一同探討最新的自動化工具與落地經驗。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            <motion.a 
              href={BRAND.lineCommunity}
              target="_blank" rel="noreferrer"
              className="p-10 md:p-12 rounded-[40px] md:rounded-[56px] bg-emerald-500/[0.03] border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 flex flex-col items-center group shadow-2xl active:scale-[0.98]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} className="text-emerald-400 md:size-40" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 italic">LINE 社群</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 font-light">
                即時獲得 AI 資訊、工具更新通知。
              </p>
              <div className="mt-auto px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black flex items-center gap-3 w-full justify-center group-hover:bg-emerald-500 transition-all">
                立即加入 <ArrowRight size={20} />
              </div>
            </motion.a>

            <motion.a 
              href={BRAND.discordCommunity}
              target="_blank" rel="noreferrer"
              className="p-10 md:p-12 rounded-[40px] md:rounded-[56px] bg-indigo-500/[0.03] border border-indigo-500/10 hover:border-indigo-500/40 transition-all duration-500 flex flex-col items-center group shadow-2xl active:scale-[0.98]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-indigo-400 md:size-40" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 italic">Discord 頻道</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 font-light">
                適合追求系統化學習的你。
              </p>
              <div className="mt-auto px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center gap-3 w-full justify-center group-hover:bg-indigo-500 transition-all">
                進入 Discord <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
