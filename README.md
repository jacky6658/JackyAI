# Jacky / AIJob - AI 自動化顧問作品集

<div align="center">
  <img width="1200" height="475" alt="Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📖 專案簡介

這是一個專業的 AI 自動化顧問作品集網站，展示 Jacky / AIJob 在 AI 自動化、流程系統與客製化 AI 解決方案方面的專業能力與作品。

### ✨ 主要功能

- 🏠 **首頁展示** - 個人介紹與核心服務展示
- 💼 **作品集** - 詳細展示 AI 自動化相關專案
- 📚 **課程資訊** - AI 相關課程與教學內容
- 🛠️ **服務項目** - AI 流程自動化、系統開發等服務說明
- 📞 **聯絡資訊** - 多種聯絡方式與社群連結
- 📄 **法律聲明** - 隱私政策與使用條款

### 🛠️ 技術棧

- **前端框架**: React 19 + TypeScript
- **建置工具**: Vite 6
- **路由**: React Router DOM (HashRouter)
- **動畫**: Framer Motion
- **樣式**: Tailwind CSS
- **圖標**: Lucide React
- **AI 整合**: Google Gemini API

## 🚀 快速開始

### 環境需求

- Node.js 18+ 
- npm 或 yarn 或 pnpm

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone <your-repo-url>
   cd JackyAI-main
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **設置環境變數**
   
   在專案根目錄創建 `.env.local` 文件：
   ```bash
   touch .env.local
   ```
   
   在 `.env.local` 中設置您的 Gemini API Key：
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   > 💡 **取得 API Key**: 前往 [Google AI Studio](https://aistudio.google.com/app/apikey) 申請您的 Gemini API Key

4. **啟動開發伺服器**
   ```bash
   npm run dev
   ```
   
   專案將在 `http://localhost:3000` 運行

### 📜 可用指令

- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建置生產版本
- `npm run preview` - 預覽生產版本

## 🌐 部署到 Zeabur

### 部署前準備

1. **確保環境變數設置**
   - 在 Zeabur 專案設置中添加環境變數 `GEMINI_API_KEY`
   - 值為您的 Google Gemini API Key

2. **檢查建置配置**
   - 專案已配置 `vite.config.ts`，支援自動建置
   - 建置輸出目錄為 `dist`

### Zeabur 部署步驟

1. **連接 GitHub 倉庫**
   - 在 Zeabur 控制台選擇「從 GitHub 匯入」
   - 選擇此專案倉庫

2. **自動偵測**
   - Zeabur 會自動偵測為 Vite 專案
   - 自動設置建置指令：`npm run build`
   - 自動設置啟動指令：`npm run preview`（或使用靜態文件服務）

3. **設置環境變數**
   - 在 Zeabur 專案設置 → 環境變數
   - 添加 `GEMINI_API_KEY` 並填入您的 API Key

4. **部署**
   - 點擊「部署」按鈕
   - 等待建置完成

### ⚠️ 注意事項

- Zeabur 會自動偵測 Vite 專案並使用適當的建置配置
- 如果使用 HashRouter，確保 Zeabur 配置為 SPA（單頁應用）
- **環境變數需要在 Zeabur 控制台手動設置**，不會從 `.env.local` 讀取
- 確保在 Zeabur 的 **Build 階段**設置環境變數，因為 Vite 在 build 時需要讀取環境變數

### 📋 部署檢查清單

部署前請確認：

- [x] `package.json` 存在且包含建置腳本
- [x] `vite.config.ts` 配置正確
- [x] `index.html` 位於根目錄
- [ ] 已在 Zeabur 設置 `GEMINI_API_KEY` 環境變數
- [ ] Gemini API Key 有效且有足夠配額

> 📖 更詳細的部署說明請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 專案結構

```
JackyAI-main/
├── components/          # 共用組件
│   └── Layout.tsx      # 主要佈局組件
├── pages/              # 頁面組件
│   ├── Home.tsx        # 首頁
│   ├── Works.tsx       # 作品列表
│   ├── WorkDetail.tsx  # 作品詳情
│   ├── Services.tsx    # 服務頁面
│   ├── AllCourses.tsx  # 課程列表
│   ├── CourseDetail.tsx # 課程詳情
│   ├── About.tsx       # 關於頁面
│   ├── Contact.tsx     # 聯絡頁面
│   └── Legal.tsx       # 法律聲明
├── data/               # 資料檔案
│   ├── works.ts        # 作品資料
│   └── courses.ts      # 課程資料
├── App.tsx             # 應用程式入口
├── constants.tsx       # 常數定義
├── types.ts            # TypeScript 類型定義
├── vite.config.ts      # Vite 配置
└── package.json        # 專案依賴
```

## 🔧 開發說明

### 路由配置

專案使用 `HashRouter`，所有路由都使用 hash 模式（`#/path`），這對於靜態部署更友好。

### 環境變數

- `GEMINI_API_KEY`: Google Gemini API 金鑰（用於 AI 功能整合）

### 自訂配置

主要品牌資訊與聯絡方式可在 `constants.tsx` 中修改：
- 品牌名稱與顏色
- 聯絡資訊（Email、電話、LINE 等）
- 社群媒體連結

## 📝 授權

此專案為個人作品集專案。

## 📧 聯絡方式

- **Email**: step1nework016@gmail.com
- **LINE**: jacky051285
- **官方網站**: https://www.aijob.com.tw/

---

**Built with ❤️ using React + Vite + TypeScript**
