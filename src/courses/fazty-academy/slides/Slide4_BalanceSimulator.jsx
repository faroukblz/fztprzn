import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const quadrantLabels = [
  { ar: 'التوازن المتماثل العمودي', en: 'Vertical Symmetrical' },
  { ar: 'التوازن غير المتماثل', en: 'Asymmetrical' },
  { ar: 'التوازن المتماثل الأفقي', en: 'Horizontal Symmetrical' },
  { ar: 'التوازن الإشعاعي', en: 'Radial' },
];

const springPop = { type: 'spring', stiffness: 260, damping: 20 };
const springSoft = { type: 'spring', stiffness: 180, damping: 22 };

/* ─── Hexagon SVG component ─── */
function Hexagon({ size = 28, fill = '#e491c9', className = '' }) {
  const h = size;
  const w = size * 1.1547; // 2/√3
  const points = [
    [w / 2, 0],
    [w, h * 0.25],
    [w, h * 0.75],
    [w / 2, h],
    [0, h * 0.75],
    [0, h * 0.25],
  ]
    .map((p) => p.join(','))
    .join(' ');
  return (
    <svg width={w} height={h} className={className} viewBox={`0 0 ${w} ${h}`}>
      <polygon points={points} fill={fill} />
    </svg>
  );
}

/* ═══════════════════════════════════════════ *
 *  Quadrant 1 — Vertical Symmetrical
 * ═══════════════════════════════════════════ */
function Q1({ step }) {
  return (
    <>
      {/* Center vertical rectangle */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="q1-rect"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
            style={{ width: 6, height: 100, background: 'rgba(255,255,255,0.25)' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springPop}
          />
        )}
      </AnimatePresence>

      {/* 3 circles LEFT */}
      <AnimatePresence>
        {step >= 2 &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={`q1-cl-${i}`}
              className="absolute rounded-full"
              style={{
                width: 22,
                height: 22,
                background: 'linear-gradient(135deg, #982598, #e491c9)',
                left: 'calc(50% - 36px)',
                top: `calc(50% + ${(i - 1) * 32}px - 11px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.08 }}
            />
          ))}
      </AnimatePresence>

      {/* 3 circles RIGHT (mirror) */}
      <AnimatePresence>
        {step >= 3 &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={`q1-cr-${i}`}
              className="absolute rounded-full"
              style={{
                width: 22,
                height: 22,
                background: 'linear-gradient(135deg, #e491c9, #982598)',
                left: 'calc(50% + 14px)',
                top: `calc(50% + ${(i - 1) * 32}px - 11px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.08 }}
            />
          ))}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════ *
 *  Quadrant 2 — Asymmetrical
 * ═══════════════════════════════════════════ */
function Q2({ step }) {
  return (
    <>
      {/* Large light-gray rectangle — left half */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="q2-big"
            className="absolute rounded-md"
            style={{
              width: '42%',
              height: '75%',
              background: 'rgba(255,255,255,0.15)',
              left: '6%',
              top: '12.5%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springSoft}
          />
        )}
      </AnimatePresence>

      {/* Medium light-gray square — top right */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            key="q2-med"
            className="absolute rounded-md"
            style={{
              width: '30%',
              height: '32%',
              background: 'rgba(255,255,255,0.15)',
              right: '8%',
              top: '12.5%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springPop}
          />
        )}
      </AnimatePresence>

      {/* Dark square — bottom right (heavy visual weight) */}
      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            key="q2-dark"
            className="absolute rounded-md"
            style={{
              width: '30%',
              height: '32%',
              background: 'rgba(152, 37, 152, 0.7)',
              right: '8%',
              bottom: '12.5%',
              boxShadow: '0 0 20px rgba(152, 37, 152, 0.3)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springPop}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════ *
 *  Quadrant 3 — Horizontal Symmetrical
 * ═══════════════════════════════════════════ */
function Q3({ step }) {
  return (
    <>
      {/* Center horizontal rectangle */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="q3-rect"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
            style={{ width: 100, height: 6, background: 'rgba(255,255,255,0.25)' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springPop}
          />
        )}
      </AnimatePresence>

      {/* 3 Hexagons ABOVE */}
      <AnimatePresence>
        {step >= 2 &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={`q3-ht-${i}`}
              className="absolute"
              style={{
                left: `calc(50% + ${(i - 1) * 36}px - 16px)`,
                top: 'calc(50% - 42px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.08 }}
            >
              <Hexagon size={24} fill="#e491c9" />
            </motion.div>
          ))}
      </AnimatePresence>

      {/* 3 Hexagons BELOW (mirror) */}
      <AnimatePresence>
        {step >= 3 &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={`q3-hb-${i}`}
              className="absolute"
              style={{
                left: `calc(50% + ${(i - 1) * 36}px - 16px)`,
                top: 'calc(50% + 18px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.08 }}
            >
              <Hexagon size={24} fill="#982598" />
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════ *
 *  Quadrant 4 — Radial
 * ═══════════════════════════════════════════ */
function Q4({ step }) {
  return (
    <>
      {/* Large dark circle — center */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="q4-center"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 50,
              height: 50,
              background: 'rgba(152, 37, 152, 0.6)',
              boxShadow: '0 0 24px rgba(152, 37, 152, 0.3)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={springSoft}
          />
        )}
      </AnimatePresence>

      {/* 4 medium squares — cross pattern (top, bottom, left, right) */}
      <AnimatePresence>
        {step >= 2 &&
          [
            { x: '50%', y: '18%', tx: '-50%', ty: '0' },    // top
            { x: '50%', y: '72%', tx: '-50%', ty: '0' },    // bottom
            { x: '18%', y: '50%', tx: '0', ty: '-50%' },    // left
            { x: '72%', y: '50%', tx: '0', ty: '-50%' },    // right
          ].map((pos, i) => (
            <motion.div
              key={`q4-med-${i}`}
              className="absolute rounded-md"
              style={{
                width: 22,
                height: 22,
                background: 'rgba(228, 145, 201, 0.5)',
                left: pos.x,
                top: pos.y,
                transform: `translate(${pos.tx}, ${pos.ty})`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.06 }}
            />
          ))}
      </AnimatePresence>

      {/* 4 tiny squares — corners */}
      <AnimatePresence>
        {step >= 3 &&
          [
            { left: '8%', top: '8%' },
            { right: '8%', top: '8%' },
            { left: '8%', bottom: '8%' },
            { right: '8%', bottom: '8%' },
          ].map((pos, i) => (
            <motion.div
              key={`q4-tiny-${i}`}
              className="absolute rounded-sm"
              style={{
                width: 12,
                height: 12,
                background: 'rgba(255,255,255,0.2)',
                ...pos,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ...springPop, delay: i * 0.06 }}
            />
          ))}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════ *
 *  Main Slide
 * ═══════════════════════════════════════════ */
const quadrantComponents = [Q1, Q2, Q3, Q4];

export default function Slide4_BalanceSimulator() {
  const [steps, setSteps] = useState([0, 0, 0, 0]);

  const advanceQuadrant = (index) => {
    setSteps((prev) => {
      const next = [...prev];
      if (next[index] < 3) next[index] += 1;
      return next;
    });
  };

  const resetAll = () => setSteps([0, 0, 0, 0]);

  const totalSteps = steps.reduce((a, b) => a + b, 0);
  const allDone = steps.every((s) => s === 3);

  return (
    <div className="slide-container flex-col gap-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">
          الشريحة ٤ — Balance
        </p>
        <h1 className="text-4xl font-bold text-white mb-2">أنماط التوازن</h1>
        <p className="text-base text-white/40">اضغط على كل لوحة لبنائها — Click each panel to build</p>
      </motion.div>

      {/* Progress badge */}
      <motion.div className="glass rounded-full px-5 py-2 z-10 flex items-center gap-3" layout>
        <span className="text-fazti-pink font-bold text-sm">{totalSteps}/12</span>
        <div className="w-px h-4 bg-white/10" />
        <span className="text-white/50 text-xs">
          {allDone ? '✨ تم بناء جميع الأنماط — All patterns built!' : 'اضغط لوحة لإضافة عنصر'}
        </span>
      </motion.div>

      {/* 2x2 Grid */}
      <motion.div
        className="grid grid-cols-2 gap-4 z-10 w-[680px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {quadrantLabels.map((label, idx) => {
          const QComponent = quadrantComponents[idx];
          const qStep = steps[idx];
          const isDone = qStep === 3;

          return (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden cursor-pointer select-none transition-colors ${
                isDone
                  ? 'ring-2 ring-fazti-pink/40'
                  : 'hover:ring-1 hover:ring-white/20'
              }`}
              style={{
                height: 200,
                background: 'rgba(15, 17, 45, 0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onClick={() => advanceQuadrant(idx)}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
            >
              {/* Quadrant content */}
              <QComponent step={qStep} />

              {/* Label strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/30 backdrop-blur-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white/80 text-[11px] font-semibold leading-tight">
                    {label.ar}
                  </span>
                  <span className="text-white/30 text-[9px]">{label.en}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-2 h-2 rounded-full transition-all ${
                        qStep >= s
                          ? 'bg-gradient-to-r from-fazti-purple to-fazti-pink shadow-sm shadow-fazti-pink/30'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Click prompt overlay when empty */}
              {qStep === 0 && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="glass-light rounded-full px-3 py-1">
                    <span className="text-white/30 text-xs">اضغط — Tap</span>
                  </div>
                </motion.div>
              )}

              {/* ✓ Done indicator */}
              {isDone && (
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={springPop}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Reset button */}
      {totalSteps > 0 && (
        <motion.button
          onClick={resetAll}
          className="px-6 py-3 rounded-full font-semibold text-white/60 glass border border-white/10 hover:text-white hover:border-white/20 transition-all cursor-pointer z-10 flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={16} />
          <span className="text-sm">إعادة — Reset</span>
        </motion.button>
      )}
    </div>
  );
}
