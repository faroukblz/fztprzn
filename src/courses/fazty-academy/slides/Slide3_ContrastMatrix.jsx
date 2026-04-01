import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Maximize2, Circle, Type } from 'lucide-react';

export default function Slide3_ContrastMatrix() {
  /* Color: 3x4 green grid, click one → red */
  const [redIdx, setRedIdx] = useState(null);
  /* Size: slider scaling center circle */
  const [sizeVal, setSizeVal] = useState(30);
  /* Shape: toggle one square → circle */
  const [circleIdx, setCircleIdx] = useState(null);
  /* Typography: toggle font */
  const [fontActive, setFontActive] = useState(false);

  return (
    <div className="slide-container flex-col gap-5 overflow-y-auto py-16 min-h-screen justify-center">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">الشريحة ٣ — Contrast</p>
        <h1 className="text-4xl font-bold text-white mb-2">التباين</h1>
        <p className="text-base text-white/40">Four interactive dimensions of contrast</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-4 z-10 w-[720px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* === 1) Color: Green 3x4 grid, click → red === */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Palette size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">تباين الألوان — Color</p>
              <p className="text-white/30 text-xs">Click a square</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-full aspect-square rounded-lg cursor-pointer"
                style={{ backgroundColor: redIdx === i ? '#dc2626' : '#16a34a' }}
                onClick={() => setRedIdx(redIdx === i ? null : i)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={redIdx === i ? { boxShadow: '0 0 16px rgba(220,38,38,0.5)' } : { boxShadow: '0 0 0px transparent' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />
            ))}
          </div>
        </div>

        {/* === 2) Size: slider scaling center circle === */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center">
              <Maximize2 size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">تباين الحجم — Size</p>
              <p className="text-white/30 text-xs">Drag slider to scale</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-[120px] gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="rounded-full"
                animate={{
                  width: i === 2 ? `${sizeVal + 16}px` : '24px',
                  height: i === 2 ? `${sizeVal + 16}px` : '24px',
                  backgroundColor: i === 2 ? 'rgba(152, 37, 152, 0.8)' : 'rgba(255,255,255,0.15)',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />
            ))}
          </div>
          <input type="range" min="16" max="80" value={sizeVal} onChange={(e) => setSizeVal(Number(e.target.value))} className="w-full mt-2" />
        </div>

        {/* === 3) Shape: 3x4 squares, toggle one → circle === */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Circle size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">تباين الأشكال — Shape</p>
              <p className="text-white/30 text-xs">Click a square to morph</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-full aspect-square cursor-pointer"
                style={{ backgroundColor: circleIdx === i ? '#06b6d4' : 'rgba(255,255,255,0.12)' }}
                onClick={() => setCircleIdx(circleIdx === i ? null : i)}
                animate={{
                  borderRadius: circleIdx === i ? '50%' : '8px',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              />
            ))}
          </div>
        </div>

        {/* === 4) Typography: toggle font contrast === */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Type size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">تباين الخطوط — Typography</p>
              <p className="text-white/30 text-xs">Toggle to contrast</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[120px] gap-2 text-center">
            <motion.p
              className="text-white leading-tight"
              animate={{
                fontSize: fontActive ? '28px' : '18px',
                fontWeight: fontActive ? 800 : 400,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              عنوان رئيسي
            </motion.p>
            <motion.p
              className="text-white/50"
              animate={{
                fontSize: fontActive ? '11px' : '14px',
                fontWeight: fontActive ? 200 : 400,
                fontStyle: fontActive ? 'italic' : 'normal',
                letterSpacing: fontActive ? '1px' : '0px',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              هذا نص فرعي يوضح الفرق في التسلسل البصري
            </motion.p>
          </div>
          <button
            onClick={() => setFontActive(!fontActive)}
            className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${fontActive ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-white/50 border border-white/10'}`}
          >
            {fontActive ? '✓ تباين مفعل — Active' : 'تفعيل التباين — Apply Contrast'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
