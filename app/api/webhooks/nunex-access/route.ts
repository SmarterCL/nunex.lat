import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, rut, company, purpose } = body;

    // Validate required fields
    if (!name || !email || !rut) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and rut are mandatory.' },
        { status: 400 }
      );
    }

    // NUNEX n8n Webhook URL (Environment Variable)
    // The n8n workflow will handle the Boostr API validation for the RUT/DNI
    const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.smarterbot.cl/webhook/nunex-access';

    // Send payload to n8n
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Optional: Add a secret token to authenticate requests to n8n
        'Authorization': `Bearer ${process.env.N8N_WEBHOOK_SECRET || 'secret'}`,
      },
      body: JSON.stringify({
        source: 'nunex.lat',
        action: 'request_access',
        timestamp: new Date().toISOString(),
        userData: {
          name,
          email,
          rut,
          company,
          purpose,
        },
      }),
    });

    if (!n8nResponse.ok) {
      console.error('Failed to trigger n8n workflow:', n8nResponse.statusText);
      // We still return success to the user so we don't leak internal workflow errors
      return NextResponse.json({ success: true, message: 'Request received but processing delayed.' });
    }

    return NextResponse.json({
      success: true,
      message: 'Access request submitted successfully. Validation in progress.',
    });
  } catch (error) {
    console.error('Error processing access request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
