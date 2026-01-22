import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Option 1: Buttondown
    const buttondownKey = process.env.BUTTONDOWN_API_KEY;
    if (buttondownKey) {
      const res = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Token ${buttondownKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok && res.status !== 409) {
        throw new Error('Buttondown API error');
      }

      return NextResponse.json({ success: true });
    }

    // Option 2: Resend (requires a mailing list)
    const resendKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;
    if (resendKey && resendAudienceId) {
      const res = await fetch(
        `https://api.resend.com/audiences/${resendAudienceId}/contacts`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        throw new Error('Resend API error');
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: Log to console (for development)
    console.log('Newsletter subscription (no API configured):', email);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
