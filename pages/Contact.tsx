
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { BRAND } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="聯絡我們 | 預約 AI 轉型諮詢 - Jacky / AIJob"
        description="準備好迎接自動化與 AI 帶來的巨大變革了嗎？我也準備好了。首次諮詢 30 分鐘免費，專案報價依據功能複雜度與維運需求。"
        keywords="AI 諮詢, AI 顧問服務, 企業 AI 轉型諮詢, AI 自動化諮詢, 聯絡 AI 顧問, AI 專案報價"
        url="https://www.aijob.com.tw/#/contact"
      />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4 md:px-0">讓我們聊聊您的專案</h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
            準備好迎接自動化與 AI 帶來的巨大變革了嗎？我也準備好了。
          </p>
        </div>

        <div className="space-y-8">
          {/* 聯絡方式卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">聯絡方式</h3>
            
            <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto">
              <a 
                href={`mailto:${BRAND.email}`} 
                className="flex items-center gap-6 p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Email</p>
                  <p className="font-medium text-base md:text-lg text-white group-hover:text-blue-400 transition-colors">{BRAND.email}</p>
                </div>
              </a>

              <a 
                href={BRAND.lineLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all flex-shrink-0">
                  <MessageSquare size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">LINE 聯繫</p>
                  <p className="font-medium text-base md:text-lg text-white group-hover:text-green-400 transition-colors">官方帳號諮詢</p>
                </div>
              </a>

              <a 
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-6 p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Telegram / Phone</p>
                  <p className="font-medium text-base md:text-lg text-white group-hover:text-cyan-400 transition-colors">{BRAND.phone}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* 諮詢需知卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl bg-blue-600/10 border border-blue-600/20"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">諮詢需知</h4>
            <ul className="text-sm md:text-base text-slate-300 space-y-4 max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>首次諮詢 30 分鐘免費</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>專案報價依據功能複雜度與維運需求</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>支援遠端視訊或大台北地區線下面議</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};
