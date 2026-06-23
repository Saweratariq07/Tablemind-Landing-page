import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const DEMO_URL = "https://tablemind-demo.vercel.app/";

const LINKS = [
  { label: "Product", id: "product" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "Waitlist", id: "waitlist" },
];

export default function Navbar({ onBookDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft border-b border-espresso/5"
          : "bg-cream/90 backdrop-blur-md border-b border-espresso/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[64px] sm:h-[72px] flex items-center justify-between gap-3">
        <button onClick={() => scrollTo("hero")} aria-label="TableMind home" className="min-w-0 shrink">
          <span className="md:hidden">
            <Logo size="sm" />
          </span>
          <span className="hidden md:inline">
            <Logo size="md" />
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[14px] font-medium text-espresso/75 hover:text-espresso transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-espresso/80 hover:text-espresso transition-colors"
          >
            View Demo <ExternalLink size={14} />
          </a>
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-1.5 bg-terracotta hover:bg-terracotta-dark text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-colors shadow-card"
          >
            Book a Demo <ArrowRight size={14} />
          </button>
        </div>

        <button className="md:hidden text-espresso p-1 -mr-1" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-espresso/10 px-4 sm:px-5 py-4 flex flex-col gap-1 animate-[fadeUp_0.25s_ease] max-h-[calc(100dvh-64px)] overflow-y-auto pb-[env(safe-area-inset-bottom)]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-[14px] font-medium text-espresso/80 py-2.5 border-b border-espresso/5"
            >
              {l.label}
            </button>
          ))}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-1.5 border-2 border-espresso/15 text-espresso text-[14px] font-semibold px-5 py-3 rounded-full"
          >
            View Demo <ExternalLink size={14} />
          </a>
          <button
            onClick={() => {
              setOpen(false);
              onBookDemo();
            }}
            className="mt-2 inline-flex items-center justify-center gap-1.5 bg-terracotta text-white text-[14px] font-semibold px-5 py-3 rounded-full shadow-card"
          >
            Book a Demo <ArrowRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
