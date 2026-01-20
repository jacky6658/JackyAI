
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Instagram, Youtube, AtSign, Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { BRAND } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 開啟選單時鎖定滾動，防止背景內容位移
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: '作品案例', path: '/works', id: '01' },
    { name: '課程教學', path: '/courses', id: '02' },
    { name: '服務項目', path: '/services', id: '03' },
    { name: '關於我', path: '/about', id: '04' },
  ];

  return (
    // 使用 z-[2000] 確保全站最高層級
    <nav className={`fixed w-full z-[2000] transition-all duration-300 ${scrolled && !isOpen ? 'bg-[#0B1220]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[2100]">
        <Link to="/" className="text-lg font-black tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white p-0.5">
            <img 
              src="https://static.wixstatic.com/media/9705bb_1eb98d8af29444eb84697335d47a0cc6~mv2.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white tracking-tight font-black">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-400 transition-all ${location.pathname.startsWith(link.path) ? 'text-blue-400' : 'text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-slate-950 rounded-lg transition-all active:scale-95"
          >
            立即諮詢
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 relative z-[2200]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-blue-400" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Redesigned Mobile Menu: 100% Opaque & Correct Proportions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[2050] bg-[#0B1220] flex flex-col pt-24 px-8 pb-10"
          >
            {/* Header / Sublabel */}
            <div className="mb-10">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-2">Main Navigation</span>
              <div className="h-px bg-white/10 w-12" />
            </div>

            {/* Navigation Links - Reduced Size */}
            <div className="flex flex-col gap-6 mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-4 group py-2"
                  >
                    <span className="text-blue-600 font-black text-[10px] italic">0{i+1}</span>
                    <span className={`text-xl font-bold tracking-tight transition-all ${location.pathname.startsWith(link.path) ? 'text-white' : 'text-slate-400'}`}>
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Adjusted Button - Different from Home Hero */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                className="w-full py-4 bg-white text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                開始你的 AI 轉型之旅 <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Social Connect at Bottom */}
            <div className="mt-auto">
              <div className="h-px bg-white/5 w-full mb-8" />
              <p className="text-[10px] text-slate-600 uppercase font-black tracking-widest mb-6">Social Connect</p>
              <div className="flex gap-4 mb-8">
                <a href={BRAND.igLink} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 active:bg-blue-600 active:text-white transition-all"><Instagram size={18} /></a>
                <a href={BRAND.ytLink} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 active:bg-blue-600 active:text-white transition-all"><Youtube size={18} /></a>
                <a href={BRAND.threadsLink} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 active:bg-blue-600 active:text-white transition-all"><AtSign size={18} /></a>
                <a href={`mailto:${BRAND.email}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 active:bg-blue-600 active:text-white transition-all"><Mail size={18} /></a>
              </div>
              <p className="text-[9px] text-slate-700 font-medium">© 2024 AIJob Laboratory. All Rights Reserved.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-black mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white p-0.5">
                <img src="https://static.wixstatic.com/media/9705bb_1eb98d8af29444eb84697335d47a0cc6~mv2.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              {BRAND.name}
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-light text-sm">
              專注於企業級 AI 流程系統開發，致力於幫助創業者從繁瑣勞動中解放。
            </p>
            <div className="flex gap-3">
              <a href={BRAND.websiteLink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all group"><Globe size={18} className="text-slate-400 group-hover:text-white" /></a>
              <a href={BRAND.igLink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-pink-600 transition-all group"><Instagram size={18} className="text-slate-400 group-hover:text-white" /></a>
              <a href={BRAND.ytLink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-all group"><Youtube size={18} className="text-slate-400 group-hover:text-white" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">導覽</h4>
            <ul className="space-y-3 text-slate-500 text-xs">
              <li><Link to="/works" className="hover:text-blue-400 transition-colors">作品案例</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">課程教學</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">服務項目</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">聯絡</h4>
            <ul className="space-y-3 text-slate-500 text-xs">
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-blue-400 transition-colors">{BRAND.email}</a></li>
              <li><a href={BRAND.lineLink} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LINE 諮詢</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-slate-600 text-[10px] flex justify-between uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {BRAND.name}.</p>
          <Link to="/legal" className="hover:text-slate-400 transition-colors">Privacy & Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
