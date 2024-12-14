export const getEmailTemplate = (type, data) => {
  const templates = {
    user_early_access: {
      subject: 'Welcome to Podware - Early Access Request Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #4F46E5; margin-bottom: 20px;">Welcome to Podware! 🎉</h2>
            <p style="color: #374151; line-height: 1.6;">Hi ${data.email},</p>
            <p style="color: #374151; line-height: 1.6;">Thank you for signing up for early access to Podware! We're thrilled to have you join our community of podcast enthusiasts.</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-bottom: 15px;">What's Next?</h3>
              <ul style="color: #374151; line-height: 1.6;">
                <li>We'll review your application</li>
                <li>You'll get priority access when we launch</li>
                <li>Exclusive features and early bird rewards</li>
                <li>Regular updates on our progress</li>
              </ul>
            </div>
            <p style="color: #374151; line-height: 1.6;">Stay tuned for more updates!</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">Best regards,<br>The Podware Team</p>
            </div>
          </div>
        </div>
      `
    },
    podcaster_early_access: {
      subject: 'Welcome to Podware - Creator Early Access',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #4F46E5; margin-bottom: 20px;">Welcome to Podware, Creator! 🎙️</h2>
            <p style="color: #374151; line-height: 1.6;">Hi ${data.email},</p>
            <p style="color: #374151; line-height: 1.6;">We're excited to have you join our community of innovative creators!</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-bottom: 15px;">Creator Benefits</h3>
              <ul style="color: #374151; line-height: 1.6;">
                <li>Early access to creator tools</li>
                <li>Priority onboarding support</li>
                <li>Exclusive monetization features</li>
                <li>Creator community access</li>
              </ul>
            </div>
            <p style="color: #374151; line-height: 1.6;">We'll be in touch soon with next steps!</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">Best regards,<br>The Podware Team</p>
            </div>
          </div>
        </div>
      `
    }
  };

  return templates[type];
};