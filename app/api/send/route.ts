import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend('re_YpNocvcj_BpnDukwaiTK9D4HabQe4H55m');
  const response = await req.json();
  console.log(response);
  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
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
