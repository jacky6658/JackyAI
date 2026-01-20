
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, BRAND } from '../constants.tsx';
import { Bot, Cpu, Zap, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO.tsx';

const IconMap: any = {
  Bot: Bot,
  Cpu: Cpu,
  Zap: Zap
};

export const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="服務項目 | AI 自動化與系統開發服務 - Jacky / AIJob"
        description="提供 AI 流程自動化、AI 應用小程式開發、企業 AI 內訓與課程服務。結合 LLM 與自動化工具，將重複性行政流程轉為全自動執行，節省 80% 人力成本。"
        keywords="AI 服務, AI 自動化服務, AI 系統開發, RAG 知識庫開發, AI 應用開發, 企業 AI 內訓, AI 工作坊, AI 顧問服務"
        url="https://www.aijob.com.tw/#/services"
      />
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
      <div className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">服務與專案諮詢</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            專為追求極致效率的企業主與創業者設計。我們不只是外包開發，更是您的 AI 技術轉型夥伴。
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40">
        {SERVICES.map((service, idx) => {
          const IconComp = IconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 rounded-[40px] bg-[#0B1220] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-2xl group"
            >
              {/* Card Header Icon Container */}
              <div className="w-full h-32 bg-blue-500/[0.03] rounded-[32px] mb-10 flex items-center justify-center border border-white/[0.02] group-hover:bg-blue-500/[0.06] transition-all">
                <div className="p-5 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <IconComp size={40} />
                </div>
              </div>

              <h3 className="text-3xl font-black mb-6 text-white italic tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-base mb-10 leading-relaxed font-light flex-grow">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-12">
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">交付項目</p>
                {service.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> {d}
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="pt-10 border-t border-white/[0.05]">
                <p className="text-xs font-bold text-slate-500 mb-3 tracking-widest">預算區間</p>
                <p className="text-3xl font-black text-white italic tracking-tighter">{service.priceFrom}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-blue-600/[0.02] rounded-[56px] p-8 md:p-20 border border-blue-600/10 mb-32">
        <div className="space-y-12">
          <h2 className="text-4xl font-black italic tracking-tighter">合作流程 <span className="text-blue-500">/</span> Process</h2>
          <div className="space-y-10">
            {[
              { t: "1. 需求訪談", d: "初步了解您的商業痛點，評估 AI 導入的可能性與潛在產值。" },
              { t: "2. 方案設計", d: "設計專屬的技術路徑圖與自動化流程圖，確保方案具備擴充性。" },
              { t: "3. 敏捷開發", d: "採用兩週一週期的迭代方式，讓您能快速看到初步成果並即時調整。" },
              { t: "4. 測試與上線", d: "嚴格的系統壓力測試與資安檢查後正式部署，並提供完整維運指南。" },
            ].map(item => (
              <div key={item.t} className="group">
                <h4 className="font-bold text-blue-400 text-xl mb-2 group-hover:translate-x-2 transition-transform">{item.t}</h4>
                <p className="text-slate-400 text-base leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 md:p-14 bg-[#050B18] rounded-[40px] border border-white/5 shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[80px] -mr-16 -mt-16"></div>
          
          <h3 className="text-2xl font-black mb-6 italic relative z-10">不確定從哪裡開始？</h3>
          <p className="text-slate-400 mb-12 text-base font-light leading-relaxed relative z-10">
            AI 領域變化極快，您可以先預約一場 30 分鐘的免費技術診斷，我們一起梳理您的流程優化空間。
          </p>
          
          <div className="space-y-5 relative z-10">
            <a 
              href={BRAND.lineLink} 
              target="_blank" rel="noreferrer"
              className="w-full py-5 bg-white text-slate-950 rounded-[20px] font-black flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95 group/btn"
            >
              <MessageSquare size={20} className="group-hover/btn:rotate-12 transition-transform" /> LINE 聯繫諮詢
            </a>
            <a 
              href={`mailto:${BRAND.email}`}
              className="w-full py-5 bg-slate-900 text-white rounded-[20px] font-black flex items-center justify-center gap-3 border border-white/5 hover:bg-slate-800 transition-all active:scale-95"
            >
              Email 索取詳細報價 <ArrowRight size={20} className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
