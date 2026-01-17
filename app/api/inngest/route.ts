import { serve } from 'inngest/next'
import { inngest } from '@/lib/inngest'
import { contactEmailWorkflow, failedEmailRetryWorkflow } from '@/inngest/functions'

export const { GET, POST, PUT } = serve({
  client: inngest.client,
  functions: [contactEmailWorkflow, failedEmailRetryWorkflow],
})