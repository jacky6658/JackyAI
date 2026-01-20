
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
  telegram: "0958616744",
  portfolioPdf: "/portfolio.pdf",
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
    year: "2023 - Present",
    title: "獨立顧問 / AI 系統開發者",
    company: "AIJob 實驗室",
    description: "協助 50+ 企業導入 AI 自動化流程，專注於 LLM 應用落地與系統整合。"
  },
  {
    year: "2021 - 2023",
    title: "資深全端工程師",
    company: "某知名科技新創",
    description: "主導核心產品的技術選型與前端架構優化。"
  }
];
