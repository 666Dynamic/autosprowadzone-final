import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "SprowadzoneAuto.pl - Import aut z Niemiec, aukcje B2B, weryfikacja";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Amber accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
        }}
      />

      {/* Logo icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80px",
          height: "80px",
          background: "#f59e0b",
          borderRadius: "20px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transform: "skewX(-15deg)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "40px",
              background: "rgba(255,255,255,0.4)",
              borderRadius: "4px",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "14px",
              height: "56px",
              background: "white",
              borderRadius: "7px",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "40px",
              background: "rgba(255,255,255,0.4)",
              borderRadius: "4px",
              display: "flex",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            lineHeight: 1,
            display: "flex",
          }}
        >
          SprowadzoneAuto.pl
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#f59e0b",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginTop: "8px",
            display: "flex",
          }}
        >
          Import Aut z Niemiec
        </div>
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "48px",
          color: "#94a3b8",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#f59e0b",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          Aukcje B2B
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#f59e0b",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          Weryfikacja
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#f59e0b",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          Transport Door-to-Door
        </div>
      </div>

      {/* URL bar */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#475569",
          fontSize: "16px",
        }}
      >
        sprowadzoneauto.pl
      </div>
    </div>,
    {
      ...size,
    }
  );
}
