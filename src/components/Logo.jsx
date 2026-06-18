import React, { useState } from "react";

function LogoSvg({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="6" fill="#FF5C1A" />
      <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">
        T
      </text>
    </svg>
  );
}

export default function Logo({ size = "md", dark = false }) {
  const [failed, setFailed] = useState(false);
  const sizes = {
    sm: { box: 28, text: "text-base", tag: "text-[9px]" },
    md: { box: 36, text: "text-xl", tag: "text-[10px]" },
    lg: { box: 44, text: "text-2xl", tag: "text-[11px]" },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2 select-none min-w-0">
      {failed ? (
        <LogoSvg size={s.box} />
      ) : (
        <img
          src="/Dashboard logo.png"
          alt="TableMind Logo"
          className="object-contain rounded-md"
          style={{ width: s.box, height: s.box }}
          onError={() => setFailed(true)}
        />
      )}
      <span className={`font-extrabold ${s.text} ${dark ? "text-white" : "text-espresso"} tracking-tight truncate`}>
        TableMind<span className="text-terracotta">.co</span>
      </span>
    </div>
  );
}
