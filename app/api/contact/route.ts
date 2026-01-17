import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { contactFormSchema } from '@/lib/validations'
import { db } from '@/lib/db'
import { contactMessages } from '@/lib/schema'

export async function POST(request: NextRequest) {
  try {
    // Get client IP for security
    const headersList = headers()
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Store contact message in database
    await db.insert(contactMessages).values({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      message: validatedData.message,
      ipAddress: ip,
      userAgent: userAgent,
      status: 'pending',
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! I will get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.message.includes('Validation')) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}