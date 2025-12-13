import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import NutritionGuide from './components/NutritionGuide/NutritionGuide';
import Supplements from './components/NutritionGuide/Supplements';
import Vitamins from './components/NutritionGuide/Vitamins';
import WeightTraining from './components/TrainingGuide/WeightTraining';
import CardioGuide from './components/TrainingGuide/CardioGuide';
import Ebook from './pages/Ebook';
import EbookContents from './pages/EbookContents';
import './App.css';

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
        <Footer />
      </div>
    </Router>
  )
}

export default App
