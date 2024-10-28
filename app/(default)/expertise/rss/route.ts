import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { NextResponse } from 'next/server';

const expertises = getExpertiseMetadata('src/expertise');

export async function GET() {
  const rss = `<?xml version=1.0 encoding="UTF-8" ? 
    <rss version="2.0>"
    <channel>
    <title>Bright Byte Expertise</title>
    <link>https://thebrightbyte.com/expertise</link>
    <description>Latest insights from Bright Byte</description>
    <language>en-us</language>
    ${expertises
      .map(
        (expertise) => `
        <item>
        <title>${expertise.title}</title>
        <link>https://thebrightbyte.com/expertise/${expertise.slug}</link>
        <description>${expertise.description}</description>
        ${expertise.date ? `<pubDate>${new Date(expertise.date).toUTCString()}</pubDate>` : ''}
        </item>`,
      )
      .join('')}
    </channel>
    </rss>
    `;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
