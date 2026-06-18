import React from "react";

const ASPECT = 2048 / 1359;

export default function HeroDeviceShowcase() {
  return (
    <div
      className="relative w-full max-w-full sm:max-w-[520px] md:max-w-[560px] lg:max-w-none lg:w-full xl:w-[105%] mx-auto lg:mx-0 lg:ml-auto animate-[fadeUp_0.8s_ease_0.15s_both] -mx-1 sm:mx-auto lg:mx-0"
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
        className="relative h-full w-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:drop-shadow-[0_28px_56px_rgba(0,0,0,0.16)] animate-floatSlow select-none max-w-full"
        width={2048}
        height={1359}
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
