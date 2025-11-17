import { motion } from 'framer-motion';

export default function Exhibitions() {
  const features = [
    {
      title: 'Immersive Rooms',
      text: 'Walk through floating ribbons, holographic spheres and reactive lightscapes.'
    },
    {
      title: 'Curator Talks',
      text: 'Live sessions unpacking the cybernetic era and its artifacts.'
    },
    {
      title: 'Hands-on Labs',
      text: 'Try retro consoles, synth interfaces, and tactile ribbon UIs.'
    }
  ];

  return (
    <section id="exhibitions" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Current Exhibitions
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-slate-800 bg-slate-900/60"
            >
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-300/90 mt-2">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
