
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Monitor, CheckCircle2, ChevronRight, ChevronLeft, Layout, Sparkles, BarChart3, SearchCode, Rocket, Target, MessageSquareText, Brain } from 'lucide-react';
import { WORKS } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

const IconMap = {
  BarChart3: BarChart3,
  SearchCode: SearchCode,
  Target: Target,
  MessageSquareText: MessageSquareText,
  Brain: Brain
};

/**
 * 獲取 YouTube 影片數據
 */
const getYouTubeData = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[1].length === 11) ? match[1] : null;

  if (videoId) {
    const isShort = url.includes('shorts');
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`;
    return { url: embedUrl, isShort };
  }
  return null;
};

export const WorkDetail: React.FC = () => {
  const { slug } = useParams();
  const workIndex = WORKS.findIndex(w => w.slug === slug);
  const work = WORKS[workIndex];

  if (!work) return <Navigate to="/works" />;

  const prevWork = workIndex > 0 ? WORKS[workIndex - 1] : null;
  const nextWork = workIndex < WORKS.length - 1 ? WORKS[workIndex + 1] : null;
  const videoData = getYouTubeData(work.links.video);
  const projectShortName = work.shortName || work.title.split(' ')[0];
  const workUrl = `https://www.aijob.com.tw/#/works/${work.slug}`;
  const workImage = work.coverImage || 'https://static.wixstatic.com/media/9705bb_1eb98d8af29444eb84697335d47a0cc6~mv2.png';

  return (
    <>
      <SEO
        title={`${work.title} | AI 專案案例 - Jacky / AIJob`}
        description={work.summary}
        keywords={`${work.title}, ${work.industry}, ${work.stack.join(', ')}, AI 專案, AI 自動化, ${work.tags.join(', ')}`}
        image={workImage}
        url={workUrl}
        type="article"
        publishedTime={work.year ? `${work.year}-01-01T00:00:00+08:00` : undefined}
      />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-12 relative">
      {/* Back Button */}
      <Link 
        to="/works" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all mb-12 py-2 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 group active:scale-95"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 返回作品列表
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">{work.industry}</span>
            <span className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs font-bold uppercase tracking-wider">{work.year}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight tracking-tight italic">{work.title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-6 md:mb-8 font-light">{work.summary}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-6 md:py-8 border-y border-slate-800/50">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2 font-bold">角色定位</p>
              <p className="font-medium text-slate-200 text-xs sm:text-sm leading-tight">{work.role}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2 font-bold">產業領域</p>
              <p className="font-medium text-slate-200 text-xs sm:text-sm">{work.industry}</p>
            </div>
            <div className="col-span-2">
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2 font-bold">核心技術棧</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {work.stack.map(s => <span key={s} className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-900 text-[9px] sm:text-[10px] text-slate-300 border border-white/5 uppercase font-bold tracking-wider">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Video or Hero Image */}
        {videoData ? (
          <div className={`rounded-[40px] overflow-hidden mb-16 shadow-2xl bg-black border border-white/10 group relative mx-auto ${videoData.isShort ? 'max-w-[360px] aspect-[9/16]' : 'aspect-video w-full'}`}>
            <iframe
              src={videoData.url}
              className="w-full h-full"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[40px]"></div>
          </div>
        ) : (
          <div className="rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-white/10 group">
            <img src={work.coverImage} alt={work.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
          </div>
        )}

        {/* Links Section */}
        <div className="flex flex-wrap gap-4 mb-24">
          {work.links.website && (
            <a href={work.links.website} target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] px-6 py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-blue-500/5 group active:scale-[0.98]">
              <Monitor size={20} className="group-hover:scale-110 transition-transform" /> 前往 {projectShortName} 官網 <ExternalLink size={14} className="opacity-50" />
            </a>
          )}
          {work.links.github && (
            <a href={work.links.github} target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] px-6 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/5 hover:bg-slate-800 transition-all active:scale-[0.98]">
              <Github size={20} /> 查看 GitHub 源碼 <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Content Showcase */}
        <div className="space-y-32 mb-32">
          {work.showcase && work.showcase.length > 0 && (
            <section className="space-y-32">
              <div className="text-center">
                <h2 className="text-3xl font-black mb-4 inline-flex items-center gap-3 italic">
                  <Layout className="text-blue-500" /> 系統深度導覽 <span className="text-slate-700">/</span> System Tour
                </h2>
                <p className="text-slate-500 font-light">深入解析 {projectShortName} 智能體的核心架構與視覺化介面</p>
              </div>
              
              {work.showcase.map((section, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-10"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-4">
                      <span className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-black border border-blue-500/20">0{idx + 1}</span>
                      {section.title}
                    </h3>
                    {section.description && <p className="text-slate-400 leading-relaxed font-light italic pl-14">{section.description}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-12">
                    {section.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="group relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50">
                        <img 
                          src={img} 
                          alt={`${section.title} ${imgIdx}`} 
                          className="w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]" 
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[40px] pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </section>
          )}

          {/* Business Outcomes */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4 italic tracking-tight">
                <Rocket className="text-blue-500 fill-blue-500/10" size={32} /> 技術核心優勢
              </h2>
              <div className="space-y-5">
                {work.highlights.map((h, i) => (
                  <div key={i} className="p-8 bg-blue-500/[0.02] border border-blue-500/10 rounded-[28px] flex gap-5 hover:bg-blue-500/[0.05] hover:border-blue-500/30 transition-all duration-500 group">
                    <div className="mt-1 shrink-0 p-1.5 rounded-full bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base font-light tracking-wide">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4 italic tracking-tight">
                <Target className="text-emerald-500 fill-emerald-500/10" size={32} /> 實質落地成效
              </h2>
              <div className="space-y-5">
                {work.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-[28px] hover:bg-emerald-500/[0.05] hover:border-emerald-500/30 transition-all duration-500">
                    <span className="text-3xl font-black text-emerald-500/80 tracking-tighter shrink-0 italic">0{i + 1}.</span>
                    <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed tracking-wide">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Exploration Section -還原截圖設計- */}
          {work.exploration && (
            <section className="p-10 md:p-20 rounded-[56px] bg-[#050B18] border border-white/5 relative overflow-hidden group shadow-3xl">
              {/* 右側火箭浮水印 */}
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-[2000ms] pointer-events-none">
                <Rocket size={420} className="text-blue-400 rotate-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-400 font-black text-[11px] uppercase tracking-[0.4em] mb-8">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse mr-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  FULL ACCESS AVAILABLE
                </div>
                
                <h2 className="text-5xl font-black mb-8 text-white italic tracking-tighter leading-tight">
                  {work.exploration.title}
                </h2>
                <p className="text-slate-400 text-xl mb-16 max-w-2xl leading-relaxed font-light">
                  {work.exploration.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl">
                  {work.exploration.features.map((feature, fIdx) => {
                    const FeatureIcon = IconMap[feature.icon] || Sparkles;
                    return (
                      <div key={fIdx} className="flex items-start gap-6 p-8 rounded-[32px] bg-[#0F172A]/50 border border-white/5 hover:border-blue-400/20 hover:bg-[#0F172A]/80 transition-all duration-500 shadow-xl group/card">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover/card:scale-110 transition-transform">
                          <FeatureIcon className="text-blue-400" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-white mb-2 tracking-tight">{feature.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-10">
                  <a 
                    href={work.links.website}
                    target="_blank" 
                    rel="noreferrer"
                    className="px-14 py-6 bg-white text-slate-950 rounded-[20px] font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-4 active:scale-95 group"
                  >
                    探索 {projectShortName} 系統核心 <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                  </a>
                  <p className="text-slate-500 text-sm italic font-light tracking-wide flex items-center gap-2">
                    * 推薦使用電腦瀏覽以獲得最佳操作體驗
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Pagination Navigation */}
        <div className="flex justify-between items-center py-16 border-t border-slate-800/50">
          {prevWork ? (
            <Link to={`/works/${prevWork.slug}`} className="group flex flex-col items-start max-w-[45%]">
              <span className="text-xs text-slate-500 mb-2 flex items-center gap-1 group-hover:text-blue-400 transition-colors uppercase tracking-widest font-bold"><ChevronLeft size={14}/> PREV</span>
              <span className="font-bold truncate w-full text-slate-300 group-hover:text-white transition-colors italic">{prevWork.title}</span>
            </Link>
          ) : <div />}
          
          {nextWork ? (
            <Link to={`/works/${nextWork.slug}`} className="group flex flex-col items-end text-right max-w-[45%]">
              <span className="text-xs text-slate-500 mb-2 flex items-center gap-1 group-hover:text-blue-400 transition-colors uppercase tracking-widest font-bold">NEXT <ChevronRight size={14}/></span>
              <span className="font-bold truncate w-full text-slate-300 group-hover:text-white transition-colors italic">{nextWork.title}</span>
            </Link>
          ) : <div />}
        </div>
      </motion.div>
    </div>
    </>
  );
};
