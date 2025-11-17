import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />
      <div className="pointer-events-none absolute -inset-x-32 -bottom-32 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(147,51,234,0.25),transparent)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300"
        >
          Cybernetic Artifacts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto"
        >
          A museum collection where retro astronauts, iridescent ribbons and luminous geometries meet. Explore the surreal, touch the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#collection" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-medium shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:brightness-110 transition">
            Enter Collection
            <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#visit" className="px-6 py-3 rounded-xl border border-slate-700/60 bg-slate-900/50 text-slate-200 hover:bg-slate-800/60 transition">
            Plan a Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
