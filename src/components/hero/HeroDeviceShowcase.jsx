import React from "react";

const ASPECT = 2048 / 1359;

export default function HeroDeviceShowcase() {
  return (
    <div
      className="relative w-full max-w-[560px] sm:max-w-[600px] lg:max-w-none lg:w-[105%] xl:w-[110%] mx-auto lg:mx-0 lg:-mr-4 xl:-mr-8 animate-[fadeUp_0.8s_ease_0.15s_both]"
      style={{ aspectRatio: ASPECT }}
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-terracotta/15 blur-3xl"
        aria-hidden
      />
      <img
        src="/hero-devices.png"
        srcSet="/hero-devices.png 1x, /hero-devices.png 2x"
        alt="TableMind on laptop, tablet, phone, and kitchen display"
        className="relative h-full w-full object-contain object-center lg:object-right drop-shadow-[0_28px_56px_rgba(44,24,16,0.22)] animate-floatSlow select-none"
        width={2048}
        height={1359}
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
