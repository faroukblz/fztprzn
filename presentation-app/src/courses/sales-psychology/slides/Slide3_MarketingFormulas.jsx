import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Lightbulb,
  Heart,
  ShoppingCart,
  AlertCircle,
  Flame,
  CheckCircle2,
  CloudRain,
  Sun,
  Waypoints,
  Settings,
  TrendingUp,
  Gift,
  Handshake,
  Image,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

/* ─── Card Data ─── */
const cards = [
  {
    id: 'aida',
    tag: 'AIDA',
    title: 'قمع المبيعات الكلاسيكي',
    subtitle: 'The Classic Sales Funnel',
    color: '#dc2626',
    steps: [
      { icon: Target, label: 'A — Attention', ar: 'الانتباه', desc: 'إعلان يوقف التمرير — فيديو ملفت أو صورة جذابة.' },
      { icon: Lightbulb, label: 'I — Interest', ar: 'الاهتمام', desc: 'ربط المنتج باهتمامات العميل اليومية.' },
      { icon: Heart, label: 'D — Desire', ar: 'الرغبة', desc: 'بناء الثقة: آراء العملاء، الدفع عند الاستلام.' },
      { icon: ShoppingCart, label: 'A — Action', ar: 'القرار', desc: 'زر مباشر وواضح: "اطلب الآن".' },
    ],
  },
  {
    id: 'pas',
    tag: 'PAS',
    title: 'سر الاستجابة المباشرة',
    subtitle: 'Direct Response Secret',
    color: '#f59e0b',
    steps: [
      { icon: AlertCircle, label: 'P — Problem', ar: 'المشكلة', desc: 'تحديد ألم العميل: "تعاني من آلام الظهر أثناء القيادة؟"' },
      { icon: Flame, label: 'A — Agitate', ar: 'التهييج', desc: 'تضخيم المشكلة: "هذا الألم قد يمنعك من العمل!"' },
      { icon: CheckCircle2, label: 'S — Solution', ar: 'الحل', desc: 'تقديم منتجك كالبطل المنقذ.' },
    ],
  },
  {
    id: 'bab',
    tag: 'BAB',
    title: 'سحر التحول',
    subtitle: 'The Transformation Magic',
    color: '#06b6d4',
    steps: [
      { icon: CloudRain, label: 'B — Before', ar: 'قبل', desc: 'صورة قاتمة لوضع العميل الحالي بدون المنتج.' },
      { icon: Sun, label: 'A — After', ar: 'بعد', desc: 'صورة مشرقة ومثالية للعميل مع المنتج.' },
      { icon: Waypoints, label: 'B — Bridge', ar: 'الجسر', desc: 'منتجك هو "الجسر" الذي سينقله للراحة.' },
    ],
  },
  {
    id: 'fab',
    tag: 'FAB',
    title: 'تحويل الخصائص إلى قيمة',
    subtitle: 'Features → Value',
    color: '#8b5cf6',
    steps: [
      { icon: Settings, label: 'F — Features', ar: 'الخصائص', desc: 'مواصفات المنتج: بطارية 5000 مللي أمبير.' },
      { icon: TrendingUp, label: 'A — Advantages', ar: 'المزايا', desc: 'ما يفعله المنتج: يدوم يومين بشحنة واحدة.' },
      { icon: Gift, label: 'B — Benefits', ar: 'الفوائد', desc: 'القيمة النفسية: "لن تنقطع عن العالم أبدًا!"' },
    ],
  },
  {
    id: '4ps',
    tag: '4 Ps',
    title: 'بناء الثقة السريعة',
    subtitle: 'Quick Trust Building',
    color: '#10b981',
    steps: [
      { icon: Handshake, label: 'P — Promise', ar: 'الوعد', desc: 'وعد قوي وجذاب يلفت الانتباه.' },
      { icon: Image, label: 'P — Picture', ar: 'الصورة', desc: 'رسم صورة ذهنية لتأثير المنتج.' },
      { icon: ShieldCheck, label: 'P — Proof', ar: 'الدليل', desc: 'إثبات المصداقية: شهادات، ضمان.' },
      { icon: Rocket, label: 'P — Push', ar: 'الدفع', desc: 'خلق استعجال في الطلب.' },
    ],
  },
];

export default function Slide1_MarketingFormulas() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((i) => (i + 1) % cards.length);
  const prev = () => setActiveIdx((i) => (i - 1 + cards.length) % cards.length);

  const active = cards[activeIdx];

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
          الشريحة ١ — Marketing Formulas
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          ترسانة معادلات التسويق
        </h1>
        <p className="text-base text-white/40">
          خمسة أطر ذهنية تحوّل أي منتج إلى عرض لا يُقاوم
        </p>
      </motion.div>

      {/* ─── Carousel ─── */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Card stack */}
        <div className="relative flex items-center justify-center h-[420px]">
          {cards.map((card, idx) => {
            const offset = idx - activeIdx;
            const absOff = Math.abs(offset);
            const isActive = idx === activeIdx;
            // wrap for circular positions
            const wrappedOffset =
              offset > 2 ? offset - cards.length : offset < -2 ? offset + cards.length : offset;

            return (
              <motion.div
                key={card.id}
                className="absolute w-[340px] glass rounded-2xl p-6 border border-white/10 cursor-pointer select-none"
                style={{ transformOrigin: 'center center' }}
                animate={{
                  x: wrappedOffset * 110,
                  scale: isActive ? 1 : 0.82,
                  opacity: absOff > 2 ? 0 : isActive ? 1 : 0.35,
                  zIndex: isActive ? 30 : 20 - absOff,
                  rotateY: isActive ? 0 : wrappedOffset > 0 ? -8 : 8,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                onClick={() => setActiveIdx(idx)}
              >
                {/* Tag badge */}
                <div
                  className="inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4"
                  style={{ backgroundColor: `${card.color}25`, color: card.color }}
                >
                  {card.tag}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 text-right">{card.title}</h3>
                <p className="text-xs text-white/35 mb-5">{card.subtitle}</p>

                {/* Steps */}
                <div className="flex flex-col gap-3">
                  {card.steps.map((step, si) => {
                    const StepIcon = step.icon;
                    return (
                      <motion.div
                        key={si}
                        className="flex items-start gap-3 text-right"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${card.color}20` }}
                        >
                          <StepIcon size={15} style={{ color: card.color }} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-white/70">{step.label} — {step.ar}</p>
                          <p className="text-[11px] text-white/40 leading-relaxed">{step.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <motion.button
            onClick={prev}
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {cards.map((c, i) => (
              <motion.button
                key={c.id}
                className="rounded-full transition-all"
                style={{
                  width: i === activeIdx ? 24 : 8,
                  height: 8,
                  backgroundColor: i === activeIdx ? active.color : 'rgba(255,255,255,0.15)',
                }}
                onClick={() => setActiveIdx(i)}
                layout
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
