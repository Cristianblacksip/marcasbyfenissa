import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Box, 
  Type, 
  Palette, 
  User, 
  Target, 
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

// --- DATA SOURCE: Solo STIL NEW y NEXUM ---
const brandsData = {
  STIL_DOS: {
    id: 'stil-dos',
    name: 'STIL NEW',
    logoUrl: '/logos/stil-nuevo-logo.jpg',
    tagline: 'Lujo en calma.',
    concept: 'Minimalismo Nórdico',
    description: 'Estética nórdica y "calma visual" para el hogar contemporáneo. El descanso de un hotel 5 estrellas hecho estándar.',
    colors: {
      primary: '#D8D3CD', 
      secondary: '#383838', 
      accent: '#6B705C', 
      bg: 'bg-[#F5F2F0]',
      text: 'text-[#383838]',
      cardBg: 'bg-white'
    },
    typography: {
      titleFont: 'font-serif tracking-wide', 
      bodyFont: 'font-sans', 
      style: 'Minimalist & Clean'
    },
    persona: {
      name: 'Santi',
      age: '28-35 años',
      profile: 'Profesional urbano que busca paz mental visual. Teme gastar en modas pasajeras.'
    },
    unboxing: {
      title: 'La Calma en una Bolsa',
      desc: 'Tote Bag de lino crudo reutilizable. Sachet de lavanda incluido.',
      message: '"Desconecta. Estás en casa."'
    },
    logoPrompt: 'Minimalist luxury logo, elegant thin serif typography, abstract sunrise line drawing, warm sand beige and charcoal colors, nordic style.'
  },
  NEXUM: {
    id: 'nexum',
    name: 'NEXUM',
    logoUrl: '/logos/nexum-logo.jpg',
    tagline: 'Optimiza tu descanso.',
    concept: 'Sleep Performance',
    description: 'La ciencia del sueño aplicada a textiles. Regulación de temperatura y materiales de alto rendimiento para quienes buscan optimizar su vida.',
    colors: {
      primary: '#0B1120', 
      secondary: '#00E5FF', 
      accent: '#94A3B8', 
      bg: 'bg-[#0F172A]', 
      text: 'text-slate-200',
      cardBg: 'bg-white/5 border border-[#00E5FF]/30 backdrop-blur-md' 
    },
    typography: {
      titleFont: 'font-sans font-bold tracking-widest uppercase', 
      bodyFont: 'font-sans', 
      style: 'Futuristic & Athletic'
    },
    persona: {
      name: 'Julián',
      age: '26-35 años',
      profile: 'Bio-hacker y deportista. Mide su sueño con tecnología. Busca telas que enfríen y recuperen el músculo.'
    },
    unboxing: {
      title: 'The System Pack',
      desc: 'Caja negra mate con apertura magnética. Gráficas de rendimiento en foil holográfico. QR a guía de sueño.',
      message: '"Recarga iniciada."'
    },
    logoPrompt: 'Futuristic abstract logo for high-tech brand Nexum, Exo 2 typography, cyberpunk aesthetic, deep navy and neon cyan, performance and speed, sleek vector design.'
  }
};

const ColorSwatch = ({ color, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div 
      className="w-16 h-16 rounded-full shadow-md border-2 border-white/50" 
      style={{ backgroundColor: color }}
    />
    <span className="text-xs font-mono uppercase opacity-75">{label}</span>
    <span className="text-[10px] opacity-50">{color}</span>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('STIL_DOS');
  const brand = brandsData[activeTab];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${brand.colors.bg} ${brand.colors.text} ${brand.typography.bodyFont}`}>
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl tracking-tighter text-gray-800">Marcas By Fenissa</span>
            
            <div 
              className="flex space-x-1 overflow-x-auto overflow-y-hidden items-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                div::-webkit-scrollbar { display: none; }
              `}} />

              {Object.keys(brandsData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2 text-sm font-bold transition-all duration-300 rounded-lg whitespace-nowrap ${
                    activeTab === key 
                      ? 'bg-black text-white shadow-lg transform scale-105' 
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {brandsData[key].name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in zoom-in duration-500">
          <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase border rounded-full border-current opacity-60`}>
            {brand.concept}
          </span>

          <h1 className={`text-6xl md:text-8xl mb-4 ${brand.typography.titleFont} transition-all duration-500`}>
            {activeTab === 'STIL_DOS' ? 'STIL' : brand.name}
          </h1>

          <p className="text-xl md:text-2xl opacity-80 italic mb-8">
            {brand.tagline}
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
            {brand.description}
          </p>
        </div>
        
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] -z-0 opacity-30 transition-colors duration-700"
          style={{ backgroundColor: brand.colors.accent }}
        />
      </header>

      {/* --- MAIN GRID --- */}
      <main className="max-w-6xl mx-auto px-4 pb-12 space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Identity Card */}
          <div className={`${brand.colors.cardBg} p-8 rounded-3xl transition-all duration-500`}>
            <div className="flex items-center gap-2 mb-6 opacity-70">
              <Palette className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">Identidad Visual</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <ColorSwatch color={brand.colors.primary} label="Primario" />
              <ColorSwatch color={brand.colors.secondary} label="Secundario" />
              <ColorSwatch color={brand.colors.accent} label="Acento" />
            </div>
            <div className="border-t border-current/10 pt-6">
              <div className="flex items-start gap-4 mb-4">
                <Type className="w-6 h-6 mt-1 opacity-60" />
                <div>
                  <h3 className="font-bold text-sm uppercase mb-1">Tipografía</h3>
                  <p className={`${brand.typography.titleFont} text-2xl mb-1`}>{activeTab === 'STIL_DOS' ? 'STIL' : brand.name} Headline</p>
                  <p className="text-sm opacity-70">Estilo {brand.typography.style}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persona Card */}
          <div className={`${brand.colors.cardBg} p-8 rounded-3xl transition-all duration-500 relative overflow-hidden`}>
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <User className="w-32 h-32" />
             </div>
             <div className="flex items-center gap-2 mb-6 opacity-70 relative z-10">
              <Target className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">Buyer Persona</h2>
            </div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className={`text-4xl ${brand.typography.titleFont}`}>{brand.persona.name}</h3>
                <span className="opacity-60 font-mono">{brand.persona.age}</span>
              </div>
              <div className="space-y-4">
                <div className="bg-black/5 p-4 rounded-xl">
                  <p className="font-medium leading-relaxed">
                    "{brand.persona.profile}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Unboxing */}
          <div className={`md:col-span-2 ${brand.colors.cardBg} p-8 rounded-3xl transition-all duration-500`}>
             <div className="flex items-center gap-2 mb-6 opacity-70">
              <Box className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">Unboxing Experience</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-gray-100 rounded-2xl w-full md:w-1/3 h-48 flex items-center justify-center text-gray-400">
                {activeTab === 'STIL_DOS' ? <ShoppingBag className="w-16 h-16" /> : <Activity className="w-16 h-16" />}
              </div>
              <div className="flex-1 space-y-4">
                <h3 className={`text-2xl ${brand.typography.titleFont}`}>{brand.unboxing.title}</h3>
                <p className="opacity-80 leading-relaxed">{brand.unboxing.desc}</p>
                <div className="inline-block px-4 py-2 border border-current/20 rounded-lg mt-2">
                  <span className="text-xs uppercase tracking-widest opacity-50 block mb-1">Tarjeta</span>
                  <span className={`italic font-medium ${brand.typography.titleFont}`}>{brand.unboxing.message}</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Prompt */}
          <div className="bg-gray-900 text-gray-300 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <Sparkles className="w-5 h-5" />
                <h2 className="font-bold uppercase tracking-wider text-xs">AI Logo Prompt</h2>
              </div>
              <p className="font-mono text-xs leading-relaxed bg-black/30 p-4 rounded-lg border border-white/10 mb-4 select-all">
                {brand.logoPrompt}
              </p>
            </div>
            <button 
              className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              onClick={() => {navigator.clipboard.writeText(brand.logoPrompt)}}
            >
              Copiar Prompt
            </button>
          </div>
        </div>

        {/* --- LOGO AL FINAL --- */}
        <section className="flex flex-col items-center justify-center pt-8 border-t border-current/5">
          <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-6 font-bold">Identidad de Marca</p>
          <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden group transition-transform hover:scale-105 duration-500">
            <img 
              src={brand.logoUrl} 
              alt={`Logo de ${brand.name}`} 
              className="max-h-32 md:max-h-48 object-contain rounded-xl"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>
        </section>

      </main>

      <footer className="text-center pb-10 opacity-40 text-sm">
        <p>Estrategia de Marca & Growth • Proyecto by fenissa power by CommercesUp</p>
      </footer>
    </div>
  );
}