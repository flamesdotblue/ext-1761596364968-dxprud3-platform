import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
      <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-wider text-fuchsia-200">
        Bookings
      </div>
      <h2 className="mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
        Let’s build something impossible
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
          <h3 className="text-2xl font-black text-white">Collab / New Business</h3>
          <p className="mt-2 text-zinc-300">
            Based everywhere, working worldwide. Send a brief, a vibe, or a challenge — I’ll return with a route and a mood film.
          </p>
          <a
            href="mailto:hello@neongraffiti.studio"
            className="mt-5 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.25)] transition hover:bg-cyan-500/20"
          >
            hello@neongraffiti.studio
          </a>
        </div>
        <form className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
          <label className="text-sm text-zinc-300">Project outline</label>
          <textarea
            rows={6}
            placeholder="Tell me about the world we’re building..."
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0b12] p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
          />
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/10 bg-[#0b0b12] p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-[#0b0b12] p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
            />
          </div>
          <button
            type="button"
            className="mt-4 inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-5 py-2 text-sm font-semibold text-fuchsia-100 shadow-[0_0_22px_rgba(217,70,239,0.25)] transition hover:bg-fuchsia-500/20"
          >
            Send concept spark
          </button>
        </form>
      </div>
    </section>
  );
}
