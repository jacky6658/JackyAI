import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../constants.tsx';
import { Bot, Zap, TrendingUp, Users, CheckCircle2, ArrowRight, Award, Target, Gauge } from 'lucide-react';
import { SEO } from '../components/SEO.tsx';

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const AIRecruiting: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs: Tab[] = [
    { id: 'overview', name: '系統概覽', icon: <Bot size={20} /> },
    { id: 'lobster', name: '龍蝦社群', icon: <Users size={20} /> },
    { id: 'business', name: '商業模式', icon: <TrendingUp size={20} /> },
  ];

  const keyFeatures = [
    {
      title: '找人快 10 倍',
      desc: '傳統 2-3 週 → 我們 5 分鐘',
      icon: Zap,
      metric: '99% 時間節省'
    },
    {
      title: '成本低 50%',
      desc: '固定 NT$5,000/月 vs 獵頭費 20-25%',
      icon: TrendingUp,
      metric: '95% 成本削減'
    },
    {
      title: '效果好',
      desc: '6 維度評分 + 精準匹配',
      icon: Target,
      metric: '85%+ 推薦成功率'
    },
    {
      title: '24/7 無休',
      desc: 'AI 系統永遠在工作',
      icon: Gauge,
      metric: '0 個機會漏失'
    }
  ];

  const lobsterFeatures = [
    {
      name: 'YQ1 本尊',
      role: '技術 + 商業決策',
      model: 'Claude Sonnet 4.5',
      tasks: ['架構設計', '核心開發', '商業分析'],
      cost: '$$'
    },
    {
      name: 'YQ2 HR',
      role: '招聘自動化',
      model: 'Google Gemini',
      tasks: ['候選人管理', 'API 操作', '進度追蹤'],
      cost: '✅ 免費'
    },
    {
      name: 'YQ3 行銷',
      role: '內容 + 推廣',
      model: 'Google Gemini',
      tasks: ['短影音', '文案撰寫', 'SEO 優化'],
      cost: '✅ 免費'
    }
  ];

  const businessModels = [
    {
      title: 'SaaS 訂閱制',
      price: 'NT$ 5,000-30,000/月',
      pros: ['可預測收入', '客戶粘性高', '易於擴展'],
      cons: ['需要大量客戶', '市場教育成本高'],
      best: '中長期主力'
    },
    {
      title: '獵頭費用',
      price: '月薪 × 20% (現金)',
      pros: ['快速現金流', '高單價', '零風險'],
      cons: ['收入波動大', '競爭激烈'],
      best: '初期驗證'
    },
    {
      title: '企業客製化',
      price: 'NT$ 200k-1M (一次性)',
      pros: ['高利潤', '品牌提升', '建立地位'],
      cons: ['銷售周期長', '支持成本高'],
      best: '高端市場'
    }
  ];

  return (
    <>
      <SEO
        title="龍蝦 AI 招聘系統 | 智能人才尋訪與管理平台"
        description="Step1ne AI 招聘系統結合龍蝦社群三個 AI 分身，提供 10 倍速招聘、50% 成本削減的智能解決方案。用 GitHub + LinkedIn 爬蟲、6 維度評分，幫企業找到最合適的人才。"
        keywords="AI 招聘, 獵頭軟件, AI 人才搜尋, Step1ne, 龍蝦社群, AI 系統, 招聘自動化"
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
              <span className="text-4xl">🦞</span>
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                龍蝦社群
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">AI 招聘自動化系統</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              一支虛擬 AI 助理團隊，24/7 自動為你找人、評分、管理招聘流程。
              <br className="hidden md:inline" />
              比傳統獵頭快 10 倍，成本低 50%。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#features" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-95">
                了解更多
              </a>
              <a href="/#/contact" className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-bold hover:bg-blue-400/10 transition-all">
                開始諮詢 <ArrowRight className="inline ml-2" size={18} />
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
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-20"
              >
                {/* Key Features */}
                <div id="features">
                  <h3 className="text-3xl font-black mb-12 text-white">核心優勢</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyFeatures.map((feature, idx) => {
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
                          <p className="text-sm text-slate-400 mb-4">{feature.desc}</p>
                          <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full inline-block">
                            {feature.metric}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* System Architecture */}
                <div>
                  <h3 className="text-3xl font-black mb-12 text-white">系統架構</h3>
                  <div className="p-8 rounded-2xl bg-[#141B2C] border border-white/10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap">前端 UI</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">https://step1ne.zeabur.app</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap">後端 API (19 個端點)</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">https://backendstep1ne.zeabur.app</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap">數據層</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">PostgreSQL (649 候選人) + Google Sheets 實時同步</p>

                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                        <span className="text-sm font-bold text-blue-400 whitespace-nowrap">AI 爬蟲層</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                      </div>
                      <p className="text-center text-slate-400">GitHub API + LinkedIn 爬蟲 + 內部履歷池搜尋</p>
                    </div>
                  </div>
                </div>

                {/* Real Case Study */}
                <div>
                  <h3 className="text-3xl font-black mb-12 text-white">實戰案例：一通數位</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-8 rounded-2xl bg-[#141B2C] border border-white/5"
                    >
                      <h4 className="text-2xl font-black mb-6 text-white">招聘目標</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">職位：Java Developer</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">目標：30 天內找 5-10 人</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">行業：遊戲開發（高併發需求）</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30"
                    >
                      <h4 className="text-2xl font-black mb-6 text-white">成果</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Award size={20} className="text-yellow-400 flex-shrink-0" />
                          <span className="text-slate-300"><strong className="text-green-400">5 分鐘</strong> 搜尋完成</span>
                        </li>
                        <li className="flex gap-3">
                          <Award size={20} className="text-yellow-400 flex-shrink-0" />
                          <span className="text-slate-300"><strong className="text-green-400">5 位</strong> Java Developer 入庫</span>
                        </li>
                        <li className="flex gap-3">
                          <Award size={20} className="text-yellow-400 flex-shrink-0" />
                          <span className="text-slate-300"><strong className="text-green-400">成本 NT$0</strong>（用免費 API）</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'lobster' && (
              <motion.div
                key="lobster"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-3xl font-black mb-6 text-white">什麼是龍蝦社群？</h3>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    龍蝦社群 = 一支由多個 AI 助理組成的虛擬團隊，各司其職地完成企業運營、技術開發、招聘管理等多層面工作。他們共享同一個知識庫，互相協作，永遠不休息。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black mb-8 text-white">三個分身協力運作</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {lobsterFeatures.map((lobster, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-[#141B2C] border border-white/5 hover:border-blue-500/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-2xl font-black text-white">{lobster.name}</h4>
                          <span className="text-sm font-bold text-yellow-400">{lobster.cost}</span>
                        </div>
                        <p className="text-blue-400 font-bold text-sm mb-4">{lobster.role}</p>
                        <p className="text-xs text-slate-500 mb-6 pb-6 border-b border-white/5">{lobster.model}</p>
                        <div className="space-y-2">
                          {lobster.tasks.map((task, tidx) => (
                            <div key={tidx} className="flex gap-2">
                              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="text-xl font-black mb-4 text-white">💡 核心優勢</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>✅ <strong>24/7 無休</strong> — AI 永遠在工作，不會疲勞或請假</li>
                    <li>✅ <strong>共享記憶</strong> — 三個分身看同一個知識庫，信息一致</li>
                    <li>✅ <strong>成本極低</strong> — 兩個用免費 Gemini，月成本僅 $20-50</li>
                    <li>✅ <strong>效率驚人</strong> — 可同時處理 50+ 個職位招聘</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'business' && (
              <motion.div
                key="business"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-3xl font-black mb-12 text-white">三大商業模式</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {businessModels.map((model, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-[#141B2C] border border-white/5 flex flex-col h-full"
                      >
                        <h4 className="text-2xl font-black mb-2 text-white">{model.title}</h4>
                        <p className="text-lg font-bold text-blue-400 mb-6">{model.price}</p>

                        <div className="mb-8">
                          <p className="text-xs font-black text-slate-500 uppercase mb-3">優勢</p>
                          <ul className="space-y-2">
                            {model.pros.map((pro, pidx) => (
                              <li key={pidx} className="flex gap-2 text-sm text-green-400">
                                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <p className="text-xs font-black text-slate-500 uppercase mb-3">劣勢</p>
                          <ul className="space-y-2">
                            {model.cons.map((con, cidx) => (
                              <li key={cidx} className="flex gap-2 text-sm text-red-400">
                                <div className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5">
                          <p className="text-xs font-bold text-blue-400">最適</p>
                          <p className="text-sm text-slate-300">{model.best}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* SaaS Pricing */}
                <div>
                  <h3 className="text-2xl font-black mb-8 text-white">SaaS 三層定價</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { tier: '入門版', price: 'NT$ 5,000/月', features: ['1 個職位', '月聘 < 10 人', 'API 100 次/月', '基礎支持'] },
                      { tier: '專業版', price: 'NT$ 15,000/月', features: ['5 個職位', '月聘 50 人', 'API 無限', '優先支持'], highlight: true },
                      { tier: '企業版', price: 'NT$ 30,000+/月', features: ['無限職位', '無限聘用', 'API 無限', '白標解決方案', 'VIP 客服'] }
                    ].map((plan, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-8 rounded-2xl transition-all ${
                          plan.highlight
                            ? 'bg-blue-600 border border-blue-400 shadow-2xl shadow-blue-500/50'
                            : 'bg-[#141B2C] border border-white/5'
                        }`}
                      >
                        <h4 className={`text-xl font-black mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.tier}</h4>
                        <p className={`text-2xl font-black mb-6 ${plan.highlight ? 'text-white' : 'text-blue-400'}`}>{plan.price}</p>
                        <ul className="space-y-3">
                          {plan.features.map((feature, fidx) => (
                            <li key={fidx} className={`flex gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-slate-300'}`}>
                              <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ROI Calculator */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30">
                  <h3 className="text-2xl font-black mb-6 text-white">投資報酬率</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-slate-300">傳統獵頭（年聘 100 人）</span>
                      <span className="text-lg font-black text-white">NT$ 1,000,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-slate-300">龍蝦系統（年成本）</span>
                      <span className="text-lg font-black text-green-400">NT$ 66,360</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-bold">年度節省</span>
                      <span className="text-2xl font-black text-green-400">NT$ 933,640</span>
                    </div>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">準備好轉變招聘流程了嗎？</h2>
              <p className="text-xl text-slate-300 mb-8">
                龍蝦社群已準備好 24/7 為你找人。開始第一次免費諮詢，了解如何將招聘時間從 3 週縮短為 5 分鐘。
              </p>
              <a
                href="/#/contact"
                className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-lg hover:shadow-blue-500/50"
              >
                立即開始諮詢 <ArrowRight className="inline ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
