import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Gallery() {
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
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my favorite hair transformations and styles. 
            Each look is tailored to enhance the client&apos;s unique features and personality.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            All
          </Button>
          <Button variant="outline">
            Cuts
          </Button>
          <Button variant="outline">
            Colors
          </Button>
          <Button variant="outline">
            Styles
          </Button>
          <Button variant="outline">
            Bridal
          </Button>
          <Button variant="outline">
            Other
          </Button>
        </div>

        {/* Gallery Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Example Work {index + 1}</p>
                  <p className="text-sm text-gray-500">Coming soon...</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Beautiful Transformation</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Custom haircut and color that brings out the best features.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    Cut & Color
                  </span>
                  <Button size="sm" variant="ghost">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Inspired by What You See?
            </h2>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create a look that&apos;s perfect for you. 
              Book a consultation today!
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">Schedule Your Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}