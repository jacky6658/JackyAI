
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE, BRAND } from '../constants.tsx';
import { Brain, Code2, Rocket, Users, Lightbulb, Briefcase, Bot, Cpu, Zap, Database, Terminal, Globe, Sparkles } from 'lucide-react';

const SkillIcon = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.05 }}
    className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all group"
  >
    <div className={`p-4 rounded-2xl bg-white/5 text-slate-400 group-hover:text-${color}-400 transition-colors`}>
      <Icon size={32} />
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
      {label}
    </span>
  </motion.div>
);

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        {/* 左側邊欄：個人資訊卡片 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/3 lg:sticky lg:top-32"
        >
          <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-slate-900 mb-10 border border-white/10 shadow-3xl relative group">
            <img 
              src="https://static.wixstatic.com/media/9705bb_c252c3bfe4104fd089c647a3a7aaa0a4~mv2.jpg" 
              alt="Jacky" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 backdrop-blur-md">
              <p className="text-[10px] text-blue-400 uppercase tracking-[0.3em] mb-3 font-black">Role Expertise</p>
              <p className="text-xl font-black text-white leading-tight italic">獵頭顧問 × <br/>AI 應用設計師</p>
            </div>
            
            <a 
              href={BRAND.recruitmentLink} 
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-4 py-6 rounded-[24px] bg-emerald-600 text-white text-lg font-black transition-all w-full hover:bg-emerald-500 shadow-2xl shadow-emerald-600/20 active:scale-95 group"
            >
              <Briefcase size={22} className="group-hover:rotate-12 transition-transform" /> 諮詢招募服務
            </a>
          </div>
        </motion.div>

        {/* 右側內容：自介與技能 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-2/3"
        >
          <div className="mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-10">
              <Sparkles size={14} className="animate-pulse" /> Bridge between Human and AI
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black mb-10 md:mb-16 leading-[1.1] md:leading-[1] italic tracking-tighter">
              用 HR 的溫度，<br />
              <span className="text-gradient">建構 AI 的邏輯。</span>
            </h1>
            
            <div className="space-y-8 md:space-y-12 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 font-light leading-relaxed">
              <div className="p-8 bg-blue-500/[0.03] border-l-4 border-blue-600 rounded-r-3xl">
                <p className="text-white font-bold italic">
                  「我不是純代碼出身的工程師，但我深知企業最底層的效率痛點。」
                </p>
              </div>

              <p>
                我是 Jacky。我的職涯起點是 <span className="text-white font-black underline decoration-blue-500 decoration-4 underline-offset-[8px]">人力資源 (HR) 與獵頭顧問</span>。在彰師大研讀人資所期間，我專注於組織行為與績效管理。這份背景讓我能比別人更早察覺到：<strong className="text-white font-black italic">技術的盡頭，最終還是要回歸人的體驗。</strong>
              </p>
              
              <p>
                我將獵頭對市場的敏銳度與 AI 技術結合。這兩年多來，我專注於將複雜的商業場景轉化為自動化 Agent。我不只是開發系統，我是在<strong className="text-white font-black italic">重新設計企業的獲利流程。</strong>
              </p>
            </div>
          </div>

          {/* 技術棧展示 */}
          <div className="mb-32">
            <h2 className="text-3xl font-black mb-12 flex items-center gap-4 italic tracking-tight uppercase">
              <span className="w-12 h-1.5 bg-blue-500 rounded-full"></span> Tech & Tools / 技術棧
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <SkillIcon icon={Bot} label="LLM Agent" color="blue" />
              <SkillIcon icon={Zap} label="n8n / Make" color="yellow" />
              <SkillIcon icon={Database} label="RAG / Vector" color="emerald" />
              <SkillIcon icon={Terminal} label="Python / JS" color="purple" />
              <SkillIcon icon={Cpu} label="System Design" color="orange" />
              <SkillIcon icon={Code2} label="FastAPI / React" color="cyan" />
              <SkillIcon icon={Globe} label="HR Strategy" color="pink" />
              <SkillIcon icon={Lightbulb} label="Prompting" color="yellow" />
            </div>
          </div>

          <h2 className="text-3xl font-black mb-12 italic tracking-tight uppercase">歷程碑 <span className="text-slate-700">/</span> Evolution</h2>
          
          <div className="space-y-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-[20px]"></div>
            
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-16 group">
                <div className="absolute left-0 top-1 w-10 h-10 bg-[#0B1220] border-2 border-blue-500 rounded-2xl z-10 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block text-[10px] font-black text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] border border-blue-500/20 mb-6">
                    {item.year}
                  </span>
                  <h3 className="text-3xl font-black mb-2 group-hover:text-blue-400 transition-colors italic tracking-tight">{item.title}</h3>
                  <p className="text-slate-300 font-bold text-lg mb-6 tracking-wide">{item.company}</p>
                  <p className="text-slate-500 text-base leading-relaxed font-light max-w-xl">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
