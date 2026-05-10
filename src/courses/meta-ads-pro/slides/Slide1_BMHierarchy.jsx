import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldCheck, Crown, Zap, ArrowRight } from 'lucide-react';

const levels = [
  {
    id: 0,
    label: 'مدير أعمال جديد',
    en: 'New BM — Weak',
    description: 'حساب جديد بدون سمعة. أي خطأ صغير يؤدي لحظر فوري.',
    icon: Shield,
    bgGradient: 'from-amber-900/40 to-yellow-900/30',
    borderColor: 'border-amber-700/40',
    iconColor: 'text-amber-600',
    glowColor: 'rgba(180, 120, 50, 0.3)',
    shieldBg: 'from-amber-800 to-amber-950',
    tag: 'المستوى ١',
    tagColor: 'bg-amber-900/60 text-amber-400',
  },
  {
    id: 1,
    label: 'مدير أعمال مسترجع',
    en: 'Reinstated BM — Medium',
    description: 'حساب تمّ استرجاعه بعد حظر. مقبول لكن لا يزال تحت المراقبة.',
    icon: ShieldCheck,
    bgGradient: 'from-slate-600/40 to-zinc-700/30',
    borderColor: 'border-slate-400/40',
    iconColor: 'text-slate-300',
    glowColor: 'rgba(148, 163, 184, 0.4)',
    shieldBg: 'from-slate-500 to-slate-700',
    tag: 'المستوى ٢',
    tagColor: 'bg-slate-700/60 text-slate-300',
  },
  {
    id: 2,
    label: 'مدير أعمال موثّق',
    en: 'Verified / Agency BM — The Treasure',
    description: 'الكنز الحقيقي. حصانة كاملة، صلاحيات كاملة، لا ينهار.',
    icon: Crown,
    bgGradient: 'from-blue-600/30 to-cyan-500/20',
    borderColor: 'border-cyan-400/50',
    iconColor: 'text-cyan-300',
    glowColor: 'rgba(34, 211, 238, 0.5)',
    shieldBg: 'from-cyan-400 to-blue-600',
    tag: '🏆 الكنز',
    tagColor: 'bg-cyan-900/60 text-cyan-300',
  },
];

export default function Slide1_BMHierarchy() {
  const [level, setLevel] = useState(0);
  const current = levels[level];
  const Icon = current.icon;

  const advance = () => {
    setLevel((prev) => (prev < 2 ? prev + 1 : 0));
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
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3 font-medium">
          الشريحة الأولى — Slide 01
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          مستويات مدير الأعمال
        </h1>
        <p className="text-lg text-white/40">The Business Manager Hierarchy</p>
      </motion.div>

      {/* Shield Visual */}
      <motion.div
        className="relative w-[700px] max-w-[90vw] h-[350px] glass rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Ambient glow behind shield */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${level}`}
            className="absolute w-60 h-60 rounded-full blur-[80px]"
            style={{ backgroundColor: current.glowColor }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`shield-${level}`}
            className="relative flex flex-col items-center gap-5 z-10"
            initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotateY: 90 }}
            transition={{ type: 'spring', stiffness: 150, damping: 18 }}
          >
            {/* Shield icon */}
            <motion.div
              className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${current.shieldBg} flex items-center justify-center shadow-2xl ${current.borderColor} border-2`}
              animate={
                level === 2
                  ? {
                      boxShadow: [
                        '0 0 20px rgba(34,211,238,0.3)',
                        '0 0 50px rgba(34,211,238,0.6)',
                        '0 0 20px rgba(34,211,238,0.3)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon size={48} className="text-white" />
            </motion.div>

            {/* Level tag */}
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${current.tagColor}`}>
              {current.tag}
            </span>

            {/* Label */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">{current.label}</h2>
              <p className="text-white/40 text-sm">{current.en}</p>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm text-center max-w-md leading-relaxed">
              {current.description}
            </p>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-2">
              {levels.map((l, i) => (
                <motion.div
                  key={l.id}
                  className={`rounded-full transition-all ${
                    i === level
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-500'
                      : i < level
                        ? 'w-2 h-2 bg-cyan-400/60'
                        : 'w-2 h-2 bg-white/15'
                  }`}
                  layout
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Energy particles for level 2 */}
        {level === 2 && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-cyan-400"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 12) * 120,
                  y: Math.sin((i * Math.PI * 2) / 12) * 120,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Bottom message */}
      <AnimatePresence mode="wait">
        {level === 2 && (
          <motion.p
            className="text-white/40 text-sm italic text-center z-10 max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            🔒 "نحن لا نلعب بالحظ، نحن نبني هيكلة لا تنهار."
          </motion.p>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.button
        onClick={advance}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[240px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          {level < 2 ? <Zap size={18} /> : <ArrowRight size={18} />}
          {level === 0 && 'طوّر الدرع — Level Up'}
          {level === 1 && 'الكنز الحقيقي — The Treasure'}
          {level === 2 && 'إعادة — Reset'}
        </span>
      </motion.button>
    </div>
  );
}
