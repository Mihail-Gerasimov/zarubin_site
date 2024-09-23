import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ваш текст';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  searchParams,
}: {
  searchParams: { text: string };
}) {
  const text = searchParams.text || 'Case';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {text}
      </div>
    ),
    {
      ...size,
    },
  );
}
