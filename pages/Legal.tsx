
import React from 'react';
import { SEO } from '../components/SEO.tsx';

export const Legal: React.FC = () => {
  return (
    <>
      <SEO
        title="隱私政策與使用條款 | Jacky / AIJob"
        description="Jacky / AIJob 的隱私權政策與使用條款，說明我們如何收集、使用和保護您的個人資訊。"
        keywords="隱私政策, 使用條款, 個人資料保護, 隱私權"
        url="https://www.aijob.com.tw/#/legal"
      />
      <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-12">法律資訊與隱私政策</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-blue-400">隱私權政策</h2>
        <div className="prose prose-invert prose-slate text-slate-400">
          <p>我們非常重視您的隱私。本網站（下稱「本站」）收集的資訊僅用於以下用途：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>回覆您的諮詢需求。</li>
            <li>改進本站的使用者體驗。</li>
            <li>根據您的意願發送相關技術資訊或服務更新。</li>
          </ul>
          <p>我們絕不會將您的個人資訊出售、出租或洩漏給第三方機構。</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-blue-400">服務條款</h2>
        <div className="prose prose-invert prose-slate text-slate-400">
          <p>當您瀏覽或使用本站提供的服務時，即視為您同意以下條款：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>本站內容僅供參考，不構成正式的技術背書或法律建議。</li>
            <li>專案合作需另行簽署具法律效力的合約，一切權利義務以合約書為準。</li>
            <li>本站所有設計、文字與代碼版權均屬 Jacky / AIJob 所有，未經許可不得轉載。</li>
          </ul>
        </div>
      </section>

      <div className="pt-12 border-t border-slate-800 text-slate-500 text-sm">
        最後更新日期：2024年3月
      </div>
    </div>
    </>
  );
};
