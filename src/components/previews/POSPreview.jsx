import React from "react";
import {
  BarChart3,
  ClipboardList,
  Minus,
  Package,
  Plus,
  Search,
  Settings,
  TableProperties,
  Trash2,
} from "lucide-react";
import { LogoWithFallback, POS_MENU_ITEMS, ScreenPreviewFrame } from "./shared";

export function POSScreen({ className = "" }) {
  return (
    <div className={`flex h-full w-full overflow-hidden rounded-xl border border-espresso/10 bg-cream text-espresso shadow-soft ${className}`}>
      <div className="flex w-12 flex-shrink-0 flex-col items-center gap-2 bg-espresso py-2 text-white">
        <LogoWithFallback className="h-8 w-8 object-contain" />
        {[
          { icon: ClipboardList, label: "Menu", active: true },
          { icon: TableProperties, label: "Tables" },
          { icon: Package, label: "Orders" },
          { icon: BarChart3, label: "Reports" },
          { icon: Settings, label: "Set" },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} className={`flex h-8 w-8 flex-col items-center justify-center rounded-lg ${active ? "bg-white/15" : ""}`}>
            <Icon size={10} className={active ? "text-white" : "text-white/60"} />
            <span className="mt-0.5 text-[4px] leading-none text-white/70">{label}</span>
          </div>
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 border-b border-espresso/8 bg-white px-2 py-1.5">
          <span className="rounded-md bg-white px-1.5 py-1 text-[6px] font-extrabold shadow-sm">Dine In</span>
          <span className="rounded-md bg-cream px-1.5 py-1 text-[6px] font-bold text-espresso-soft">Table 05</span>
          <div className="ml-auto flex w-[52px] items-center gap-1 rounded-md border border-espresso/10 bg-cream px-1.5 py-1 text-[5px] text-espresso-soft">
            <Search size={6} />
            Search
          </div>
        </div>

        <div className="grid h-[270px] grid-cols-2 gap-1.5 overflow-hidden p-2">
          {POS_MENU_ITEMS.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-md border border-espresso/8 bg-white shadow-soft">
              <div className="relative h-10 overflow-hidden bg-cream">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-1">
                <div className="truncate text-[6px] font-extrabold">{item.name}</div>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[6px] font-extrabold text-terracotta">GHC {item.price}</span>
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-cream text-espresso">
                    <Plus size={8} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[70px] flex-shrink-0 flex-col border-l border-espresso/8 bg-white p-2">
        <div className="text-[7px] font-extrabold leading-tight">Takeaway</div>
        <div className="mb-2 text-[5px] text-espresso-soft">Server: Kisame</div>
        <div className="flex items-center justify-between border-b border-espresso/8 py-1 text-[6px]">
          <span>Waakye</span>
          <span className="font-bold">35</span>
        </div>
        <div className="mt-1 flex items-center gap-1">
          <span className="flex h-4 w-4 items-center justify-center rounded border border-espresso/10"><Minus size={7} /></span>
          <span className="text-[7px] font-bold">1</span>
          <span className="flex h-4 w-4 items-center justify-center rounded bg-terracotta text-white"><Plus size={7} /></span>
          <Trash2 size={8} className="ml-auto text-terracotta" />
        </div>
        <div className="mt-auto space-y-1 text-[5px]">
          <div className="flex justify-between"><span>Total</span><span>GHC 37</span></div>
          <div className="rounded-md bg-espresso py-1 text-center font-bold text-white">Pay</div>
          <div className="rounded-md bg-terracotta py-1 text-center font-bold text-white">Send</div>
        </div>
      </div>
    </div>
  );
}

export default function POSPreview() {
  return (
    <ScreenPreviewFrame>
      <POSScreen />
    </ScreenPreviewFrame>
  );
}
