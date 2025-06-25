"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Globe, Heart, Code } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "50+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "User Rating" },
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Google Chrome engineer with 10+ years in browser development.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Award-winning UX designer focused on creating intuitive user experiences.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in performance optimization and security.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Emily Zhang",
      role: "Product Manager",
      bio: "Product strategist with expertise in user research and feature development.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Every decision we make is guided by what's best for our users and their browsing experience.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance First",
      description: "We obsess over speed, efficiency, and reliability to deliver the fastest browsing experience.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Privacy Focused",
      description: "Your privacy is fundamental. We build with privacy by design, not as an afterthought.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Innovation",
      description: "We believe in transparency and contribute to open-source projects that benefit everyone.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <Navigation />

      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">AeroBrowser</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to reimagine web browsing for the modern internet, creating tools that are fast,
              secure, and beautiful.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
            <div className="text-center mb-8">
              <Globe className="w-16 h-16 text-blue-200 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed text-center max-w-4xl mx-auto">
              We believe the web should be fast, private, and accessible to everyone. AeroBrowser was born from the
              frustration with slow, bloated browsers that compromise on privacy and user experience. Our team of
              passionate developers and designers work tirelessly to create a browser that puts users first, delivering
              unmatched performance while maintaining the highest standards of privacy and security.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-blue-200 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-200 mb-3">{member.role}</p>
                  <p className="text-sm text-blue-100">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
