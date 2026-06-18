import React from "react";
import Reveal from "./Reveal";
import {
  POSPreview,
  KDSPreview,
  QRPreview,
  DashboardPreview,
  InventoryPreview,
} from "./previews";

const FEATURES = [
  { Preview: POSPreview, title: "POS System", desc: "Fast, reliable ordering for your staff. Work online or offline." },
  { Preview: KDSPreview, title: "Kitchen Display (KDS)", desc: "Real-time kitchen flow. Reduce delays and keep orders moving." },
  { Preview: QRPreview, title: "QR Ordering", desc: "Let customers order from their phones. Faster, smoother service." },
  { Preview: DashboardPreview, title: "Dashboard & Analytics", desc: "Track sales, performance, and trends. Make smarter decisions." },
  { Preview: InventoryPreview, title: "Inventory Management", desc: "Track stock in real time and reduce food waste." },
];

export default function Features() {
  return (
    <section id="product" className="px-5 sm:px-8 py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal as="h2" className="text-center text-[1.6rem] sm:text-[1.9rem] font-extrabold text-espresso mb-10 sm:mb-12">
          Everything you need. All in one platform.
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 min-w-0">
          {FEATURES.map(({ Preview, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <div className="bg-white rounded-2xl border border-espresso/8 p-4 h-full min-w-0 overflow-hidden hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                <Preview />
                <h3 className="text-[14px] font-bold text-espresso mb-1.5">{title}</h3>
                <p className="text-[12.5px] text-espresso-soft leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
