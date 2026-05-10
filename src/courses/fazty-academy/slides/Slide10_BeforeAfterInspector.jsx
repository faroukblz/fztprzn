import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, ArrowLeftRight, AlertCircle } from 'lucide-react';

const hotspots = [
  { x: '18%', y: '25%', label: 'غياب التقارب', en: 'No Proximity' },
  { x: '65%', y: '18%', label: 'ألوان مزعجة', en: 'Clashing Colors' },
  { x: '40%', y: '70%', label: 'بدون محاذاة', en: 'No Alignment' },
  { x: '80%', y: '60%', label: 'بدون تسلسل', en: 'No Hierarchy' },
];

export default function Slide10_BeforeAfterInspector() {
  const containerRef = useRef(null);
  const [dividerPos, setDividerPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showHotspots, setShowHotspots] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setDividerPos(Math.max(5, Math.min(95, (x / rect.width) * 100)));
  };
  const handlePointerUp = () => setIsDragging(false);

  return (
    <div className="slide-container flex-col gap-6 overflow-y-auto py-16">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ١٠ — Application</p>
        <h1 className="text-5xl font-bold text-white mb-3">التطبيق واستخراج الأخطاء</h1>
        <p className="text-base text-white/40">اكتشف الأخطاء ثم اسحب الشريط لرؤية التصحيح</p>
      </motion.div>

      {/* Hotspot toggle */}
      <motion.button
        onClick={() => { setShowHotspots(!showHotspots); setActiveHotspot(null); }}
        className={`z-10 flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
          showHotspots
            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
            : 'glass text-white/60 border border-white/10 hover:text-white hover:border-white/20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AlertCircle size={16} />
        {showHotspots ? '✓ إخفاء الأخطاء — Hide Errors' : '🔍 إظهار الأخطاء — Show Bad Practices'}
      </motion.button>

      {/* Comparison Container */}
      <motion.div
        ref={containerRef}
        className="relative w-[750px] h-[440px] rounded-2xl overflow-hidden border border-white/10 cursor-col-resize select-none"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* === AFTER (Good Layout — full background) === */}
        <div className="absolute inset-0 bg-brand-950 p-10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <img src="/logo-white.png" alt="Fazti" className="h-8 opacity-80" />
            <div className="flex gap-6">
              {['الرئيسية', 'الدورات', 'عنّا', 'تواصل'].map((item) => (
                <span key={item} className="text-white/50 text-sm">{item}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-md">
              <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-4">أكاديمية فازتي</p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-relaxed">تعلّم التصميم الاحترافي</h2>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">انضم لأكثر من 2000 طالب في رحلة تعلّم التصميم الجرافيكي</p>
              <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fazti-purple to-fazti-pink text-white font-semibold text-sm">ابدأ الآن</div>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            {['✓ شهادة معتمدة', '✓ دعم متواصل', '✓ محتوى محدّث'].map((item) => (
              <span key={item} className="text-white/40 text-xs">{item}</span>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 glass rounded-full px-3 py-1.5">
            <span className="text-xs text-emerald-400 font-medium">✓ تصميم احترافي — Good</span>
          </div>
        </div>

        {/* === BEFORE (Bad Layout — clipped left) === */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - dividerPos}% 0 0)` }}>
          <div className="absolute inset-0 p-10 flex flex-col justify-between" style={{ background: '#1a0a2e' }}>
            <div className="flex items-start">
              <img src="/logo-white.png" alt="Fazti" className="h-8 opacity-80 mt-3 ml-2" />
              <div className="flex gap-2 ml-auto mr-6 mt-1">
                {['الرئيسية', 'الدورات', 'عنّا', 'تواصل'].map((item, i) => (
                  <span key={item} className="text-white/50" style={{ fontSize: `${11 + i}px`, marginTop: `${i * 4}px` }}>{item}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <div className="max-w-lg ml-6">
                <p className="text-xs text-fazti-pink mb-1 ml-8">أكاديمية فازتي</p>
                <h2 className="text-3xl font-bold text-white mb-2 leading-tight ml-2">تعلّم التصميم الاحترافي</h2>
                <p className="text-white/50 text-sm mb-4 mr-16 leading-loose">انضم لأكثر من 2000 طالب في رحلة تعلّم التصميم الجرافيكي</p>
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-fazti-purple to-fazti-pink text-white font-semibold text-sm ml-12">ابدأ الآن</div>
              </div>
            </div>
            <div className="flex gap-3 ml-4">
              {['✓ شهادة معتمدة', '✓ دعم متواصل', '✓ محتوى محدّث'].map((item, i) => (
                <span key={item} className="text-white/40" style={{ fontSize: `${9 + i}px`, marginTop: `${i * 3}px` }}>{item}</span>
              ))}
            </div>
            <div className="absolute bottom-4 left-4 glass rounded-full px-3 py-1.5">
              <span className="text-xs text-red-400 font-medium">✗ تصميم خاطئ — Bad</span>
            </div>

            {/* Hot-spots */}
            <AnimatePresence>
              {showHotspots && hotspots.map((hs, i) => (
                <motion.div
                  key={i}
                  className="absolute z-30 cursor-pointer"
                  style={{ left: hs.x, top: hs.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                  onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                >
                  {/* Red pulsing circle */}
                  <motion.div
                    className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-500/20"
                    animate={{ scale: [1, 1.2, 1], boxShadow: ['0 0 0px rgba(220,38,38,0.3)', '0 0 20px rgba(220,38,38,0.5)', '0 0 0px rgba(220,38,38,0.3)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertCircle size={14} className="text-red-400" />
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeHotspot === i && (
                      <motion.div
                        className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap glass rounded-xl px-4 py-2 border border-red-500/20 z-40"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      >
                        <p className="text-red-400 text-xs font-bold">{hs.label}</p>
                        <p className="text-white/40 text-[10px]">{hs.en}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider Handle */}
        <div className="absolute top-0 bottom-0 z-20 flex items-center justify-center" style={{ left: `${dividerPos}%`, transform: 'translateX(-50%)' }} onPointerDown={handlePointerDown}>
          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-fazti-pink to-transparent" />
          <motion.div
            className="relative w-11 h-11 rounded-full bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing border-2 border-white/20"
            whileHover={{ scale: 1.15 }}
            animate={isDragging ? { scale: 1.1, boxShadow: '0 0 25px rgba(152,37,152,0.5)' } : {}}
          >
            <GripVertical size={18} className="text-white" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="flex items-center gap-2 text-white/30 text-sm z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <ArrowLeftRight size={16} />
        <span>اسحب المقبض للمقارنة — Drag to compare</span>
      </motion.div>
    </div>
  );
}
