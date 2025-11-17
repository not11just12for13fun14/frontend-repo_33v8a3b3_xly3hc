import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Exhibitions from './components/Exhibitions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <CollectionGrid />
      <Exhibitions />
      <Footer />
    </div>
  )
}

export default App
