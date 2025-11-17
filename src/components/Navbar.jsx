import { Menu, Museum, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center shadow-[0_0_40px_rgba(168,85,247,0.35)]">
            <Museum className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-wide">Aurora Museum</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a className="hover:text-white transition-colors" href="#collection">Collection</a>
          <a className="hover:text-white transition-colors" href="#exhibitions">Exhibitions</a>
          <a className="hover:text-white transition-colors" href="#visit">Visit</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 hover:bg-slate-700/70 transition-colors">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
          <button className="inline-flex md:hidden p-2 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 hover:bg-slate-700/70 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
