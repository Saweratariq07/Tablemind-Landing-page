import React, { useState } from "react";
import { Check, Sparkles, Package, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Essential",
    tagline: "Core order flow",
    monthly: 99,
    features: [
      "Tablet POS, Kitchen Display Screen & QR ordering",
      "Order history, online/offline indicator & offline sync",
      "Order timer for placed → ready → served / picked up",
      "Basic dashboard",
      "Basic reports",
      "Up to 5 staff users",
      "1 location",
    ],
  },
  {
    name: "Growth",
    tagline: "For growing restaurants",
    monthly: 199,
    popular: true,
    features: [
      "Everything in Essential",
      "Inventory management & low-stock alerts",
      "Waste / loss tracking",
      "Staff management & activity logs",
      "Voids, cancellations & discount visibility",
      "Feedback & complaint tickets",
      "Customer insights, QR analytics, full reports & analytics",
      "Up to 12 staff users + priority support",
    ],
  },
  {
    name: "Pro",
    tagline: "Deeper operational control",
    monthly: 299,
    features: [
      "Everything in Growth",
      "Advanced analytics & predictive insights",
      "Staff performance & bottleneck analysis",
      "Kitchen efficiency reports & peak-hour optimization",
      "Complaint trend analysis",
      "Inventory & waste forecasting",
      "Multi-device / multi-station support",
      "Advanced permissions + up to 25 staff users",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Scale & customization",
    monthly: 499,
    enterprise: true,
    features: [
      "Unlimited locations with centralized management",
      "Unlimited staff users & custom role hierarchies",
      "Consolidated reporting across all locations",
      "Predictive labor & inventory management",
      "Custom workflows, API access & white-label options",
      "Payment / third-party integrations, mobile money support",
      "Dedicated account manager, onboarding & 24/7 priority support",
    ],
  },
];

const ADDONS = [
  ["Extra staff user", "$5 / month each"],
  ["Extra POS or KDS device", "$15 / month each"],
  ["Additional location", "$75–$99 / month"],
  ["Menu upload / cleanup", "$50–$100 one-time"],
  ["QR table card design", "$25–$50 one-time"],
  ["Training / onboarding", "$50–$100 per session"],
  ["Payment & mobile money integrations", "Custom pricing"],
  ["API / custom integrations", "Custom pricing"],
];

function Price({ plan, annual }) {
  if (annual) {
    const yearly = Math.round(plan.monthly * 12 * 0.85);
    const perMonthEquivalent = Math.round(yearly / 12);
    return (
      <div className="py-4">
        <div className="flex items-baseline gap-1">
          <span className="text-[2rem] font-extrabold tracking-tight text-espresso">
            {plan.enterprise ? "From " : ""}${perMonthEquivalent}
          </span>
          <span className="text-[13px] text-espresso-soft">/mo</span>
        </div>
        <p className="text-[12px] text-terracotta font-semibold mt-1">${yearly.toLocaleString()} billed yearly</p>
        <p className="text-[11px] text-espresso-soft/70 mt-0.5">Save 15% with annual billing</p>
      </div>
    );
  }
  const yearly = Math.round(plan.monthly * 12 * 0.85);
  return (
    <div className="py-4">
      <div className="flex items-baseline gap-1">
        <span className="text-[2rem] font-extrabold tracking-tight text-espresso">
          {plan.enterprise ? "From " : ""}${plan.monthly}
        </span>
        <span className="text-[13px] text-espresso-soft">/mo</span>
      </div>
      <p className="text-[12px] text-espresso-soft font-medium mt-1">
        ${yearly.toLocaleString()}{plan.enterprise ? "+" : ""} / year on annual billing
      </p>
      <p className="text-[11px] text-terracotta/80 font-medium mt-0.5">Switch to annual & save 15%</p>
    </div>
  );
}

export default function Pricing({ onBookDemo }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative px-5 sm:px-8 py-16 sm:py-20 bg-cream-dark/50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,69,42,0.06),transparent_55%)]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Reveal as="h2" className="text-[1.6rem] sm:text-[1.9rem] font-extrabold text-espresso">
            Simple pricing. Built for restaurant operations.
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-3 text-[14px] text-espresso-soft leading-relaxed">
              Start with the essentials and scale as your restaurant grows. No hidden fees.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-6 flex justify-center">
            <button
              onClick={() => setAnnual((a) => !a)}
              className={`inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-5 py-1.5 text-[12.5px] font-semibold transition-all border shadow-soft ${
                annual
                  ? "bg-terracotta text-white border-terracotta"
                  : "bg-white text-terracotta border-espresso/10 hover:border-terracotta/30"
              }`}
            >
              <span
                className={`w-9 h-5 rounded-full relative transition-colors flex-shrink-0 ${
                  annual ? "bg-white/25" : "bg-terracotta/15"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-soft transition-transform ${
                    annual ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
              <Sparkles size={13} />
              Save 15% with annual billing
            </button>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <div
                className={`relative bg-white rounded-2xl h-full flex flex-col transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? "border-2 border-terracotta shadow-lift lg:-translate-y-1 ring-4 ring-terracotta/10"
                    : "border border-espresso/8 shadow-soft hover:shadow-card hover:-translate-y-0.5"
                }`}
              >
                {plan.popular ? (
                  <div className="bg-terracotta text-white text-center text-[11px] font-bold py-2.5 tracking-widest uppercase">
                    Most Popular
                  </div>
                ) : (
                  <div className="h-2 bg-gradient-to-r from-cream-dark via-nude/30 to-cream-dark" aria-hidden />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[17px] font-extrabold text-espresso">{plan.name}</h3>
                  <p className="text-[12px] text-espresso-soft mt-0.5 mb-1">{plan.tagline}</p>

                  <div className="border-b border-espresso/8">
                    <Price plan={plan} annual={annual} />
                  </div>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-ok-pale">
                          <Check size={10} strokeWidth={3} className="text-ok" />
                        </span>
                        <span className="text-[12px] text-espresso-soft leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onBookDemo}
                    className={`mt-6 w-full py-3 rounded-full text-[13px] font-semibold transition-colors inline-flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? "bg-terracotta hover:bg-terracotta-dark text-white shadow-card"
                        : "bg-cream hover:bg-cream-dark text-espresso border border-espresso/10"
                    }`}
                  >
                    {plan.enterprise ? "Talk to sales" : `Choose ${plan.name}`}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 bg-white rounded-2xl border border-espresso/8 shadow-soft overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-espresso/8 bg-cream/40 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-terracotta-pale text-terracotta flex items-center justify-center">
                  <Package size={15} />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-espresso">Popular Add-ons</h4>
                  <p className="text-[11.5px] text-espresso-soft">Extend your plan as you grow</p>
                </div>
              </div>
              <p className="text-[11px] text-espresso-soft/60 sm:text-right">All prices in USD</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/6 p-px">
              {ADDONS.map(([label, price]) => (
                <div key={label} className="bg-white px-5 py-4 hover:bg-cream/30 transition-colors">
                  <div className="text-[12.5px] font-semibold text-espresso leading-snug">{label}</div>
                  <div className="text-[11.5px] text-terracotta font-medium mt-1">{price}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
