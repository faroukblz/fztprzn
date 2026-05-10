import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ToggleLeft, ToggleRight } from 'lucide-react';

/* ---------- Confetti particles ---------- */
function Confetti() {
  const colors = ['#f472b6', '#22d3ee', '#facc15', '#a78bfa', '#34d399', '#fb923c'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${50 + (Math.random() - 0.5) * 60}%`,
            top: '50%',
          }}
          initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: -(100 + Math.random() * 200),
            x: (Math.random() - 0.5) * 200,
            opacity: [1, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 1.2 + Math.random() * 0.8, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

export default function Slide3_AlgerianMarket() {
  const [activated, setActivated] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggle = () => {
    if (!activated) {
      setActivated(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setActivated(false);
    }
  };

  return (
    <div className="slide-container flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-3 font-medium">
          الشريحة الثالثة — Slide 03
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          سر السوق الجزائري
        </h1>
        <p className="text-lg text-white/40">The Algerian Market Secret</p>
      </motion.div>

      {/* A/B Test Phones */}
      <motion.div
        className="relative w-[800px] max-w-[90vw] h-[400px] glass rounded-2xl overflow-hidden flex items-center justify-center gap-8 px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {showConfetti && <Confetti />}

        {/* Phone A — Boring */}
        <motion.div
          className={`relative w-[200px] h-[340px] rounded-[28px] border-2 flex flex-col overflow-hidden transition-all duration-700 ${
            activated
              ? 'border-white/10 opacity-40 scale-95'
              : 'border-white/20 opacity-100'
          }`}
          style={{
            background: activated
              ? 'rgba(255,255,255,0.02)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
          }}
        >
          {/* Phone notch */}
          <div className="w-16 h-4 bg-black/50 rounded-b-lg mx-auto" />
          
          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-3">
            {/* Boring image placeholder */}
            <div className="w-full h-24 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
              <span className="text-white/20 text-xs">صورة عادية</span>
            </div>
            
            {/* Boring text - formal Arabic */}
            <p className="text-white/30 text-[11px] text-center leading-relaxed" dir="rtl">
              نقدم لكم منتجاتنا الحصرية بأفضل الأسعار التنافسية في السوق الوطنية
            </p>
            
            {/* Boring CTA */}
            <div className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-center">
              <span className="text-white/30 text-xs">السعر: 4000 دج</span>
            </div>

            {/* Sad metrics */}
            <div className="flex gap-3 mt-1">
              <span className="text-red-400/60 text-[10px]">CTR: 0.3%</span>
              <span className="text-red-400/60 text-[10px]">CVR: 0.1%</span>
            </div>
          </div>

          {/* Label */}
          <div className="text-center pb-3">
            <span className="text-white/20 text-[10px]">❌ إعلان ممل</span>
          </div>
        </motion.div>

        {/* Center Toggle */}
        <div className="flex flex-col items-center gap-3 z-20">
          <motion.span
            className="text-white/20 text-[10px] tracking-wider uppercase"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VS
          </motion.span>
          
          <motion.button
            onClick={toggle}
            className={`relative px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              activated
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                : 'glass text-white/50 hover:text-white border border-white/10 hover:border-white/20'
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              {activated ? (
                <>
                  <ToggleRight size={16} />
                  مُفعّل ✨
                </>
              ) : (
                <>
                  <ToggleLeft size={16} />
                  سحر فازتي
                </>
              )}
            </span>
          </motion.button>

          <motion.span
            className="text-white/20 text-[10px]"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            اضغط للتبديل
          </motion.span>
        </div>

        {/* Phone B — Professional */}
        <motion.div
          className={`relative w-[200px] h-[340px] rounded-[28px] border-2 flex flex-col overflow-hidden transition-all duration-700 ${
            activated
              ? 'border-emerald-400/40 opacity-100 scale-105'
              : 'border-white/10 opacity-40 scale-95'
          }`}
          style={{
            background: activated
              ? 'linear-gradient(180deg, rgba(16,185,129,0.1), rgba(34,211,238,0.05))'
              : 'rgba(255,255,255,0.02)',
          }}
          animate={
            activated
              ? {
                  boxShadow: [
                    '0 0 20px rgba(16,185,129,0.2)',
                    '0 0 40px rgba(16,185,129,0.3)',
                    '0 0 20px rgba(16,185,129,0.2)',
                  ],
                }
              : { boxShadow: '0 0 0px rgba(0,0,0,0)' }
          }
          transition={{ duration: 2, repeat: activated ? Infinity : 0 }}
        >
          {/* Phone notch */}
          <div className="w-16 h-4 bg-black/50 rounded-b-lg mx-auto" />
          
          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-3">
            {/* Vibrant image placeholder */}
            <motion.div
              className="w-full h-24 rounded-lg border flex items-center justify-center overflow-hidden"
              style={{
                background: activated
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.15))'
                  : 'rgba(255,255,255,0.03)',
                borderColor: activated ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.05)',
              }}
            >
              {activated ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <Sparkles size={20} className="text-emerald-400 mx-auto mb-1" />
                  <span className="text-emerald-300 text-[10px]">صورة جذابة 🔥</span>
                </motion.div>
              ) : (
                <span className="text-white/15 text-xs">...</span>
              )}
            </motion.div>
            
            {/* Algerian dialect text */}
            <AnimatePresence mode="wait">
              {activated ? (
                <motion.p
                  key="active-text"
                  className="text-emerald-300/80 text-[11px] text-center leading-relaxed font-bold"
                  dir="rtl"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  🔥 واش راك تستنى؟ المنتج لي كلشي يحوّس عليه وصل! بزاف ناس خذاوه
                </motion.p>
              ) : (
                <motion.p
                  key="inactive-text"
                  className="text-white/15 text-[11px] text-center"
                  dir="rtl"
                >
                  ...
                </motion.p>
              )}
            </AnimatePresence>
            
            {/* Pro CTA */}
            <motion.div
              className={`w-full py-2.5 rounded-xl text-center transition-all duration-500 ${
                activated
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/3 border border-white/5'
              }`}
            >
              {activated ? (
                <motion.span
                  className="text-white text-[11px] font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  🎁 التوصيل مجاني لـ 58 ولاية
                </motion.span>
              ) : (
                <span className="text-white/15 text-xs">...</span>
              )}
            </motion.div>

            {/* Happy metrics */}
            {activated && (
              <motion.div
                className="flex gap-3 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-emerald-400 text-[10px] font-bold">CTR: 4.2%</span>
                <span className="text-emerald-400 text-[10px] font-bold">CVR: 3.1%</span>
              </motion.div>
            )}
          </div>

          {/* Label */}
          <div className="text-center pb-3">
            <span className={`text-[10px] ${activated ? 'text-emerald-400' : 'text-white/15'}`}>
              {activated ? '✅ إعلان احترافي بالدارجة' : '...'}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom insight */}
      <AnimatePresence>
        {activated && (
          <motion.div
            className="flex items-center gap-3 z-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-light text-white/50 text-xs">
              <span>💡</span>
              <span>الدارجة + عرض قوي = معدل تحويل مرتفع</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
