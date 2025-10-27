import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="inline-block h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30" />
              <span className="text-xl font-black tracking-tight ">GRAFFI.T</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#work" className="text-sm font-medium text-white/80 hover:text-white">Work</a>
              <a href="#about" className="text-sm font-medium text-white/80 hover:text-white">About</a>
              <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white">Contact</a>
            </nav>
            <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white md:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="flex flex-col gap-2 px-4 pb-4 md:hidden">
              <a onClick={() => setOpen(false)} href="#work" className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5">Work</a>
              <a onClick={() => setOpen(false)} href="#about" className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
