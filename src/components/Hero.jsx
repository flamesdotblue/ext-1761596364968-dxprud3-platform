import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/20 via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-[11px] uppercase tracking-wider text-fuchsia-200 backdrop-blur">
          Neon • Graffiti • Direction
        </div>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.35)] md:text-7xl">
          Creative Director crafting
          <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            cosmic street-born stories
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300">
          Fusing graffiti energy with future tech to build immersive brand worlds — experiential campaigns, digital playgrounds, and cinematic identities.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.25)] transition hover:bg-cyan-500/20">See the Work</a>
          <a href="#contact" className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-5 py-2 text-sm font-semibold text-fuchsia-100 shadow-[0_0_22px_rgba(217,70,239,0.25)] transition hover:bg-fuchsia-500/20">Start a Project</a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {['Experiential', 'Brand Systems', 'CGI + Spline', 'AR Filters', 'Installations', 'Campaigns'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
