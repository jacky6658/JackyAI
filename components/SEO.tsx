import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Jacky / AIJob - AI 自動化顧問作品集',
  description = '專注於企業級 AI 流程系統開發，致力於幫助創業者從繁瑣勞動中解放。提供 AI 自動化、RAG 知識庫、客製化 AI 應用開發與企業 AI 內訓服務。',
  keywords = 'AI 自動化, AI 顧問, 企業 AI 轉型, RAG 知識庫, AI Agent, 自動化工作流, AI 開發, 數位轉型, ChatGPT, Gemini, n8n',
  image = 'https://www.aijob.com.tw/images/ogmtea.jpeg',
  url = 'https://www.aijob.com.tw/',
  type = 'website',
  siteName = 'Jacky / AIJob',
  author = 'Jacky Chen',
  publishedTime,
  modifiedTime,
  locale = 'zh_TW'
}) => {
  useEffect(() => {
    // 更新或創建 meta 標籤
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // 更新 title
    document.title = title;

    // 基礎 SEO Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph Meta Tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article Meta Tags (if type is article)
    if (type === 'article') {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (author) updateMetaTag('article:author', author, true);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // 清理函數（可選，因為我們是更新而不是新增）
    return () => {
      // 如果需要清理，可以在這裡處理
    };
  }, [title, description, keywords, image, url, type, siteName, author, publishedTime, modifiedTime, locale]);

  return null;
};
