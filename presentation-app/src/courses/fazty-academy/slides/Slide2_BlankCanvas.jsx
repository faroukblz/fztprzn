import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Isabelle',
    brandColor: 'from-blue-600 to-blue-900',
    accent: '#1e40af',
    tagline: 'تونة إيزابيل',
    shape: 'rounded-xl',
    beforeImg: '/before/thon-removebg-preview.png',
    afterImg: '/after/thon after.png',
  },
  {
    id: 2,
    name: 'Hamoud Boualem',
    brandColor: 'from-green-500 to-emerald-700',
    accent: '#16a34a',
    tagline: 'حمود بوعلام',
    shape: 'rounded-2xl',
    beforeImg: '/before/canette-removebg-preview.png',
    afterImg: '/after/canette after.png',
  },
  {
    id: 3,
    name: 'Jumbo',
    brandColor: 'from-orange-500 to-red-600',
    accent: '#ea580c',
    tagline: 'نودلز جومبو',
    shape: 'rounded-xl',
    beforeImg: '/before/noodles-removebg-preview.png',
    afterImg: '/after/jumbo_after.png',
  },
];

export default function Slide2_BlankCanvas() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="slide-container flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-fazti-pink mb-3 font-medium">
          الشريحة ٢ — The Value of Design
        </p>
        <h1 className="text-5xl font-bold text-white mb-3">عالم بلا تصميم</h1>
        <p className="text-base text-white/40">
          ماذا لو كانت المنتجات بلا هوية؟
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="flex gap-8 items-center z-10">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            className="relative w-[220px] h-[300px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
            style={{ perspective: '600px' }}
          >
            {/* Before state — white generic box with product cutout image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, #e8e8e8, #ccc, #b0b0b0)',
                boxShadow: 'inset -4px -4px 10px rgba(0,0,0,0.15), inset 4px 4px 10px rgba(255,255,255,0.3), 6px 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <img
                src={product.beforeImg}
                alt={product.name}
                className="w-28 h-28 object-contain mb-3 opacity-60 grayscale"
              />
              <div className="w-20 h-2.5 bg-gray-400/40 rounded mb-2" />
              <div className="w-14 h-2 bg-gray-400/30 rounded mb-4" />
              <p className="text-gray-500/50 text-[10px]">Generic Product</p>
            </div>

            {/* After state — branded overlay with real product image */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, rotateY: -30, scale: 1.05 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    delay: idx * 0.2,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 80,
                    damping: 18,
                  }}
                >
                  {/* Full branded image as background */}
                  <img
                    src={product.afterImg}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />

                  {/* Brand name & tagline at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <motion.p
                      className="text-white font-bold text-lg mb-1 drop-shadow-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.2 }}
                    >
                      {product.name}
                    </motion.p>
                    <motion.div
                      className="w-12 h-[1px] bg-white/40 mx-auto my-1.5"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6 + idx * 0.2, duration: 0.5 }}
                    />
                    <motion.p
                      className="text-white/80 text-sm font-medium drop-shadow-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + idx * 0.2 }}
                    >
                      {product.tagline}
                    </motion.p>
                  </div>

                  {/* Sparkle particles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        top: `${20 + Math.random() * 40}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                  ))}

                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `0 0 40px ${product.accent}40, inset 0 0 40px ${product.accent}15`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        onClick={() => setRevealed(!revealed)}
        className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden z-10 min-w-[280px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-fazti-purple to-fazti-pink rounded-full opacity-0 hover:opacity-100 transition-opacity blur-xl" />
        <span className="relative flex items-center justify-center gap-2.5 text-base">
          <Sparkles size={18} />
          {revealed ? 'إعادة — Reset' : 'إضافة الروح/الهوية — Add Identity'}
        </span>
      </motion.button>
    </div>
  );
}
