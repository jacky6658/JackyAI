
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE, BRAND } from '../constants.tsx';
import { Brain, Code2, Rocket, Download, Users, Lightbulb, Briefcase } from 'lucide-react';

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
          <div className="aspect-square rounded-[40px] overflow-hidden bg-slate-900 mb-8 border border-white/10 shadow-3xl relative group">
            <img 
              src="https://static.wixstatic.com/media/9705bb_c252c3bfe4104fd089c647a3a7aaa0a4~mv2.jpg" 
              alt="Jacky" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-[10px] text-blue-400 uppercase tracking-[0.2em] mb-2 font-black">身份定位</p>
              <p className="text-base font-bold text-white leading-relaxed">獵頭顧問 × AI 應用設計師</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5">
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-3 font-black">招募服務需求</p>
              <a 
                href={BRAND.recruitmentLink} 
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl bg-emerald-600 text-white text-base font-black transition-all w-full hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 active:scale-95 group"
              >
                <Briefcase size={18} className="group-hover:rotate-12 transition-transform" /> 前往 Portaly 諮詢
              </a>
            </div>
          </div>
        </motion.div>

        {/* 右側內容：自介與技能 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-2/3"
        >
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-black mb-10 leading-tight italic tracking-tighter">
              我不是工程師背景，<br />
              <span className="text-blue-400">這正是我賦予 AI 溫度的原因。</span>
            </h1>
            
            <div className="space-y-8 text-xl text-slate-300 font-light leading-relaxed">
              <p className="italic border-l-4 border-blue-500 pl-6 py-2 bg-blue-500/5 rounded-r-2xl">
                「跳脫純代碼邏輯，我從人的痛點出發，用 AI 創造真實商業產值。」
              </p>
              <p>
                我是 Jacky。我的職涯起點並非程式碼，而是 <span className="text-white font-bold">人力資源 (HR)</span> 與 <span className="text-white font-bold">獵頭顧問</span>。在研究所時期我專注於組織行為與績效管理，這讓我對「企業如何運作」以及「員工在哪些流程感到痛苦」有著天生的敏銳度。
              </p>
              <p>
                我以 <span className="text-blue-400 font-bold">非工程師的角色踏入 AI 產業</span>，憑藉著 <span className="text-white font-bold">2 年以上的實務開發經驗</span>，我將多元概念經驗與商業思維注入技術中。我開發的不是冷冰冰的系統，而是能真正「理解企業需求」並「減少時間成本」的數位解決方案。
              </p>
              <p className="text-slate-400 text-lg">
                我深知企業在轉型時的恐懼與痛點，因此我的目標非常明確：透過 AI 賦能，幫客戶增加效率、極大化降低重複性成本，讓 AI 創作更大的商業價值。
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black mb-10 flex items-center gap-4 italic tracking-tight uppercase">
            <span className="w-12 h-1.5 bg-blue-500 rounded-full"></span> 核心競爭力
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {[
              { 
                i: <Lightbulb className="text-yellow-400" />, 
                t: "跨領域商務轉譯", 
                d: "擁有 HR 與企管背景，能精準將複雜的商業痛點轉化為可執行的 AI 技術方案。" 
              },
              { 
                i: <Brain className="text-blue-400" />, 
                t: "人性化 Agent 設計", 
                d: "不只會寫 Prompt，更懂組織運作邏輯，設計出的 AI Agent 更符合人類協作習慣。" 
              },
              { 
                i: <Users className="text-emerald-400" />, 
                t: "市場敏銳度", 
                d: "現任獵頭顧問，掌握各產業技術轉型最前線需求，為企業提供具未來性的佈局建議。" 
              },
              { 
                i: <Rocket className="text-cyan-400" />, 
                t: "2+ 年實戰經驗", 
                d: "非本科出身但深耕技術，親手打造多款 RAG 系統與自動化流程，實戰力深獲客戶肯定。" 
              }
            ].map((skill, idx) => (
              <div key={idx} className="p-8 rounded-[32px] bg-[#0F172A]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="mb-6 group-hover:scale-110 transition-transform w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  {skill.i}
                </div>
                <h4 className="text-xl font-black mb-3 text-white italic">{skill.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{skill.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black mb-12 italic tracking-tight uppercase">跨域歷程 <span className="text-slate-700">/</span> Evolution Timeline</h2>
          
          <div className="space-y-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-[15px] md:ml-[19px]"></div>
            
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-12 md:pl-16 group">
                <div className="absolute left-0 top-1.5 w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#0B1220] border-2 border-blue-500 rounded-full z-10 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block text-[10px] font-black text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] border border-blue-500/20 mb-6">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors italic tracking-tight">{item.title}</h3>
                  <p className="text-slate-300 font-bold text-base mb-4 tracking-wide">{item.company}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xl">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
