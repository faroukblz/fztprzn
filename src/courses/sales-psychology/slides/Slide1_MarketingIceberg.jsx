import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mountain,
  Eye,
  ShieldCheck,
  Crown,
  HeartPulse,
  Lightbulb,
  ChevronDown,
  Play,
} from 'lucide-react';

const tipFeatures = [
  { label: 'اللون', en: 'Color' },
  { label: 'الحجم', en: 'Size' },
  { label: 'السعر', en: 'Price' },
  { label: 'المادة', en: 'Material' },
];

const hiddenLayers = [
  {
    icon: HeartPulse,
    title: 'الهروب من الألم',
    desc: 'توفير الجهد والوقت — المنتج الذي يزيل إزعاجاً يومياً.',
    color: '#ef4444',
  },
  {
    icon: Crown,
    title: 'المكانة الاجتماعية',
    desc: 'الظهور بمظهر أنيق أو غني أمام الآخرين.',
    color: '#f59e0b',
  },
  {
    icon: ShieldCheck,
    title: 'الشعور بالأمان',
    desc: 'حماية العائلة، السيارة، أو الممتلكات.',
    color: '#3b82f6',
  },
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
        className="relative z-10 w-full max-w-[700px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="glass rounded-2xl overflow-hidden">
          {/* ── TIP (Above Water) ── */}
          <div className="p-6 pb-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="text-white/50 text-sm font-medium">
                القمة — ما يراه المبتدئ (10%)
              </p>
              <Mountain size={16} className="text-white/30" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {tipFeatures.map((feat, idx) => (
                <motion.div
                  key={feat.en}
                  className="px-4 py-2 rounded-full glass-light text-sm font-medium text-white/60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  {feat.label}<span className="text-white/25 text-xs mr-1">({feat.en})</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── WATERLINE ── */}
          <div className="relative flex items-center justify-center py-3 select-none">
            <div className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <span className="relative bg-brand-950 px-4 text-[11px] uppercase tracking-widest text-blue-400/60 font-medium">
              Waterline
            </span>
          </div>

          {/* ── BASE (Below Water) ── */}
          <AnimatePresence>
            {revealed ? (
              <motion.div
                key="revealed"
                className="px-6 pb-6 pt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <p className="text-center text-white/30 text-xs mb-5 font-medium">
                  القاعدة المخفية — ما يبيعه المحترف (90%) 🌊
                </p>

                <div className="flex flex-col gap-3">
                  {hiddenLayers.map((layer, idx) => {
                    const Icon = layer.icon;
                    return (
                      <motion.div
                        key={layer.title}
                        className="flex items-start gap-3 glass-light rounded-xl p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${layer.color}20` }}
                        >
                          <Icon size={18} style={{ color: layer.color }} />
                        </div>
                        <div className="flex-1 text-right">
                          <p className="text-white font-bold text-sm mb-0.5">{layer.title}</p>
                          <p className="text-white/40 text-xs leading-relaxed">{layer.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Golden Rule */}
                <motion.div
                  className="mt-5 text-center p-4 rounded-xl border border-fazti-pink/20 bg-fazti-purple/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Lightbulb size={18} className="text-fazti-pink mx-auto mb-2" />
                  <p className="text-white/70 text-sm font-semibold leading-relaxed">
                    💡 قاعدة ذهبية: "الناس تشتري بالعاطفة، وتبرر بالمنطق"
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                className="px-6 pb-6 pt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-white/20 text-sm">
                  اضغط لاكتشاف ما تحت سطح الماء...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        onClick={() => setRevealed(!revealed)}
        className="relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2 text-sm">
          {revealed ? (
            <><Eye size={16} /> إخفاء — Hide</>
          ) : (
            <><Play size={16} /> اكشف القاعدة — Reveal</>
          )}
        </span>
      </motion.button>
    </div>
  );
}
