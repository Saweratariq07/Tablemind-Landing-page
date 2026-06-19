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
    <section id="hero" className="relative pt-[88px] pb-12 sm:pt-[140px] sm:pb-20 overflow-hidden bg-cream">
      {/* Restaurant background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src="/hero-restaurant-olive.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/55 lg:to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-cream/30 to-terracotta/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 items-center">
        {/* Left: copy */}
        <div className="animate-[fadeUp_0.7s_ease] lg:bg-transparent bg-cream/80 backdrop-blur-sm rounded-2xl lg:p-0 p-5 sm:p-6 min-w-0">
          <h1 className="text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.6rem] lg:text-[2.85rem] font-extrabold leading-[1.12] tracking-tight text-espresso max-w-[520px]">
            Run your restaurant with more{" "}
            <span className="text-terracotta">clarity,</span>{" "}
            <span className="text-terracotta">speed</span>, and control.
          </h1>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15.5px] text-espresso-soft leading-relaxed max-w-[480px]">
            TableMind is an AI-powered restaurant operations platform that helps you take smarter orders,
            serve faster, reduce mistakes, manage inventory better, and improve profitability.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-col min-[400px]:flex-row flex-wrap gap-3">
            <button
              onClick={onBookDemo}
              className="inline-flex w-full min-[400px]:w-auto items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-[14px] px-6 py-3.5 rounded-full transition-colors shadow-card min-h-[48px]"
            >
              Book a Demo <ArrowRight size={15} />
            </button>
            <button
              onClick={onJoinWaitlist}
              className="inline-flex w-full min-[400px]:w-auto items-center justify-center gap-2 border-2 border-terracotta text-terracotta hover:bg-terracotta-pale font-semibold text-[14px] px-6 py-3.5 rounded-full transition-colors bg-cream/60 min-h-[48px]"
            >
              Join the Waitlist
            </button>
          </div>

          <div className="mt-8 sm:mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:items-center sm:gap-4">
            {PILLS.map((p, i) => (
              <React.Fragment key={p.label}>
                {i > 0 && <div className="hidden sm:block w-px h-5 bg-espresso/15 flex-shrink-0" aria-hidden />}
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-white border border-espresso/10 text-terracotta shadow-soft flex items-center justify-center flex-shrink-0">
                    <p.icon size={14} />
                  </div>
                  <span className="text-[11px] sm:text-[12.5px] font-semibold text-espresso-soft leading-tight">
                    {p.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: device showcase */}
        <div className="min-w-0 w-full">
          <HeroDeviceShowcase />
        </div>
      </div>
    </section>
  );
}
