
import { Work, Service, TimelineItem, Course } from './types.ts';
import { WORKS_DATA } from './data/works.ts';
import { COURSES_DATA } from './data/courses.ts';

export const BRAND = {
  name: "Jacky / AIJob",
  primaryColor: "#0B1220",
  accentColor: "#3b82f6",
  email: "step1nework016@gmail.com",
  phone: "0958616744",
  line: "jacky051285",
  lineLink: "https://lin.ee/i8fixak", 
  telegram: "0958616744",
  websiteLink: "https://www.aijob.com.tw/", // 官方網站
  recruitmentLink: "https://portaly.cc/JackyChen", // 招募與顧問服務連結
  igLink: "https://www.instagram.com/aijobschool/reels/", 
  ytLink: "https://youtube.com/@aijobschool?si=MPfsiF_Hh8wQt_1v",
  threadsLink: "https://www.threads.com/@aijobschool?xmt=AQF0EHGK7JsdnZLRXqcm47S4TsAxL9fn_cMZb8HzytJxaOM",
  // 社群入口連結
  lineCommunity: "https://line.me/ti/g2/xaKhtD6TG78lZ8tOLP2T4Lz0zD-edf8GJF8x5w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  discordCommunity: "https://discord.com/invite/Dzm2P7rHyg"
};

export const COURSES: Course[] = COURSES_DATA;

export const SERVICES: Service[] = [
  {
    id: "ai-automation",
    title: "AI 流程自動化",
    description: "結合 LLM 與自動化工具（Make.com/n8n），將重複性的行政流程轉為全自動執行，節省 80% 人力成本。",
    deliverables: ["自動化工作流部署", "API 串接服務", "維運監控系統"],
    priceFrom: "依規格報價",
    icon: "Bot"
  },
  {
    id: "custom-system",
    title: "AI 應用小程式",
    description: "客製化開發符合企業邏輯的 AI 應用，包含 RAG 知識庫、專屬 Agent 及內部管理系統。",
    deliverables: ["RAG 企業知識庫", "自定義 Agent", "前端管理介面"],
    priceFrom: "依規格報價",
    icon: "Cpu"
  },
  {
    id: "education",
    title: "企業 AI 內訓與課程",
    description: "提供客製化的 AI 技術轉型工作坊，或是線上實戰課程，幫助團隊掌握 AI 生產力工具。",
    deliverables: ["技術工作坊", "專屬教材開發", "導入後追蹤輔導"],
    priceFrom: "依規格報價",
    icon: "Zap"
  }
];

export const WORKS: Work[] = WORKS_DATA;

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024/06 - 至今",
    title: "AI 應用設計師",
    company: "AIJob 實驗室",
    description: "跨領域技術實踐者。結合 HR 實務與開發技術，將 AI 落地於真實商業場景，減少企業 70% 以上的重複性行政與溝通成本。"
  },
  {
    year: "2024/01 - 至今",
    title: "獵頭顧問",
    company: "專業獵才機構",
    description: "站在人才市場最前線，深刻洞察企業招募痛點與各產業人才需求，協助企業建立高效的人才佈局。"
  },
  {
    year: "2022/03 - 2023/11",
    title: "人力資源專員 (HR)",
    company: "物流業",
    description: "負責招募與流程管理，並開始嘗試利用低代碼工具優化內部行政作業效率。"
  },
  {
    year: "2021/07 - 2022/01",
    title: "人力資源專員 (HR)",
    company: "科技業",
    description: "專注於技術人才招募，積累了與工程師深度溝通與理解技術語言的基礎。"
  },
  {
    year: "2018/06 - 2021/07",
    title: "人力資源管理研究所",
    company: "國立彰化師範大學",
    description: "深入研究組織發展與績效管理，奠定理解企業運作邏輯的學術背景。"
  },
  {
    year: "2014/06 - 2018/06",
    title: "企業管理學系",
    company: "淡江大學",
    description: "培養全面的商業經營觀點與策略分析能力。"
  }
];
