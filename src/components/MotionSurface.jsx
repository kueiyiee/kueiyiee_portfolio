import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export default function MotionSurface({
  children,
  className = '',
  intensity = 7,
  hoverLift = -2,
  ...motionProps
}) {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useSpring(rotateY, { stiffness: 170, damping: 18, mass: 0.55 });
  const y = useSpring(rotateX, { stiffness: 170, damping: 18, mass: 0.55 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)');

    const updatePointerType = () => setIsCoarsePointer(media.matches);
    updatePointerType();

    if (media.addEventListener) {
      media.addEventListener('change', updatePointerType);
    } else {
      media.addListener(updatePointerType);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', updatePointerType);
      } else {
        media.removeListener(updatePointerType);
      }
    };
  }, []);

  const handlers = useMemo(() => {
    if (isCoarsePointer) {
      return {};
    }

    return {
      onMouseMove: (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const normalizedX = (offsetX / rect.width - 0.5) * 2;
        const normalizedY = (offsetY / rect.height - 0.5) * 2;

        rotateY.set(normalizedX * intensity * 0.45);
        rotateX.set(normalizedY * intensity * -0.45);
      },
      onMouseLeave: () => {
        rotateX.set(0);
        rotateY.set(0);
      },
    };
  }, [intensity, isCoarsePointer, rotateX, rotateY]);

  return (
    <motion.div
      className={className}
      style={{
        rotateX: y,
        rotateY: x,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      whileHover={isCoarsePointer ? undefined : { y: hoverLift }}
      transition={{ type: 'spring', stiffness: 210, damping: 18, mass: 0.58 }}
      {...handlers}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
