import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await req.json();

  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['access@thebrightbyte.com'],
      subject: 'New Request',
      html:
        '<h1>Name: ' +
        response.name +
        '</h1>' +
        '<span>From: ' +
        response.email +
        '</span>' +
        '<span>Phone: ' +
        response.phone +
        '</span>' +
        response.description
          ? '<p>' + response.description + '</p>'
          : '',

      ...(response.cv ? { attachments: [response.cv] } : {}),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
