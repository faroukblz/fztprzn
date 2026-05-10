import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Palette,
  Pin,
  MessageSquareText,
  FileWarning,
  MessageCircleOff,
  Eye,
} from 'lucide-react';

const dos = [
  { icon: Palette, text: 'توحيد الألوان (Branding) بين اللوغو والغلاف', color: '#10b981' },
  { icon: Pin, text: 'تثبيت منشور يشرح سياسة الاستبدال والاسترجاع (يزرع الثقة فوراً)', color: '#06b6d4' },
  { icon: MessageSquareText, text: 'نشر محتوى تفاعلي (نصائح) وليس فقط صور منتجات للبيع', color: '#3b82f6' },
];

const donts = [
  { icon: FileWarning, text: 'ترك قسم "حول" (About) فارغاً', color: '#ef4444' },
  { icon: MessageCircleOff, text: 'تجاهل تعليقات الزبائن (حتى السلبية منها يجب الرد عليها)', color: '#f59e0b' },
];

export default function Slide6_FacebookAnatomy() {
  const [activeTab, setActiveTab] = useState('dos'); // 'dos' | 'donts'

  const items = activeTab === 'dos' ? dos : donts;
  const isDos = activeTab === 'dos';

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
          الشريحة ٦ — Facebook Page Anatomy
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          تشريح صفحة فيسبوك الموثوقة
        </h1>
        <p className="text-base text-white/40">
          كيف تبني صفحة تزرع الثقة من أول زيارة
        </p>
      </motion.div>

      {/* Facebook page wireframe */}
      <motion.div
        className="relative z-10 w-full max-w-[680px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Page mockup */}
        <div className="glass rounded-2xl overflow-hidden border border-white/10">
          {/* Cover photo area */}
          <div className="relative h-28 bg-gradient-to-r from-brand-900 to-brand-800 flex items-end px-6 pb-3">
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{ background: 'linear-gradient(135deg, #982598 0%, #15173d 100%)' }}
            />
            <div className="relative flex items-end gap-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-fazti-purple to-fazti-pink border-2 border-brand-950 flex items-center justify-center -mb-3">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="mb-1">
                <p className="text-white font-bold text-sm">متجر فازتي 🏪</p>
                <p className="text-white/40 text-[10px]">E-commerce · 15K متابع</p>
              </div>
            </div>
          </div>

          {/* Nav tabs mock */}
          <div className="flex items-center gap-4 px-6 py-3 border-b border-white/5">
            {['الرئيسية', 'حول', 'المنشورات', 'المتجر'].map((tab) => (
              <span key={tab} className="text-white/30 text-[10px] font-medium">{tab}</span>
            ))}
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-3 px-6 pt-5 pb-3">
            <button
              onClick={() => setActiveTab('dos')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                isDos
                  ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : 'bg-white/5 text-white/40 border border-white/10'
              }`}
            >
              <CheckCircle2 size={13} />
              افعل (Do)
            </button>
            <button
              onClick={() => setActiveTab('donts')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                !isDos
                  ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                  : 'bg-white/5 text-white/40 border border-white/10'
              }`}
            >
              <XCircle size={13} />
              لا تفعل (Don't)
            </button>
          </div>

          {/* Content items */}
          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      className="flex items-start gap-3 p-3 rounded-xl border text-right"
                      style={{
                        borderColor: `${item.color}20`,
                        background: `${item.color}08`,
                      }}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <Icon size={15} style={{ color: item.color }} />
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed flex-1">{item.text}</p>
                      <span style={{ color: item.color }} className="text-sm shrink-0">
                        {isDos ? '✓' : '✗'}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Hint */}
      <motion.div
        className="flex items-center justify-center gap-2 text-white/20 text-xs z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Eye size={13} />
        <span>بدّل بين "افعل" و "لا تفعل" لرؤية النصائح</span>
      </motion.div>
    </div>
  );
}
