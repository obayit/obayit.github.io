export default function CRTImage({ src }) {
    return (
        <>
            <style>
                {`
.crt {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 12px;
}

/* Base image */
.crt img {
  display: block;
  width: 100%;
  height: auto;
  filter: contrast(1.2) brightness(1.1) saturate(1.2);
}

/* Scanlines */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0,0,0,0.25) 0px,
    rgba(0,0,0,0.25) 2px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  opacity: 0.4;
}

/* Vignette (edges darkening) */
.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    transparent 60%,
    rgba(0,0,0,0.4) 100%
  );
  pointer-events: none;
}
            `}
            </style>
            <div className="crt">
                <img src={src} alt="" />
                <div className="scanlines" />
                <div className="vignette" />
            </div>
        </>
    );
}

export function CRTImage2({ src }) {
  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt=""
        className="block"
        style={{ filter: "contrast(1.1) brightness(0.92) saturate(1.2)" }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* RGB phosphor shift */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,0,0,0.03) 0px, rgba(0,255,0,0.03) 1px, rgba(0,0,255,0.03) 2px, transparent 3px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none rounded-sm"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Flicker + glow animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(120,220,255,0.015)",
          animation: "crtFlicker 8s infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* Glare streak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }}
      />

      <style>{`
        @keyframes crtFlicker {
          0%,100% { opacity: 1; }
          41%      { opacity: 1; }
          42%      { opacity: 0.85; }
          43%      { opacity: 1; }
          75%      { opacity: 1; }
          76%      { opacity: 0.9; }
          77%      { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
