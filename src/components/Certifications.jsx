import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import useSectionInView from '../hooks/useSectionInView';

export default function Certifications({ items }) {
  const { ref, isVisible } = useSectionInView(0.2);

  return (
    <section id="certifications" ref={ref} className="section-anchor section-shell">
      <h2 className="section-title flex items-center gap-3">
        <FaCertificate className="text-cyan-600" /> Certifications
      </h2>

      <div className="surface-panel relative overflow-hidden">
        <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="mb-6 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300 font-semibold">Credentials</p>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
            A curated set of certifications that reflects security, analytics, cloud, and systems work.
          </p>
        </div>

        {items.map((cert, index) => {
          const Icon = cert.Icon;

          return (
            <motion.article
              key={cert.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/45 p-5 md:p-6 mb-4 last:mb-0 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ x: 3 }}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 shadow-inner shadow-cyan-400/10">
                  <Icon style={{ color: cert.color }} className="text-lg" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base md:text-lg">
                      {cert.name}
                    </h3>
                    <span className="inline-flex w-fit items-center rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                      Verified
                    </span>
                  </div>

                  <p className="mt-2 text-sm sm:text-[0.95rem] leading-7 text-slate-600 dark:text-slate-300 max-w-3xl">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-200 via-cyan-200/70 to-transparent dark:from-slate-800 dark:via-cyan-500/20" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
