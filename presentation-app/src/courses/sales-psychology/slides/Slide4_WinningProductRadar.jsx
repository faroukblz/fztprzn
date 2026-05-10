import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Sparkles,
  TrendingDown,
  DollarSign,
  CheckCircle2,
  Circle,
} from 'lucide-react';

const criteria = [
  {
    id: 'pain',
    icon: HeartPulse,
    title: 'مقياس الألم',
    en: 'Pain Killer',
    desc: 'هل يحل مشكلة يومية مزعجة؟ (أداة مطبخ، مصحح وضعية الظهر).',
    color: '#ef4444',
  },
  {
    id: 'wow',
    icon: Sparkles,
    title: 'تأثير الـ WOW',
    en: 'WOW Effect',
    desc: 'هل يلفت الانتباه من أول 3 ثوانٍ في الفيديو؟',
    color: '#f59e0b',
  },
  {
    id: 'scarcity',
    icon: TrendingDown,
    title: 'الندرة المحلية',
    en: 'Local Scarcity',
    desc: 'يصعب إيجاده في المحلات العادية أو عند البقال.',
    color: '#8b5cf6',
  },
  {
    id: 'margin',
    icon: DollarSign,
    title: 'هامش الربح',
    en: 'Profit Margin',
    desc: 'يسمح بتغطية تكلفة الإعلان والتوصيل والروتور ويترك ربحاً صافياً.',
    color: '#10b981',
  },
];

export default function Slide4_WinningProductRadar() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const score = Object.values(checked).filter(Boolean).length;
  const pct = (score / criteria.length) * 100;

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
          الشريحة ٤ — Winning Product Radar
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          رادار المنتج الرابح
        </h1>
        <p className="text-base text-white/40">
          كل معيار تحققه يقرّبك من المنتج المثالي
        </p>
      </motion.div>

      {/* Score bar */}
      <motion.div
        className="relative z-10 w-full max-w-[600px] mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/40 font-medium">نقاط الفوز — Winning Score</span>
          <span className="text-sm font-bold text-fazti-pink">{score} / {criteria.length}</span>
        </div>
        <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: pct === 100
                ? 'linear-gradient(90deg, #10b981, #06b6d4)'
                : 'linear-gradient(90deg, #982598, #e491c9)',
            }}
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          />
        </div>
        {pct === 100 && (
          <motion.p
            className="text-center text-green-400 text-xs mt-2 font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            🎯 منتج رابح — Winning Product!
          </motion.p>
        )}
      </motion.div>

      {/* Criteria cards */}
      <motion.div
        className="relative z-10 flex flex-col gap-3 w-full max-w-[600px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {criteria.map((c, idx) => {
          const Icon = c.icon;
          const isChecked = checked[c.id];

          return (
            <motion.div
              key={c.id}
              className={`glass rounded-xl p-4 border cursor-pointer transition-all select-none ${
                isChecked
                  ? 'border-green-500/30 bg-green-500/5'
                  : 'border-white/5 hover:border-white/15'
              }`}
              onClick={() => toggleCheck(c.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + idx * 0.1, type: 'spring', stiffness: 180 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <motion.div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  animate={{
                    backgroundColor: isChecked ? '#10b98130' : 'rgba(255,255,255,0.05)',
                    borderColor: isChecked ? '#10b981' : 'rgba(255,255,255,0.1)',
                  }}
                  style={{ border: '1.5px solid' }}
                >
                  {isChecked ? (
                    <CheckCircle2 size={14} className="text-green-400" />
                  ) : (
                    <Circle size={14} className="text-white/15" />
                  )}
                </motion.div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${c.color}18` }}
                >
                  <Icon size={18} style={{ color: c.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 text-right">
                  <p className="text-white font-bold text-sm">
                    {c.title}{' '}
                    <span className="text-white/25 text-xs font-normal">({c.en})</span>
                  </p>
                  <p className="text-white/40 text-[11px] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
