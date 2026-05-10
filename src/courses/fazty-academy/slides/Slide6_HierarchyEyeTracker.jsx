import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play } from 'lucide-react';

export default function Slide6_HierarchyEyeTracker() {
  const [tracing, setTracing] = useState(false);
  const [traced, setTraced] = useState(false);

  const handleTrace = () => {
    if (traced) { setTracing(false); setTraced(false); return; }
    setTracing(true);
    setTimeout(() => setTraced(true), 2500);
  };

  const markers = [
    { x: 80, y: 70, label: '1', delay: 0.2 },
    { x: 660, y: 60, label: '2', delay: 0.8 },
    { x: 100, y: 350, label: '3', delay: 1.5 },
    { x: 650, y: 370, label: '4', delay: 2.1 },
  ];

  return (
    <div className="slide-container flex-col gap-8">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ٦ — Hierarchy</p>
        <h1 className="text-5xl font-bold text-white mb-3">التسلسل الهرمي</h1>
        <p className="text-base text-white/40">كيف نجبر العين على مسار محدد</p>
      </motion.div>

      <div className="relative">
        <motion.div
          className="relative w-[750px] h-[420px] glass rounded-2xl overflow-hidden p-10 flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex justify-between items-start">
            <div className="relative">
              <motion.div className="absolute -inset-3 rounded-lg" animate={tracing ? { backgroundColor: ['rgba(152,37,152,0)', 'rgba(152,37,152,0.15)', 'rgba(152,37,152,0)'] } : {}} transition={{ delay: 0.2, duration: 1.2 }} />
              <h2 className="text-4xl font-bold text-white leading-tight relative">
                تصميم يلفت<br /><span className="gradient-text">الأنظار</span>
              </h2>
            </div>
            <div className="relative">
              <motion.div className="absolute -inset-3 rounded-lg" animate={tracing ? { backgroundColor: ['rgba(152,37,152,0)', 'rgba(152,37,152,0.15)', 'rgba(152,37,152,0)'] } : {}} transition={{ delay: 0.8, duration: 1.2 }} />
              <img src="/logo-white.png" alt="Fazti" className="w-24 opacity-80 relative" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative text-center">
              <motion.div className="absolute -inset-3 rounded-lg" animate={tracing ? { backgroundColor: ['rgba(152,37,152,0)', 'rgba(152,37,152,0.15)', 'rgba(152,37,152,0)'] } : {}} transition={{ delay: 1.2, duration: 1.2 }} />
              <p className="text-white/60 text-lg max-w-md relative">
                تعلّم أساسيات التصميم الجرافيكي وأنشئ تصاميم احترافية تجذب العملاء
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="relative">
              <motion.div className="absolute -inset-3 rounded-lg" animate={tracing ? { backgroundColor: ['rgba(152,37,152,0)', 'rgba(152,37,152,0.15)', 'rgba(152,37,152,0)'] } : {}} transition={{ delay: 1.5, duration: 1.2 }} />
              <div className="flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center">
                  <Eye size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">+2000 طالب</p>
                  <p className="text-white/40 text-xs">انضموا لأكاديمية فازتي</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div className="absolute -inset-3 rounded-lg" animate={tracing ? { backgroundColor: ['rgba(228,145,201,0)', 'rgba(228,145,201,0.2)', 'rgba(228,145,201,0.3)'] } : {}} transition={{ delay: 2, duration: 1 }} />
              <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-fazti-purple to-fazti-pink text-white font-semibold text-sm">
                سجّل الآن
              </div>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 750 420">
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#982598" />
                <stop offset="50%" stopColor="#e491c9" />
                <stop offset="100%" stopColor="#982598" />
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <motion.path
              d="M 80 70 L 670 60 L 100 350 L 660 370"
              fill="none" stroke="url(#pathGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={tracing ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            {tracing && (
              <>
                <motion.circle cx="0" cy="0" r="8" fill="#e491c9" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 1, 0.8] }} transition={{ duration: 2.5 }}>
                  <animateMotion dur="2.5s" fill="freeze" path="M 80 70 L 670 60 L 100 350 L 660 370" begin="0s" />
                </motion.circle>
                <motion.circle cx="0" cy="0" r="20" fill="rgba(228,145,201,0.15)" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0.5, 0.5, 0.3] }} transition={{ duration: 2.5 }}>
                  <animateMotion dur="2.5s" fill="freeze" path="M 80 70 L 670 60 L 100 350 L 660 370" begin="0s" />
                </motion.circle>
              </>
            )}
          </svg>

          {tracing && markers.map((m) => (
            <motion.div key={m.label} className="absolute w-6 h-6 rounded-full bg-fazti-purple/80 flex items-center justify-center text-white text-xs font-bold z-30 border border-fazti-pink/50" style={{ left: m.x - 12, top: m.y - 12 }} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: m.delay, type: 'spring', stiffness: 300 }}>
              {m.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={handleTrace}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[240px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Play size={18} />
          {traced ? 'إعادة — Reset' : 'تتبع العين — Trace Eye Path'}
        </span>
      </motion.button>
    </div>
  );
}
