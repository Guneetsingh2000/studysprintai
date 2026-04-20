import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendAssignmentReminderEmail = async (
  email: string,
  firstName: string,
  assignmentTitle: string,
  dueDate: string
) => {
  try {
    const result = await resend.emails.send({
      from: 'StudySprint AI <onboarding@resend.dev>',
      to: 'guneetsingh792@gmail.com',
      subject: 'Assignment Reminder',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background-color: #4F46E5; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">StudySprint AI</h1>
          </div>
          <div style="padding: 30px;">
            <p>Hi ${firstName},</p>
            <p>Just a quick and friendly reminder that you have an assignment due soon in StudySprint AI!</p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Assignment Title:</strong> ${assignmentTitle}</p>
              <p style="margin: 0;"><strong>Due Date:</strong> ${dueDate}</p>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <a href="http://localhost:3000/dashboard/assignments" style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">View Assignment</a>
            </div>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Assignment reminder email send error:', result.error);
      throw result.error;
    }

    console.log('Assignment reminder email sent:', result);
    return result;
  } catch (error) {
    console.error('Assignment reminder email failed:', error);
    throw error;
  }
};
