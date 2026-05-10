import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, RotateCcw } from 'lucide-react';

const COLORS = ['#982598', '#e491c9', '#15173d', '#982598', '#e491c9'];
const SHAPES = ['circle', 'diamond', 'circle', 'square', 'circle'];

export default function Slide7_RepetitionRhythm() {
  const [count, setCount] = useState(1);
  const [focalIdx] = useState(14); // which element gets the focal color
  const maxCount = 36;

  const handleRepeat = () => {
    if (count >= maxCount) return;
    setCount((prev) => Math.min(prev + 6, maxCount));
  };

  const handleReset = () => setCount(1);

  return (
    <div className="slide-container flex-col gap-8">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ٧ — Repetition & Rhythm</p>
        <h1 className="text-5xl font-bold text-white mb-3">التكرارية والإيقاع</h1>
        <p className="text-base text-white/40">التكرار يصنع النمط، وكسره يصنع نقطة التركيز</p>
      </motion.div>

      <motion.div
        className="relative w-[700px] h-[360px] glass rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid grid-cols-6 gap-4 p-8">
          {Array.from({ length: count }).map((_, i) => {
            const isFocal = i === focalIdx && count > focalIdx;
            const colorIdx = i % COLORS.length;
            const shapeType = SHAPES[i % SHAPES.length];
            const borderRadius = shapeType === 'circle' ? '50%' : shapeType === 'diamond' ? '4px' : '8px';
            const rotation = shapeType === 'diamond' ? 45 : 0;
            const bgColor = isFocal ? '#dc2626' : COLORS[colorIdx];

            return (
              <motion.div
                key={i}
                className="w-12 h-12 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: rotation }}
                transition={{ delay: (i % 6) * 0.08, type: 'spring', stiffness: 300, damping: 18 }}
              >
                <motion.div
                  className="w-10 h-10"
                  style={{
                    backgroundColor: bgColor,
                    borderRadius,
                    boxShadow: isFocal ? '0 0 24px rgba(220,38,38,0.6)' : `0 0 20px ${COLORS[colorIdx]}30`,
                  }}
                  whileHover={{ scale: 1.2, rotate: rotation + 15 }}
                  animate={isFocal ? { scale: [1, 1.15, 1] } : {}}
                  transition={isFocal ? { duration: 1.5, repeat: Infinity } : { type: 'spring', stiffness: 400 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div className="absolute top-4 right-4 glass rounded-full px-3 py-1" layout>
          <span className="text-xs text-white/50">{count} / {maxCount} عنصر</span>
        </motion.div>

        {count > focalIdx && (
          <motion.div className="absolute bottom-4 right-4 glass rounded-full px-3 py-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-xs text-red-400">🔴 نقطة التركيز — Focal Point</span>
          </motion.div>
        )}
      </motion.div>

      <div className="flex gap-4 z-10">
        <motion.button
          onClick={handleRepeat}
          className={`relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden min-w-[220px] ${count >= maxCount ? 'opacity-40 cursor-not-allowed' : ''}`}
          whileHover={count < maxCount ? { scale: 1.05 } : {}}
          whileTap={count < maxCount ? { scale: 0.95 } : {}}
          disabled={count >= maxCount}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
          <span className="relative flex items-center justify-center gap-2.5 text-base">
            <Copy size={18} />
            تكرار — Repeat
          </span>
        </motion.button>

        {count > 1 && (
          <motion.button
            onClick={handleReset}
            className="px-6 py-4 rounded-full font-semibold text-white/60 glass border border-white/10 hover:text-white hover:border-white/20 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={18} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
