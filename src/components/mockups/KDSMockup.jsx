import React from "react";
import { KDSScreen } from "../previews";
import { ScaledScreen } from "../previews/shared";

export default function KDSMockup({ className = "" }) {
  return (
    <div className={className}>
      <div className="bg-espresso rounded-2xl p-[3.5%] shadow-lift">
        <div className="bg-[#1A0F0A] rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <ScaledScreen scale={0.36} baseWidth={480} baseHeight={360} className="h-full w-full">
            <KDSScreen className="h-full w-full" />
          </ScaledScreen>
        </div>
      </div>
    </div>
  );
}
