import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aparna Balaji";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1b1613",
        }}
      >
        <div style={{ width: 64, height: 4, backgroundColor: "#e8849b" }} />
        <div
          style={{
            marginTop: 40,
            fontSize: 84,
            fontWeight: 600,
            color: "#f1ebe7",
            display: "flex",
          }}
        >
          Aparna Balaji
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#a89d95",
            display: "flex",
            maxWidth: 900,
          }}
        >
          Computer science student building trading systems, embedded
          hardware, and web apps.
        </div>
      </div>
    ),
    { ...size }
  );
}
