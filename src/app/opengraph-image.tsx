import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OBK - Rekonstrukce koupelen v Ostravě";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAFAFA 0%, #E8EAFF 50%, #C7D2FE 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #6B7AE8 0%, #C7D2FE 100%)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6B7AE8, #8B9CF7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            OBK
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#1E1E1E",
              letterSpacing: "-0.02em",
            }}
          >
            Obklady Ostrava
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#1E1E1E",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Rekonstrukce koupelen
          <br />
          v Ostravě
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#525252",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Vlastní tým · Pevná cena · Záruka 60 měsíců
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#6B7AE8",
            fontWeight: 600,
          }}
        >
          <span>obklady-ostrava.cz</span>
          <span>+420 737 540 605</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
