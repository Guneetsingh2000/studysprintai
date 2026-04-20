import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendAssignmentReminder = async (
  email: string,
  firstName: string,
  assignmentTitle: string,
  dueDate: string,
  assignmentUrl: string
) => {
  try {
    const result = await resend.emails.send({
      from: 'StudySprint AI <onboarding@resend.dev>', // Update to your validated domain in production
      to: email, // If testing, you may want to hardcode your email here like in the welcome email
      subject: `Reminder: ${assignmentTitle} is due soon! ⏰`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 0; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background-color: #4F46E5; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">StudySprint AI</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #111827; font-size: 20px; margin-top: 0;">Hi ${firstName},</h2>
            <p style="margin-top: 15px; font-size: 16px; line-height: 1.6;">
              This is a quick reminder that your assignment <strong>${assignmentTitle}</strong> is due on <strong>${dueDate}</strong>.
            </p>
            <p style="margin-top: 15px; font-size: 16px; line-height: 1.6;">
              Please make sure to complete your work on time. You can view the full assignment details and get started by clicking the button below.
            </p>
            <div style="text-align: center; margin-top: 35px; margin-bottom: 10px;">
              <a href="${assignmentUrl}" style="background-color: #4F46E5; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block;">View Assignment</a>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              &copy; ${new Date().getFullYear()} StudySprint AI. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('ASSIGNMENT REMINDER SEND ERROR:', result.error);
      throw result.error;
    }

    console.log('ASSIGNMENT REMINDER SENT RESULT:', result);
    return result;
  } catch (error) {
    console.error('ASSIGNMENT REMINDER SEND ERROR:', error);
    throw error;
  }
};
