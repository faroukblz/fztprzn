import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Ban,
  Ghost,
  PackageX,
  ShieldCheck,
  Phone,
  Truck,
} from 'lucide-react';

const disasters = [
  {
    id: 'banned',
    icon: Ban,
    problem: 'حظر حساب الإعلانات',
    problemEn: 'Banned Account',
    color: '#ef4444',
    solution: 'تجهيز حسابات احتياطية (Warm-up) سلفاً، وعدم التعلق بحساب واحد.',
    solutionIcon: ShieldCheck,
  },
  {
    id: 'fake',
    icon: Ghost,
    problem: 'طلبيات وهمية',
    problemEn: 'Fake Orders',
    color: '#a855f7',
    solution: 'سكريبت اتصال احترافي للتأكيد المزدوج + فلترة الأرقام الخاطئة.',
    solutionIcon: Phone,
  },
  {
    id: 'returns',
    icon: PackageX,
    problem: '"الروتور" العالي',
    problemEn: 'High Return Rate',
    color: '#f59e0b',
    solution: 'تغليف ممتاز + تتبع يومي مع شركة التوصيل + إرسال SMS للزبون عند خروج الطلبية.',
    solutionIcon: Truck,
  },
];

export default function Slide2_SurvivalMatrix() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          الشريحة ٢ — The Survival Matrix
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          دورة حياة تاجر الـ COD
        </h1>
        <p className="text-base text-white/40">
          كل كارثة لها عقلية محارب تتغلب عليها
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[860px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {disasters.map((d, idx) => {
          const isFlipped = flipped[d.id];
          const ProblemIcon = d.icon;
          const SolIcon = d.solutionIcon;

          return (
            <motion.div
              key={d.id}
              className="relative cursor-pointer select-none"
              style={{ perspective: '1000px', minHeight: '280px' }}
              onClick={() => toggleFlip(d.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.12, type: 'spring', stiffness: 180 }}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
              >
                {/* ── FRONT (Problem) ── */}
                <div
                  className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${d.color}20` }}
                  >
                    <ProblemIcon size={26} style={{ color: d.color }} />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">{d.problem}</p>
                  <p className="text-white/30 text-xs mb-4">{d.problemEn}</p>
                  <div className="mt-auto">
                    <span className="text-white/20 text-[10px] tracking-wider uppercase">
                      اضغط لاكتشاف الحل ←
                    </span>
                  </div>
                </div>

                {/* ── BACK (Solution) ── */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center border-2"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderColor: `${d.color}40`,
                    background: `linear-gradient(135deg, ${d.color}10, rgba(21,23,61,0.8))`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${d.color}25` }}
                  >
                    <SolIcon size={26} style={{ color: d.color }} />
                  </div>
                  <p className="text-xs font-bold text-fazti-pink uppercase tracking-wider mb-2">
                    ✅ عقلية المحارب
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">{d.solution}</p>
                  <div className="mt-auto pt-3">
                    <span className="text-white/20 text-[10px] tracking-wider uppercase">
                      اضغط للعودة ←
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Hint */}
      <motion.p
        className="text-white/20 text-xs text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        اضغط على أي بطاقة لقلبها واكتشاف الحل
      </motion.p>
    </div>
  );
}
