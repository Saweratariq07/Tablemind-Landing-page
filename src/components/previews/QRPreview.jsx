import React from "react";
import { Plus, ShoppingCart, TableProperties, Utensils } from "lucide-react";
import { LogoWithFallback, MiniQrCode, QR_MENU_ITEMS, ScreenPreviewFrame } from "./shared";

export function QRPhoneScreen({ className = "" }) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-[17px] bg-[#FAF5EE] text-espresso ${className}`}>
      <div className="flex items-center justify-between bg-white px-2 py-1.5">
        <div className="flex items-center gap-1">
          <LogoWithFallback className="h-6 w-8 object-contain" />
          <div>
            <div className="text-[6px] font-extrabold leading-none">Table<span className="text-terracotta">Mind</span></div>
            <div className="mt-0.5 h-1 w-11 rounded-full bg-espresso/15" />
          </div>
        </div>
        <div className="rounded-md bg-cream px-1.5 py-0.5 text-[5px] font-bold text-espresso/60">Demo</div>
      </div>

      <div className="flex items-center justify-between border-y border-espresso/8 bg-white px-2 py-1">
        <div className="flex items-center gap-1 text-[6px] font-extrabold">
          <TableProperties size={7} />
          Table 12
        </div>
        <span className="rounded-full bg-cream px-1.5 py-0.5 text-[5px] font-semibold text-espresso-soft">Dine In</span>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-terracotta to-terracotta-dark px-2 py-2 text-white">
        <div className="relative z-10 text-[8px] font-extrabold leading-tight">Craving made simple.</div>
        <div className="relative z-10 mt-0.5 text-[5px] text-white/80">Good food, great experience.</div>
        <div className="absolute right-2 top-1 opacity-25">
          <MiniQrCode />
        </div>
      </div>

      <div className="flex gap-1 overflow-hidden border-b border-espresso/8 bg-white px-2 py-1.5">
        {["All", "Popular", "Mains"].map((cat, i) => (
          <span
            key={cat}
            className={`whitespace-nowrap rounded-full px-1.5 py-0.5 text-[5px] font-bold ${
              i === 0 ? "bg-terracotta text-white" : "bg-cream text-espresso-soft"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="min-h-0 flex-1 space-y-1 overflow-hidden p-2">
        {QR_MENU_ITEMS.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5 rounded-lg border border-espresso/8 bg-white p-1.5 shadow-soft">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-terracotta-pale text-terracotta">
              <Utensils size={12} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[6px] font-extrabold leading-tight">
                {item.name}{item.popular ? " *" : ""}
              </div>
              <div className="truncate text-[5px] leading-tight text-espresso-soft/70">{item.desc}</div>
              <div className="mt-0.5 text-[6px] font-extrabold text-terracotta">GHC {item.price}</div>
            </div>
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-terracotta text-white">
              <Plus size={10} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1 border-t border-espresso/8 bg-white p-1.5">
        <div className="flex flex-1 items-center justify-center gap-1 rounded-md bg-cream py-1 text-[5px] font-bold text-espresso">
          <ShoppingCart size={7} />
          Cart (2)
        </div>
        <div className="flex flex-1 items-center justify-center rounded-md bg-terracotta py-1 text-[5px] font-extrabold text-white">
          Checkout
        </div>
      </div>
    </div>
  );
}

export function QRPhoneDevice({ className = "" }) {
  return (
    <div className={`h-full w-[174px] rounded-[26px] bg-espresso p-2 shadow-lift ${className}`}>
      <QRPhoneScreen className="h-full" />
    </div>
  );
}

export default function QRPreview() {
  return (
    <ScreenPreviewFrame>
      <QRPhoneDevice className="h-full" />
    </ScreenPreviewFrame>
  );
}
