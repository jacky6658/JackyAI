
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE, BRAND } from '../constants.tsx';
import { Brain, Code2, Rocket, ExternalLink, Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/3 sticky top-32"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-slate-900 mb-6 border border-slate-700 shadow-2xl relative group">
            <img 
              src="https://static.wixstatic.com/media/9705bb_c252c3bfe4104fd089c647a3a7aaa0a4~mv2.jpg" 
              alt="Jacky / AIJob" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">現職</p>
              <p className="text-sm font-bold">AI 系統顧問 & 獨立開發者</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">專長</p>
              <p className="text-sm font-bold">RAG, AI Agent, Next.js, Cloud</p>
            </div>
            <a 
              href={BRAND.portfolioPdf} 
              className="flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all w-full shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <Download size={18} /> 下載完整履歷
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-2/3"
        >
          <h1 className="text-4xl font-black mb-8 leading-tight">我是 Jacky,<br /><span className="text-blue-400 italic">專注於將 AI 從技術變為產值。</span></h1>
          
          <div className="prose prose-invert prose-slate mb-16 leading-relaxed">
            <p className="text-lg text-slate-300 font-light">
              我有超過 5 年的軟體開發經驗，近年致力於將大型語言模型 (LLM) 與企業自動化流程結合。我不只寫程式，我更關注「如何透過技術創造商業規模」。
            </p>
            <p className="text-slate-400 font-light">
              我的理念是：AI 不應該是取代人，而是將人從「不需要人類大腦」的任務中解放出來。我曾協助多家新創與傳統產業將每日原本需要數小時的行政流程，縮減至數秒完成。
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span> 核心技能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {[
              { i: <Brain className="text-blue-400" />, t: "LLM 應用開發", d: "擅長 RAG、Agent 架構設計與 Prompt Engineering。" },
              { i: <Code2 className="text-emerald-400" />, t: "全端技術棧", d: "React/Next.js, Node.js, Python 深度開發。" },
              { i: <Rocket className="text-cyan-400" />, t: "自動化顧問", d: "運用 Make/n8n 實現跨平台無代碼/低代碼流程整合。" }
            ].map((skill, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="mb-4 group-hover:scale-110 transition-transform">{skill.i}</div>
                <h4 className="font-bold mb-2">{skill.t}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{skill.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-10 italic">經歷時間線 <span className="text-slate-600">/</span> Timeline</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-[11px] md:ml-[15px]"></div>
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-10 md:pl-12 group">
                <div className="absolute left-0 top-1.5 w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-[#0B1220] border-2 border-blue-500 rounded-full z-10 group-hover:bg-blue-500 transition-colors"></div>
                <div>
                  <span className="text-[10px] font-black text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest border border-blue-500/20">{item.year}</span>
                  <h3 className="text-xl font-bold mt-4 mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 font-medium text-sm mb-4">{item.company}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
