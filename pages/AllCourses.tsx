
import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../constants.tsx';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AllCourses: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12"> {/* 改為 pt-32 */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">課程教學與工作坊</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            將頂尖的 AI 自動化技術轉化為您團隊的核心能力。<br className="hidden md:block" />
            我們的課程專注於實戰應用、流程重構與商業價值轉化。
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
        {COURSES.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col md:flex-row bg-slate-900/40 border border-slate-800 rounded-[32px] overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 h-full"
          >
            {/* Image Section */}
            <div className="md:w-[42%] relative min-h-[260px] md:min-h-full overflow-hidden shrink-0">
              <img 
                src={course.coverImage} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                alt={course.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest backdrop-blur-md">
                  HOT
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 md:p-10 md:w-[58%] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-md uppercase tracking-wider border border-blue-500/10 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight min-h-[3.5rem]">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light line-clamp-3 min-h-[4.5rem]">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-6 mb-8 py-4 border-y border-slate-800/50">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Users size={14} className="text-blue-500" /> 
                    <span>{course.studentCount} 位學員</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock size={14} className="text-blue-500" /> 
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">報名費用</span>
                  <span className="text-2xl font-black text-white">{course.price}</span>
                </div>
                <Link 
                  to={`/courses/${course.slug}`} 
                  className="px-6 py-3 bg-white text-slate-950 hover:bg-blue-500 hover:text-white rounded-2xl text-sm font-black transition-all flex items-center gap-2 shadow-xl shadow-white/5 active:scale-95"
                >
                  查看詳情 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Section */}
      <div className="relative rounded-[48px] overflow-hidden bg-slate-900/30 border border-white/5 backdrop-blur-sm p-12 md:p-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">為什麼選擇我們的實戰訓練？</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
          {[
            { t: "顧問級實務視野", d: "我們不只教工具操作，更教你如何診斷企業營運痛點，並設計能落地的自動化架構。" },
            { t: "即刻部署資源包", d: "附帶 n8n 工作流藍圖、Prompt 範本與腳本，學完當天就能套用至現有業務。" },
            { t: "內容永久更新", d: "AI 技術每月更迭，所有學員皆享有後續升級內容的永久免費觀看權限。" },
            { t: "封閉式學員社群", d: "加入專屬討論頻道，與各行各業先行者交流實戰經驗，獲得導師解惑。" }
          ].map(item => (
            <div key={item.t} className="group">
              <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                {item.t}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light pl-5 border-l border-slate-800">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
