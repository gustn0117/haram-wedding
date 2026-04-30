import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
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
