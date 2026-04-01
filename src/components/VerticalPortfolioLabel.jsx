import { motion } from 'framer-motion';

export default function VerticalPortfolioLabel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: [0, -2, 0], filter: 'blur(0px)' }}
      transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
      className="fixed left-6 top-6 z-30 hidden xl:flex pointer-events-none"
      aria-hidden="true"
    >
      <div className="portfolio-rail group">
        <span className="portfolio-rail-text">PORTFOLIO</span>
      </div>
    </motion.aside>
  );
}
