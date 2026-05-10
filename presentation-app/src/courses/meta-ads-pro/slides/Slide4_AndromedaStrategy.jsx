import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderOpen, Image, Cpu, MapPin, Zap } from 'lucide-react';

export default function Slide4_AndromedaStrategy() {
  const [phase, setPhase] = useState(0);
  // 0 = intro, 1 = 1-1-50 consolidation, 2 = broad targeting radar

  const advance = () => setPhase((prev) => (prev < 2 ? prev + 1 : 0));

  return (
    <div className="slide-container flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-3 font-medium">
          الشريحة الرابعة — Slide 04
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          استراتيجية أندروميدا
        </h1>
        <p className="text-lg text-white/40">The 1-1-50 Rule & Broad Targeting</p>
      </motion.div>

      {/* Main Visual */}
      <motion.div
        className="relative w-[800px] max-w-[90vw] h-[380px] glass rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Phase 0 — Intro */}
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="intro"
              className="text-center flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="flex items-center gap-4 text-5xl font-black">
                <motion.span
                  className="text-violet-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  1
                </motion.span>
                <motion.span
                  className="text-white/20 text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  —
                </motion.span>
                <motion.span
                  className="text-violet-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  1
                </motion.span>
                <motion.span
                  className="text-white/20 text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  —
                </motion.span>
                <motion.span
                  className="text-violet-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  50
                </motion.span>
              </div>
              <div className="flex items-center gap-6 text-white/40 text-sm">
                <span>حملة واحدة</span>
                <span className="text-white/10">|</span>
                <span>مجموعة واحدة</span>
                <span className="text-white/10">|</span>
                <span>50 محتوى إبداعي</span>
              </div>
              <p className="text-white/30 text-xs max-w-sm">
                القاعدة الذهبية: الدمج بدل التفريق. حملة واحدة منظمة أقوى من 10 حملات مبعثرة.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 1 — 1-1-50 Consolidation */}
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key="consolidation"
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Campaign folder */}
              <motion.div
                className="relative flex flex-col items-center gap-2"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                <div className="w-24 h-28 rounded-xl bg-violet-900/40 border border-violet-500/30 flex flex-col items-center justify-center gap-1">
                  <Folder size={28} className="text-violet-400" />
                  <span className="text-violet-300 text-[10px] font-bold">الحملة 1</span>
                  <span className="text-violet-300/50 text-[8px]">Campaign</span>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="text-white/20"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-2xl">→</span>
              </motion.div>

              {/* Ad Set folder */}
              <motion.div
                className="relative flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-28 h-32 rounded-xl bg-purple-900/40 border border-purple-500/30 flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                  <FolderOpen size={28} className="text-purple-400" />
                  <span className="text-purple-300 text-[10px] font-bold">المجموعة 1</span>
                  <span className="text-purple-300/50 text-[8px]">Ad Set</span>

                  {/* 50 creatives flying in */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`creative-${i}`}
                      className="absolute w-3 h-3 rounded-sm"
                      style={{
                        background: `hsl(${260 + i * 5}, 70%, ${50 + (i % 3) * 10}%)`,
                      }}
                      initial={{
                        x: 150 + Math.random() * 100,
                        y: (Math.random() - 0.5) * 200,
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        x: (i % 5 - 2) * 12,
                        y: 10 + Math.floor(i / 5) * 12,
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.8 + i * 0.06,
                        type: 'spring',
                        stiffness: 150,
                        damping: 12,
                      }}
                    />
                  ))}
                </div>

                {/* Counter */}
                <motion.span
                  className="text-violet-400 text-xs font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  50 Creative ✨
                </motion.span>
              </motion.div>

              {/* Flying creative icons */}
              <div className="relative w-32 h-40">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`fly-${i}`}
                    className="absolute"
                    style={{
                      top: `${10 + i * 12}%`,
                      left: `${60 + (i % 3) * 15}%`,
                    }}
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 0, x: -80 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.8 }}
                  >
                    <Image size={14} className="text-purple-400/60" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2 — Broad Targeting */}
        <AnimatePresence mode="wait">
          {phase === 2 && (
            <motion.div
              key="radar"
              className="relative flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Algeria map outline (simplified) */}
              <div className="relative w-64 h-56">
                {/* Map shape */}
                <svg viewBox="0 0 200 180" className="w-full h-full">
                  <path
                    d="M 40,10 L 80,5 L 130,8 L 170,20 L 185,50 L 190,90 L 180,130 L 160,160 L 120,175 L 80,170 L 50,150 L 25,120 L 15,80 L 20,45 Z"
                    fill="rgba(139, 92, 246, 0.08)"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Radar scanner */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{
                      background: 'linear-gradient(180deg, transparent, rgba(34,211,238,0.6), transparent)',
                      boxShadow: '0 0 20px rgba(34,211,238,0.4)',
                    }}
                    animate={{ x: [0, 250, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* Target points appearing */}
                {[
                  { x: 55, y: 40 },
                  { x: 100, y: 30 },
                  { x: 140, y: 55 },
                  { x: 70, y: 80 },
                  { x: 120, y: 100 },
                  { x: 90, y: 130 },
                  { x: 150, y: 85 },
                  { x: 45, y: 110 },
                  { x: 110, y: 65 },
                  { x: 80, y: 155 },
                  { x: 130, y: 140 },
                  { x: 60, y: 60 },
                ].map((pos, i) => (
                  <motion.div
                    key={`target-${i}`}
                    className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400"
                    style={{ left: pos.x, top: pos.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0.7], scale: [0, 1.5, 1] }}
                    transition={{ delay: 1 + i * 0.25, duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-400"
                      animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </motion.div>
                ))}

                {/* AI label */}
                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <Cpu size={12} className="text-emerald-400" />
                  <span className="text-emerald-300 text-[10px] font-bold">AI Broad Targeting — 23+</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <MapPin size={10} className="text-violet-400" />
                    <span className="text-white/40 text-[10px]">لا استهداف يدوي</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Cpu size={10} className="text-cyan-400" />
                    <span className="text-white/40 text-[10px]">الخوارزمية تبحث</span>
                  </div>
                </div>
                <p className="text-white/30 text-xs">
                  العمر 23+ | بدون اهتمامات محددة | اترك الذكاء الاصطناعي يعمل
                </p>
              </motion.div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Zap size={18} />
          {phase === 0 && 'شاهد آلة الدمج — Consolidation'}
          {phase === 1 && 'الاستهداف الذكي — AI Targeting'}
          {phase === 2 && 'إعادة — Reset'}
        </span>
      </motion.button>
    </div>
  );
}
