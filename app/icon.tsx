import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb, #0d9488)",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3c-1.7 0-2.6.9-3.7.9-1.4 0-2.8-1-4.1-.3C2.7 4.3 2 6.1 2 8.2c0 2.3.8 3.9 1.5 5.6.6 1.6 1.1 3.5 1.5 5.3.3 1.2.9 2 1.8 2 1.2 0 1.3-2.2 1.6-3.7.3-1.4.7-2.6 1.6-2.6.9 0 1.3 1.2 1.6 2.6.3 1.5.4 3.7 1.6 3.7.9 0 1.5-.8 1.8-2 .4-1.8.9-3.7 1.5-5.3.7-1.7 1.5-3.3 1.5-5.6 0-2.1-.7-3.9-2.2-4.6-1.3-.7-2.7.3-4.1.3C13.6 3.9 12.9 3 12 3Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
