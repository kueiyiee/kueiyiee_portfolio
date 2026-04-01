import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AmbientMotionLayer({ theme }) {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const smoothX = useSpring(cursorX, { stiffness: 85, damping: 24, mass: 0.5 });
  const smoothY = useSpring(cursorY, { stiffness: 85, damping: 24, mass: 0.5 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)');

    const updatePointerType = () => {
      setIsCoarsePointer(media.matches);
    };

    const onMove = (event) => {
      cursorX.set(event.clientX - 160);
      cursorY.set(event.clientY - 160);
    };

    updatePointerType();
    window.addEventListener('pointermove', onMove, { passive: true });

    if (media.addEventListener) {
      media.addEventListener('change', updatePointerType);
    } else {
      media.addListener(updatePointerType);
    }

    return () => {
      window.removeEventListener('pointermove', onMove);
      if (media.removeEventListener) {
        media.removeEventListener('change', updatePointerType);
      } else {
        media.removeListener(updatePointerType);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: theme === 'dark' ? 'rgba(34, 211, 238, 0.16)' : 'rgba(14, 165, 233, 0.12)',
        }}
        animate={{
          x: [0, 20, -8, 0],
          y: [0, 16, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full blur-3xl"
        style={{
          background: theme === 'dark' ? 'rgba(45, 212, 191, 0.12)' : 'rgba(20, 184, 166, 0.1)',
        }}
        animate={{
          x: [0, -16, 12, 0],
          y: [0, -20, -8, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {!isCoarsePointer && (
        <motion.div
          aria-hidden="true"
          className="absolute h-80 w-80 rounded-full blur-3xl"
          style={{
            x: smoothX,
            y: smoothY,
            background: theme === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(14, 165, 233, 0.09)',
          }}
        />
      )}
    </div>
  );
}
