import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import Slide1_MarketingIceberg from './slides/Slide1_MarketingIceberg';
import Slide2_SurvivalMatrix from './slides/Slide2_SurvivalMatrix';
import Slide3_MarketingFormulas from './slides/Slide3_MarketingFormulas';
import Slide4_WinningProductRadar from './slides/Slide4_WinningProductRadar';
import Slide5_TradeBalance from './slides/Slide5_TradeBalance';
import Slide6_FacebookAnatomy from './slides/Slide6_FacebookAnatomy';
import Slide7_WhatsAppBusiness from './slides/Slide7_WhatsAppBusiness';
import Slide8_LandingPagePsychology from './slides/Slide8_LandingPagePsychology';
import Slide9_FacebookMarketplace from './slides/Slide9_FacebookMarketplace';

const slides = [
  { id: 1, component: Slide1_MarketingIceberg, title: 'جبل الجليد' },
  { id: 2, component: Slide2_SurvivalMatrix, title: 'مصفوفة النجاة' },
  { id: 3, component: Slide3_MarketingFormulas, title: 'معادلات التسويق' },
  { id: 4, component: Slide4_WinningProductRadar, title: 'المنتج الرابح' },
  { id: 5, component: Slide5_TradeBalance, title: 'مقارنة' },
  { id: 6, component: Slide6_FacebookAnatomy, title: 'تشريح الصفحة' },
  { id: 7, component: Slide7_WhatsAppBusiness, title: 'واتساب بيزنس' },
  { id: 8, component: Slide8_LandingPagePsychology, title: 'صفحة الهبوط' },
  { id: 9, component: Slide9_FacebookMarketplace, title: 'ماركتبلايس' },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? '-100%' : '100%', opacity: 0 }),
};

export default function SalesPsychologyViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((s) => s + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden noise-overlay" style={{ backgroundImage: 'url(/bg-gradient.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-950/85" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4 cursor-pointer">
          <Link to="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20">
            <Home size={16} />
            الرئيسية
          </Link>
          <img src="/logo-white.png" alt="Fazti Academy" className="h-7 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/30 text-xs font-medium tracking-wider">سيكولوجية البيع</span>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-fazti-pink text-xs font-bold">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Slide Content — scrollable */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-10 overflow-y-auto"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 1 }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <motion.button
          onClick={prevSlide}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium transition-all ${currentSlide === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
          disabled={currentSlide === 0}
          whileHover={currentSlide > 0 ? { scale: 1.05 } : {}}
          whileTap={currentSlide > 0 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft size={16} />
          السابق
        </motion.button>

        <div className="flex items-center gap-1.5">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              className={`rounded-full transition-all ${index === currentSlide ? 'w-7 h-2 bg-gradient-to-r from-fazti-purple to-fazti-pink' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              layout
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${currentSlide === slides.length - 1 ? 'glass text-white/20 cursor-not-allowed' : 'bg-gradient-to-r from-fazti-purple to-fazti-pink text-white'}`}
          disabled={currentSlide === slides.length - 1}
          whileHover={currentSlide < slides.length - 1 ? { scale: 1.05 } : {}}
          whileTap={currentSlide < slides.length - 1 ? { scale: 0.95 } : {}}
        >
          التالي
          <ChevronRight size={16} />
        </motion.button>
      </div>

      {/* Keyboard hint */}
      <motion.div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 text-white/15 text-[10px] tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        ← → Arrow Keys to Navigate
      </motion.div>
    </div>
  );
}
