import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'hello@example.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the contact form on Shawn Legend's website.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send email')
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}

export async function sendConfirmationEmail(data: {
  email: string
  name: string
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: data.email,
      subject: 'Thank you for contacting Shawn Legend',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${data.name},</p>
          
          <p>Thank you for contacting me about your hair styling needs. I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>What's Next?</h3>
            <ul style="line-height: 1.8;">
              <li>I'll review your message and prepare personalized recommendations</li>
              <li>I'll contact you to schedule your consultation or appointment</li>
              <li>We'll discuss your hair goals and create the perfect look for you</li>
            </ul>
          </div>
          
          <div style="background: #2563eb; color: white; padding: 20px; border-radius: 8px; text-align: center;">
            <h3>Need to Reach Me Sooner?</h3>
            <p>Call me directly at (555) 123-4567 for immediate assistance.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              Shawn Legend<br>
              Professional Hair Stylist
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Confirmation email error:', error)
      throw new Error('Failed to send confirmation email')
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error('Confirmation email service error:', error)
    throw error
  }
}