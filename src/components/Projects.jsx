import { motion } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

export default function Projects({ items }) {
  const { ref, isVisible } = useSectionInView(0.12);

  return (
    <section id="projects" ref={ref} className="section-anchor section-shell">
      <h2 className="section-title flex items-center gap-3">
        <FaProjectDiagram className="text-cyan-600" /> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {items.map((project, index) => {
          const Icon = project.Icon;
          return (
            <MotionSurface
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="premium-card rounded-3xl p-4 sm:p-5 md:p-6 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/55 shadow-soft"
              intensity={6.5}
              hoverLift={-5}
            >
              {project.screenshot && (
                <div className="mb-4 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/10">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="w-full h-36 sm:h-40 object-cover"
                  />
                </div>
              )}

              <Icon style={{ color: project.iconColor }} className="text-3xl" />
              <h3 className="font-semibold text-lg mt-3">{project.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-6">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge-glow text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn w-full sm:w-auto justify-center bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:opacity-90"
                  >
                    View Code <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn w-full sm:w-auto justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white hover:opacity-90"
                  >
                    Live Demo <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
              </div>
            </MotionSurface>
          );
        })}
      </div>
    </section>
  );
}
