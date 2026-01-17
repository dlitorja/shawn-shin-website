import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Scissors, Star, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              <span className="block">Expert Hair Stylist</span>
              <span className="block text-purple-600">Shawn Shin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Over 20 years of experience in cutting, styling, coloring, and transforming hair into works of art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/gallery">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Crafting Beauty With Passion
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over two decades of dedicated experience, I&apos;ve perfected the art of hair styling. 
                From classic cuts to contemporary colors, my approach combines technical expertise with 
                artistic vision to create looks that not only enhance your natural beauty but also 
                reflect your unique personality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I stay current with the latest trends and techniques while maintaining a foundation 
                in timeless principles of hair design. Every client deserves a personalized experience 
                that leaves them feeling confident and beautiful.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Your Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <Scissors className="w-32 h-32 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600">Comprehensive hair care tailored to you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Scissors className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hair Cutting</h3>
                <p className="text-gray-600">Precision cuts for all hair types and styles</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hair Coloring</h3>
                <p className="text-gray-600">Expert color application and correction</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Styling</h3>
                <p className="text-gray-600">Professional styling for special occasions</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-gray-600">Personalized hair care consultations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Let&apos;s work together to create the perfect look that reflects your style and personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/gallery">View Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}