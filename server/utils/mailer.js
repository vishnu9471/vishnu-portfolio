const nodemailer = require("nodemailer");

async function sendContactNotification(contact) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_RECEIVER,
  } = process.env;

  // If email configuration is not available,
  // skip email notification without breaking the contact form.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER) {
    console.warn(
      "SMTP configuration is incomplete. Contact email notification skipped."
    );
    return;
  }

  const port = Number(SMTP_PORT) || 587;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: SMTP_USER,
    to: CONTACT_RECEIVER,
    replyTo: contact.email,
    subject: `Portfolio contact: ${contact.subject}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Subject: ${contact.subject}`,
      "",
      contact.message,
    ].join("\n"),
  });

  console.log("Contact notification email sent successfully.");
}

module.exports = {
  sendContactNotification,
};