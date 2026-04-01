import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaCode,
  FaEllipsisV,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
  FaMoon,
  FaProjectDiagram,
  FaSun,
  FaUser,
} from 'react-icons/fa';

export default function Navbar({ theme, onToggleTheme, profile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuWrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!menuWrapperRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const trackedSections = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      let current = 'home';
      trackedSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= 180) {
          current = sectionId;
        }
      });
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const jumpAndClose = (sectionId) => {
    onJump(sectionId);
    setIsMenuOpen(false);
  };

  const menuItems = useMemo(
    () => [
      {
        id: 'home',
        label: 'Home',
        description: 'Top of portfolio',
        Icon: FaHome,
        onClick: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMenuOpen(false);
        },
      },
      {
        id: 'about',
        label: 'About',
        description: 'Who I am',
        Icon: FaUser,
        onClick: () => jumpAndClose('about'),
      },
      {
        id: 'skills',
        label: 'Skills',
        description: 'Core technical stack',
        Icon: FaCode,
        onClick: () => jumpAndClose('skills'),
      },
      {
        id: 'projects',
        label: 'Projects',
        description: 'Selected work',
        Icon: FaProjectDiagram,
        onClick: () => jumpAndClose('projects'),
      },
      {
        id: 'experience',
        label: 'Experience & Education',
        description: 'Timeline and growth',
        Icon: FaGraduationCap,
        onClick: () => jumpAndClose('experience'),
      },
      {
        id: 'contact',
        label: 'Contact',
        description: 'Reach out quickly',
        Icon: FaEnvelope,
        onClick: () => jumpAndClose('contact'),
      },
      {
        id: 'cv',
        label: 'View CV',
        description: 'Open resume in new tab',
        Icon: FaFileAlt,
        onClick: () => {
          if (profile?.resumeUrl) {
            window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
          }
          setIsMenuOpen(false);
        },
      },
      {
        id: 'theme',
        label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
        description: 'Switch portfolio appearance',
        Icon: theme === 'dark' ? FaSun : FaMoon,
        onClick: () => {
          onToggleTheme();
          setIsMenuOpen(false);
        },
      },
      {
        id: 'top',
        label: 'Back to Top',
        description: 'Return to start',
        Icon: FaArrowUp,
        onClick: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMenuOpen(false);
        },
      },
    ],
    [onToggleTheme, profile?.resumeUrl, theme]
  );

  return (
    <motion.header
      className="sticky top-3 z-40 mb-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex items-center justify-between gap-3 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/75 dark:bg-slate-950/55 px-3 py-3 shadow-glass backdrop-blur-xl md:px-4">
        <div className="flex-1 min-w-0" />

        <div ref={menuWrapperRef} className="relative shrink-0 flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="shrink-0 w-11 h-11 rounded-full border border-slate-300/80 dark:border-slate-700 bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <motion.button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-11 h-11 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/85 dark:bg-slate-900/75 text-slate-700 dark:text-slate-100 flex items-center justify-center shadow-sm"
            aria-label="Open quick menu"
            aria-expanded={isMenuOpen}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <FaEllipsisV />
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute top-[3.35rem] right-0 w-[min(92vw,340px)] rounded-3xl border border-white/40 dark:border-white/10 bg-white/72 dark:bg-slate-950/70 shadow-[0_28px_70px_rgba(2,6,23,0.25)] backdrop-blur-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-slate-200/70 dark:border-slate-800/80 bg-gradient-to-br from-cyan-500/12 via-blue-500/8 to-transparent">
                  <div className="flex items-center gap-3">
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/70 dark:border-slate-700"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">{profile.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 truncate">{profile.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-2.5">
                  {menuItems.map((item, index) => {
                    const Icon = item.Icon;
                    const isActive = item.id === activeSection;

                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        onClick={item.onClick}
                        className={`w-full rounded-2xl px-3 py-3 flex items-start gap-3 text-left transition-colors ${
                          isActive
                            ? 'bg-cyan-500/12 text-cyan-700 dark:text-cyan-200'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-cyan-500/8'
                        }`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02, duration: 0.2 }}
                        whileHover={{ x: 2 }}
                      >
                        <span
                          className={`mt-[2px] w-8 h-8 rounded-xl flex items-center justify-center ${
                            isActive ? 'bg-cyan-500/15' : 'bg-slate-900/6 dark:bg-white/10'
                          }`}
                        >
                          <Icon className="text-sm" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold">{item.label}</span>
                          <span className="block text-xs text-slate-500 dark:text-slate-400">{item.description}</span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="px-4 py-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Connect</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:bg-cyan-500/10 transition"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-sm" />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:bg-cyan-500/10 transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 hover:bg-cyan-500/10 transition"
                      aria-label="Website"
                    >
                      <FaGlobe className="text-sm" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
