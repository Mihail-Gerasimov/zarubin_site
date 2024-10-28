import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { NextResponse } from 'next/server';
import RSS from 'rss';

const allExpertise = getExpertiseMetadata('src/expertise');

export async function GET() {
  const feed = new RSS({
    title: 'Bright Byte Expertise',
    description: 'Latest insights from Bright Byte',
    site_url: 'https://thebrightbyte.com',
    feed_url: `https://thebrightbyte.com/expertise/feed.xml`,
    copyright: `${new Date().getFullYear()} Bright Byte Expertise`,
    language: 'en-us',
    pubDate: new Date(),
  });

  allExpertise.forEach((expertise) => {
    feed.item({
      title: expertise.title,
      description: expertise.description,
      guid: `https://thebrightbyte.com/expertise/${expertise.slug}`,
      url: `https://thebrightbyte.com/expertise/${expertise.slug}`,
      date: expertise.date ? expertise.date : null,
    });
  });

  return new NextResponse(feed.xml(), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
