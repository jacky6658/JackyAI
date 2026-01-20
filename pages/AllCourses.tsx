
import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../constants.tsx';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO.tsx';

export const AllCourses: React.FC = () => {
  return (
    <>
      <SEO
        title="課程教學與工作坊 | AI 自動化實戰課程 - Jacky / AIJob"
        description="將頂尖的 AI 自動化技術轉化為您團隊的核心能力。我們的課程專注於實戰應用、流程重構與商業價值轉化。包含 n8n 自動化、ChatGPT 應用、AI 短影音智能體等實戰課程。"
        keywords="AI 課程, AI 教學, n8n 課程, ChatGPT 課程, AI 自動化課程, AI 實戰工作坊, 企業 AI 內訓, AI 學習"
        url="https://www.aijob.com.tw/#/courses"
      />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12"> {/* 改為 pt-32 */}
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight px-4 md:px-0">課程教學與工作坊</h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
            將頂尖的 AI 自動化技術轉化為您團隊的核心能力。<br className="hidden md:block" />
            我們的課程專注於實戰應用、流程重構與商業價值轉化。
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-24 lg:mb-32">
        {COURSES.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-[32px] overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 h-full"
          >
            {/* Image Section - 圖片在上 */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img 
                src={course.coverImage} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                alt={course.title}
                loading="lazy"
                decoding="async" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* HOT Badge */}
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest backdrop-blur-md">
                  HOT
                </div>
              </div>
            </div>
            
            {/* Content Section - 文字在下 */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 md:mb-4">
                {course.tags.map(tag => (
                  <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-500/10 text-blue-400 text-[9px] sm:text-[10px] font-bold rounded-md uppercase tracking-wider border border-blue-500/10 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                {course.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm mb-4 md:mb-6 leading-relaxed font-light line-clamp-3 flex-grow">
                {course.description}
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 md:mb-6 py-3 md:py-4 border-y border-slate-800/50">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs font-medium">
                  <Users size={12} className="sm:w-[14px] sm:h-[14px] text-blue-500" /> 
                  <span>{course.studentCount} 位學員</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs font-medium">
                  <Clock size={12} className="sm:w-[14px] sm:h-[14px] text-blue-500" /> 
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-auto pt-4 border-t border-slate-800/50">
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-0.5 sm:mb-1">報名費用</span>
                  <span className="text-xl sm:text-2xl font-black text-white">{course.price}</span>
                </div>
                <Link 
                  to={`/courses/${course.slug}`} 
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-slate-950 hover:bg-blue-500 hover:text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-xl shadow-white/5 active:scale-95 w-full sm:w-auto justify-center"
                >
                  查看詳情 <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Section */}
      <div className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-slate-900/30 border border-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-24">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 px-4 md:px-0">為什麼選擇我們的實戰訓練？</h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-12 max-w-5xl mx-auto">
          {[
            { t: "顧問級實務視野", d: "我們不只教工具操作，更教你如何診斷企業營運痛點，並設計能落地的自動化架構。" },
            { t: "即刻部署資源包", d: "附帶 n8n 工作流藍圖、Prompt 範本與腳本，學完當天就能套用至現有業務。" },
            { t: "內容永久更新", d: "AI 技術每月更迭，所有學員皆享有後續升級內容的永久免費觀看權限。" },
            { t: "封閉式學員社群", d: "加入專屬討論頻道，與各行各業先行者交流實戰經驗，獲得導師解惑。" }
          ].map(item => (
            <div key={item.t} className="group">
              <h4 className="font-bold text-white text-base sm:text-lg mb-2 md:mb-3 flex items-center gap-2 md:gap-3 group-hover:text-blue-400 transition-colors">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <span>{item.t}</span>
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light pl-4 sm:pl-5 border-l border-slate-800">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
