import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

function SkillBadge({ skill, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="badge-glow inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border border-white/40 dark:border-white/10"
      style={{
        backgroundColor: skill.color ?? 'rgba(255,255,255,0.45)',
        color: skill.darkText ? '#0f172a' : skill.color ? '#ffffff' : undefined,
      }}
      whileHover={{ y: -4, scale: 1.04 }}
    >
      {skill.name}
    </motion.span>
  );
}

export default function Skills({ data }) {
  const { ref, isVisible } = useSectionInView(0.2);

  return (
    <section id="skills" ref={ref} className="section-anchor section-shell">
      <MotionSurface
        initial={{ opacity: 0, y: 26 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-5xl luminous-panel"
        intensity={5.2}
      >
        <h2 className="section-title flex items-center gap-3">
          <FaCode className="text-cyan-600" /> Skills
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Programming and Markup</h3>
            <div className="flex flex-wrap gap-2.5">
              {data.programming.map((item, idx) => (
                <SkillBadge key={item.name} skill={item} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Cybersecurity</h3>
            <div className="flex flex-wrap gap-2.5">
              {data.cybersecurity.map((item, idx) => (
                <SkillBadge key={item.name} skill={item} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm sm:text-base">Tools and Platforms</h3>
            <div className="flex flex-wrap gap-2.5">
              {data.tools.map((item, idx) => (
                <SkillBadge key={item.name} skill={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </MotionSurface>
    </section>
  );
}
