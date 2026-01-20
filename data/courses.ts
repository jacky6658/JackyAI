import { Course } from '../types.ts';

export const COURSES_DATA: Course[] = [
  {
    id: "ai-automation-masterclass",
    slug: "ai-automation-masterclass",
    title: "AI 自動化工作流實戰營",
    subtitle: "用 n8n 打造 24 小時運行的 AI 行銷大腦",
    description: "專為行銷人與創業者設計。我們帶你用 n8n 這個強大工具，將 ChatGPT、LINE、社群與表單串接成自動化行銷引擎。告別瑣碎執行，讓 AI 幫你處理客戶分群與標籤，釋放創意生產力。",
    tags: ["n8n", "AI 行銷", "自動化"],
    studentCount: "500+",
    duration: "12 小時",
    price: "NT$ 3,500",
    link: "https://www.pressplay.cc/link/s/A3D18E32",
    coverImage: "https://static.wixstatic.com/media/9705bb_650f30cbdd5040679358c3337425267d~mv2.jpg",
    outcomes: [
      "掌握 n8n 視覺化工具：像玩樂高一樣串接 ChatGPT、LINE 與 Google 表單",
      "打造 AI 智慧客服：24/7 自動處理客戶諮詢、分群與精準貼標籤",
      "建立行銷自動化流程：實現個人化的 Marketing Automation，提升轉化率",
      "升級自動化思維：學會用「系統化」的角度解決所有重複性工作痛點",
      "獲得 5 組行銷實戰藍圖：結課後立即部署到你的業務場景中"
    ],
    targetAudience: [
      "被瑣碎執行工作綁架、渴望專注策略的行銷人員",
      "想提升團隊效率、縮減人力成本的電商創業者",
      "追求 Marketing Automation 與數位轉型的企業主",
      "想學習 n8n 低代碼開發技術的數位職人"
    ],
    curriculum: [
      {
        title: "第一階段：n8n 基礎與 AI 整合思維",
        items: [
          "為什麼 n8n 是行銷人的最強武器？",
          "環境建置與介面解析：從第一個 Workflow 開始",
          "資料流的邏輯：HTTP Request、Webhook 與 JSON 解析"
        ]
      },
      {
        title: "第二階段：實戰：打造 24/7 AI 智慧客服",
        items: [
          "串接 LINE/FB Messenger 與 ChatGPT API",
          "自動化客戶特徵識別與精準標籤系統",
          "多輪對話設計：讓 AI 像真人一樣引導潛在客戶"
        ]
      },
      {
        title: "第三階段：進階：個人化行銷自動化引擎",
        items: [
          "Marketing Automation 流程設計：從獲客到轉化的自動導航",
          "整合 Google Sheets 與 CRM：數據自動歸檔與成效追蹤",
          "錯誤監控與通知系統：確保行銷大腦永不停機"
        ]
      }
    ]
  },
  {
    id: "ai-senior-life",
    slug: "ai-senior-life",
    title: "AI樂齡生活：輕鬆學會ChatGPT，讓科技成為生活好幫手",
    subtitle: "專為銀髮族設計的數位賦能課，用對話跨越科技溝通鴻溝",
    description: "這是一場溫溫的科技應用旅程。專為長輩量身打造，將複雜的 AI 技術轉化為食、衣、住、行、醫的實用工具。我們將帶領您從零開始，把 AI 變成隨身貼心的生活管家，為優雅老後加分。",
    tags: ["樂齡學習", "ChatGPT", "數位轉型"],
    studentCount: "150+",
    duration: "8 小時",
    price: "NT$ 399",
    link: "https://www.pressplay.cc/project/077766024AF6A7A71BB083B54D17C68A/about",
    coverImage: "https://static.wixstatic.com/media/9705bb_25859e666a624034bb099c6cfff2c4fc~mv2.jpg",
    outcomes: [
      "完全掌握：無需輸入複雜指令，用語音就能隨時召喚 AI 助手",
      "健康守護：學會查詢藥物交互作用、解讀健檢報告重點",
      "旅遊無礙：從簽證諮詢到當地私房景點，一鍵生成個人化行程",
      "語言橋樑：即時翻譯、口語練習，讓您與外籍看護或國外路人溝通無礙",
      "安全防護：具備辨識 AI 偽造訊息與網路詐騙的高級警覺力"
    ],
    targetAudience: [
      "想用科技讓生活更便利、更豐富的 50+ 樂齡族群",
      "希望能與子女、孫輩有共同科技話題的長輩",
      "想幫父母報名，讓科技成為父母生活助力的科技先行者",
      "社區關懷據點、高齡教育工作者"
    ],
    curriculum: [
      {
        title: "章節一：迎接 AI 時代的智慧新生活",
        items: [
          "ChatGPT 基礎認識：它不是機器，是您的隨身顧問",
          "帳號註冊與環境設定：一步步帶您設定親切的中文介面",
          "互動的藝術：如何「說」出精準需求，讓 AI 懂您的心"
        ]
      },
      {
        title: "章節二：生活萬事通，AI 幫您出主意",
        items: [
          "【健康百科】解讀專業術語，查詢藥物交互作用、解讀健檢報告重點",
          "【美味實驗室】冰箱剩菜大變身，AI 幫您規劃每日菜單",
          "【旅遊策展】從預算規劃到地圖導航，打造專屬旅遊地圖"
        ]
      },
      {
        title: "章節三：打破隔閡，讓科技更溫馨",
        items: [
          "【即時翻譯】出國不用怕！手機就是您的隨身翻譯官",
          "【回憶紀錄】整理老照片與故事，讓 AI 幫您撰寫生活回憶錄",
          "【防詐雷達】破解科技騙局，保護您的財產安全"
        ]
      }
    ]
  },
  {
    id: "ai-short-video-agent",
    slug: "ai-short-video-agent",
    title: "AI 短影音智能體課程｜腳本選題定位全自動 × 一年授權",
    subtitle: "打造不眠不休的短影音影音工廠，讓 AI 承包你的流量生意",
    description: "短影音時代，速度就是金錢。本課程教你如何構建一套全自動的 AI 短影音生產系統。從大數據自動選題、AI 自動生成爆款腳本，到自動化剪輯與分發。這不只是一門課，更是一套能讓你內容產出效率提升 100 倍的生產工具。",
    tags: ["短影音", "AI Agent", "自動化"],
    studentCount: "420+",
    duration: "10 小時",
    price: "NT$ 4,788",
    link: "https://www.pressplay.cc/project/878FECCAFF2CC900BB430B2F4B36DE40/about",
    coverImage: "https://static.wixstatic.com/media/9705bb_2a4bd91eef6d48898e62a065a074028c~mv2.jpg",
    outcomes: [
      "自動選題系統：學會讓 AI 監測熱門話題並自動匹配你的帳號定位",
      "爆款腳本 Agent：建立具備黃金 3 秒開頭、情緒轉折與導流行動的腳本範本",
      "分鏡自動化：串接 Midjourney 與 Stable Diffusion，一鍵產出高品質分鏡圖",
      "一年期智能體授權：直接獲得開發好的 AI 影音助理工具使用權限",
      "多平台分發策略：掌握 TikTok、Shorts、Reels 的算法機制與自動化上傳"
    ],
    targetAudience: [
      "希望減少內容產出時間的短影音創作者與 KOL",
      "想透過 AI 低成本測試多個帳號賽道的影音工作室",
      "需要大量短影音素材進行精準引流的電商團隊",
      "對 AI Agent 應用場景感興趣的技術愛好者"
    ],
    curriculum: [
      {
        title: "核心策略：AI 定位與爆款基因",
        items: [
          "解構短影音演算法：AI 如何幫你找到受眾",
          "建立專屬 AI 選題庫：自動監測 24 小時熱門趨勢",
          "Prompt Engineering：讓 AI 寫出有靈魂、有轉折的文案"
        ]
      },
      {
        title: "實戰開發：建立你的 AI 影音助理",
        items: [
          "利用 Dify/Coze 搭建腳本生成智能體",
          "視覺自動化：AI 生產分鏡、配圖與人聲配音整合",
          "工作流串接：將腳本、配音、畫面一鍵同步至剪輯工具"
        ]
      },
      {
        title: "流量變現：自動化營運與數據追蹤",
        items: [
          "多帳號自動化管理流程部署",
          "數據監測 Agent：自動分析評論區情緒與成效優化建議",
          "一年授權工具包安裝與使用指南"
        ]
      }
    ]
  }
];