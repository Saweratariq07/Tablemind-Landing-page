import React from "react";
import { ArrowRight, ListChecks, Trash2, Zap, BarChart3 } from "lucide-react";
import HeroDeviceShowcase from "./hero/HeroDeviceShowcase";

const PILLS = [
  { icon: ListChecks, label: "Smarter Orders" },
  { icon: Trash2, label: "Less Waste" },
  { icon: Zap, label: "Faster Service" },
  { icon: BarChart3, label: "Better Visibility" },
];

export default function Hero({ onBookDemo, onJoinWaitlist }) {
  return (
    <section id="hero" className="relative pt-[120px] pb-16 sm:pt-[140px] sm:pb-20 overflow-hidden">
      {/* Restaurant background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src="/hero-restaurant.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/55 lg:to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-6 xl:gap-8 items-center">
        {/* Left: copy */}
        <div className="animate-[fadeUp_0.7s_ease] lg:bg-transparent bg-cream/60 backdrop-blur-sm rounded-2xl lg:p-0 p-6">
          <h1 className="text-[2.1rem] sm:text-[2.6rem] lg:text-[2.85rem] font-extrabold leading-[1.12] tracking-tight text-espresso max-w-[520px]">
            Run your restaurant with more{" "}
            <span className="text-terracotta">clarity,</span>{" "}
            <span className="text-terracotta">speed</span>, and control.
          </h1>
          <p className="mt-5 text-[15.5px] text-espresso-soft leading-relaxed max-w-[480px]">
            TableMind is an AI-powered restaurant operations platform that helps you take smarter orders,
            serve faster, reduce mistakes, manage inventory better, and improve profitability.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-[14px] px-6 py-3.5 rounded-full transition-colors shadow-card"
            >
              Book a Demo <ArrowRight size={15} />
            </button>
            <button
              onClick={onJoinWaitlist}
              className="inline-flex items-center gap-2 border-2 border-terracotta text-terracotta hover:bg-terracotta-pale font-semibold text-[14px] px-6 py-3.5 rounded-full transition-colors bg-white/50"
            >
              Join the Waitlist
            </button>
          </div>

          <div className="mt-9 flex flex-nowrap items-center gap-3 sm:gap-4 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PILLS.map((p, i) => (
              <React.Fragment key={p.label}>
                {i > 0 && <div className="w-px h-5 bg-espresso/15 flex-shrink-0" aria-hidden />}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-white border border-espresso/10 text-terracotta shadow-soft flex items-center justify-center flex-shrink-0">
                    <p.icon size={14} />
                  </div>
                  <span className="text-[12px] sm:text-[12.5px] font-semibold text-espresso-soft whitespace-nowrap">
                    {p.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: polished device showcase image */}
        <HeroDeviceShowcase />
      </div>
    </section>
  );
}
