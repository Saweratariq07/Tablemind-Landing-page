import React from "react";

export const POS_MENU_ITEMS = [
  { name: "Jollof Rice", price: 45, image: "/dishes/jollof.jpg" },
  { name: "Tilapia", price: 65, image: "/dishes/tilapia.jpg" },
  { name: "Waakye", price: 35, image: "/dishes/waakye.jpg" },
  { name: "Soup", price: 40, image: "/dishes/soup.jpg" },
  { name: "Kelewele", price: 20, image: "/dishes/kelewele.jpg" },
  { name: "Sobolo", price: 15, image: "/dishes/sobolo.jpg" },
];

export const QR_MENU_ITEMS = [
  { name: "Jollof Rice", desc: "Classic Ghanaian jollof", price: 45, popular: true },
  { name: "Grilled Tilapia", desc: "Banku and pepper sauce", price: 65, popular: true },
  { name: "Waakye", desc: "Rice, beans, egg and fish", price: 35, popular: false },
];

function LogoSvg({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="6" fill="#6C7A4D" />
      <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">
        T
      </text>
    </svg>
  );
}

export const LogoWithFallback = ({ className = "h-6 w-auto" }) => {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return <LogoSvg className={className} />;
  }

  return (
    <img
      src="/Dashboard logo.png"
      alt="TableMind"
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
};

export const ScreenPreviewFrame = ({ children, dark = false, className = "" }) => (
  <div
    className={`mb-4 flex h-[320px] items-center justify-center overflow-hidden rounded-xl border p-3 sm:h-[345px] lg:h-[360px] ${
      dark ? "border-white/10 bg-[#1A0F0A]" : "border-espresso/6 bg-cream"
    } ${className}`}
  >
    {children}
  </div>
);

export const MiniQrCode = () => (
  <div className="grid grid-cols-5 gap-[1px] rounded bg-white p-1 shadow-sm">
    {[
      1, 1, 1, 0, 1,
      1, 0, 1, 0, 0,
      1, 1, 1, 1, 1,
      0, 0, 1, 0, 1,
      1, 0, 1, 1, 1,
    ].map((active, i) => (
      <span key={i} className={`h-1 w-1 rounded-[1px] ${active ? "bg-espresso" : "bg-transparent"}`} />
    ))}
  </div>
);

export function ScaledScreen({ children, scale = 0.45, baseWidth = 580, baseHeight = 360, className = "" }) {
  const pct = `${Math.round((1 / scale) * 100)}%`;
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 origin-top-left"
        style={{ transform: `scale(${scale})`, width: pct, height: pct }}
      >
        <div style={{ width: baseWidth, height: baseHeight }}>{children}</div>
      </div>
    </div>
  );
}
