import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Palette,
  Pin,
  MessageSquareText,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

const doItems = [
  {
    icon: Palette,
    text: 'توحيد الألوان (Branding) بين اللوغو والغلاف',
    color: '#10b981',
  },
  {
    icon: Pin,
    text: 'تثبيت منشور يشرح سياسة الاستبدال والاسترجاع (يزرع الثقة فوراً)',
    color: '#10b981',
  },
  {
    icon: MessageSquareText,
    text: 'نشر محتوى تفاعلي (نصائح) وليس فقط صور منتجات للبيع',
    color: '#10b981',
  },
];

const dontItems = [
  {
    icon: AlertCircle,
    text: 'ترك قسم "حول" (About) فارغاً',
    color: '#ef4444',
  },
  {
    icon: MessageCircle,
    text: 'تجاهل تعليقات الزبائن (حتى السلبية منها يجب الرد عليها باحترافية)',
    color: '#ef4444',
  },
];

export default function Slide6_FacebookAnatomy() {
  const [activeTab, setActiveTab] = useState('do');

  const items = activeTab === 'do' ? doItems : dontItems;
  const tabColor = activeTab === 'do' ? '#10b981' : '#ef4444';

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

      {/* Facebook Page Wireframe */}
      <motion.div
        className="relative z-10 w-full max-w-[640px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Page Frame */}
        <div className="glass rounded-2xl overflow-hidden border border-white/10">
          {/* Cover Photo Area */}
          <div className="h-28 bg-gradient-to-r from-fazti-purple/30 via-fazti-pink/20 to-fazti-purple/30 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-950/60" />
          </div>

          {/* Profile Section */}
          <div className="px-5 -mt-8 pb-4 relative z-10 flex items-end gap-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fazti-purple to-fazti-pink flex items-center justify-center text-white text-xl font-bold border-4 border-brand-950 shrink-0">
              F
            </div>
            <div className="pb-1 text-right flex-1">
              <p className="text-white font-bold text-sm">متجر فازتي 🏪</p>
              <p className="text-white/30 text-[10px]">E-commerce · متابع 15K</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 px-4 pb-3 border-b border-white/5">
            {['المتجر', 'المنشورات', 'حول', 'الرئيسية'].map((tab) => (
              <span key={tab} className="text-white/25 text-[11px] px-3 py-1.5 rounded-md hover:bg-white/5 cursor-default">
                {tab}
              </span>
            ))}
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-3 justify-center py-4">
            <motion.button
              onClick={() => setActiveTab('do')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'do'
                  ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : 'bg-white/5 text-white/30 border border-white/5'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <CheckCircle2 size={13} />
              افعل (Do)
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('dont')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'dont'
                  ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                  : 'bg-white/5 text-white/30 border border-white/5'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <XCircle size={13} />
              لا تفعل (Don't)
            </motion.button>
          </div>

          {/* Items List */}
          <div className="px-4 pb-5 flex flex-col gap-2.5">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  className="glass-light rounded-xl p-3.5 flex items-start gap-3 border"
                  style={{ borderColor: `${item.color}20` }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {activeTab === 'do' ? (
                    <CheckCircle2 size={15} className="text-green-400/70 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle size={15} className="text-red-400/70 shrink-0 mt-0.5" />
                  )}
                  <p className="text-white/50 text-xs leading-relaxed flex-1 text-right">{item.text}</p>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Hint */}
      <motion.p
        className="text-white/20 text-xs text-center z-10 flex items-center justify-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        👁️ بدّل بين "افعل" و "لا تفعل" لرؤية النصائح
      </motion.p>
    </div>
  );
}
