import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await req.json();

  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['access@thebrightbyte.com'],
      subject: 'Client brief',
      html:
        '<h1>Name: ' +
        response.name +
        '</h1>' +
        '<span>From: ' +
        response.company_name +
        '</span>' +
        '<span>Email: ' +
        response.email +
        '</span>' +
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
        response.obstacles +
        '</p>' +
        '<p>Budget: ' +
        response.budget +
        '</p>',
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
