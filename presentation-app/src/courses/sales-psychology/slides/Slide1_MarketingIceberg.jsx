import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mountain,
  Waves,
  Lightbulb,
  Eye,
  ShieldCheck,
  Crown,
  HeartPulse,
  Play,
} from 'lucide-react';

const tipItems = [
  { label: 'اللون', en: 'Color' },
  { label: 'الحجم', en: 'Size' },
  { label: 'السعر', en: 'Price' },
  { label: 'المادة', en: 'Material' },
];

const baseItems = [
  { icon: HeartPulse, label: 'الهروب من الألم', desc: 'توفير الجهد والوقت', color: '#ef4444' },
  { icon: Crown, label: 'المكانة الاجتماعية', desc: 'الظهور بمظهر أنيق وغني', color: '#f59e0b' },
  { icon: ShieldCheck, label: 'الشعور بالأمان', desc: 'حماية العائلة والسيارة', color: '#06b6d4' },
];

export default function Slide1_MarketingIceberg() {
  const [revealed, setRevealed] = useState(false);

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
          الشريحة ١ — The Marketing Iceberg
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          جبل الجليد التسويقي
        </h1>
        <p className="text-base text-white/40">
          ما تراه ليس كل ما يُباع
        </p>
      </motion.div>

      {/* Iceberg Visual */}
      <motion.div
        className="relative z-10 w-full max-w-[700px] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Water line */}
        <div className="relative">
          {/* ── TIP (Above water) ── */}
          <motion.div
            className="relative glass rounded-t-2xl border border-white/10 p-6 pb-4"
            style={{ borderBottom: 'none' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Mountain size={18} className="text-white/50" />
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                القمة — ما يراه المبتدئ (10%)
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {tipItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.label}
                  <span className="text-white/25 text-xs ml-1">({item.en})</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Water line divider */}
          <div className="relative h-8 flex items-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10"
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-full flex items-center gap-2 px-4">
              <Waves size={16} className="text-blue-400/50" />
              <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40" />
              <span className="text-[10px] text-blue-300/50 tracking-wider">WATERLINE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40" />
              <Waves size={16} className="text-blue-400/50" />
            </div>
          </div>

          {/* ── BASE (Below water) ── */}
          <AnimatePresence>
            {revealed ? (
              <motion.div
                className="glass rounded-b-2xl border border-white/10 p-6 pt-4"
                style={{ borderTop: 'none', background: 'rgba(21, 23, 61, 0.8)' }}
                initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', paddingTop: 16, paddingBottom: 24 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Eye size={18} className="text-fazti-pink" />
                  <span className="text-xs font-bold text-fazti-pink uppercase tracking-wider">
                    القاعدة المخفية — ما يبيعه المحترف (90%)
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {baseItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-4 text-right glass rounded-xl p-4 border border-white/5"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.15, type: 'spring', stiffness: 180 }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <Icon size={18} style={{ color: item.color }} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-bold text-sm">{item.label}</p>
                          <p className="text-white/40 text-xs">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Golden rule */}
                <motion.div
                  className="mt-5 p-4 rounded-xl border border-fazti-pink/20 text-center"
                  style={{ background: 'linear-gradient(135deg, rgba(152,37,152,0.1), rgba(228,145,201,0.05))' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  <Lightbulb size={20} className="text-fazti-pink mx-auto mb-2" />
                  <p className="text-white font-bold text-sm mb-1">القاعدة الذهبية</p>
                  <p className="text-fazti-pink/80 text-xs font-medium">
                    "الناس تشتري بالعاطفة، وتبرر بالمنطق"
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="rounded-b-2xl border border-white/5 border-t-0 p-8 text-center"
                style={{ background: 'rgba(21, 23, 61, 0.4)' }}
              >
                <p className="text-white/20 text-sm">اضغط لاكتشاف ما تحت سطح الماء...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.button
        onClick={() => setRevealed(!revealed)}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[260px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Play size={18} />
          {revealed ? 'إخفاء — Hide' : 'اكشف القاعدة — Reveal'}
        </span>
      </motion.button>
    </div>
  );
}
