import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Users, CheckCircle2, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { COURSES } from '../constants.tsx';

export const CourseDetail: React.FC = () => {
  const { slug } = useParams();
  const course = COURSES.find(c => c.slug === slug);

  if (!course) return <Navigate to="/courses" />;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="lg:w-2/3">
            <Link to="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-12 transition-colors">
              <ArrowLeft size={16} /> 返回課程列表
            </Link>
            <div className="flex gap-2 mb-6">
              {course.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{course.title}</h1>
            <p className="text-xl text-blue-400 font-medium mb-8">{course.subtitle}</p>
            <div className="flex flex-wrap gap-8 text-slate-400">
              <div className="flex items-center gap-2"><Star size={18} className="text-yellow-500" fill="currentColor" /> 已有 {course.studentCount} 位學員</div>
              <div className="flex items-center gap-2"><Clock size={18} className="text-blue-400" /> 課程總長 {course.duration}</div>
              <div className="flex items-center gap-2"><Users size={18} className="text-indigo-400" /> 包含專屬學習社群</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Info */}
          <div className="lg:w-2/3 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">關於本課程</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                {course.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" /> 你將學會...
                </h3>
                <ul className="space-y-4">
                  {course.outcomes.map((outcome, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="text-indigo-500" /> 適合對象
                </h3>
                <ul className="space-y-4">
                  {course.targetAudience.map((target, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 mt-2"></div>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-10">課程大綱</h2>
              <div className="space-y-6">
                {course.curriculum.map((section, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="bg-slate-800/50 px-8 py-4 border-b border-slate-700">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Chapter 0{idx + 1}</span>
                      <h4 className="font-bold text-lg">{section.title}</h4>
                    </div>
                    <ul className="p-8 space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                          <BookOpen size={16} className="text-slate-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 p-1 rounded-[32px] bg-gradient-to-br from-blue-500/30 to-transparent border border-white/5">
              <div className="bg-slate-900 rounded-[30px] overflow-hidden p-8 shadow-2xl">
                <img src={course.coverImage} className="w-full h-48 object-cover rounded-2xl mb-8" alt={course.title} />
                <div className="text-center mb-8">
                  <p className="text-slate-500 text-sm mb-2">單次報名費用</p>
                  <h3 className="text-4xl font-bold">{course.price}</h3>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    "終身觀看權限",
                    "提供課程源碼與藍圖",
                    "專屬 Discord 討論區",
                    "實戰專案實作指導"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-xs text-slate-400">
                      <CheckCircle2 size={14} className="text-emerald-500" /> {item}
                    </div>
                  ))}
                </div>
                <a 
                  href={course.link} 
                  target="_blank" rel="noreferrer"
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                >
                  立即報名課程 <ExternalLink size={20} />
                </a>
                <p className="mt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  支援 信用卡 / 銀行轉帳 / LINE PAY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
