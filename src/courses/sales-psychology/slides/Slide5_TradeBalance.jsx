import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  AlertTriangle,
  CheckCircle2,
  Package,
  Warehouse,
  Truck,
  Rocket,
  DollarSign,
  Target,
  Users,
} from 'lucide-react';

const traditional = [
  { icon: DollarSign, text: 'رأس مال كبير لشراء السلعة (Risk)', color: '#ef4444' },
  { icon: Warehouse, text: 'مخاطرة كساد المخزون (Dead Stock)', color: '#f59e0b' },
  { icon: Truck, text: 'تعب التغليف ومتابعة شركات التوصيل يومياً', color: '#f97316' },
];

const fazti = [
  { icon: DollarSign, text: 'صفر رأس مال للسلعة', color: '#10b981' },
  { icon: Target, text: 'التركيز 100% على مهارة واحدة: "التسويق"', color: '#06b6d4' },
  { icon: Users, text: 'فريق كامل (Call Center + Delivery) يعمل لصالحك', color: '#8b5cf6' },
];

export default function Slide5_TradeBalance() {
  const [step, setStep] = useState(0);

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
          مقارنة
        </h1>
        <p className="text-base text-white/40">
          التجارة المباشرة مقابل فازتي أفيلييت
        </p>
      </motion.div>

      {/* Scale Icon */}
      <motion.div
        className="z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        <Scale size={36} className="text-white/20" />
      </motion.div>

      {/* Two Column Comparison */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[860px] mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Traditional Commerce */}
        <motion.div
          className="glass rounded-2xl p-5 border border-red-500/15"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
              <Package size={20} className="text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">🧱 الطريق التقليدي</p>
              <p className="text-red-400/60 text-[10px]">Traditional Commerce</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {traditional.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <AlertTriangle size={14} className="text-red-400/50 shrink-0 mt-0.5" />
                  <p className="text-white/50 text-xs leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Fazti Affiliate */}
        <motion.div
          className="glass rounded-2xl p-5 border border-green-500/15"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center">
              <Rocket size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">🚀 طريق فازتي (Affiliate)</p>
              <p className="text-green-400/60 text-[10px]">Fazti Affiliate</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {fazti.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <CheckCircle2 size={14} className="text-green-400/50 shrink-0 mt-0.5" />
                  <p className="text-white/50 text-xs leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
