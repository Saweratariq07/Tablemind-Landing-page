import React from "react";
import { DashboardScreen } from "../previews";
import { ScaledScreen } from "../previews/shared";

export default function LaptopMockup({ className = "" }) {
  return (
    <div className={className}>
      <div className="bg-espresso rounded-t-xl p-[3%] shadow-lift">
        <div className="bg-white rounded-md overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <ScaledScreen scale={0.4} baseWidth={580} baseHeight={360} className="h-full w-full">
            <DashboardScreen className="h-full w-full" />
          </ScaledScreen>
        </div>
      </div>
      <div className="h-[3%] bg-gradient-to-b from-espresso-light to-espresso rounded-b-md mx-[2%]" />
      <div className="h-[1.5%] bg-espresso-light/70 rounded-b-xl mx-[8%]" />
    </div>
  );
}
