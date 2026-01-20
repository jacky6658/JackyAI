
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BRAND } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

// EmailJS 配置 - 請在 EmailJS 設置完成後填入您的配置
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};

// 諮詢項目對應的中文名稱
const SERVICE_NAMES: Record<string, string> = {
  'ai-automation': 'AI 流程自動化',
  'custom-system': 'AI 系統開發',
  'mini-program': 'AI 小程式客製',
  'consulting': '純技術顧問諮詢',
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'ai-automation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // 檢查 EmailJS 配置是否完整
    if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      setStatus('error');
      setErrorMessage('郵件服務尚未配置完成，請稍後再試或直接使用 Email 聯繫。');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }

    try {
      // 初始化 EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // 準備郵件模板參數
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        company: formState.company || '未填寫',
        service: SERVICE_NAMES[formState.service] || formState.service,
        message: formState.message,
        to_email: BRAND.email,
        reply_to: formState.email,
      };

      // 發送郵件
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // 成功
      setStatus('success');
      setFormState({ name: '', email: '', company: '', service: 'ai-automation', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('郵件發送失敗:', error);
      setStatus('error');
      setErrorMessage('發送失敗，請稍後再試或直接使用 Email 聯繫。');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <>
      <SEO
        title="聯絡我們 | 預約 AI 轉型諮詢 - Jacky / AIJob"
        description="準備好迎接自動化與 AI 帶來的巨大變革了嗎？我也準備好了。首次諮詢 30 分鐘免費，專案報價依據功能複雜度與維運需求。"
        keywords="AI 諮詢, AI 顧問服務, 企業 AI 轉型諮詢, AI 自動化諮詢, 聯絡 AI 顧問, AI 專案報價"
        url="https://www.aijob.com.tw/#/contact"
      />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4 md:px-0">讓我們聊聊您的專案</h1>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
          準備好迎接自動化與 AI 帶來的巨大變革了嗎？我也準備好了。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-8">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-8">聯絡方式</h3>
            
            <div className="space-y-8">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="font-medium text-sm md:text-base">{BRAND.email}</p>
                </div>
              </a>

              <a href={BRAND.lineLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">LINE 聯繫</p>
                  <p className="font-medium">官方帳號諮詢</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Telegram / Phone</p>
                  <p className="font-medium">{BRAND.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-600/20">
            <h4 className="font-bold mb-4">諮詢需知</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li>• 首次諮詢 30 分鐘免費</li>
              <li>• 專案報價依據功能複雜度與維運需求</li>
              <li>• 支援遠端視訊或大台北地區線下面議</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-slate-900/50 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-slate-400">您的姓名</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="王小明"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-slate-400">電子信箱</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="example@gmail.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-slate-400">公司名稱 (選填)</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="某某科技有限公司"
                  value={formState.company}
                  onChange={e => setFormState({...formState, company: e.target.value})}
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-slate-400">諮詢項目</label>
                <select 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  value={formState.service}
                  onChange={e => setFormState({...formState, service: e.target.value})}
                >
                  <option value="ai-automation">AI 流程自動化</option>
                  <option value="custom-system">AI 系統開發</option>
                  <option value="mini-program">AI 小程式客製</option>
                  <option value="consulting">純技術顧問諮詢</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
              <label className="text-xs sm:text-sm font-medium text-slate-400">您的需求描述</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="請描述您的專案願景、目前遇到的痛點或特定的功能需求..."
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /> 發送成功</>
              ) : (
                <><Send size={18} className="sm:w-5 sm:h-5" /> 提交諮詢表單</>
              )}
            </button>
            
            {status === 'success' && (
              <p className="mt-4 text-emerald-400 text-sm text-center font-medium">訊息已成功送出！我會盡快在 24 小時內與您聯繫。</p>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center font-medium flex items-center justify-center gap-2">
                  <AlertCircle size={18} />
                  {errorMessage || '發送失敗，請稍後再試或直接使用 Email 聯繫。'}
                </p>
                {errorMessage.includes('尚未配置') && (
                  <p className="text-xs text-slate-400 text-center mt-2">
                    請參考 <code className="bg-slate-800 px-2 py-1 rounded">EMAILJS_SETUP.md</code> 完成設置
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
