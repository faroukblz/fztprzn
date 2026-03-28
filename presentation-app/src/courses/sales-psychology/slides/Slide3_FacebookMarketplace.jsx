import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  PenLine,
  DollarSign,
  TrendingUp,
  Plus,
  Equal,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

/* ─── Equation blocks ─── */
const blocks = [
  {
    icon: Camera,
    title: 'صور واقعية للمنتج',
    sub: '(وليست من جوجل)',
    color: '#3b82f6',
  },
  {
    icon: PenLine,
    title: 'عنوان جذاب',
    sub: 'يبحث عنه الناس في منطقتك',
    color: '#f59e0b',
  },
  {
    icon: DollarSign,
    title: 'سعر تنافسي',
    sub: 'أقل من المنافسين أو مع عرض',
    color: '#10b981',
  },
];

const resultBlock = {
  icon: TrendingUp,
  title: 'أولى المبيعات',
  sub: 'رأس مال حملاتك الإعلانية القادمة!',
  color: '#982598',
};

export default function Slide3_FacebookMarketplace() {
  const [phase, setPhase] = useState(0);
  // 0 = title only, 1 = blocks appear, 2 = result reveal

  const advance = () => {
    if (phase < 2) setPhase(phase + 1);
    else setPhase(0);
  };

  return (
    <div className="slide-container flex-col gap-8 py-14 overflow-y-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">
          الشريحة ٣ — Facebook Marketplace
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          الكنز المجاني
        </h1>
        <p className="text-base text-white/40 max-w-xl mx-auto">
          كيف تتحول الزيارات المجانية إلى رأس مال للإعلانات
          <span className="text-fazti-pink/60 text-xs ml-2">(Organic Traffic)</span>
        </p>
      </motion.div>

      {/* ─── Equation Area ─── */}
      <motion.div
        className="relative z-10 w-full max-w-[900px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="glass rounded-2xl p-8 md:p-10">
          {/* Phase 0: intro prompt */}
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div
                key="intro"
                className="flex flex-col items-center justify-center py-12 gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-400/10 flex items-center justify-center border border-blue-500/20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles size={32} className="text-blue-400/80" />
                </motion.div>
                <p className="text-white/50 text-lg font-semibold">المعادلة السحرية</p>
                <p className="text-white/25 text-sm">اضغط لاكتشاف تركيبة النجاح في الماركتبلايس</p>
              </motion.div>
            )}

            {/* Phase 1: equation blocks with operators */}
            {phase >= 1 && (
              <motion.div
                key="equation"
                className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {blocks.map((block, idx) => {
                  const BlockIcon = block.icon;
                  return (
                    <motion.div key={block.title} className="flex items-center gap-3 md:gap-4">
                      {/* Block card */}
                      <motion.div
                        className="w-[180px] glass rounded-xl p-4 border border-white/5 text-center"
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: idx * 0.25, type: 'spring', stiffness: 180, damping: 18 }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center"
                          style={{ backgroundColor: `${block.color}20` }}
                        >
                          <BlockIcon size={20} style={{ color: block.color }} />
                        </div>
                        <p className="text-white font-bold text-sm mb-1">{block.title}</p>
                        <p className="text-white/30 text-[10px]">{block.sub}</p>
                      </motion.div>

                      {/* Operator: + or = */}
                      {idx < blocks.length - 1 && (
                        <motion.div
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.25 + 0.15, type: 'spring' }}
                        >
                          <Plus size={16} className="text-fazti-pink" />
                        </motion.div>
                      )}

                      {idx === blocks.length - 1 && (
                        <motion.div
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: blocks.length * 0.25 + 0.1, type: 'spring' }}
                        >
                          <Equal size={16} className="text-fazti-pink" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Result block */}
                <AnimatePresence>
                  {phase >= 2 && (
                    <motion.div
                      className="relative w-[200px] rounded-xl p-5 text-center border-2 overflow-hidden"
                      style={{ borderColor: `${resultBlock.color}60` }}
                      initial={{ opacity: 0, scale: 0, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                    >
                      {/* Pulsing glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `radial-gradient(ellipse at center, ${resultBlock.color}15 0%, transparent 70%)`,
                        }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        <div
                          className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${resultBlock.color}, #e491c9)`,
                          }}
                        >
                          <TrendingUp size={22} className="text-white" />
                        </div>
                        <p className="text-white font-bold text-base mb-1">💰 {resultBlock.title}</p>
                        <p className="text-white/50 text-[11px] leading-relaxed">{resultBlock.sub}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        onClick={advance}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[260px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          {phase === 0 && <><Play size={18} /> اكتشف المعادلة — Reveal</>}
          {phase === 1 && <><Sparkles size={18} /> النتيجة — Result</>}
          {phase === 2 && <><RotateCcw size={18} /> إعادة — Reset</>}
        </span>
      </motion.button>
    </div>
  );
}
