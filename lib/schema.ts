import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const portfolioItems = sqliteTable('portfolio_items', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  type: text('type', { enum: ['image', 'video'] }).notNull(),
  mediaUrl: text('media_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  category: text('category', { enum: ['cut', 'color', 'style', 'bridal', 'other'] }).notNull(),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  sortOrder: integer('sort_order').default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date()),
})

export const contactMessages = sqliteTable('contact_messages', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  status: text('status', { enum: ['pending', 'sent', 'failed'] }).default('pending'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})

export type PortfolioItem = typeof portfolioItems.$inferSelect
export type NewPortfolioItem = typeof portfolioItems.$inferInsert
export type ContactMessage = typeof contactMessages.$inferSelect
export type NewContactMessage = typeof contactMessages.$inferInsert