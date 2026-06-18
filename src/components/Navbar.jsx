import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

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

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-espresso/5"
          : "bg-cream/70 backdrop-blur-md border-b border-espresso/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} aria-label="TableMind home">
          <Logo size="md" />
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

        <div className="hidden md:block">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-1.5 bg-terracotta hover:bg-terracotta-dark text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-colors shadow-card"
          >
            Book a Demo <ArrowRight size={14} />
          </button>
        </div>

        <button className="md:hidden text-espresso" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-espresso/10 px-5 py-4 flex flex-col gap-1 animate-[fadeUp_0.25s_ease]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-[14px] font-medium text-espresso/80 py-2.5 border-b border-espresso/5"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBookDemo();
            }}
            className="mt-3 inline-flex items-center justify-center gap-1.5 bg-terracotta text-white text-[14px] font-semibold px-5 py-3 rounded-full shadow-card"
          >
            Book a Demo <ArrowRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
