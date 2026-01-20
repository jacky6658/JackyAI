
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, MessageSquare, Phone } from 'lucide-react';
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

  const navLinks = [
    { name: '作品案例', path: '/works' },
    { name: '課程教學', path: '/courses' },
    { name: '服務項目', path: '/services' },
    { name: '關於我', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white text-lg font-black">A</span>
          </div>
          <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide">
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
            className="px-6 py-2.5 bg-white text-slate-950 hover:bg-blue-400 hover:text-white rounded-xl transition-all shadow-xl shadow-white/5 active:scale-95"
          >
            立即諮詢
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-slate-300 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black"
              >
                立即諮詢
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-black mb-8 block">{BRAND.name}</Link>
            <p className="text-slate-500 max-w-md mb-12 leading-relaxed text-lg font-light">
              專注於企業級 AI 流程系統開發，致力於幫助創業者從繁瑣勞動中解放，創造更高的核心價值。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all">
                <Github size={24} />
              </a>
              <a href={`mailto:${BRAND.email}`} className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">快速導覽</h4>
            <ul className="space-y-6 text-slate-500 font-medium">
              <li><Link to="/works" className="hover:text-blue-400">作品案例</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400">課程教學</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">服務項目</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">關於我</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">聯繫諮詢</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">聯絡諮詢</h4>
            <ul className="space-y-6 text-slate-500 font-medium">
              <li className="flex items-center gap-3"><Mail size={18} className="text-blue-500" /> {BRAND.email}</li>
              <li className="flex items-center gap-3"><MessageSquare size={18} className="text-blue-500" /> LINE: {BRAND.line}</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-blue-500" /> {BRAND.phone}</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-900 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link to="/legal" className="hover:text-slate-400">隱私權政策</Link>
            <Link to="/legal" className="hover:text-slate-400">服務條款</Link>
          </div>
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
