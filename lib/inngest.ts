import { Inngest } from 'inngest'

export const inngest = new Inngest({ 
  id: 'shawn-shin-website',
  apiKey: process.env.INNGEST_EVENT_KEY,
})