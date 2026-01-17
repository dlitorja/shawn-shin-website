import { inngest } from '@/lib/inngest'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'
import { db } from '@/lib/db'
import { contactMessages } from '@/lib/schema'

export const contactEmailWorkflow = inngest.createFunction(
  { id: 'contact-email-workflow' },
  { event: 'contact/form.submitted' },
  async ({ event, step }) => {
    const { name, email, phone, message, messageId } = event.data

    // Send notification email to Shawn
    await step.run('send-notification-email', async () => {
      await sendContactEmail({
        name,
        email,
        phone,
        message,
      })
      return { success: true, type: 'notification' }
    })

    // Send confirmation email to customer
    await step.run('send-confirmation-email', async () => {
      await sendConfirmationEmail({
        email,
        name,
      })
      return { success: true, type: 'confirmation' }
    })

    // Update database record
    await step.run('update-database', async () => {
      await db
        .update(contactMessages)
        .set({ 
          status: 'sent',
          updatedAt: new Date()
        })
        .where(contactMessages.id.eq(messageId))
      return { success: true, updated: messageId }
    })

    return { success: true, messageId }
  }
)

export const failedEmailRetryWorkflow = inngest.createFunction(
  { 
    id: 'failed-email-retry-workflow',
    retries: 3,
  },
  { event: 'contact/email.failed' },
  async ({ event, step }) => {
    const { messageId, failureType } = event.data

    // Retry sending email based on failure type
    await step.run('retry-email-send', async () => {
      // Get message details from database
      const messageRecord = await db
        .select()
        .from(contactMessages)
        .where(contactMessages.id.eq(messageId))
        .limit(1)

      if (messageRecord.length === 0) {
        throw new Error('Message not found')
      }

      const message = messageRecord[0]

      if (failureType === 'notification') {
        await sendContactEmail({
          name: message.name,
          email: message.email,
          phone: message.phone || undefined,
          message: message.message,
        })
      } else if (failureType === 'confirmation') {
        await sendConfirmationEmail({
          email: message.email,
          name: message.name,
        })
      }

      return { success: true, messageId }
    })

    return { success: true, messageId, retried: true }
  }
)