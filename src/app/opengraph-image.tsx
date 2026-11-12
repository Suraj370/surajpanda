import { ImageResponse } from "next/og";

export const alt = "Suraj Panda — Software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Matches the site's dark theme (see globals.css).
const BG = "#0e1012";
const ACCENT = "#ff6b4a";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: BG,
          color: "#f3f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: ACCENT }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: ACCENT }} />
          surajpanda.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>Suraj Panda</div>
          <div style={{ fontSize: 44, marginTop: 20, color: "#b9b6ae" }}>Software engineer</div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 28 }}>
          {["Backend systems", "AI tooling", "Thoughtful interfaces"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 22px",
                border: `2px solid ${ACCENT}`,
                borderRadius: 999,
                color: ACCENT,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
