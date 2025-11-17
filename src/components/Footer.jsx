export default function Footer() {
  return (
    <footer id="visit" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold">Aurora Museum</h4>
          <p className="text-slate-400 mt-2">221B Orbit Street, Sector 9, Neo City</p>
          <p className="text-slate-500 text-sm mt-1">Open Tue–Sun • 10:00–20:00</p>
        </div>
        <div className="text-slate-300">
          <p className="font-medium text-white">Tickets</p>
          <ul className="mt-2 space-y-1 text-slate-400">
            <li>General — 20₵</li>
            <li>Students — 12₵</li>
            <li>Children — Free</li>
          </ul>
        </div>
        <div className="text-slate-300">
          <p className="font-medium text-white">Contact</p>
          <p className="mt-2 text-slate-400">hello@auroramuseum.io</p>
          <p className="text-slate-400">+00 123 456 789</p>
        </div>
      </div>
      <div className="text-center text-slate-500 text-sm pb-10">© {new Date().getFullYear()} Aurora Museum</div>
    </footer>
  );
}
