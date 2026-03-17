import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Calendar, 
  Info, 
  TrendingUp, 
  Zap, 
  Shield, 
  Search, 
  AlertTriangle,
  Play,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Flame,
  Ghost
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor de scroll para mudar o header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const upcomingShows = [
    { date: "15 OUT", city: "São Paulo", venue: "Audio Club", status: "Tickets" },
    { date: "22 OUT", city: "Rio de Janeiro", venue: "Circo Voador", status: "Sold Out" },
    { date: "05 NOV", city: "Curitiba", venue: "Ópera de Arame", status: "Tickets" },
  ];

  const Navigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-rose-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Music className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Flores do Caos</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
          {['home', 'musica', 'tour', 'manifesto'].map((item) => (
            <button 
              key={item}
              onClick={() => setActiveTab(item)}
              className={`hover:text-rose-500 transition-colors ${activeTab === item ? 'text-rose-500' : 'text-zinc-400'}`}
            >
              {item}
            </button>
          ))}
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full transition-all scale-100 hover:scale-105 active:scale-95">
            Loja
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {['home', 'musica', 'tour', 'manifesto'].map((item) => (
            <button 
              key={item}
              onClick={() => { setActiveTab(item); setIsMenuOpen(false); }}
              className="text-left py-2 text-xl font-bold uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-rose-500/50">
      <Navigation />

      {/* HERO SECTION */}
      {activeTab === 'home' && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Flores do Caos Live Background"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950"></div>
          </div>
          
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-4 leading-none">
              A Beleza da <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Entropia</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-lg">
              Novo álbum "Jardim de Cinzas" disponível em todas as plataformas digitais.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-rose-500 hover:text-white transition-all">
                <Play className="fill-current" /> Ouvir Agora
              </button>
              <button onClick={() => setActiveTab('tour')} className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Ver Datas da Tour
              </button>
            </div>
          </div>
        </section>
      )}

      {/* MUSICA SECTION */}
      {activeTab === 'musica' && (
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
          <h2 className="text-4xl font-black uppercase mb-12 italic">Discografia Experimental</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Jardim de Cinzas", year: "2024", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80" },
              { title: "Sussurros Metálicos", year: "2022", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80" },
              { title: "Caos Primordial", year: "2020", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80" }
            ].map((album, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 border border-zinc-800">
                  <img src={album.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={album.title} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-zinc-500">{album.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TOUR SECTION */}
      {activeTab === 'tour' && (
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto animate-in fade-in duration-700">
          <h2 className="text-4xl font-black uppercase mb-12 italic">Cidades em Chamas (Tour)</h2>
          <div className="space-y-4">
            {upcomingShows.map((show, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <div className="flex gap-8 items-center">
                  <div className="text-center min-w-[60px]">
                    <span className="block text-2xl font-black text-rose-500 leading-none">{show.date.split(' ')[0]}</span>
                    <span className="text-xs uppercase font-bold text-zinc-500">{show.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">{show.city}</h3>
                    <p className="text-zinc-400">{show.venue}</p>
                  </div>
                </div>
                <button className={`mt-4 md:mt-0 px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${
                  show.status === 'Sold Out' ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-white text-black hover:bg-rose-500 hover:text-white'
                }`}>
                  {show.status}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MANIFESTO SECTION */}
      {activeTab === 'manifesto' && (
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto animate-in slide-in-from-bottom duration-700">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">Nossa Essência</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">Manifesto do Caos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-12 text-zinc-300 leading-relaxed text-lg md:text-xl font-light italic">
            <div className="relative p-8 border-l-4 border-rose-500 bg-zinc-900/50 rounded-r-2xl">
              <p>
                "Nascemos do silêncio que precede a tempestade. Flores do Caos não é apenas uma banda, é a expressão 
                de que no centro de cada colapso existe uma harmonia esperando para ser ouvida."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-purple-500/30 transition-all">
                <Sparkles className="text-purple-500 mb-4 w-10 h-10" />
                <h4 className="text-white font-bold text-xl mb-2 uppercase italic">A Flor</h4>
                <p className="text-sm">Representa o orgânico, o efêmero e a vulnerabilidade. Nossa música floresce mesmo em terrenos áridos e industriais.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-rose-500/30 transition-all">
                <Flame className="text-rose-500 mb-4 w-10 h-10" />
                <h4 className="text-white font-bold text-xl mb-2 uppercase italic">O Caos</h4>
                <p className="text-sm">A distorção, a complexidade rítmica e a energia bruta. Abraçamos a desordem como a única forma de criar o novo.</p>
              </div>
            </div>

            <p className="text-center text-zinc-400">
              Entre o Post-Rock contemplativo e o Metal Progressivo agressivo, traçamos uma linha onde o barulho 
              se torna poesia. Não buscamos a perfeição, buscamos a verdade que reside nas rachaduras.
            </p>

            <div className="flex justify-center pt-8">
              <div className="flex items-center gap-4 text-zinc-500">
                <span className="h-px w-12 bg-zinc-800"></span>
                <Ghost className="w-6 h-6" />
                <span className="h-px w-12 bg-zinc-800"></span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Music className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-black uppercase italic tracking-tighter">Flores do Caos</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              O caos não é o fim, é o processo de crescimento. <br/> 
              Siga a nossa jornada nas sombras e na luz.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Siga o Caos</h5>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-rose-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-rose-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-rose-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Newsletter</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email..." 
                className="bg-zinc-800 border-none rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-rose-500 outline-none"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-[10px] uppercase tracking-widest">
          © 2024 Flores do Caos. Desenvolvido por <a href="https://higor.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors underline decoration-rose-500/30 underline-offset-2">Higor Gandra</a>
        </div>
      </footer>
    </div>
  );
}