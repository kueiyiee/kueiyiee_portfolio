import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaFileAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Sidebar({ profile, onJump }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleImageClick = () => {
    setIsPressed(true);
    window.setTimeout(() => setIsPressed(false), 520);
  };

  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="pt-5 sm:pt-6 md:pt-8 pb-7 md:pb-10"
    >
      <div className="surface-panel relative overflow-hidden flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
        <motion.div
          aria-hidden="true"
          className="absolute -top-20 right-[-4rem] h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-transparent blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <motion.button
          type="button"
          onClick={handleImageClick}
          className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 shrink-0 outline-none"
          animate={
            isPressed
              ? { scale: [1, 1.035, 1], boxShadow: ['0 0 0px rgba(34,211,238,0.0)', '0 0 26px rgba(34,211,238,0.34)', '0 0 0px rgba(34,211,238,0.0)'] }
              : {
                  y: [0, -5, 0],
                  scale: [1, 1.02, 1],
                }
          }
          transition={
            isPressed
              ? { duration: 0.52, ease: 'easeInOut' }
              : { duration: 4.2, ease: 'easeInOut', repeat: Infinity }
          }
          whileTap={{ scale: 0.995 }}
          aria-label="Profile image"
        >
          <img
            src={profile.heroImage}
            alt={profile.name}
            className="w-full h-full rounded-full object-cover border-2 border-white/90 dark:border-slate-900/90 shadow-[0_8px_28px_rgba(15,23,42,0.18)]"
          />
        </motion.button>

        <div className="relative z-10 flex-1 min-w-0">
          <span className="inline-flex items-center gap-2 text-[0.72rem] sm:text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-200 border border-cyan-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500" /> Open to Internship
          </span>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-2">{profile.greeting}</p>
          <h1 className="hero-title font-display font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <motion.p
            className="text-sm sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 mt-3 max-w-3xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {profile.role}
          </motion.p>
          <motion.p
            className="text-[0.93rem] sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-7 max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            Building secure, scalable systems and solving real-world problems with clean engineering.
          </motion.p>

          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="action-btn w-full sm:w-auto justify-center border border-slate-300/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
            >
              <FaFileAlt /> View Resume
            </a>
            <button
              type="button"
              onClick={() => onJump('contact')}
              className="action-btn w-full sm:w-auto justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white shadow-sm shadow-cyan-500/20"
            >
              <FaPaperPlane /> Get In Touch
            </button>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-[0.92rem] text-slate-600 dark:text-slate-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-600" /> {profile.location}
            </p>
            <a href={`mailto:${profile.emailPrimary}`} className="flex items-center gap-2 hover:text-cyan-600 transition">
              <FaEnvelope className="text-cyan-600" /> {profile.emailPrimary}
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
