import { NextResponse } from 'next/server';
// Ensure to add @clerk/nextjs to package.json if not already present
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, nfcUid } = body;

    // Validate request
    if (!userId || !nfcUid) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and nfcUid are mandatory.' },
        { status: 400 }
      );
    }

    // In a production scenario, you would enforce admin authentication here:
    // const { orgRole } = auth();
    // if (orgRole !== 'admin') return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });

    console.log(`Enrolling NFC UID ${nfcUid} for Clerk User ${userId}...`);

    // 1. Update the Clerk user's private metadata to securely store the NFC UID
    // Using privateMetadata ensures this field cannot be modified by the user
    // from the client side, maintaining security of the cryptographic link.
    const userToUpdate = await (await clerkClient()).users.updateUser(userId, {
      privateMetadata: {
        trusted_nfc_uid: nfcUid,
        enrollment_date: new Date().toISOString(),
      },
    });

    console.log(`Success! User ${userToUpdate.id} linked to NFC.`);

    // 2. Alternatively, in a more complex setup you can store this relationship
    // inside a secure table in Supabase right here, before returning.
    // e.g. await supabase.from('smarter_persona').upsert({ user_id: userId, nfc_uid: nfcUid });

    return NextResponse.json({
      success: true,
      message: 'NFC UID successfully linked to the user.',
    });
  } catch (error) {
    console.error('Error enrolling NFC uid:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
