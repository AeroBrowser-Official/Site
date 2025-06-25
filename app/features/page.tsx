"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, Shield, Palette, Globe, Cpu, Eye, Lock, Smartphone, Cloud, Settings } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast Performance",
      description:
        "Our optimized rendering engine delivers pages up to 3x faster than traditional browsers, with instant page loads and smooth scrolling.",
      details: ["Advanced caching system", "Optimized JavaScript engine", "Preloading technology", "Memory efficient"],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Privacy & Security First",
      description:
        "Built-in ad blocking, tracking protection, and advanced security features keep your browsing private and secure.",
      details: ["Built-in ad blocker", "Tracking protection", "Secure DNS", "Encrypted connections"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Beautiful Design",
      description:
        "Clean, modern interface with customizable themes and layouts that adapt to your workflow and preferences.",
      details: ["Multiple themes", "Customizable interface", "Dark/light modes", "Responsive design"],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Universal Compatibility",
      description:
        "Works seamlessly with all modern web standards and technologies, ensuring every website loads perfectly.",
      details: ["HTML5 support", "CSS3 compatibility", "WebGL acceleration", "Progressive web apps"],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Resource Efficient",
      description:
        "Optimized memory usage and CPU efficiency means longer battery life and better performance on any device.",
      details: ["Low memory footprint", "CPU optimization", "Battery saving mode", "Background tab management"],
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Enhanced Readability",
      description:
        "Built-in reader mode, font customization, and accessibility features make content easier to read and navigate.",
      details: ["Reader mode", "Font scaling", "Color adjustments", "Screen reader support"],
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Advanced Security",
      description: "Multi-layered security protection with sandboxing, safe browsing, and automatic security updates.",
      details: ["Process sandboxing", "Safe browsing warnings", "Automatic updates", "Certificate validation"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Cross-Platform Sync",
      description:
        "Seamlessly sync bookmarks, history, and settings across all your devices with end-to-end encryption.",
      details: ["Bookmark sync", "History sync", "Settings sync", "End-to-end encryption"],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Integration",
      description: "Built-in integration with popular cloud services and productivity tools for seamless workflow.",
      details: ["Cloud storage access", "Productivity integrations", "File sharing", "Collaborative features"],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Advanced Customization",
      description: "Extensive customization options let you tailor the browser to your exact needs and preferences.",
      details: ["Custom shortcuts", "Extension support", "Interface customization", "Advanced settings"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <Navigation />

      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Powerful Features for
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Modern Browsing
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover all the features that make AeroBrowser the perfect choice for your daily browsing needs
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-200 mb-6 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-blue-200 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                      <span className="text-white">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
