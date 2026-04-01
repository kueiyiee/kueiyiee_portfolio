import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

export default function About({ content }) {
  const { ref, isVisible } = useSectionInView(0.25);

  return (
    <section id="about" ref={ref} className="section-anchor section-shell">
      <MotionSurface
        initial={{ opacity: 0, y: 28 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl luminous-panel"
        intensity={5.5}
      >
        <h2 className="section-title flex items-center gap-3">
          <FaUserGraduate className="text-cyan-600" /> About Me
        </h2>
        <p className="text-slate-700 dark:text-slate-200 leading-8 border-l-2 border-cyan-500/60 pl-5 md:pl-7 text-base md:text-lg max-w-3xl">
          {content}
        </p>
      </MotionSurface>
    </section>
  );
}
