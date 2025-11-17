import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Astral Navigator',
    year: '1984',
    artist: 'Unknown',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1400&auto=format&fit=crop',
    description: 'An early conceptual interface for navigating cosmic data-streams.'
  },
  {
    id: 2,
    title: 'Neon Relic',
    year: '1991',
    artist: 'S. Takahashi',
    image: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1400&auto=format&fit=crop',
    description: 'Recovered object from a defunct cyber-temple, still humming faintly.'
  },
  {
    id: 3,
    title: 'Ribbon Interface',
    year: '2001',
    artist: 'E. Volta',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    description: 'A tactile UI rumored to respond to emotion and motion alike.'
  },
  {
    id: 4,
    title: 'Wireframe Sphere',
    year: '1997',
    artist: 'A. Prism',
    image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop',
    description: 'Mathematical sculpture projecting a holographic aura.'
  },
  {
    id: 5,
    title: 'Iridescent Coil',
    year: '2007',
    artist: 'R. Silva',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1400&auto=format&fit=crop',
    description: 'A twisting loop capturing light like liquid metal.'
  },
  {
    id: 6,
    title: 'Cosmic Console',
    year: '1989',
    artist: 'H. Vega',
    image: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1400&auto=format&fit=crop',
    description: 'Control surface for an unknown vessel—buttons still warm.'
  }
];

export default function CollectionGrid() {
  const [active, setActive] = useState(null);

  return (
    <section id="collection" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Collection</h2>
            <p className="text-slate-300/80 mt-2">Tap an artifact to open its lightbox with rich details.</p>
          </div>
          <div className="hidden md:block text-slate-400">6 artifacts</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setActive(item)}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800 focus:outline-none"
            >
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4 flex items-center justify-between w-full">
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-slate-300/80 text-sm">{item.artist} • {item.year}</p>
                </div>
                <div className="text-fuchsia-300/90 opacity-0 group-hover:opacity-100 transition">View</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-700"
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-200 hover:bg-slate-700">
                <X className="w-5 h-5" />
              </button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-full">
                  <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                  <p className="text-slate-300/80 mt-2">{active.artist} • {active.year}</p>
                  <p className="text-slate-200 mt-4 leading-relaxed">{active.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700">
                      <p className="text-xs text-slate-400">Medium</p>
                      <p className="text-slate-200">Mixed media</p>
                    </div>
                    <div className="rounded-xl bg-slate-800/50 p-4 border border-slate-700">
                      <p className="text-xs text-slate-400">Dimensions</p>
                      <p className="text-slate-200">Variable</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
