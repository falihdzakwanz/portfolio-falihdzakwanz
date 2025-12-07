import { SITE_CONFIG } from "./constants";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  locale: "id" | "en";
}

export function generateEmailTemplate({
  name,
  email,
  message,
  locale,
}: EmailTemplateProps): string {
  const subject =
    locale === "id"
      ? `Pesan Baru dari Portfolio - ${name}`
      : `New Contact from Portfolio - ${name}`;

  const greeting = locale === "id" ? "Pesan Baru" : "New Message";
  const fromLabel = locale === "id" ? "Dari" : "From";
  const emailLabel = locale === "id" ? "Email" : "Email";
  const messageLabel = locale === "id" ? "Pesan" : "Message";
  const footer =
    locale === "id"
      ? "Email ini dikirim dari formulir kontak website portfolio Anda."
      : "This email was sent from your portfolio website contact form.";

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px 8px 0 0;">
                    <div style="font-size: 32px; font-weight: bold; color: #ffffff; margin-bottom: 8px;">
                      FDZ
                    </div>
                    <div style="font-size: 18px; color: rgba(255,255,255,0.9);">
                      ${greeting}
                    </div>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding-bottom: 24px;">
                          <h2 style="margin: 0 0 20px; font-size: 24px; color: #333333;">
                            ${subject}
                          </h2>
                        </td>
                      </tr>
                      
                      <!-- Sender Info -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                            <tr>
                              <td style="padding-bottom: 12px;">
                                <strong style="color: #666666; font-size: 14px;">${fromLabel}:</strong>
                                <div style="color: #333333; font-size: 16px; margin-top: 4px;">${name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong style="color: #666666; font-size: 14px;">${emailLabel}:</strong>
                                <div style="color: #333333; font-size: 16px; margin-top: 4px;">
                                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Message -->
                      <tr>
                        <td>
                          <strong style="color: #666666; font-size: 14px; display: block; margin-bottom: 12px;">${messageLabel}:</strong>
                          <div style="color: #333333; font-size: 16px; line-height: 1.6; white-space: pre-wrap; background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
                            ${message}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 40px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 16px; font-size: 14px; color: #666666;">
                      ${footer}
                    </p>
                    <div style="margin-top: 16px;">
                      <a href="${SITE_CONFIG.url}" style="display: inline-block; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">
                        ${SITE_CONFIG.url}
                      </a>
                    </div>
                    <div style="margin-top: 16px;">
                      <a href="https://github.com/${SITE_CONFIG.github}" style="display: inline-block; margin: 0 8px; color: #666666; text-decoration: none; font-size: 14px;">
                        GitHub
                      </a>
                      <a href="https://linkedin.com/in/${SITE_CONFIG.linkedin}" style="display: inline-block; margin: 0 8px; color: #666666; text-decoration: none; font-size: 14px;">
                        LinkedIn
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export { subject };

function subject(locale: "id" | "en", name: string): string {
  return locale === "id"
    ? `Pesan Baru dari Portfolio - ${name}`
    : `New Contact from Portfolio - ${name}`;
}
