import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate form data more thoroughly
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify we have required environment variables
    if (!process.env.ORG_EMAIL || !process.env.EMAIL_FROM) {
      throw new Error('Email configuration is incomplete');
    }

    // Email to your organization
    const orgMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.ORG_EMAIL, // Ensure this is set in .env.local
      replyTo: formData.email, // So you can reply directly to the sender
      subject: `New Contact: ${formData.subject.substring(0, 50)}`, // Limit subject length
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to the user
    const userMailOptions = {
      from: `"Aashakiekkiran Team" <${process.env.EMAIL_FROM}>`,
      to: formData.email, // Using the email from the form
      subject: `We've received your message`,
      html: `
        <p>Dear ${formData.name},</p>
        <p>Thank you for contacting us. We've received your message and will respond soon.</p>
        <p><strong>Your message:</strong></p>
        <blockquote>${formData.message.replace(/\n/g, '<br>')}</blockquote>
      `,
    };

    // Verify we have recipients before sending
    if (!orgMailOptions.to || !userMailOptions.to) {
      throw new Error('Missing recipient email addresses');
    }

    // Send both emails
    await transporter.sendMail(orgMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Detailed email error:', {
      message: error.message,
      stack: error.stack,
      response: error.response
    });

    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Failed to send message',
        errorDetails: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}