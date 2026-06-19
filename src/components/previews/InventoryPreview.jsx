import React from "react";
import { AlertTriangle, Package, Plus, ShieldAlert, Trash2 } from "lucide-react";
import { LogoWithFallback, ScreenPreviewFrame } from "./shared";

export function InventoryScreen({ className = "" }) {
  return (
    <div className={`h-full w-full overflow-hidden rounded-xl border border-espresso/10 bg-cream p-2 text-espresso shadow-soft ${className}`}>
      <div className="mb-2 flex items-center justify-between rounded-md border border-espresso/8 bg-white p-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <LogoWithFallback className="h-8 w-8 flex-shrink-0 object-contain" />
          <div className="min-w-0">
            <div className="truncate text-[8px] font-extrabold">Inventory Dashboard</div>
            <div className="truncate text-[5px] text-espresso-soft">Stock, menu links, waste analytics</div>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-terracotta px-1.5 py-1 text-[5px] font-bold text-white">
          <Plus size={6} />
          Log Waste
        </div>
      </div>

      <div className="mb-2 grid grid-cols-2 gap-1.5">
        {[
          { label: "Low Stock", value: "3 items", icon: AlertTriangle, color: "text-terracotta-dark", bg: "bg-terracotta-pale" },
          { label: "Out of Stock", value: "1 item", icon: ShieldAlert, color: "text-terracotta", bg: "bg-terracotta-pale" },
          { label: "Waste Today", value: "GHC 105", icon: Trash2, color: "text-espresso-soft", bg: "bg-white" },
          { label: "Menu Impact", value: "7 items", icon: Package, color: "text-[#4A90D9]", bg: "bg-[#EEF4FC]" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="flex items-center gap-1.5 rounded-md border border-espresso/8 bg-white p-1.5 shadow-soft">
            <div className={`flex h-6 w-6 items-center justify-center rounded-md ${bg} ${color}`}>
              <Icon size={12} />
            </div>
            <div className="min-w-0">
              <div className="truncate text-[5px] font-bold uppercase text-espresso-soft">{label}</div>
              <div className={`truncate text-[8px] font-extrabold ${color}`}>{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.15fr_0.85fr] gap-1.5">
        <div className="rounded-md border border-espresso/8 bg-white p-2 shadow-soft">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[7px] font-extrabold">Stock Monitor</span>
            <span className="rounded-full bg-terracotta-pale px-1 text-[5px] font-bold text-terracotta">Action</span>
          </div>
          {[
            { name: "Tilapia Fish", stock: "6 portions", pct: 30, bad: true },
            { name: "Banku Mix", stock: "0 kg", pct: 5, bad: true },
            { name: "Chicken Breast", stock: "35 kg", pct: 86, bad: false },
            { name: "Yam", stock: "18 tubers", pct: 70, bad: false },
          ].map((item) => (
            <div key={item.name} className="border-b border-espresso/8 py-1">
              <div className="flex justify-between gap-1 text-[5px]">
                <span className="truncate font-bold">{item.name}</span>
                <span className={item.bad ? "text-terracotta" : "text-ok"}>{item.stock}</span>
              </div>
              <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-cream">
                <div className={`h-full rounded-full ${item.bad ? "bg-terracotta" : "bg-ok"}`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          <div className="rounded-md border border-espresso/8 bg-white p-2 shadow-soft">
            <div className="mb-1 text-[7px] font-extrabold">Menu Availability</div>
            {["Banku & Tilapia", "Sobolo", "Grilled Tilapia"].map((item, i) => (
              <div key={item} className="mb-1 flex items-center justify-between gap-1 text-[5px]">
                <span className="truncate">{item}</span>
                <span className={`rounded-full px-1 py-0.5 font-bold ${i === 0 ? "bg-terracotta-pale text-terracotta" : "bg-ok-pale text-ok"}`}>
                  {i === 0 ? "Off" : "On"}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-espresso/8 bg-white p-2 shadow-soft">
            <div className="mb-1 text-[7px] font-extrabold">Waste Log</div>
            {["Rice 4.5kg", "Tilapia 2 pcs"].map((item, i) => (
              <div key={item} className="flex justify-between text-[5px]">
                <span>{item}</span>
                <span className="font-bold text-terracotta">GHC {i ? 80 : 120}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InventoryPreview() {
  return (
    <ScreenPreviewFrame>
      <InventoryScreen />
    </ScreenPreviewFrame>
  );
}
