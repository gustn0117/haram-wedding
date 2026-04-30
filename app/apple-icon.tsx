import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b89d6a',
          fontFamily: 'serif',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        H
      </div>
    ),
    { ...size }
  );
}
