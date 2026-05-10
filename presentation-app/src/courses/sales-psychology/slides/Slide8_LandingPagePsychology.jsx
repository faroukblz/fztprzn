import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Target,
  Eye,
  ArrowRight,
  ShoppingCart,
  Shuffle,
  Zap,
} from 'lucide-react';

const concepts = [
  {
    id: 'paradox',
    icon: Brain,
    emoji: '😵',
    title: 'مفارقة الخيارات',
    en: 'Paradox of Choice',
    desc: 'عندما تعطي الزبون 20 خياراً، يتشتت دماغه ويؤجل الشراء، ثم ينسى!',
    color: '#ef4444',
  },
  {
    id: 'focus',
    icon: Target,
    emoji: '🎯',
    title: 'قوة التركيز',
    en: 'Laser Focus',
    desc: 'صفحة الهبوط تصطاد زبوناً جاء من أجل حل واحد. لا تشتته بمنتجات أخرى حتى يكمل الطلب.',
    color: '#10b981',
  },
  {
    id: 'fpattern',
    icon: Eye,
    emoji: '👁️',
    title: 'نمط القراءة',
    en: 'F-Pattern',
    desc: 'الزبون لا يقرأ كل شيء، هو يعمل Scan.. لذلك نضع الفوائد في نقاط ونبرز زر "اطلب الآن" بلون فاقع.',
    color: '#3b82f6',
  },
];

export default function Slide8_LandingPagePsychology() {
  const [activeView, setActiveView] = useState('maze'); // 'maze' | 'highway'

  return (
    <div className="slide-container flex-col gap-6 py-14 overflow-y-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">
          الشريحة ٨ — Landing Page Psychology
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          المتاهة مقابل الطريق السريع
        </h1>
        <p className="text-base text-white/40">
          لماذا صفحة الهبوط أقوى من المتجر العام
        </p>
      </motion.div>

      {/* Split Visual */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveView('maze')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'maze'
                ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            <Shuffle size={13} />
            المتاهة — Multi Store
          </button>
          <ArrowRight size={14} className="text-white/20" />
          <button
            onClick={() => setActiveView('highway')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'highway'
                ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            <Zap size={13} />
            الطريق السريع — Landing Page
          </button>
        </div>

        {/* Split content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Maze side */}
          <motion.div
            className={`glass rounded-2xl p-6 border transition-all ${
              activeView === 'maze'
                ? 'border-red-500/20 ring-1 ring-red-500/10'
                : 'border-white/5 opacity-50'
            }`}
            animate={{ scale: activeView === 'maze' ? 1 : 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="text-center mb-4">
              <span className="text-3xl">😵</span>
              <p className="text-red-400 font-bold text-sm mt-2">متجر عام (20+ منتج)</p>
              <p className="text-white/25 text-[10px]">Multi-Product Store</p>
            </div>
            {/* Maze pattern */}
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded bg-white/5 border border-white/5"
                  animate={activeView === 'maze' ? {
                    opacity: [0.3, 0.8, 0.3],
                    borderColor: ['rgba(255,255,255,0.05)', 'rgba(239,68,68,0.2)', 'rgba(255,255,255,0.05)'],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
            <p className="text-white/30 text-[11px] text-center">الزبون يتشتت بين الخيارات ويغادر</p>
          </motion.div>

          {/* Highway side */}
          <motion.div
            className={`glass rounded-2xl p-6 border transition-all ${
              activeView === 'highway'
                ? 'border-green-500/20 ring-1 ring-green-500/10'
                : 'border-white/5 opacity-50'
            }`}
            animate={{ scale: activeView === 'highway' ? 1 : 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="text-center mb-4">
              <span className="text-3xl">🎯</span>
              <p className="text-green-400 font-bold text-sm mt-2">صفحة هبوط (منتج واحد)</p>
              <p className="text-white/25 text-[10px]">Single-Product Landing Page</p>
            </div>
            {/* Straight path */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="w-full h-8 rounded bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-white/30 text-[10px]">✍️ عنوان جذاب</span>
              </div>
              <div className="w-4/5 h-6 rounded bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-white/20 text-[9px]">📝 فوائد في نقاط</span>
              </div>
              <div className="w-3/5 h-6 rounded bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-white/20 text-[9px]">⭐ آراء العملاء</span>
              </div>
              <motion.div
                className="w-2/3 h-10 rounded-full flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
                animate={activeView === 'highway' ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ShoppingCart size={14} className="text-white" />
                <span className="text-white text-xs font-bold">اطلب الآن 🛒</span>
              </motion.div>
            </div>
            <p className="text-white/30 text-[11px] text-center">مسار واضح → تحويل أعلى</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Concept cards */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {concepts.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.id}
              className="glass rounded-xl p-4 border border-white/5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
            >
              <div
                className="w-9 h-9 rounded-lg mx-auto mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${c.color}18` }}
              >
                <Icon size={16} style={{ color: c.color }} />
              </div>
              <p className="text-white font-bold text-xs mb-0.5">{c.title}</p>
              <p className="text-white/25 text-[10px] mb-2">({c.en})</p>
              <p className="text-white/40 text-[10px] leading-relaxed">{c.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
