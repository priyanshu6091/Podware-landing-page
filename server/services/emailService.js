import transporter from '../config/email.js';
import { getEmailTemplate } from './emailTemplates.js';
import { EMAIL_TEMPLATES } from '../config/constants.js';
import logger from '../utils/logger.js';

class EmailService {
  async sendEmail(to, templateType, data) {
    try {
      const template = getEmailTemplate(templateType, { email: to, ...data });
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: template.subject,
        html: template.html
      };

      const info = await transporter.sendMail(mailOptions);
      logger.info(`Email sent successfully: ${info.messageId}`);
      return info;
    } catch (error) {
      logger.error(`Email sending failed: ${error.message}`);
      throw error;
    }
  }

  async sendWelcomeEmail(email, type) {
    const templateType = type === 'user' 
      ? EMAIL_TEMPLATES.EARLY_ACCESS.USER 
      : EMAIL_TEMPLATES.EARLY_ACCESS.PODCASTER;
    
    return this.sendEmail(email, templateType, { email });
  }
}

export default new EmailService();