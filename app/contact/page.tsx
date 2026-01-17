'use client'

import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { contactFormSchema } from '@/lib/validations'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(value),
        })

        const data = await response.json()

        if (response.ok) {
          setSubmitStatus('success')
          setSubmitMessage(data.message)
          form.reset()
        } else {
          setSubmitStatus('error')
          setSubmitMessage(data.error || 'An error occurred. Please try again.')
        }
      } catch {
        setSubmitStatus('error')
        setSubmitMessage('Network error. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: contactFormSchema,
      onSubmit: contactFormSchema,
    },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready for your hair transformation? Let&apos;s discuss your vision and 
            schedule your appointment. I&apos;m here to answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-emerald-600" />
              <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">
                  Call for immediate assistance or appointment booking
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-emerald-600" />
              <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">hello@shawnshin.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  Email for consultations and general inquiries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">123 Main St</p>
                <p className="text-gray-600">City, State 12345</p>
                <p className="text-sm text-gray-500 mt-1">
                  Convenient downtown location with parking available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 space-y-1">
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <form.Field name="name">
                        {(field) => (
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Name *
                            </label>
                            <Input
                              id="name"
                              name={field.name}
                              type="text"
                              required
                              value={field.state.value}
                              onChange={(e) => field.handleChange(e.target.value)}
                              placeholder="Your full name"
                            />
                            {field.state.meta.errors.length > 0 && (
                              <p className="text-red-500 text-sm mt-1">
                                {field.state.meta.errors[0]}
                              </p>
                            )}
                          </div>
                        )}
                      </form.Field>
                    </div>
                    <div>
                      <form.Field name="email">
                        {(field) => (
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <Input
                              id="email"
                              name={field.name}
                              type="email"
                              required
                              value={field.state.value}
                              onChange={(e) => field.handleChange(e.target.value)}
                              placeholder="your.email@example.com"
                            />
                            {field.state.meta.errors.length > 0 && (
                              <p className="text-red-500 text-sm mt-1">
                                {field.state.meta.errors[0]}
                              </p>
                            )}
                          </div>
                        )}
                      </form.Field>
                    </div>
                  </div>

                  <div>
                    <form.Field name="phone">
                      {(field) => (
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name={field.name}
                            type="tel"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                          {field.state.meta.errors.length > 0 && (
                            <p className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>

                  <div>
                    <form.Field name="message">
                      {(field) => (
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name={field.name}
                            required
                            rows={6}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Tell me about your hair goals, desired services, or ask any questions you might have..."
                          />
                          {field.state.meta.errors.length > 0 && (
                            <p className="text-red-500 text-sm mt-1">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">{submitMessage}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">{submitMessage}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    <strong>Response Time:</strong> I typically respond to messages within 24 hours. 
                    For urgent matters, please call me directly at (555) 123-4567.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}