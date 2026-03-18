import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight uppercase">Agency AI</span>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-all">
            Contactar
          </button>
        </div>
      </nav>

      <section className="relative pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter"
          >
            Sua empresa <br/> <span className="text-blue-500">inteligente.</span>
          </motion.h1>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Implementamos agentes de IA que trabalham 24/7 para escalar o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 px-10 py-4 rounded-full font-bold text-lg">Começar agora</button>
            <button className="border border-white/20 px-10 py-4 rounded-full font-bold text-lg">Ver Serviços</button>
          </div>
        </div>
      </section>
    </div>
  );
}
