import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 selection:bg-fuchsia-500/30 selection:text-fuchsia-100">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-10 text-xs text-zinc-400">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
          © {new Date().getFullYear()} Neon Graffiti Direction — All sparks reserved
        </div>
      </footer>
    </div>
  );
}
