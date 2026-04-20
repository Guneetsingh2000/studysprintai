import { NextResponse } from 'next/server';
import { sendAssignmentReminderEmail } from '@/app/utils/email/sendAssignmentReminderEmail';

export async function GET() {
  try {
    await sendAssignmentReminderEmail(
      "cilium.prosaic7u@icloud.com",
      "Guneet",
      "Math Assignment",
      "April 25"
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Test email API route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
