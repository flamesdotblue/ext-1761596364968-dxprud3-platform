import React from 'react';

const data = [
  {
    title: 'GALAXY RUN — Launch Film',
    desc: 'Campaign film blending Spline scenes with graffiti overlays and neon holograms.',
    tags: ['Direction', 'Film', 'CGI', 'Sound'],
  },
  {
    title: 'Neon Yard — Brand System',
    desc: 'Identity built from spray textures, liquid gradients, and motion rules.',
    tags: ['Brand', 'Motion', 'Guidelines'],
  },
  {
    title: 'HOLO RIDE — Experiential',
    desc: 'Pop-up experience with reactive visuals and luminous pathways.',
    tags: ['Experiential', 'AR', 'Installations'],
  },
];

function ProjectCard({ title, desc, tags }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/20 via-fuchsia-900/10 to-cyan-900/20 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent_60%)]" />
      <h3 className="mt-4 text-xl font-black tracking-wide text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">{t}</span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-wider text-fuchsia-200">
        Selected Work
      </div>
      <h2 className="mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
        Neon graffiti x cosmic futurism
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
