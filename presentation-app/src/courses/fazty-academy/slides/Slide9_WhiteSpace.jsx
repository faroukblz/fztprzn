import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

const cards = [
  { title: 'أساسيات التصميم', desc: 'مقدمة شاملة', price: '$29', gradient: 'from-fazti-navy to-fazti-purple' },
  { title: 'تصميم الشعارات', desc: 'دليل احترافي', price: '$49', gradient: 'from-fazti-purple to-fazti-pink' },
  { title: 'السوشال ميديا', desc: 'تصاميم متقدمة', price: '$39', gradient: 'from-fazti-pink to-brand-300' },
];

export default function Slide9_WhiteSpace() {
  const [space, setSpace] = useState(0);
  const normalized = space / 100;

  // Clamped values to prevent excessive growth
  const padding = Math.min(8 + normalized * 32, 40);
  const gap = Math.min(4 + normalized * 16, 20);
  const cardPad = Math.min(6 + normalized * 14, 20);
  const headerMb = Math.min(4 + normalized * 20, 24);

  const handleSliderChange = useCallback((e) => {
    setSpace(Number(e.target.value));
  }, []);

  return (
    <div className="slide-container flex-col gap-6 overflow-y-auto py-20">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10 shrink-0">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ٩ — White Space</p>
        <h1 className="text-5xl font-bold text-white mb-3">المساحة البيضاء</h1>
        <p className="text-base text-white/40">مساحة التنفس — Breathing Room</p>
      </motion.div>

      <motion.div
        className="w-[700px] max-h-[420px] rounded-2xl overflow-hidden border border-white/10 relative shrink-0"
        style={{ background: '#0d0e28' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div animate={{ padding: `${padding}px` }} transition={{ duration: 0.05 }}>
          <motion.div className="flex items-center justify-between" animate={{ marginBottom: `${headerMb}px` }} transition={{ duration: 0.05 }}>
            <img src="/logo-white.png" alt="Fazti" className="h-7 opacity-80" />
            <motion.div className="flex" animate={{ gap: `${4 + normalized * 14}px` }} transition={{ duration: 0.05 }}>
              {['الرئيسية', 'الدورات', 'المدرسين', 'تواصل'].map((item) => (
                <span key={item} className="text-white/50 text-xs whitespace-nowrap">{item}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative rounded-xl overflow-hidden" animate={{ marginBottom: `${4 + normalized * 16}px` }} transition={{ duration: 0.05 }}>
            <div className="w-full h-36 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(/bg-gradient.png)' }} />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <motion.h2 className="font-bold text-white" animate={{ fontSize: `${16 + normalized * 8}px`, marginBottom: `${2 + normalized * 8}px` }} transition={{ duration: 0.05 }}>
                أكاديمية التصميم الاحترافي
              </motion.h2>
              <p className="text-white/60 text-sm">تعلّم مهارات التصميم مع الخبراء</p>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-3" animate={{ gap: `${gap}px` }} transition={{ duration: 0.05 }}>
            {cards.map((card, idx) => (
              <motion.div key={idx} className={`bg-gradient-to-br ${card.gradient} rounded-xl`} animate={{ padding: `${cardPad}px` }} transition={{ duration: 0.05 }}>
                <motion.p className="text-white font-semibold" animate={{ fontSize: `${10 + normalized * 3}px`, marginBottom: `${2 + normalized * 4}px` }} transition={{ duration: 0.05 }}>
                  {card.title}
                </motion.p>
                <motion.p className="text-white/60" animate={{ fontSize: `${9 + normalized * 2}px`, marginBottom: `${2 + normalized * 6}px` }} transition={{ duration: 0.05 }}>
                  {card.desc}
                </motion.p>
                <div className="flex justify-between items-center">
                  <span className="text-fazti-cream font-bold text-sm">{card.price}</span>
                  <motion.div className="bg-white/20 rounded-full text-white font-medium" animate={{ padding: `${2 + normalized * 3}px ${6 + normalized * 6}px`, fontSize: `${8 + normalized * 2}px` }} transition={{ duration: 0.05 }}>
                    سجّل
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="absolute top-4 left-4 z-20 glass rounded-full px-3 py-1" layout>
          <span className="text-xs text-white/50">
            {space < 30 ? '😰 ضيّق — Cramped' : space < 70 ? '😊 أفضل — Better' : '✨ مريح — Breathable'}
          </span>
        </motion.div>
      </motion.div>

      {/* Slider control — always stays accessible with high z-index */}
      <motion.div
        className="glass rounded-2xl p-6 w-[700px] flex items-center gap-6 z-30 relative shrink-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SlidersHorizontal size={20} className="text-fazti-pink shrink-0" />
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-white/40 text-xs">ضيّق — Cramped</span>
            <span className="text-white/40 text-xs">واسع — Spacious</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={space}
            onChange={handleSliderChange}
            className="w-full cursor-grab active:cursor-grabbing"
            style={{ position: 'relative', zIndex: 50 }}
          />
        </div>
        <div className="glass-light rounded-lg px-4 py-2 min-w-[60px] text-center">
          <span className="text-fazti-pink font-bold text-lg">{space}%</span>
        </div>
      </motion.div>
    </div>
  );
}
