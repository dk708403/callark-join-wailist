import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (Warning: resets on serverless cold starts)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(request: Request) {
  try {
    // 1. Basic Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;

    const requestData = rateLimit.get(ip);
    
    if (requestData && requestData.timestamp > windowStart) {
      if (requestData.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      rateLimit.set(ip, { count: requestData.count + 1, timestamp: requestData.timestamp });
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    // 2. Parse payload
    const body = await request.json();
    const { fullName, email, company, interestType, message } = body;

    // 3. Strict Validation
    if (!fullName || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (message.length > 5000) {
        return NextResponse.json(
            { error: 'Message is too long' },
            { status: 400 }
          );
    }

    // 4. Determine recipient email from environment variable
    const founderEmail = process.env.FOUNDER_EMAIL;
    if (!founderEmail) {
      throw new Error('FOUNDER_EMAIL environment variable is not set');
    }

    // 5. Send Email via Resend
    const teamResponse = await resend.emails.send({
      from: 'CallArk <onboarding@resend.dev>',
      to: [founderEmail],
      subject: `New CALLARK Inquiry — ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            New CALLARK Inquiry
          </h2>
          
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Interest Type</td>
              <td style="padding: 8px 0;">
                <span style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-size: 14px;">
                  ${interestType || 'Not specified'}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Timestamp</td>
              <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h4 style="margin-top: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h4>
            <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">${message}</p>
          </div>
        </div>
      `
    });

    if (teamResponse.error) {
      console.error('Error sending team email:', teamResponse.error);
      return NextResponse.json({ error: teamResponse.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: teamResponse.data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
