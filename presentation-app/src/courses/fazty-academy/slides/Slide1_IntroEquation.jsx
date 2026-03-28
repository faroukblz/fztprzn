import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Palette, Type, Shapes, ArrowRight, Sparkles } from 'lucide-react';

const elements = [
  { id: 1, icon: Palette, label: 'الألوان', en: 'Colors', color: '#dc2626', delay: 0 },
  { id: 2, icon: Type, label: 'الخطوط', en: 'Typography', color: '#eab308', delay: 0.15 },
  { id: 3, icon: Shapes, label: 'الأشكال', en: 'Shapes', color: '#3b82f6', delay: 0.3 },
];

export default function Slide1_IntroEquation() {
  const [phase, setPhase] = useState(0);
  // 0 = title only, 1 = elements floating, 2 = merging through filter, 3 = final design

  const advance = () => {
    if (phase < 3) setPhase(phase + 1);
    else setPhase(0);
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
        <motion.img
          src="/logo-white.png"
          alt="Fazti Academy"
          className="h-12 mx-auto mb-6 opacity-80"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">
          الدرس الثاني — Lesson 02
        </p>
        <h1 className="text-5xl font-bold text-white mb-3">أساسيات التصميم الجرافيكي</h1>
        <p className="text-lg text-white/40">Graphic Design Principles</p>
      </motion.div>

      {/* Equation Visual */}
      <motion.div
        className="relative w-[800px] h-[320px] glass rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Phase 0: Just the equation text */}
        {phase === 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/30 text-sm mb-4 tracking-widest uppercase">The Design Equation</p>
            <div className="flex items-center gap-6 text-3xl font-bold">
              <span className="text-white/50">عناصر</span>
              <span className="text-fazti-pink text-2xl">+</span>
              <span className="text-white/50">قواعد</span>
              <span className="text-fazti-pink text-2xl">=</span>
              <span className="gradient-text">تصميم</span>
            </div>
          </motion.div>
        )}

        {/* Phase 1: Floating element blocks */}
        <AnimatePresence>
          {phase === 1 && (
            <div className="absolute inset-0 flex items-center justify-center gap-8">
              {elements.map((el) => {
                const Icon = el.icon;
                return (
                  <motion.div
                    key={el.id}
                    className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/10"
                    style={{ backgroundColor: `${el.color}20` }}
                    initial={{ opacity: 0, y: 80, rotate: -20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -12, 0],
                      rotate: 0,
                    }}
                    transition={{
                      delay: el.delay,
                      y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                      type: 'spring',
                      stiffness: 150,
                    }}
                  >
                    <Icon size={28} style={{ color: el.color }} />
                    <span className="text-white text-xs font-semibold">{el.label}</span>
                    <span className="text-white/30 text-[10px]">{el.en}</span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Phase 2: Merging through "القواعد" filter */}
        <AnimatePresence>
          {phase === 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Elements flying left */}
              <div className="flex gap-4 absolute left-12">
                {elements.map((el, i) => {
                  const Icon = el.icon;
                  return (
                    <motion.div
                      key={el.id}
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${el.color}30` }}
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 180 + i * 20, opacity: 0, scale: 0.3 }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 1.2, ease: 'easeIn' }}
                    >
                      <Icon size={20} style={{ color: el.color }} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Filter */}
              <motion.div
                className="relative z-10 w-32 h-40 rounded-2xl border-2 border-fazti-pink/40 flex items-center justify-center"
                style={{ background: 'linear-gradient(180deg, rgba(152,37,152,0.15), rgba(228,145,201,0.1))' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className="text-center">
                  <p className="text-fazti-pink text-sm font-bold">القواعد</p>
                  <p className="text-white/30 text-[10px]">Principles</p>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-fazti-pink/20"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Output */}
              <motion.div
                className="absolute right-12"
                initial={{ opacity: 0, x: -40, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
              >
                <div className="w-36 h-40 rounded-2xl bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center shadow-lg shadow-fazti-purple/30">
                  <div className="text-center">
                    <Sparkles className="text-white mx-auto mb-2" size={24} />
                    <p className="text-white font-bold text-sm">تصميم احترافي</p>
                    <p className="text-white/50 text-[10px]">Professional Design</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Phase 3: Final summary */}
        <AnimatePresence>
          {phase === 3 && (
            <motion.div
              className="text-center px-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fazti-purple/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Sparkles className="text-white" size={32} />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-3">في هذه الدورة سنتعلم</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {['التباين', 'التوازن', 'التقارب', 'التسلسل', 'التكرار', 'المحاذاة', 'المساحة البيضاء'].map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-4 py-2 rounded-full glass text-white/70 text-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          {phase < 3 ? <Play size={18} /> : <ArrowRight size={18} />}
          {phase === 0 && 'ابدأ — Start'}
          {phase === 1 && 'ادمج العناصر — Merge'}
          {phase === 2 && 'النتيجة — Result'}
          {phase === 3 && 'إعادة — Reset'}
        </span>
      </motion.button>
    </div>
  );
}
