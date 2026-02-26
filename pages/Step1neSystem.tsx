import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO.tsx';
import { 
  Users, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Github, 
  ArrowRight,
  BarChart3,
  Brain,
  Workflow,
  MessageSquare,
  Download,
  Image as ImageIcon
} from 'lucide-react';

interface TabContent {
  title: string;
  icon: React.ElementType;
}

export const Step1neSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech' | 'demo'>('overview');
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const screenshots = [
    {
      title: '候選人管理列表',
      desc: '649 位候選人資料庫，支援搜尋、篩選、批量操作',
      image: '/step1ne-candidate-list.jpg',
      features: ['6 維度評分', '穩定度評估', '聯絡方式', 'AI 推薦']
    },
    {
      title: 'Kanban 流程看板',
      desc: '實時追蹤候選人狀態：未開始→已聯繫→已面試→Offer→已上職',
      image: '/step1ne-board.jpg',
      features: ['視覺化流程', '拖拽管理', '團隊協作', '進度追蹤']
    },
    {
      title: 'AI 配對推薦',
      desc: '智慧匹配系統，自動推薦最合適的候選人',
      image: '/step1ne-ai-matching.jpg',
      features: ['6 維度評分', '相容度分析', '批量評分', '推薦理由']
    },
    {
      title: '顧問人選追蹤表',
      desc: '多顧問協作看板，實時同步招聘進度',
      image: '/step1ne-tracking.jpg',
      features: ['協作管理', '進度統計', 'SLA 追蹤', '智慧通知']
    }
  ];

  const tabs = {
    overview: {
      title: '系統概覽',
      icon: Brain,
    },
    features: {
      title: '核心功能',
      icon: Zap,
    },
    tech: {
      title: '技術架構',
      icon: Workflow,
    },
    demo: {
      title: '功能演示',
      icon: BarChart3,
    }
  };

  const stats = [
    { label: '候選人資料', value: '649+', icon: Users },
    { label: '搜索速度提升', value: '50x', icon: TrendingUp },
    { label: 'API 端點', value: '19', icon: MessageSquare },
    { label: 'Cron 自動化', value: '16', icon: Zap }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              <strong>Step1ne</strong> 是一個 AI 驅動的獵頭顧問協作系統，專為高效招聘而設計。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-white font-bold mb-4">✨ 核心特色</h4>
                <ul className="space-y-3 text-sm">
                  <li>• 649+ 位候選人資料庫（PostgreSQL）</li>
                  <li>• 6 維度智慧評分系統</li>
                  <li>• 並行 GitHub & LinkedIn 人才搜索</li>
                  <li>• 實時 Pipeline 追蹤與 AI 配對</li>
                  <li>• 100% 無代碼 - 完全由 AI 操作</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="text-white font-bold mb-4">🎯 適用場景</h4>
                <ul className="space-y-3 text-sm">
                  <li>• 快速招聘 5+ 人才（減少 80% 時間）</li>
                  <li>• 跨產業人才遷移分析</li>
                  <li>• 大規模招聘市場報告</li>
                  <li>• 24/7 自動化候選人搜集與評分</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6 text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    🔍 智慧搜索
                  </h4>
                  <ul className="text-sm space-y-2 pl-6">
                    <li>• 產業感知搜索</li>
                    <li>• 並行爬蟲技術（2h → 5min）</li>
                    <li>• 自動去重與評分</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    ⭐ 候選人評分
                  </h4>
                  <ul className="text-sm space-y-2 pl-6">
                    <li>• 6 維度評分引擎</li>
                    <li>• AI 自動配對分析</li>
                    <li>• 穩定度評估</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    📊 數據可視化
                  </h4>
                  <ul className="text-sm space-y-2 pl-6">
                    <li>• 實時 Pipeline 看板</li>
                    <li>• 招聘漏斗分析</li>
                    <li>• 產業遷移熱力圖</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    🤖 自動化工作流
                  </h4>
                  <ul className="text-sm space-y-2 pl-6">
                    <li>• 每日自動搜集（3 次）</li>
                    <li>• 週報自動生成</li>
                    <li>• LinkedIn 職缺發佈</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="space-y-6 text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-4">🏗️ 系統架構</h4>
                <div className="space-y-3 text-sm font-mono bg-slate-900/50 p-4 rounded-lg">
                  <div>Frontend: <span className="text-blue-400">React 19 + TypeScript</span></div>
                  <div>Backend: <span className="text-green-400">Express.js (19 endpoints)</span></div>
                  <div>Database: <span className="text-yellow-400">PostgreSQL (649 candidates)</span></div>
                  <div>Storage: <span className="text-purple-400">Google Sheets (433 rows)</span></div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">⚙️ 自動化引擎</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span> 16 個 Cron 工作流
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span> Telegram 通知整合
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span> GitHub Issues API 聯絡
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">•</span> 實時進度追蹤 (JSONB)
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/50">
                <motion.img
                  key={selectedImage}
                  src={screenshots[selectedImage].image}
                  alt={screenshots[selectedImage].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>

              {/* Image Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <ImageIcon size={24} className="text-blue-400" />
                  {screenshots[selectedImage].title}
                </h3>
                <p className="text-slate-300">{screenshots[selectedImage].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {screenshots[selectedImage].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-blue-500 ring-2 ring-blue-500/50'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={shot.image}
                      alt={shot.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm font-bold text-emerald-300 mb-2">✅ 本地運行</p>
                <p className="text-xs text-slate-400">無需後端 SQL，完全本地演示模式</p>
              </div>
              <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-sm font-bold text-cyan-300 mb-2">⚡ 50x 效率提升</p>
                <p className="text-xs text-slate-400">6+ 小時流程 → 7 分鐘完成</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-sm font-bold text-purple-300 mb-2">🤝 多用戶協作</p>
                <p className="text-xs text-slate-400">支援 3+ 顧問同時操作</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-sm font-bold text-orange-300 mb-2">📊 實時同步</p>
                <p className="text-xs text-slate-400">Google Sheets 自動同步 433 行資料</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title="Step1ne 獵頭 AI 系統 | 智慧招聘平台 - Jacky"
        description="649+ 候選人資料庫 × 6 維度 AI 評分 × 50 倍效率提升。自動化候選人搜集、評分、Pipeline 管理。幫助企業在 5 分鐘內找到最佳候選人。"
        keywords="招聘系統, AI 獵頭, 候選人管理, Pipeline 追蹤, HR 自動化, 招聘軟體"
        url="https://www.aijob.com.tw/#/step1ne"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
          
          {/* Hero Section */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block mb-8 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30">
              <p className="text-blue-300 font-semibold text-sm tracking-widest">AI 獵頭系統</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Step1ne
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              649+ 候選人智慧評分系統 × 50 倍效率提升 × 完全自動化招聘工作流
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/jacky6658/step1ne-headhunter-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                查看 GitHub
                <ArrowRight size={16} />
              </a>
              
              <a
                href="http://localhost:3003"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold border border-slate-700 transition-all duration-300"
              >
                🚀 實時演示
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all text-center"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-3xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Tabs Section */}
          <motion.div
            className="bg-slate-900/50 rounded-3xl border border-slate-700/50 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-1 p-6 border-b border-slate-700/50 bg-slate-950/50">
              {Object.entries(tabs).map(([key, tab]) => {
                const Icon = tab.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as typeof activeTab)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:inline">{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-8 md:p-12">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub Repos */}
          <motion.div
            className="mt-24 p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <Github size={28} />
              開源倉庫
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://github.com/jacky6658/step1ne-headhunter-system"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-500/50 transition-all group"
              >
                <p className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  📱 Frontend + Backend + Database
                </p>
                <p className="text-sm text-slate-400 mt-2">React 19 + Express + PostgreSQL</p>
                <p className="text-xs text-slate-500 mt-3">649 candidates | 19 API endpoints</p>
              </a>

              <a
                href="https://github.com/jacky6658/step1ne-headhunter-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-500/50 transition-all group"
              >
                <p className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  🤖 AI Scrapers + Analytics
                </p>
                <p className="text-sm text-slate-400 mt-2">Python + Cron + Telegram Bot</p>
                <p className="text-xs text-slate-500 mt-3">Parallel search | 6D scoring | Automation</p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
