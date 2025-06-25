"use client"

import { useState, useEffect } from "react"
import { Download, Star, Zap, Shield, Palette, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              The Browser
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">You've Been</span>
              <br />
              Waiting For
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the web like never before with AeroBrowser - lightning-fast, beautifully designed, and built
              for the modern internet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/download">
                <Button
                  size="lg"
                  className="bg-white hover:bg-blue-50 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-blue-600">Download for Mac</span>
                </Button>
              </Link>
            </div>

            {/* Browser Mockup */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-30 scale-105"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                  <Image
                    src="/browser-mockup.png"
                    alt="AeroBrowser Interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Built for Speed & Beauty</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every feature is crafted with performance and user experience in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Optimized engine delivers pages 3x faster than traditional browsers",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Privacy First",
                description: "Built-in ad blocking and tracking protection keeps your data safe",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Beautiful Design",
                description: "Clean, modern interface that gets out of your way",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-200 mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button
                size="lg"
                className="border-white hover:bg-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent border"
              >
                <span className="text-white hover:text-blue-600">View All Features</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Browse Better?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of users who've already made the switch</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/download">
              <Button
                size="lg"
                className="bg-white hover:bg-blue-50 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-blue-600">Download Now</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-1 text-blue-200">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2">Rated 4.9/5 by users</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
