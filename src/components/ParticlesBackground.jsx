import { useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

export default function ParticlesBackground({ theme }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(() => {
    const isDark = theme === 'dark';
    const particleColor = isDark ? '#67e8f9' : '#0f766e';

    return {
      fpsLimit: 60,
      detectRetina: true,
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          repulse: {
            distance: 110,
            duration: 0.3,
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        number: {
          value: isDark ? 30 : 22,
          density: {
            enable: true,
            width: 1400,
            height: 900,
          },
        },
        color: { value: particleColor },
        shadow: {
          enable: true,
          color: particleColor,
          blur: 3,
        },
        links: {
          enable: true,
          distance: 155,
          color: particleColor,
          opacity: isDark ? 0.16 : 0.12,
          width: 0.85,
        },
        move: {
          enable: true,
          speed: isDark ? 0.55 : 0.46,
          direction: 'none',
          random: true,
          outModes: { default: 'out' },
        },
        opacity: { value: isDark ? 0.34 : 0.28 },
        size: {
          value: { min: 1, max: 2.8 },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 18,
                density: { enable: true },
              },
              size: {
                value: { min: 0.9, max: 2.2 },
              },
              links: {
                distance: 118,
                opacity: isDark ? 0.13 : 0.1,
              },
              move: { speed: isDark ? 0.42 : 0.36 },
            },
          },
        },
      ],
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    };
  }, [theme]);

  if (!ready) return null;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      <Particles id="portfolio-particles" options={options} className="w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.1),transparent_38%)]" />
      <div className="neural-grid-overlay absolute inset-0 -z-10" />
    </div>
  );
}
