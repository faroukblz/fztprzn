import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  AlertTriangle,
  PackageX,
  Truck,
  Rocket,
  DollarSign,
  Target,
  Users,
  Scale,
} from 'lucide-react';

const traditionalItems = [
  { icon: DollarSign, text: 'رأس مال كبير لشراء السلعة (Risk)', color: '#ef4444' },
  { icon: PackageX, text: 'مخاطرة كساد المخزون (Dead Stock)', color: '#f59e0b' },
  { icon: Truck, text: 'تعب التغليف ومتابعة التوصيل يومياً', color: '#a855f7' },
];

const affiliateItems = [
  { icon: DollarSign, text: 'صفر رأس مال للسلعة', color: '#10b981' },
  { icon: Target, text: 'التركيز 100% على مهارة: "التسويق"', color: '#06b6d4' },
  { icon: Users, text: 'فريق كامل (Call Center + Delivery) يعمل لصالحك', color: '#3b82f6' },
];

export default function Slide5_TradeBalance() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="slide-container flex-col gap-6 py-14 overflow-y-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">
          الشريحة ٥ — Trade Balance
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          الميزان التجاري
        </h1>
        <p className="text-base text-white/40">
          التجارة التقليدية مقابل فازتي أفيلييت
        </p>
      </motion.div>

      {/* Balance Scale Visual */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Scale icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"
            animate={{ rotateZ: showComparison ? [0, -5, 5, -3, 0] : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Scale size={24} className="text-fazti-pink" />
          </motion.div>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Traditional */}
          <motion.div
            className="glass rounded-2xl p-6 border border-red-500/10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                <Boxes size={20} className="text-red-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">🧱 الطريق التقليدي</p>
                <p className="text-red-400/50 text-xs">Traditional Commerce</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {traditionalItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-right"
                    initial={{ opacity: 0, y: 15 }}
                    animate={showComparison ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed flex-1">{item.text}</p>
                    <AlertTriangle size={13} className="text-red-400/40 shrink-0" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Fazti Affiliate */}
          <motion.div
            className="glass rounded-2xl p-6 border border-green-500/10"
            style={showComparison ? { boxShadow: '0 0 30px rgba(16,185,129,0.08)' } : {}}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 150 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
                <Rocket size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">🚀 طريق فازتي (Affiliate)</p>
                <p className="text-green-400/50 text-xs">Fazti Affiliate</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {affiliateItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-right"
                    initial={{ opacity: 0, y: 15 }}
                    animate={showComparison ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed flex-1">{item.text}</p>
                    <motion.div
                      animate={showComparison ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className="text-green-400/60 text-xs">✓</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.button
        onClick={() => setShowComparison(!showComparison)}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[260px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Scale size={18} />
          {showComparison ? 'إخفاء المقارنة — Hide' : 'قارن الطريقين — Compare'}
        </span>
      </motion.button>
    </div>
  );
}
