import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaLocationDot, FaShieldHalved } from 'react-icons/fa6';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

export default function Experience({ items }) {
  const { ref, isVisible } = useSectionInView(0.2);

  return (
    <section id="experience" ref={ref} className="section-anchor section-shell">
      <h2 className="section-title flex items-center gap-3">
        <FaBriefcase className="text-cyan-600" /> Experience
      </h2>

      <MotionSurface className="luminous-panel relative pl-5 sm:pl-6 md:pl-8 border-l border-slate-300/70 dark:border-slate-700" intensity={5.2}>
        {items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-4 sm:-left-[1.8rem] md:-left-[2.35rem] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-2 sm:gap-3">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">{item.role}</h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-400/10 border border-cyan-400/25">
                {item.period}
              </span>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <FaBuilding className="text-cyan-600" /> {item.company}
              </span>
              <span className="inline-flex items-center gap-2">
                <FaLocationDot className="text-cyan-600" /> {item.location}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="text-sm md:text-[0.95rem] text-slate-700 dark:text-slate-200 leading-7 flex gap-3">
                  <FaShieldHalved className="mt-1 shrink-0 text-cyan-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </MotionSurface>
    </section>
  );
}
