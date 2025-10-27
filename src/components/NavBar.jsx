import React from 'react';

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl">
          <a href="#hero" className="inline-flex items-center gap-2 px-3 py-2 text-fuchsia-300 transition hover:text-fuchsia-200">
            <span className="text-xl font-black tracking-widest">FLAMES</span>
            <span className="rounded-full bg-fuchsia-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-fuchsia-200">CD</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { href: '#work', label: 'Work' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-200 shadow-[0_0_25px_rgba(217,70,239,0.25)] transition hover:border-fuchsia-300/60 hover:bg-fuchsia-500/20 hover:text-fuchsia-100">
            Let’s build
          </a>
        </div>
      </div>
    </header>
  );
}
