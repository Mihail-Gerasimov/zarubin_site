import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { NextResponse } from 'next/server';

const allInsights = getPostMetadata('src/posts');

export async function GET() {
  const rss = `<?xml version=1.0 encoding="UTF-8" ?>
    <rss version="2.0>"
    <channel>
    <title>Bright Byte Insights</title>
    <link>https://thebrightbyte.com/insights</link>
    <description>Latest insights from Bright Byte</description>
    <language>en-us</language>
    ${allInsights
      .map(
        (insight) => `
        <item>
        <title>${insight.title}</title>
        <link>https://thebrightbyte.com/blog/${insight.slug}</link>
        <description>${insight.description}</description>
        ${insight.date ? `<pubDate>${new Date(insight.date).toUTCString()}</pubDate>` : ''}
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
