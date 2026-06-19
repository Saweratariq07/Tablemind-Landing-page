import React from "react";
import {
  Activity,
  BarChart3,
  Clock,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import { LogoWithFallback, ScreenPreviewFrame } from "./shared";

export function DashboardScreen({ className = "" }) {
  return (
    <div className={`flex h-full w-full overflow-hidden rounded-xl border border-espresso/10 bg-cream text-espresso shadow-soft ${className}`}>
      <div className="w-9 flex-shrink-0 border-r border-espresso/8 bg-white p-1.5">
        <LogoWithFallback className="mb-3 h-7 w-7 object-contain" />
        {[LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings].map((Icon, i) => (
          <div key={i} className={`mb-1 flex h-6 w-6 items-center justify-center rounded ${i === 0 ? "bg-terracotta-pale text-terracotta" : "text-espresso-soft"}`}>
            <Icon size={10} />
          </div>
        ))}
      </div>
      <div className="min-w-0 flex-1 p-2">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold leading-none">02:49 PM</div>
            <div className="text-[5px] text-espresso-soft">Wednesday, June 17</div>
          </div>
          <span className="rounded-full border border-ok/30 bg-ok-pale px-1.5 py-0.5 text-[5px] font-bold text-ok">Online</span>
        </div>

        <div className="mb-2 grid grid-cols-3 gap-1.5">
          {[
            { label: "Live Orders", value: "6", icon: Activity, color: "text-terracotta" },
            { label: "Total Sales", value: "GHC 18,540", icon: TrendingUp, color: "text-ok" },
            { label: "Inventory", value: "7", icon: Package, color: "text-[#C07830]" },
            { label: "Waste", value: "12%", icon: Trash2, color: "text-espresso-soft" },
            { label: "Customers", value: "156", icon: Users, color: "text-[#4A90D9]" },
            { label: "Peak", value: "7PM", icon: Clock, color: "text-[#D1842B]" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-md border border-espresso/8 bg-white p-1.5 shadow-soft">
              <div className={`mb-0.5 flex items-center gap-0.5 text-[5px] ${color}`}><Icon size={6} /> {label}</div>
              <div className="truncate text-[8px] font-extrabold">{value}</div>
              <div className="mt-0.5 h-0.5 w-8 rounded-full bg-terracotta/50" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-md border border-espresso/8 bg-white p-2 shadow-soft">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[7px] font-extrabold">Top Menu Items</span>
              <span className="rounded-full bg-nude/40 px-1 text-[5px]">Week</span>
            </div>
            {["Jollof Rice", "Grilled Tilapia", "Waakye"].map((item, i) => (
              <div key={item} className="flex items-center gap-1 border-b border-espresso/8 py-0.5 text-[5px]">
                <span className="flex h-3 w-3 items-center justify-center rounded bg-cream font-bold">{i + 1}</span>
                <span className="flex-1 truncate font-semibold">{item}</span>
                <span className="font-bold">GHC {[2160, 2275, 1015][i]}</span>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-espresso/8 bg-white p-2 shadow-soft">
            <div className="mb-1 flex items-center justify-between text-[7px] font-extrabold">
              <span>Live Orders</span>
              <span className="text-[5px] text-terracotta">Live</span>
            </div>
            <div className="mb-1 grid grid-cols-3 gap-1 text-center">
              {["New", "Preparing", "Ready"].map((s) => (
                <div key={s} className="rounded bg-cream py-1">
                  <div className="text-[8px] font-extrabold text-terracotta">2</div>
                  <div className="text-[4px] text-espresso-soft">{s}</div>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 100 26" className="h-9 w-full rounded bg-cream">
              <polyline points="6,19 18,17 30,20 42,14 54,15 66,9 78,12 94,5" fill="none" stroke="#6C7A4D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <ScreenPreviewFrame>
      <DashboardScreen />
    </ScreenPreviewFrame>
  );
}
