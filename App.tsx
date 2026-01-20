import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';

// INP 優化：代碼分割 - 延遲載入頁面組件以減少初始 bundle 大小
const Home = lazy(() => import('./pages/Home.tsx').then(m => ({ default: m.Home })));
const Works = lazy(() => import('./pages/Works.tsx').then(m => ({ default: m.Works })));
const WorkDetail = lazy(() => import('./pages/WorkDetail.tsx').then(m => ({ default: m.WorkDetail })));
const Services = lazy(() => import('./pages/Services.tsx').then(m => ({ default: m.Services })));
const Courses = lazy(() => import('./pages/AllCourses.tsx').then(m => ({ default: m.AllCourses })));
const CourseDetail = lazy(() => import('./pages/CourseDetail.tsx').then(m => ({ default: m.CourseDetail })));
const About = lazy(() => import('./pages/About.tsx').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact.tsx').then(m => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal.tsx').then(m => ({ default: m.Legal })));

// 載入中組件
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">
    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

// 確保每次切換頁面時都回到頂部
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<WorkDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
