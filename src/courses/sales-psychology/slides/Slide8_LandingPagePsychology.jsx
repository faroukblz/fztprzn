import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shuffle,
  Target,
  Eye,
  ChevronDown,
  ChevronUp,
  Zap,
  LayoutGrid,
  ArrowRight,
  User,
  Phone,
  Ruler,
  MapPin,
  ShoppingCart,
} from 'lucide-react';

const concepts = [
  {
    id: 'paradox',
    icon: Shuffle,
    title: 'مفارقة الخيارات',
    en: 'Paradox of Choice',
    desc: 'عندما تعطي الزبون 20 خياراً، يتشتت دماغه ويؤجل الشراء، ثم ينسى!',
    color: '#ef4444',
    side: 'left',
  },
  {
    id: 'focus',
    icon: Target,
    title: 'قوة التركيز',
    en: 'Laser Focus',
    desc: 'صفحة الهبوط تصطاد زبوناً جاء من أجل حل واحد. لا تشتته بمنتجات أخرى حتى يكمل الطلب.',
    color: '#10b981',
    side: 'right',
  },
  {
    id: 'fpattern',
    icon: Eye,
    title: 'نمط القراءة',
    en: 'F-Pattern',
    desc: 'الزبون لا يقرأ كل شيء، هو يعمل Scan.. لذلك نضع الفوائد في نقاط ونبرز زر "اطلب الآن" بلون فاقع.',
    color: '#3b82f6',
    side: 'right',
  },
];

export default function Slide8_LandingPagePsychology() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="slide-container flex-col gap-5 py-14 overflow-y-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-2 font-medium">
          الشريحة ٨ — Landing Page Psychology
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          المتاهة مقابل الطريق السريع
        </h1>
        <p className="text-base text-white/40">
          لماذا صفحة الهبوط أقوى من المتجر العام
        </p>
      </motion.div>

      {/* Split Screen Visual */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[860px] mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* LEFT: Multi-Product Maze */}
        <motion.div
          className="glass rounded-2xl p-5 border border-red-500/10 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-2">
              <LayoutGrid size={22} className="text-red-400" />
            </div>
            <p className="text-red-400 font-bold text-sm">متجر عام (20+ منتج)</p>
            <p className="text-white/25 text-[10px]">Multi-Product Store</p>
          </div>

          {/* Mini grid of dots representing too many products */}
          <div className="grid grid-cols-4 gap-2 mb-3 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-white/15 mx-auto" />
            ))}
          </div>

          <p className="text-white/30 text-[11px] text-center">
            الزبون يتشتت بين الخيارات ويغادر
          </p>
        </motion.div>

        {/* RIGHT: Landing Page */}
        <motion.div
          className="glass rounded-2xl p-5 border border-green-500/10 relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-2">
              <Target size={22} className="text-green-400" />
            </div>
            <p className="text-green-400 font-bold text-sm">صفحة هبوط (منتج واحد)</p>
            <p className="text-white/25 text-[10px]">Single-Product Landing Page</p>
          </div>

          {/* Mini form wireframe */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            {[
              { icon: User, label: 'الاسم' },
              { icon: Phone, label: 'الهاتف' },
              { icon: Ruler, label: 'المقاس' },
              { icon: MapPin, label: 'العنوان' },
            ].map((field, i) => (
              <div key={i} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <field.icon size={11} className="text-white/25" />
                <span className="text-white/30 text-[10px]">{field.label}</span>
              </div>
            ))}

            {/* CTA Button */}
            <motion.div
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-fazti-purple to-fazti-pink text-white text-[10px] font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingCart size={11} />
              اطلب الآن
            </motion.div>
          </div>

          <p className="text-white/30 text-[11px] text-center">
            مسار واضح → تحويل أعلى
          </p>
        </motion.div>
      </motion.div>

      {/* Expandable Concept Cards */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] mx-auto px-4 flex flex-col md:flex-row gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {concepts.map((concept, idx) => {
          const Icon = concept.icon;
          const isOpen = expanded[concept.id];
          return (
            <motion.div
              key={concept.id}
              className="glass rounded-xl border border-white/5 overflow-hidden flex-1 cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              onClick={() => toggle(concept.id)}
            >
              <div className="p-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${concept.color}15` }}
                >
                  <Icon size={16} style={{ color: concept.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-xs truncate">{concept.title}</p>
                  <p className="text-white/25 text-[10px]">({concept.en})</p>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} className="text-white/20" />
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-white/45 text-[11px] leading-relaxed text-right">
                        {concept.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
