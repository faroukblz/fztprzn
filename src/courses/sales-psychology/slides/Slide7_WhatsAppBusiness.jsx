import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  ShoppingBag,
  Bot,
  Tag,
  Zap,
  CheckCircle2,
  XCircle,
  Smartphone,
} from 'lucide-react';

/* ─── Chat messages for the phone mockup ─── */
const chatMessages = [
  { id: 1, from: 'customer', text: 'السلام عليكم، هل المنتج متوفر؟', delay: 0.4 },
  { id: 2, from: 'bot', text: 'أهلاً بك في متجرنا! 🎉 نعم المنتج متوفر. كيف يمكنني مساعدتك؟', delay: 1.2 },
  { id: 3, from: 'customer', text: 'كم السعر مع التوصيل؟', delay: 2.2 },
  { id: 4, from: 'bot', text: '💰 السعر: 3500 دج\n🚛 التوصيل: 600 دج\n✅ الدفع عند الاستلام', delay: 3.2 },
  { id: 5, from: 'customer', text: 'تمام، أريد أطلب واحد 👍', delay: 4.2 },
  { id: 6, from: 'bot', text: '🎉 تم تسجيل طلبك! سيتم التواصل معك خلال ساعة. شكراً لثقتك!', delay: 5.2 },
];

/* ─── Feature comparison data ─── */
const features = [
  {
    icon: ShoppingBag,
    title: 'الكتالوج',
    en: 'Catalog',
    desc: 'عرض منتجاتك كمتجر مصغر: صور + أسعار + وصف.',
    color: '#8b5cf6',
  },
  {
    icon: Bot,
    title: 'الرسالة الترحيبية',
    en: 'Auto-Reply',
    desc: 'الرد الفوري "أهلاً بك في متجرنا…" حتى وأنت نائم.',
    color: '#06b6d4',
  },
  {
    icon: Tag,
    title: 'التصنيفات',
    en: 'Labels',
    desc: 'ترتيب الزبائن: طلب جديد، تم التأكيد، تم الشحن، روتور.',
    color: '#f59e0b',
  },
  {
    icon: Zap,
    title: 'الردود السريعة',
    en: 'Quick Replies',
    desc: 'للإجابة على الأسئلة المتكررة بضغطة زر.',
    color: '#10b981',
  },
];

export default function Slide7_WhatsAppBusiness() {
  const [showChat, setShowChat] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  /* Auto-start chat animation on mount */
  useEffect(() => {
    const t = setTimeout(() => setShowChat(true), 600);
    return () => clearTimeout(t);
  }, []);

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
          الشريحة ٧ — WhatsApp Business
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          مندوب المبيعات الآلي
        </h1>
        <p className="text-base text-white/40">
          واتساب العادي ❌ مقابل واتساب بيزنس ✅
        </p>
      </motion.div>

      {/* ─── Split Layout ─── */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-[960px] mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* ═══ LEFT: Phone Mockup ═══ */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          {/* Phone frame */}
          <div className="relative w-[280px] h-[520px] rounded-[36px] border-2 border-white/10 bg-brand-950 overflow-hidden shadow-2xl shadow-black/40">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-950 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-white/10 rounded-full" />
            </div>

            {/* Status bar */}
            <div className="bg-[#075e54] px-4 pt-8 pb-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Smartphone size={14} className="text-white/70" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">متجر فازتي 🏪</p>
                <p className="text-white/50 text-[10px]">متصل الآن</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] text-green-300">Business</span>
              </div>
            </div>

            {/* Chat area */}
            <div
              className="px-3 py-4 flex flex-col gap-2 overflow-y-auto"
              style={{ height: 'calc(100% - 80px)', background: 'linear-gradient(180deg, #0d0e28 0%, #121436 100%)' }}
            >
              <AnimatePresence>
                {showChat &&
                  chatMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] leading-relaxed ${
                        msg.from === 'customer'
                          ? 'self-start bg-white/5 text-white/70 rounded-tl-sm'
                          : 'self-end bg-[#075e54]/60 text-white/80 rounded-tr-sm'
                      }`}
                      initial={{ opacity: 0, y: 16, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: msg.delay, type: 'spring', stiffness: 200, damping: 20 }}
                    >
                      {msg.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < msg.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Glow behind phone */}
          <div className="absolute -inset-6 bg-gradient-to-b from-[#075e54]/10 to-fazti-purple/5 rounded-[48px] blur-2xl -z-10" />
        </motion.div>

        {/* ═══ RIGHT: Feature Cards ═══ */}
        <motion.div
          className="flex flex-col gap-3 flex-1 max-w-[420px]"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          {/* Comparison badge */}
          <div className="flex items-center gap-4 mb-2 justify-center lg:justify-start">
            <span className="flex items-center gap-1.5 text-xs font-medium text-red-400/70 bg-red-500/10 px-3 py-1.5 rounded-lg">
              <XCircle size={13} />
              واتساب العادي
            </span>
            <span className="text-white/20 text-xs">→</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-green-400/70 bg-green-500/10 px-3 py-1.5 rounded-lg">
              <CheckCircle2 size={13} />
              واتساب بيزنس
            </span>
          </div>

          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isHovered = hoveredFeature === idx;

            return (
              <motion.div
                key={feat.en}
                className="glass rounded-xl p-4 border border-white/5 cursor-pointer transition-colors"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.12, type: 'spring', stiffness: 180 }}
                whileHover={{ borderColor: `${feat.color}40`, backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-start gap-3 text-right">
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${feat.color}18` }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={18} style={{ color: feat.color }} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white mb-0.5">
                      {feat.title}{' '}
                      <span className="text-white/25 text-xs font-normal">({feat.en})</span>
                    </p>
                    <motion.p
                      className="text-[11px] text-white/40 leading-relaxed"
                      animate={{ color: isHovered ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)' }}
                    >
                      {feat.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
