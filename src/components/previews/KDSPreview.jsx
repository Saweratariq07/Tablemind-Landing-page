import React from "react";
import { LogoWithFallback, ScreenPreviewFrame } from "./shared";

export function KDSScreen({ className = "" }) {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1A0F0A] shadow-soft ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white px-3 py-2 text-espresso">
        <div className="flex items-center gap-1.5">
          <LogoWithFallback className="h-7 w-9 object-contain" />
          <div>
            <div className="text-[7px] font-extrabold">Table<span className="text-terracotta">Mind</span></div>
            <div className="text-[4px] uppercase text-espresso-soft">Kitchen Operations</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[10px] font-extrabold leading-none">02:49 PM</div>
          <div className="text-[5px] text-espresso-soft">Wednesday</div>
        </div>
        <span className="rounded-full border border-ok/30 bg-ok-pale px-1.5 py-0.5 text-[5px] font-bold text-ok">Online</span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3">
        {[
          { label: "New", count: 2, color: "border-terracotta", badge: "bg-terracotta", action: "Start", orders: ["#1023", "#1024"] },
          { label: "Preparing", count: 2, color: "border-[#D1842B]", badge: "bg-[#D1842B]", action: "Ready", orders: ["#1020", "#1021"] },
          { label: "Ready", count: 2, color: "border-ok", badge: "bg-ok", action: "Serve", orders: ["#1017", "#1018"] },
        ].map((col) => (
          <div key={col.label} className="min-w-0 border-r border-white/10">
            <div className={`flex items-center justify-between border-b-2 ${col.color} bg-white/[0.04] px-2 py-1.5`}>
              <span className="text-[7px] font-extrabold text-white">{col.label}</span>
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${col.badge} text-[6px] font-bold text-white`}>{col.count}</span>
            </div>
            <div className="space-y-1.5 p-1.5">
              {col.orders.map((order, i) => (
                <div key={order} className="rounded-md border border-terracotta/70 bg-white p-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-extrabold text-espresso">{order}</span>
                    <span className="rounded-full bg-terracotta-pale px-1 text-[5px] font-bold text-terracotta">{23 + i * 4}m</span>
                  </div>
                  <div className="mt-0.5 text-[6px] font-semibold text-espresso-soft">Table {i === 0 ? "12" : "05"}</div>
                  <div className="my-1 h-0.5 rounded-full bg-terracotta" />
                  {["Jollof Rice", i === 0 ? "Grilled Chicken" : "Sobolo"].map((item) => (
                    <div key={item} className="truncate border-b border-espresso/8 py-0.5 text-[5px] font-semibold text-espresso">x1 {item}</div>
                  ))}
                  <div className="mt-1 rounded bg-terracotta-pale py-1 text-center text-[5px] font-bold text-terracotta">{col.action} -&gt;</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KDSPreview() {
  return (
    <ScreenPreviewFrame dark>
      <KDSScreen />
    </ScreenPreviewFrame>
  );
}
