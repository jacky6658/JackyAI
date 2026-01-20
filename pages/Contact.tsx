
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND } from '../constants.tsx';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'ai-automation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', company: '', service: 'ai-automation', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12"> {/* 改為 pt-32 */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">讓我們聊聊您的專案</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                  <p className="font-medium">{BRAND.email}</p>
                </div>
              </a>

              <a href={`https://line.me/ti/p/~${BRAND.line}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">LINE ID</p>
                  <p className="font-medium">{BRAND.line}</p>
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
          <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">您的姓名</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="王小明"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">電子信箱</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="example@gmail.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">公司名稱 (選填)</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="某某科技有限公司"
                  value={formState.company}
                  onChange={e => setFormState({...formState, company: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">諮詢項目</label>
                <select 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
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

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-slate-400">您的需求描述</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="請描述您的專案願景、目前遇到的痛點或特定的功能需求..."
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <><CheckCircle2 size={20} /> 發送成功</>
              ) : (
                <><Send size={20} /> 提交諮詢表單</>
              )}
            </button>
            
            {status === 'success' && (
              <p className="mt-4 text-emerald-400 text-sm text-center font-medium">訊息已成功送出！我會盡快在 24 小時內與您聯繫。</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
