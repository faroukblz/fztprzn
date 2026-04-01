import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MonitorPlay,
  Brain,
  ArrowLeft,
  Bookmark,
  Share2,
  Layers,
  Clock,
  GraduationCap,
} from 'lucide-react';

const courses = [
  {
    id: 'fazty-academy',
    title: 'أساسيات التصميم الجرافيكي',
    description:
      'رحلة بصرية لاكتشاف أسرار التصميم من خلال مبادئ التوازان والتباين والمساحات.',
    icon: <MonitorPlay size={22} />,
    iconColor: 'from-fazti-purple to-fazti-pink',
    modules: 10,
    duration: '١ ساعة',
  },
  {
    id: 'sales-psychology',
    title: 'سيكولوجية البيع وعقلية التاجر',
    description:
      'معادلات التسويق، أدوات البيع الآلي، واستراتيجيات البنية التحتية للتاجر المحلي.',
    icon: <Brain size={22} />,
    iconColor: 'from-amber-500 to-orange-500',
    modules: 9,
    duration: '٣٠ دقيقة',
  },
];

const navLinks = [
  { label: 'الرئيسية', href: '#' },
  { label: 'الدورات', href: '#courses' },
  { label: 'من نحن', href: '#' },
  { label: 'تواصل معنا', href: '#' },
];

/* ────────── card animation stagger ────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 20 } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-950 text-white font-sans overflow-y-auto">
      {/* ── Ambient background blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-fazti-purple/10 blur-[160px]" />
        <div className="absolute -bottom-60 -right-40 w-[500px] h-[500px] rounded-full bg-fazti-pink/10 blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-fazti-purple/5 blur-[120px]" />
      </div>

      {/* ═══════════════  TOP NAV BAR  ═══════════════ */}
      <motion.nav
        className="sticky top-0 z-50 backdrop-blur-xl bg-brand-950/60 border-b border-white/5"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-white.png"
              alt="Fazti Academy"
              className="h-7 opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-fazti-purple after:to-fazti-pink hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-fazti-purple to-fazti-pink text-white shadow-lg shadow-fazti-purple/20 hover:shadow-fazti-purple/40 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            ابدأ الآن
          </motion.button>
        </div>
      </motion.nav>

      {/* ═══════════════  HERO / CENTERED DESCRIPTION  ═══════════════ */}
      <section className="relative z-10 text-center pt-20 pb-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 mb-6">
            <GraduationCap size={14} className="text-fazti-pink" />
            منصة فازتي التعليمية
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-fazti-pink via-fazti-purple to-fazti-pink text-transparent bg-clip-text">
            عروض تعليمية تفاعلية
          </h1>

          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            استكشف مجموعة من العروض التفاعلية المصممة خصيصاً لتعزيز فهمك وتطوير
            مهاراتك في مجالات التصميم والإبداع.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════  COURSE CARDS GRID  ═══════════════ */}
      <section id="courses" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link
                to={`/course/${course.id}`}
                className="group block h-full"
              >
                <div className="relative h-full flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-white/15 hover:bg-white/[0.07] transition-all duration-300 p-6">
                  {/* Icon badge */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${course.iconColor} flex items-center justify-center text-white shadow-lg shadow-fazti-purple/20 mb-5`}
                  >
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-fazti-pink transition-colors text-right">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/45 text-sm leading-relaxed mb-6 flex-1 text-right">
                    {course.description}
                  </p>

                  {/* Footer: "Learn more" + meta icons */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-fazti-pink group-hover:gap-2.5 transition-all">
                      اكتشف المزيد
                      <ArrowLeft
                        size={15}
                        className="group-hover:-translate-x-1 transition-transform"
                      />
                    </span>

                    <div className="flex items-center gap-3 text-white/25">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Layers size={13} />
                        {course.modules}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock size={13} />
                        {course.duration}
                      </span>
                      <Bookmark
                        size={14}
                        className="hover:text-white/50 transition-colors cursor-pointer"
                      />
                      <Share2
                        size={14}
                        className="hover:text-white/50 transition-colors cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Bottom decorative line ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-center text-white/20 text-xs py-6">
          © 2026 Fazti Academy — جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
