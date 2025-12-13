import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './App.css';

// Lazy load pages and heavy components
const Home = lazy(() => import('./pages/Home'));
const NutritionGuide = lazy(() => import('./components/NutritionGuide/NutritionGuide'));
const Supplements = lazy(() => import('./components/NutritionGuide/Supplements'));
const Vitamins = lazy(() => import('./components/NutritionGuide/Vitamins'));
const WeightTraining = lazy(() => import('./components/TrainingGuide/WeightTraining'));
const CardioGuide = lazy(() => import('./components/TrainingGuide/CardioGuide'));
const Ebook = lazy(() => import('./pages/Ebook'));
const EbookContents = lazy(() => import('./pages/EbookContents'));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    width: '100%',
    color: '#ff6600'
  }}>
    <div>Yükleniyor...</div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/besin-rehberi" element={<NutritionGuide />} />
            <Route path="/supplement-rehberi" element={<Supplements />} />
            <Route path="/vitamin-rehberi" element={<Vitamins />} />
            <Route path="/agirlik-antrenmani" element={<WeightTraining />} />
            <Route path="/kardiyo-rehberi" element={<CardioGuide />} />
            <Route path="/e-kitap" element={<Ebook />} />
            <Route path="/e-kitap-icindekiler" element={<EbookContents />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
