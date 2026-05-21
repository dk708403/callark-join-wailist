import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, businessName, email, phone, businessType } = body;

    // Validate inputs
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification to team
    const teamResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['anshkumar590423@gmail.com'],
      subject: `New Waitlist Signup: ${businessName || fullName}`,
      html: `
        <h2>New Waitlist Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Industry:</strong> ${businessType || 'N/A'}</p>
      `
    });

    if (teamResponse.error) {
      console.error('Error sending team email:', teamResponse.error);
      return NextResponse.json({ error: teamResponse.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: teamResponse.data });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
