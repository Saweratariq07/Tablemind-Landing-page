import React from "react";
import { QRPhoneScreen } from "../previews";
import { ScaledScreen } from "../previews/shared";

export default function PhoneMockup({ className = "" }) {
  return (
    <div className={className}>
      <div className="bg-espresso rounded-[1.6rem] p-[4%] shadow-lift">
        <div className="overflow-hidden rounded-[1.1rem] bg-[#FAF5EE]" style={{ aspectRatio: "9/17" }}>
          <ScaledScreen scale={0.5} baseWidth={174} baseHeight={360} className="h-full w-full">
            <QRPhoneScreen className="h-full w-full" />
          </ScaledScreen>
        </div>
      </div>
    </div>
  );
}
