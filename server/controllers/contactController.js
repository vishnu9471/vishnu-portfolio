const Contact = require("../models/contact");
const { sendContactNotification } = require("../utils/mailer");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function createContact(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    // Validate email
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    // Save message to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    // Send notification email
    try {
      await sendContactNotification(contact);
    } catch (mailError) {
      console.error(
        "Email notification failed:",
        mailError.message
      );
    }

    // Contact was successfully saved even if email fails
    return res.status(201).json({
      success: true,
      message: "Thanks! Your message has been received.",
      id: contact._id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send your message.",
    });
  }
}

module.exports = {
  createContact,
};
