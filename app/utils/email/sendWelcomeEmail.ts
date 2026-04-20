import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendWelcomeEmail = async (email: string, firstName: string) => {
  try {
    const result = await resend.emails.send({
      from: 'StudySprint AI <onboarding@resend.dev>',
      to: 'guneetsingh792@gmail.com',
      subject: 'Welcome to StudySprint AI 🎓',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Welcome to StudySprint AI, ${firstName}!</h2>
          <p>We're thrilled to have you on board. StudySprint AI is designed to help you organize, track, and crush your academic goals with the power of artificial intelligence.</p>
          <p style="margin-top: 20px;">
            <a href="http://localhost:3000/dashboard" style="background-color: #4F46E5; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Go to Dashboard</a>
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error('EMAIL SEND ERROR:', result.error);
      throw result.error;
    }

    console.log('EMAIL SENT RESULT:', result);
    return result;
  } catch (error) {
    console.error('EMAIL SEND ERROR:', error);
    throw error;
  }
};