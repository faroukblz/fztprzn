import { motion } from 'framer-motion';
import {
  Sparkles,
  Lightbulb,
  PieChart,
  Store,
  Award,
} from 'lucide-react';

const characteristics = [
  {
    num: 1,
    title: 'تأثير الـ WOW',
    en: 'The "WOW Factor"',
    desc: 'هل يلفت الانتباه من أول 3 ثوانٍ في الفيديو؟ باختصار، هو المنتج الذي تراه وتقول: "واو! لم أرَ هذا من قبل! هذا رائع!".',
    icon: Sparkles,
    color: '#f59e0b',
  },
  {
    num: 2,
    title: 'مقياس الألم وحل المشكلات',
    en: 'Problem-Solving',
    desc: 'هل يحل مشكلة يومية مزعجة؟ (مثل: أداة مطبخ مبتكرة، مصحح وضعية الظهر). الناس مستعدون دائماً للدفع مقابل الحلول المريحة.',
    icon: Lightbulb,
    color: '#3b82f6',
  },
  {
    num: 3,
    title: 'هامش ربح ممتاز',
    en: 'Good Profit Margins',
    desc: 'يسمح بتغطية تكلفة الإعلان، التوصيل، والمرتجعات (الروتور)، ويترك لك مساحة مالية كافية لتحقيق ربح صافٍ وممتاز في النهاية.',
    icon: PieChart,
    color: '#10b981',
  },
  {
    num: 4,
    title: 'الندرة المحلية',
    en: 'Not Easy to Find Locally',
    desc: 'يصعب إيجاده في المحلات العادية أو عند البقال. العديد من المنتجات الرابحة تعتمد على حصريتها وصعوبة توفرها في الأسواق المحلية.',
    icon: Store,
    color: '#a855f7',
  },
  {
    num: 5,
    title: 'الجودة العالية',
    en: 'High Quality',
    desc: 'إذا كنت ترغب في بناء متجر إلكتروني ناجح على المدى الطويل، وتجنب كثرة المرتجعات، يجب أن تتأكد من أنك تبيع منتجات ذات جودة عالية تلبي توقعات العميل.',
    icon: Award,
    color: '#ef4444',
  },
];

export default function Slide4_WinningProductRadar() {
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
          الشريحة ٤ — Winning Product Radar
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          خصائص المنتج الرابح الـ 5
        </h1>
        <p className="text-base text-white/40">
          كل خاصية تحققها تقرّبك من المنتج المثالي
        </p>
      </motion.div>

      {/* Characteristics */}
      <motion.div
        className="relative z-10 w-full max-w-[780px] mx-auto px-4 flex flex-col gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {characteristics.map((char, idx) => {
          const Icon = char.icon;
          const isOdd = char.num % 2 !== 0;

          return (
            <motion.div
              key={char.num}
              className={`flex items-center gap-5 ${isOdd ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: isOdd ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.15, type: 'spring', stiffness: 120, damping: 20 }}
            >
              {/* Icon Block */}
              <motion.div
                className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${char.color}15, ${char.color}05)` }}
                whileHover={{ scale: 1.08, borderColor: `${char.color}40` }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon size={30} style={{ color: char.color }} />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white/40">{char.num}</span>
                </div>
              </motion.div>

              {/* Text Block */}
              <div className={`flex-1 glass rounded-xl p-4 border border-white/5 ${isOdd ? 'text-right' : 'text-left'}`}>
                <p className="text-white font-bold text-base mb-0.5">
                  {char.title}{' '}
                  <span className="text-white/25 text-xs font-normal">({char.en})</span>
                </p>
                <p className="text-white/40 text-xs leading-relaxed">{char.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
