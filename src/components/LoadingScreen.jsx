import { motion } from 'framer-motion';

const SIGNATURE_IMAGE = 'https://i.postimg.cc/SxWfFztL/photo-5823580186132286582-w.jpg';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-cyan-50/40 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.965, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="mx-auto relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-300/15 to-teal-300/20 blur-xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-300/60 dark:border-slate-700/80 bg-white/65 dark:bg-slate-950/35 backdrop-blur-md">
            <motion.img
              src={SIGNATURE_IMAGE}
              alt="Signature intro"
              className="w-full h-auto object-cover"
              initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.04, filter: 'blur(6px)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, ease: [0.22, 0.7, 0.25, 1] }}
            />

            <motion.div
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              initial={{ x: '-120%' }}
              animate={{ x: '360%' }}
              transition={{ duration: 1.1, delay: 0.45, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            className="mt-4 text-[11px] md:text-xs tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            Professional Portfolio Identity
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
