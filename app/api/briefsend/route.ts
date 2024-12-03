import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await req.json();

  try {
    const { data } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ['access@thebrightbyte.com'],
      subject: `Client brief from ${response.company_name}`,
      html:
        '<h1>Name: ' +
        response.name +
        '</h1>' +
        '<p>From: ' +
        response.company_name +
        '</p>' +
        '<p>Email: ' +
        response.email +
        '</p>' +
        '<p>About business: ' +
        response.about_business +
        '</p>' +
        '<p>Breafly: ' +
        response.idea +
        '</p>' +
        '<p>Objective: ' +
        response.objective +
        '</p>' +
        '<p>Obstacles: ' +
        response.obstacle +
        '</p>' +
        '<p>Budget: ' +
        response.budget +
        '</p>',
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}
