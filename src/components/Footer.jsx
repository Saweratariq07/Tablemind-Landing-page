import React from "react";
import { Facebook, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "Product", id: "product" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "Waitlist", id: "waitlist" },
];

const SOCIALS = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hello@tablemind.co", label: "Email" },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo size="md" dark />
            <p className="mt-4 text-[13.5px] text-cream/70 leading-relaxed max-w-sm">
              AI-powered restaurant operations — smarter orders, faster service, less waste, and full visibility across your business.
            </p>
            <span className="inline-flex items-center gap-1.5 mt-5 bg-terracotta/20 text-terracotta-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Made for Ghana
            </span>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-cream/50 mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-[13.5px] font-medium text-cream/80 hover:text-white transition-colors w-fit"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & social */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-cream/50 mb-4">Connect</h4>
            <a
              href="mailto:Tablemindhq@hotmail.com"
              className="inline-flex items-start sm:items-center gap-1.5 text-[13px] sm:text-[13.5px] font-medium text-cream/80 hover:text-white transition-colors mb-5 break-all"
            >
              Tablemindhq@hotmail.com
              <ArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 text-cream/80 hover:bg-terracotta hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-cream/50">
          <span>© {new Date().getFullYear()} TableMind.co. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <button type="button" className="hover:text-cream/80 transition-colors">Privacy</button>
            <button type="button" className="hover:text-cream/80 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
