import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters long').max(2000, 'Message must be less than 2000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const portfolioItemSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().optional(),
  type: z.enum(['image', 'video']),
  mediaUrl: z.string().url('Please enter a valid URL'),
  thumbnailUrl: z.string().url('Please enter a valid thumbnail URL').optional(),
  category: z.enum(['cut', 'color', 'style', 'bridal', 'other']),
  featured: z.boolean().default(false),
  sortOrder: z.number().default(0),
})

export type PortfolioItemData = z.infer<typeof portfolioItemSchema>