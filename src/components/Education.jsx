import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

export default function Education({ items }) {
  const [openCard, setOpenCard] = useState(0);
  const { ref, isVisible } = useSectionInView(0.18);

  return (
    <section id="education" ref={ref} className="section-anchor section-shell">
      <h2 className="section-title flex items-center gap-3">
        <FaGraduationCap className="text-cyan-600" /> Education
      </h2>
      <MotionSurface className="luminous-panel relative pl-5 sm:pl-6 md:pl-8 border-l border-slate-300/70 dark:border-slate-700" intensity={5.2}>
        {items.map((item, index) => {
          const isOpen = index === openCard;
          return (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="relative mb-8 last:mb-0 cursor-pointer pb-4 border-b border-slate-200/70 dark:border-slate-800"
              onClick={() => setOpenCard(isOpen ? -1 : index)}
            >
              <span className="absolute -left-4 sm:-left-[1.8rem] md:-left-[2.35rem] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-between sm:items-center">
                <h3 className="font-semibold text-base sm:text-lg">{item.degree}</h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    item.status === 'Completed'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                      : 'bg-cyan-500/10 border-cyan-500/25 text-cyan-700 dark:text-cyan-300'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <FaUniversity className="text-cyan-600" /> {item.institution}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-600" /> {item.yearStart} - {item.yearEnd}
                </span>
                {item.gpa && <span>GPA: {item.gpa}</span>}
              </div>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.95] }}
                className="overflow-hidden"
              >
                <p className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                  {item.details}
                </p>
              </motion.div>
            </motion.article>
          );
        })}
      </MotionSurface>
    </section>
  );
}
