import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Clock, Globe, ShoppingCart, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const funnelLayers = [
  {
    id: 'hook',
    label: 'Hook Rate',
    labelAr: 'معدل الجذب',
    target: '> 20%',
    icon: Eye,
    timerLabel: '3 ثوانٍ',
    color: 'from-red-500 to-orange-500',
    bgColor: 'rgba(239, 68, 68, 0.15)',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    diagnostic: '⚡ العلاج: غيّر أول 3 ثوانٍ من الفيديو!',
    diagnosticEn: 'Fix: Change the first 3 seconds of your video!',
    widthPercent: 100,
  },
  {
    id: 'hold',
    label: 'Hold Rate',
    labelAr: 'معدل الاحتفاظ',
    target: '> 40%',
    icon: Clock,
    timerLabel: '15 ثانية',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    diagnostic: '📝 العلاج: المحتوى ممل، غيّر قصة الفيديو',
    diagnosticEn: 'Fix: Content is boring, change your story!',
    widthPercent: 80,
  },
  {
    id: 'lpv',
    label: 'LPV Rate',
    labelAr: 'معدل زيارة الصفحة',
    target: '> 30%',
    icon: Globe,
    timerLabel: 'Loading...',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'rgba(234, 179, 8, 0.15)',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    diagnostic: '🚀 العلاج: سرّع موقعك، الناس تهرب!',
    diagnosticEn: 'Fix: Speed up your website, people bounce!',
    widthPercent: 60,
  },
  {
    id: 'cvr',
    label: 'CVR',
    labelAr: 'معدل التحويل',
    target: '2-3%',
    icon: ShoppingCart,
    timerLabel: '🛒',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    diagnostic: '🎯 العلاج: صفحة الهبوط غير مقنعة أو السعر مرتفع',
    diagnosticEn: 'Fix: Landing page not convincing or price too high',
    widthPercent: 40,
  },
];

export default function Slide5_MatrixDashboard() {
  const [hoveredLayer, setHoveredLayer] = useState(null);

  return (
    <div className="slide-container flex-col gap-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-3 font-medium">
          الشريحة الخامسة — Slide 05
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          لوحة القيادة والمقاييس
        </h1>
        <p className="text-lg text-white/40">The 4 Critical Metrics — Diagnostic Funnel</p>
      </motion.div>

      {/* Funnel Container */}
      <motion.div
        className="relative w-[800px] max-w-[90vw] h-[400px] glass rounded-2xl overflow-visible flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Funnel layers */}
        <div className="flex flex-col items-center gap-2 w-full px-12">
          {funnelLayers.map((layer, i) => {
            const Icon = layer.icon;
            const isHovered = hoveredLayer === i;

            return (
              <motion.div
                key={layer.id}
                className="relative"
                style={{ width: `${layer.widthPercent}%` }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15, type: 'spring' }}
              >
                <motion.div
                  className={`relative flex items-center justify-between px-5 py-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? `${layer.borderColor} shadow-lg`
                      : 'border-white/5 hover:border-white/15'
                  }`}
                  style={{
                    background: isHovered ? layer.bgColor : 'rgba(255,255,255,0.03)',
                  }}
                  onMouseEnter={() => setHoveredLayer(i)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => setHoveredLayer(isHovered ? null : i)}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  {/* Left: Icon + Label */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <span className="text-white text-sm font-bold">{layer.label}</span>
                      <span className="text-white/30 text-[10px] block">{layer.labelAr}</span>
                    </div>
                  </div>

                  {/* Center: Timer/Indicator */}
                  <div className="flex items-center gap-2">
                    <motion.div
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${layer.textColor} bg-white/5`}
                      animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
                    >
                      {layer.timerLabel}
                    </motion.div>
                  </div>

                  {/* Right: Target */}
                  <div className="flex items-center gap-2">
                    <span className="text-white/30 text-[10px]">الهدف:</span>
                    <span className={`text-xs font-bold ${layer.textColor}`}>{layer.target}</span>
                  </div>
                </motion.div>

                {/* Diagnostic Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 w-64 glass rounded-xl p-4 z-50 border ${layer.borderColor}`}
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      {/* Arrow */}
                      <div
                        className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45"
                        style={{ background: 'rgba(21, 23, 61, 0.8)' }}
                      />

                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle size={14} className={layer.textColor} />
                        <span className={`text-sm font-bold ${layer.textColor}`}>التشخيص</span>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed mb-1" dir="rtl">
                        {layer.diagnostic}
                      </p>
                      <p className="text-white/30 text-[10px]">
                        {layer.diagnosticEn}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Connecting line to next layer */}
                {i < funnelLayers.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-px h-2 bg-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Funnel arrow decoration */}
        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Activity size={16} className="text-white/10" />
          <motion.div
            className="w-px h-20 bg-gradient-to-b from-red-500/30 via-amber-500/30 to-emerald-500/30"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <CheckCircle size={16} className="text-emerald-400/30" />
        </motion.div>
      </motion.div>

      {/* Bottom hint */}
      <motion.div
        className="flex items-center gap-2 text-white/25 text-xs z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>💡</span>
        <span>حرّك الماوس فوق كل طبقة لرؤية التشخيص — Hover for diagnosis</span>
      </motion.div>
    </div>
  );
}
