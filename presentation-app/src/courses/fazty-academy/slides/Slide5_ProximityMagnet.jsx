import { useState } from 'react';
import { motion } from 'framer-motion';
import { Magnet, Instagram, Twitter, Youtube, Facebook, Linkedin, Github } from 'lucide-react';

const icons = [
  { Icon: Instagram, color: '#E1306C', label: 'Instagram' },
  { Icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
  { Icon: Youtube, color: '#FF0000', label: 'YouTube' },
  { Icon: Facebook, color: '#4267B2', label: 'Facebook' },
  { Icon: Linkedin, color: '#0077B5', label: 'LinkedIn' },
  { Icon: Github, color: '#ffffff', label: 'GitHub' },
];

const scatteredPositions = [
  { x: -240, y: -110 },
  { x: 200, y: -130 },
  { x: -160, y: 90 },
  { x: 260, y: 60 },
  { x: -60, y: -150 },
  { x: 120, y: 130 },
];

export default function Slide5_ProximityMagnet() {
  const [grouped, setGrouped] = useState(false);

  return (
    <div className="slide-container flex-col gap-8">
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">الشريحة ٥ — Proximity</p>
        <h1 className="text-5xl font-bold text-white mb-3">التقارب</h1>
        <p className="text-base text-white/40">العناصر المترابطة يجب أن تكون قريبة من بعض</p>
      </motion.div>

      <motion.div
        className="relative w-[700px] glass rounded-2xl overflow-visible"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, height: grouped ? '280px' : '350px' }}
        transition={{ delay: 0.2, duration: 0.6, height: { type: 'spring', stiffness: 200, damping: 25 } }}
        layout
      >
        {/* {grouped && (
          <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="w-[300px] h-[140px] border border-dashed border-fazti-pink/20 rounded-2xl" />
          </motion.div>
        )} */}

        <div className="absolute inset-0 flex items-center justify-center">
          {icons.map((item, idx) => {
            const { Icon } = item;
            const gRow = Math.floor(idx / 3);
            const gCol = idx % 3;
            const groupedX = (gCol - 1) * 90;
            const groupedY = (gRow - 0.5) * 90;

            return (
              <motion.div
                key={item.label}
                className="absolute flex flex-col items-center gap-2"
                animate={{
                  x: grouped ? groupedX : scatteredPositions[idx].x,
                  y: grouped ? groupedY : scatteredPositions[idx].y,
                  rotate: grouped ? 0 : (idx % 2 === 0 ? 12 : -8),
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 18, delay: grouped ? idx * 0.06 : 0 }}
                layout
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border border-white/10"
                  style={{ backgroundColor: `${item.color}20` }}
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  animate={{ borderColor: grouped ? `${item.color}40` : 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </motion.div>
                <motion.span className="text-[10px] text-white/40 font-medium" animate={{ opacity: grouped ? 1 : 0.3 }}>
                  {item.label}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="absolute top-4 left-4 glass rounded-full px-3 py-1" layout>
          <span className="text-xs text-white/50">
            {grouped ? '✓ متقاربة — Grouped' : '✗ متفرقة — Scattered'}
          </span>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => setGrouped(!grouped)}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[280px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Magnet size={18} />
          {grouped ? 'تفريق — Scatter' : 'تطبيق التقارب — Group'}
        </span>
      </motion.button>
    </div>
  );
}
