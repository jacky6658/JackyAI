
import { Work } from '../types.ts';

export const WORKS_DATA: Work[] = [
  {
    slug: "reelmind-ai-video-agent",
    title: "ReelMind 短影音智能體",
    shortName: "ReelMind",
    summary: "業界領先的 AI 短影音全流程自動化系統，實現從趨勢洞察到成品發布的 24/7 解決方案。",
    problem: "內容創作者面臨選題枯竭與剪輯低效痛點。傳統流程難以支撐矩陣帳號的高頻更新需求。",
    solution: "打造基於 Gemini 多模態模型的 ReelMind 引擎，整合趨勢監控與情緒腳本引擎，實現腳本自動排程與影音渲染。",
    role: "短影音腳本 / 帳號定位 / 自動化排程",
    stack: ["Gemini", "Python", "FastAPI", "SQL", "FFmpeg"],
    year: "2024",
    industry: "Content Tech / Automation",
    tags: ["AI Agent", "Content Tech", "Automation"],
    metrics: [
      { label: "單片生產時間", value: "< 5min" },
      { label: "內容產出規模", value: "+1000%" }
    ],
    showcase: [
      {
        title: "四大矩陣架構",
        description: "整合監控、腳本、合成與發布四大模組，打造短影音影音工廠。",
        images: ["https://static.wixstatic.com/media/9705bb_3fb94794cc444a509d1af198b64a9872~mv2.png"]
      }
    ],
    highlights: [
      "Gemini 多模態驅動：精準分析全網影音趨勢並自動生成腳本",
      "智慧帳號定位：根據品牌屬性自動產出差異化人設",
      "高性能架構：利用 FastAPI 處理高併發渲染請求"
    ],
    results: [
      "單支影片製作成本降低 95%，解放大量人力",
      "協助客戶單月播放量實現百萬級成長",
      "建構了完整的「定位-腳本-渲染」閉環"
    ],
    links: {
      website: "https://reelmind.aijob.com.tw/",
      video: "https://youtu.be/j-kkZjdNyXA?si=Rmp4MDf0pB-NC4x5"
    },
    exploration: {
      title: "掌控影音流量的智慧大腦",
      description: "不再靠感覺拍片。透過數據與 AI 的結合，讓您的每一支影片都具備爆款基因。",
      features: [
        { title: "全網趨勢掃描", description: "追蹤特定領域的 24 小時熱點，自動匹配您的帳號風格。", icon: "SearchCode" },
        { title: "情緒熱力圖", description: "分析評論區觀眾反饋，精準鎖定觀眾最想看的痛點內容。", icon: "BarChart3" }
      ]
    },
    coverImage: "https://static.wixstatic.com/media/9705bb_3e539c1ff5904cc68dd509adf0b83804~mv2.png",
    galleryImages: []
  },
  {
    slug: "recruit-ai-agent",
    title: "RecruitAI：AI 智能招募與面試系統",
    shortName: "RecruitAI",
    summary: "專為人資部門打造的 AI 招募助理，自動篩選海量簡歷並進行初步人才畫像分析，節省 70% 招聘時間。",
    problem: "傳統招募流程中，人工篩選履歷極其耗時，且難以從零散的簡歷中快速辨識人才的真實優劣勢與職位匹配度。",
    solution: "開發具備 RAG 能力的面試智能體，支持「拖曳式履歷分析」，自動生成結構化的人才畫像，並提供可匯出的 PDF 深度評估報告。",
    role: "AI 智能體設計 / 履歷解析系統 / RAG 架構",
    stack: ["OpenAI API", "React", "Node.js", "Python", "Pinecone"],
    year: "2023",
    industry: "HR Tech",
    tags: ["AI Agent", "HR Tech", "RAG"],
    metrics: [
      { label: "履歷篩選速度", value: "Instant" },
      { label: "流程節省時間", value: "70%" }
    ],
    showcase: [
      {
        title: "RecruitAI 功能主介面",
        description: "一站式招募管理中心，清楚呈現所有候選人的處理進度與初步評分。",
        images: ["https://static.wixstatic.com/media/9705bb_1cb3013c650344b98cad4b9df6b784f3~mv2.png"]
      },
      {
        title: "人才畫像生成器 (拖曳解析)",
        description: "使用者僅需將候選人履歷拖入系統，AI 即可自動整理優劣勢分析、技能匹配度與面試建議。",
        images: ["https://static.wixstatic.com/media/9705bb_5662bbd499a546998f7358be0af71966~mv2.png"]
      },
      {
        title: "PDF 深度分析報告匯出",
        description: "一鍵生成專業的人才評估 PDF 報告，方便人資主管與跨部門主管進行最終決策。",
        images: ["https://static.wixstatic.com/media/9705bb_bcb61cdc798e48dfb24574784591d96a~mv2.png"]
      }
    ],
    highlights: [
      "拖曳式履歷分析：支援多格式 PDF/Word 履歷，自動提取關鍵資訊",
      "人才畫像系統：AI 自動生成候選人的雷達圖與標籤，優劣勢一目瞭然",
      "專業報告匯出：符合企業規範的 PDF 評估報表，節省行政整理時間"
    ],
    results: [
      "協助知名企業在校園招聘期間，日均處理量提升 5 倍以上",
      "人資團隊的反饋精準度滿意度高達 90%",
      "大幅縮減招募週期，平均錄取一位候選人的時間縮短了兩週"
    ],
    links: {
      website: "https://recruit.aijob.com.tw/"
    },
    exploration: {
      title: "重新定義高效招募",
      description: "不再埋首於履歷堆中，讓 AI 幫您發掘真正的千里馬。",
      features: [
        { title: "人才矩陣分析", description: "自動對比多位候選人的技能分佈，給出客觀的排行建議。", icon: "Target" },
        { title: "自動面試題庫", description: "針對候選人的背景缺點，自動生成針對性的面試問題。", icon: "MessageSquareText" }
      ]
    },
    coverImage: "https://static.wixstatic.com/media/9705bb_1cb3013c650344b98cad4b9df6b784f3~mv2.png",
    galleryImages: []
  },
  {
    slug: "ai-versatile-toolbox",
    title: "AI 全能工具箱：企業級助手整合平台",
    shortName: "AI Toolbox",
    summary: "專為企業與個人創業者打造的高效 AI 入口，整合常用的企業級 AI 助理工具，讓「一人公司」也能擁有百人團隊的生產效率。",
    problem: "中小型企業或個人創業者常面臨 AI 工具過於分散、訂閱成本高昂、且通用型 AI 缺乏針對特定業務流程優化的痛點。",
    solution: "打造一站式 Web 工具入口，整合 RAG 企業知識庫、多模型對話中樞 (Multi-LLM) 與自動化部署架構，預載多種「AI 數位員工」工具。",
    role: "平台架構設計 / RAG 系統部署 / 多模型 API 整合",
    stack: ["Next.js", "Gemini / GPT-4", "Supabase", "Tailwind CSS", "Vercel"],
    year: "2024",
    industry: "SaaS / Corporate Productivity",
    tags: ["Platform", "RAG", "Automation"],
    metrics: [
      { label: "人均產值提升", value: "300%" },
      { label: "流程自動化率", value: "85%" }
    ],
    showcase: [
      {
        title: "智能入口：企業級管理介面",
        description: "直覺的可視化儀表板，整合多維度 AI 工具與權限控管。",
        images: ["https://static.wixstatic.com/media/9705bb_5b2d970227eb424ca5c0c515e2a1bd8c~mv2.png"]
      }
    ],
    highlights: [
      "企業級資安管控：支持私有雲部署，確保企業數據不外流",
      "指令庫同步系統：團隊共用高品質 Prompt，將經驗數位化為組織資產",
      "靈活插件擴充：支援 Google Search 與 Python Code Interpreter"
    ],
    results: [
      "成功對接多家上市公司，將其行政與內容產製效率提升 200%",
      "建立完整的企業知識傳承體系，大幅縮短培訓週期",
      "優化 AI 軟體訂閱預算，實現單一視窗管理多模型帳戶"
    ],
    links: {
      website: "https://toolbox.aijob.com.tw/"
    },
    exploration: {
      title: "企業智慧化的最後一哩路",
      description: "我們不只提供工具，更提供一套完整的人機協作解決方案。",
      features: [
        { title: "Agent 工作流", description: "將複雜任務自動拆解為多步執行，一鍵完成自動化流程。", icon: "Brain" },
        { title: "數據洞察", description: "統計全團隊 AI 使用頻率與價值轉化報告。", icon: "BarChart3" }
      ]
    },
    coverImage: "https://static.wixstatic.com/media/9705bb_5b2d970227eb424ca5c0c515e2a1bd8c~mv2.png",
    galleryImages: []
  },
  {
    slug: "youtube-war-room",
    title: "YouTube 戰情室：爆款追蹤智能體",
    shortName: "YT WarRoom",
    summary: "利用 AI 協助您的頻道 analysis，搜尋全網高流量影片並自動產出選題建議，精準經營 Shorts 短影音。",
    problem: "創作者難以從海量影音數據中辨識真正的流量密碼，且手動監測競品動向極度耗時，導致創作始終慢人一步。",
    solution: "串接 YouTube Data API 建立即時監測體系，結合 Gemini 分析熱門影片腳本。提供「AI 續集預測」功能，直接產出高轉化提示詞，並整合自動化發布流。",
    role: "頻道數據分析 / 選題提示詞優化 / 自動化排程架構",
    stack: ["Gemini", "Python", "Next.js", "YouTube API", "n8n"],
    year: "2024",
    industry: "Media Tech / AI Data",
    tags: ["AI Agent", "Media Tech", "Data Analysis"],
    metrics: [
      { label: "選題優化效率", value: "+75%" },
      { label: "平均觀看漲幅", value: "+60%" }
    ],
    showcase: [
      {
        title: "戰情室數據儀表板",
        description: "一站式監控頻道健康度與全網熱點，將複雜的 API 數據轉化為決策關鍵指標。",
        images: ["https://static.wixstatic.com/media/9705bb_0ffb168b437e4c98a2717b7f8c7263c7~mv2.png"]
      }
    ],
    highlights: [
      "即時流量偵測：自動識別賽道內漲粉最快的爆款影片",
      "逆向腳本工程：AI 自動拆解熱門影片的開頭與轉場邏輯",
      "自動化經營 Shorts：針對短影音算法優化，提升推薦權重"
    ],
    results: [
      "協助多家 MCN 機構建立標準化的 AI 數據決策工作流",
      "單一頻道在導入後 30 天內，Shorts 總播放量突破百萬次",
      "大幅降低內容團隊在「選題調研」階段的人力成本 80%"
    ],
    links: {
      website: "https://ytvideojacky.zeabur.app/",
      video: "https://www.youtube.com/shorts/0mVZPKiK2dY"
    },
    coverImage: "https://static.wixstatic.com/media/9705bb_0ffb168b437e4c98a2717b7f8c7263c7~mv2.png",
    galleryImages: []
  }
];
