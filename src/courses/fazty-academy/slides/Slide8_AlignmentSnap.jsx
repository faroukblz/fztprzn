import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const textBlocks = [
  { text: 'أكاديمية فازتي', size: 'text-3xl', weight: 'font-bold', color: 'text-white' },
  { text: 'تعلّم مبادئ التصميم الجرافيكي', size: 'text-lg', weight: 'font-medium', color: 'text-white/70' },
  { text: 'دورات احترافية مع خبراء الصناعة', size: 'text-sm', weight: 'font-normal', color: 'text-white/50' },
  { text: 'ابدأ رحلتك في عالم التصميم اليوم', size: 'text-base', weight: 'font-medium', color: 'text-fazti-pink' },
  { text: 'سجّل الآن واحصل على خصم ٥٠٪', size: 'text-sm', weight: 'font-normal', color: 'text-white/40' },
];

const jaggedOffsets = [30, -45, 60, -20, 50];

export default function Slide8_AlignmentSnap() {
  const [alignment, setAlignment] = useState(null);

  const getTextAlign = () => {
    if (alignment === 'center') return 'center';
    if (alignment === 'right') return 'right';
    return 'left';
  };

  const aligns = [
    { key: 'right', Icon: AlignRight, label: 'يمين' },
    { key: 'center', Icon: AlignCenter, label: 'وسط' },
    { key: 'left', Icon: AlignLeft, label: 'يسار' },
  ];

  return (
    <div className="slide-container flex-col gap-8">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ٨ — Alignment</p>
        <h1 className="text-5xl font-bold text-white mb-3">المحاذاة</h1>
        <p className="text-base text-white/40">لا شيء يوضع بشكل عشوائي في الصفحة</p>
      </motion.div>

      <motion.div
        className="relative w-[700px] glass rounded-2xl overflow-hidden p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {alignment && (
          <motion.div
            className="absolute top-6 bottom-6 w-[2px]"
            style={{
              left: alignment === 'left' ? '40px' : alignment === 'center' ? '50%' : undefined,
              right: alignment === 'right' ? '40px' : undefined,
              transform: alignment === 'center' ? 'translateX(-50%)' : undefined,
              background: 'linear-gradient(180deg, transparent, #982598, #e491c9, #982598, transparent)',
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.6, scaleY: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div className="flex flex-col gap-5 relative z-10">
          {textBlocks.map((block, idx) => (
            <motion.div
              key={idx}
              className={`${block.size} ${block.weight} ${block.color} whitespace-nowrap`}
              animate={{ x: alignment ? 0 : jaggedOffsets[idx] }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: alignment ? idx * 0.08 : 0 }}
              style={{ textAlign: alignment ? getTextAlign() : 'left' }}
            >
              {block.text}
            </motion.div>
          ))}
        </div>

        <motion.div className="absolute top-4 right-4 glass rounded-full px-3 py-1" layout>
          <span className="text-xs text-white/50">
            {alignment ? `✓ محاذاة ${alignment === 'left' ? 'يسار' : alignment === 'center' ? 'وسط' : 'يمين'}` : '✗ بدون محاذاة — Jagged'}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {aligns.map(({ key, Icon, label }) => (
          <motion.button
            key={key}
            onClick={() => setAlignment(alignment === key ? null : key)}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
              alignment === key
                ? 'bg-gradient-to-r from-fazti-purple to-fazti-pink text-white shadow-lg shadow-fazti-purple/30'
                : 'glass text-white/60 border border-white/10 hover:text-white hover:border-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={16} />
            {label} — {key.charAt(0).toUpperCase() + key.slice(1)}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
