import React from "react";
import LaptopMockup from "../mockups/LaptopMockup";
import TabletMockup from "../mockups/TabletMockup";
import PhoneMockup from "../mockups/PhoneMockup";
import KDSMockup from "../mockups/KDSMockup";

export default function DeviceComposition() {
  return (
    <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] animate-[fadeUp_0.8s_ease_0.15s_both]">
      <LaptopMockup className="absolute top-0 right-0 w-[78%] sm:w-[72%] animate-floatSlow shadow-device" />
      <TabletMockup className="absolute bottom-[6%] left-0 w-[36%] sm:w-[32%] z-20 shadow-device" />
      <KDSMockup className="absolute bottom-0 right-[2%] w-[36%] sm:w-[32%] z-[1] shadow-lift" />
      <PhoneMockup className="absolute bottom-[18%] left-[26%] sm:left-[28%] w-[18%] sm:w-[16%] z-30 shadow-device" />
    </div>
  );
}
