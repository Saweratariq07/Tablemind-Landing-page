import React from "react";
import { POSScreen } from "../previews";
import { ScaledScreen } from "../previews/shared";

export default function TabletMockup({ className = "" }) {
  return (
    <div className={`${className} -rotate-6`}>
      <div className="bg-espresso rounded-2xl p-[3.5%] shadow-lift">
        <div className="bg-white rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <ScaledScreen scale={0.36} baseWidth={480} baseHeight={360} className="h-full w-full">
            <POSScreen className="h-full w-full" />
          </ScaledScreen>
        </div>
      </div>
      {/* Stand base */}
      <div className="mx-auto mt-1 h-2 w-[55%] rounded-b-md bg-espresso/80 shadow-soft" />
      <div className="mx-auto h-1 w-[70%] rounded-full bg-espresso/40" />
    </div>
  );
}
