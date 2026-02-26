import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../constants.tsx';
import { Bot, Zap, TrendingUp, Users, CheckCircle2, ArrowRight, Award, Target, Gauge, Lightbulb, Layers, Image as ImageIcon } from 'lucide-react';
import { SEO } from '../components/SEO.tsx';

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const AIRecruiting: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedImage, setSelectedImage] = useState(0);

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

  const tabs: Tab[] = [
    { id: 'features', name: '功能特色', icon: <Lightbulb size={20} /> },
    { id: 'architecture', name: '系統架構', icon: <Layers size={20} /> },
    { id: 'demo', name: '系統演示', icon: <ImageIcon size={20} /> },
    { id: 'why', name: '為什麼選擇', icon: <Award size={20} /> },
  ];

  const coreFeatures = [
    {
      title: '智能人才搜尋',
      desc: '自動從多個數據源搜尋符合要求的候選人',
      icon: Zap,
    },
    {
      title: '多維度評分',
      desc: '基於技能、經驗、文化契合度等因素綜合評分',
      icon: TrendingUp,
    },
    {
      title: '自動管理',
      desc: '候選人進度追蹤、狀態管理、通知提醒',
      icon: Target,
    },
    {
      title: '24/7 運作',
      desc: 'AI 系統全年無休，自動進行招聘相關工作',
      icon: Gauge,
    }
  ];

  const systemFeatures = [
    {
      name: '候選人庫管理',
      description: '建立和管理企業人才庫，支持數千人數據存儲和查詢'
    },
    {
      name: '智能搜尋系統',
      description: '多渠道數據源整合，快速篩選符合條件的候選人'
    },
    {
      name: '自動評分引擎',
      description: '多維度綜合評分，自動排序推薦候選人'
    },
    {
      name: '進度追蹤',
      description: '完整的招聘漏斗管理，從初期聯繫到入職追蹤'
    },
    {
      name: '數據同步',
      description: '實時同步到常用工具，整合現有招聘流程'
    },
    {
      name: '智能通知',
      description: '自動提醒和進度更新，不漏掉任何招聘機會'
    }
  ];

  const whyChoose = [
    {
      title: '時間效率',
      items: ['秒級搜尋', '自動評分', '智能推薦']
    },
    {
      title: '成本優化',
      items: ['降低人力成本', '減少招聘周期', '提升招聘質量']
    },
    {
      title: '用戶體驗',
      items: ['簡潔直觀的界面', '完整的數據可視化', '易於集成現有系統']
    },
    {
      title: '可擴展性',
      items: ['支持多職位同時招聘', '靈活配置評分標準', '應對快速增長']
    }
  ];

  return (
    <>
      <SEO
        title="AI 智能招聘系統 | 人才搜尋與管理平台"
        description="智能 AI 招聘系統，幫助企業快速找到合適人才。自動搜尋、多維評分、進度管理，讓招聘變得簡單高效。"
        keywords="AI 招聘, 招聘系統, 人才搜尋, AI 系統, 招聘自動化, HR 系統"
        url="https://www.aijob.com.tw/#/ai-recruiting"
      />

      <div className="bg-[#0B1220] min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="text-4xl">🤖</span>
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI 招聘系統
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">智能人才搜尋與管理平台</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              利用 AI 技術自動搜尋、評分、管理招聘流程。
              <br className="hidden md:inline" />
              讓企業輕鬆找到合適的人才。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#features" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-95">
                查看功能
              </a>
              <a href="/#/contact" className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-bold hover:bg-blue-400/10 transition-all">
                聯繫我們 <ArrowRight className="inline ml-2" size={18} />
              </a>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-20">
            <div className="inline-flex bg-[#141B2C] rounded-full p-2 border border-white/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-20"
              >
                {/* Core Features */}
                <div id="features">
                  <h3 className="text-3xl font-black mb-12 text-white">核心功能</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreFeatures.map((feature, idx) => {
                      const IconComp = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-6 rounded-2xl bg-[#141B2C] border border-white/5 hover:border-blue-500/30 transition-all"
                        >
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                            <IconComp size={24} />
                          </div>
                          <h4 className="text-xl font-black mb-2 text-white">{feature.title}</h4>
                          <p className="text-sm text-slate-400">{feature.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Detailed Features */}
                <div>
                  <h3 className="text-3xl font-black mb-12 text-white">完整功能清單</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {systemFeatures.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-[#141B2C] border border-white/5 hover:border-blue-500/30 transition-all"
                      >
                        <h4 className="text-lg font-black mb-3 text-white flex items-center gap-2">
                          <CheckCircle2 size={20} className="text-blue-400" />
                          {item.name}
                        </h4>
                        <p className="text-slate-400">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-3xl font-black mb-8 text-white">系統架構</h3>
                  <div className="p-8 rounded-2xl bg-[#141B2C] border border-white/10 space-y-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap px-4 bg-[#0B1220] rounded">使用者界面</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">直觀的前端應用，支持桌面和移動設備</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                        <span className="text-sm font-bold text-cyan-400 whitespace-nowrap px-4 bg-[#0B1220] rounded">API 層</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-cyan-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">RESTful API，支持多種集成和擴展</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap px-4 bg-[#0B1220] rounded">業務邏輯層</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">強大的搜尋引擎、評分算法、管理系統</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
                        <span className="text-sm font-bold text-green-400 whitespace-nowrap px-4 bg-[#0B1220] rounded">數據層</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-green-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">企業級數據庫，支持大規模數據存儲和查詢</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                        <span className="text-sm font-bold text-yellow-400 whitespace-nowrap px-4 bg-[#0B1220] rounded">AI 引擎</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-yellow-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">多層 AI 模型，用於搜尋、評分和推薦</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black mb-8 text-white">技術特點</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-8 rounded-2xl bg-[#141B2C] border border-white/5"
                    >
                      <h4 className="text-2xl font-black mb-6 text-white">🏗️ 可擴展</h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                          支持多職位同時管理
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                          靈活配置評分標準
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                          應對企業快速增長
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="p-8 rounded-2xl bg-[#141B2C] border border-white/5"
                    >
                      <h4 className="text-2xl font-black mb-6 text-white">🔒 安全可靠</h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                          企業級數據加密
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                          隱私保護合規
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                          定期備份和恢復
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'demo' && (
              <motion.div
                key="demo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-black mb-8 text-white">🎬 系統實際運行演示</h3>
                  
                  {/* Main Image Display */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#141B2C] mb-6">
                    <motion.img
                      key={selectedImage}
                      src={screenshots[selectedImage].image}
                      alt={screenshots[selectedImage].title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-2xl font-black text-white flex items-center gap-3">
                      <ImageIcon size={24} className="text-blue-400" />
                      {screenshots[selectedImage].title}
                    </h4>
                    <p className="text-slate-300 text-lg">{screenshots[selectedImage].desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {screenshots[selectedImage].features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {screenshots.map((shot, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-shrink-0 h-24 rounded-lg overflow-hidden border-3 transition-all ${
                          selectedImage === idx
                            ? 'border-blue-500 ring-2 ring-blue-500/50'
                            : 'border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <img
                          src={shot.image}
                          alt={shot.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <p className="text-base font-bold text-emerald-300 mb-2">✅ 本地運行</p>
                    <p className="text-sm text-slate-400">無需後端 SQL，完全本地演示模式</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                  >
                    <p className="text-base font-bold text-cyan-300 mb-2">⚡ 50x 效率提升</p>
                    <p className="text-sm text-slate-400">6+ 小時流程 → 7 分鐘完成</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20"
                  >
                    <p className="text-base font-bold text-purple-300 mb-2">🤝 多用戶協作</p>
                    <p className="text-sm text-slate-400">支援 3+ 顧問同時操作</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20"
                  >
                    <p className="text-base font-bold text-orange-300 mb-2">📊 實時同步</p>
                    <p className="text-sm text-slate-400">Google Sheets 自動同步 433 行資料</p>
                  </motion.div>
                </div>


              </motion.div>
            )}

            {activeTab === 'why' && (
              <motion.div
                key="why"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-3xl font-black mb-12 text-white">為什麼選擇我們</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyChoose.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-[#141B2C] border border-white/5 hover:border-blue-500/30 transition-all"
                      >
                        <h4 className="text-2xl font-black mb-6 text-white">{item.title}</h4>
                        <ul className="space-y-3">
                          {item.items.map((subitem, sidx) => (
                            <li key={sidx} className="flex gap-3 text-slate-300">
                              <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                              <span>{subitem}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30">
                  <h3 className="text-2xl font-black mb-6 text-white">✨ 核心優勢</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-lg font-black text-blue-400 mb-3">⚡ 高效快速</h5>
                      <p className="text-slate-300">AI 自動化流程，大幅縮短招聘周期，讓企業更快找到合適人才。</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-cyan-400 mb-3">🎯 精準匹配</h5>
                      <p className="text-slate-300">多維度智能評分，確保推薦的候選人符合企業需求，提高招聘成功率。</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-emerald-400 mb-3">💪 完全掌控</h5>
                      <p className="text-slate-300">透明的系統設計，企業可以完全了解和控制整個招聘流程。</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-[#141B2C] border border-white/5">
                  <h3 className="text-2xl font-black mb-6 text-white">🚀 現在就開始</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    了解 AI 招聘系統如何幫助你的企業提升招聘效率。我們很樂意為你展示系統功能，並討論如何最好地滿足你的招聘需求。
                  </p>
                  <a
                    href="/#/contact"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
                  >
                    聯繫我們了解更多
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-blue-500/10 to-transparent py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">準備好改進招聘流程了嗎？</h2>
              <p className="text-xl text-slate-300 mb-8">
                AI 招聘系統已準備好幫助你高效地找到優秀人才。與我們聯繫，了解這個系統如何應用於你的企業。
              </p>
              <a
                href="/#/contact"
                className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-lg hover:shadow-blue-500/50"
              >
                聯繫我們 <ArrowRight className="inline ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
