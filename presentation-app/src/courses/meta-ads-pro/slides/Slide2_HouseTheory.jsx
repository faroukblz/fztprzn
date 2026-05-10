import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Target, Users, DollarSign, Film, Tv, Eye } from 'lucide-react';

const layers = [
  {
    id: 'campaign',
    label: 'الحملة',
    en: 'Campaign',
    description: 'المنزل بأكمله — الهدف الذي تريد تحقيقه (شراء، تحويل...)',
    icon: Target,
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59, 130, 246, 0.4)',
    items: [{ icon: Target, text: 'هدف الشراء 🛒' }],
  },
  {
    id: 'adset',
    label: 'المجموعة الإعلانية',
    en: 'Ad Set',
    description: 'الغرف الداخلية — من تستهدف وكم تنفق',
    icon: Users,
    color: 'from-purple-500 to-fazti-purple',
    glow: 'rgba(152, 37, 152, 0.4)',
    items: [
      { icon: Users, text: 'الجمهور' },
      { icon: DollarSign, text: 'الميزانية' },
    ],
  },
  {
    id: 'ad',
    label: 'الإعلان',
    en: 'Ad',
    description: 'الأثاث الداخلي — المحتوى البصري الذي يراه العميل',
    icon: Film,
    color: 'from-pink-500 to-fazti-pink',
    glow: 'rgba(228, 145, 201, 0.5)',
    items: [
      { icon: Tv, text: 'فيديو إعلاني' },
      { icon: Eye, text: 'محتوى بصري' },
    ],
  },
];

export default function Slide2_HouseTheory() {
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <div className="slide-container flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3 font-medium">
          الشريحة الثانية — Slide 02
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          هيكلة الإعلان — نظرية المنزل
        </h1>
        <p className="text-lg text-white/40">The 3-Tier Ad Structure</p>
      </motion.div>

      {/* House Blueprint */}
      <motion.div
        className="relative w-[800px] max-w-[90vw] h-[380px] glass rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="cyan" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glow */}
        <AnimatePresence>
          {activeLayer !== null && (
            <motion.div
              key={`glow-${activeLayer}`}
              className="absolute w-48 h-48 rounded-full blur-[60px]"
              style={{ backgroundColor: layers[activeLayer].glow }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        {/* House structure */}
        <div className="relative z-10 flex flex-col items-center gap-0">
          {/* Roof / Campaign */}
          <motion.div
            className={`relative cursor-pointer transition-all duration-300 ${
              activeLayer === 0
                ? 'scale-105'
                : activeLayer !== null
                  ? 'opacity-30'
                  : ''
            }`}
            onClick={() => setActiveLayer(activeLayer === 0 ? null : 0)}
            whileHover={{ scale: 1.03 }}
          >
            <svg width="220" height="70" viewBox="0 0 220 70">
              <polygon
                points="110,5 210,65 10,65"
                fill={activeLayer === 0 ? 'rgba(59,130,246,0.25)' : 'rgba(59,130,246,0.08)'}
                stroke={activeLayer === 0 ? '#3b82f6' : 'rgba(59,130,246,0.3)'}
                strokeWidth="1.5"
              />
            </svg>
            <div className="absolute inset-0 flex items-end justify-center pb-1">
              <span className={`text-xs font-bold ${activeLayer === 0 ? 'text-blue-400' : 'text-blue-400/50'}`}>
                🏠 Campaign
              </span>
            </div>
          </motion.div>

          {/* Middle / Ad Set */}
          <motion.div
            className={`relative w-[200px] h-[100px] cursor-pointer transition-all duration-300 border-l border-r ${
              activeLayer === 1
                ? 'border-purple-500/60 bg-purple-500/15 scale-105'
                : activeLayer !== null
                  ? 'border-white/5 bg-white/[0.02] opacity-30'
                  : 'border-white/10 bg-white/[0.03]'
            }`}
            onClick={() => setActiveLayer(activeLayer === 1 ? null : 1)}
            whileHover={{ scale: 1.03 }}
          >
            {/* Interior rooms */}
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {activeLayer === 1 ? (
                <>
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Users size={20} className="text-purple-400" />
                    <span className="text-[10px] text-purple-300">جمهور</span>
                  </motion.div>
                  <div className="w-px h-10 bg-purple-500/30" />
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <DollarSign size={20} className="text-purple-400" />
                    <span className="text-[10px] text-purple-300">ميزانية</span>
                  </motion.div>
                </>
              ) : (
                <span className={`text-xs font-bold ${activeLayer === 1 ? 'text-purple-400' : 'text-purple-400/50'}`}>
                  🚪 Ad Set
                </span>
              )}
            </div>
          </motion.div>

          {/* Bottom / Ad */}
          <motion.div
            className={`relative w-[200px] h-[90px] cursor-pointer transition-all duration-300 border-l border-r border-b rounded-b-lg ${
              activeLayer === 2
                ? 'border-pink-500/60 bg-pink-500/15 scale-105'
                : activeLayer !== null
                  ? 'border-white/5 bg-white/[0.02] opacity-30'
                  : 'border-white/10 bg-white/[0.03]'
            }`}
            onClick={() => setActiveLayer(activeLayer === 2 ? null : 2)}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {activeLayer === 2 ? (
                <>
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Tv size={18} className="text-pink-400" />
                    <span className="text-[10px] text-pink-300">فيديو</span>
                  </motion.div>
                  <div className="w-px h-8 bg-pink-500/30" />
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Eye size={18} className="text-pink-400" />
                    <span className="text-[10px] text-pink-300">محتوى</span>
                  </motion.div>
                </>
              ) : (
                <span className={`text-xs font-bold ${activeLayer === 2 ? 'text-pink-400' : 'text-pink-400/50'}`}>
                  🪑 Ad
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          {activeLayer !== null && (
            <motion.div
              key={`info-${activeLayer}`}
              className="absolute right-6 top-6 w-56 glass-light rounded-xl p-4 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {(() => {
                  const LayerIcon = layers[activeLayer].icon;
                  return <LayerIcon size={16} className="text-white/70" />;
                })()}
                <span className="text-white font-bold text-sm">{layers[activeLayer].label}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">{layers[activeLayer].description}</p>
              <div className="flex gap-2 mt-3">
                {layers[activeLayer].items.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <ItemIcon size={10} className="text-white/50" />
                      <span className="text-white/60 text-[10px]">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Layer buttons */}
      <motion.div
        className="flex items-center gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {layers.map((layer, i) => (
          <motion.button
            key={layer.id}
            onClick={() => setActiveLayer(activeLayer === i ? null : i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
              activeLayer === i
                ? `bg-gradient-to-r ${layer.color} text-white border-transparent shadow-lg`
                : 'glass text-white/50 border-white/10 hover:text-white hover:border-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {layer.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
