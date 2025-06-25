"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MessageCircle, Book, Mail, Phone, Search, HelpCircle, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function SupportPage() {
  const supportOptions = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive guides and tutorials to help you get the most out of AeroBrowser.",
      action: "Browse Docs",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Community Forum",
      description: "Connect with other users, share tips, and get help from the community.",
      action: "Join Forum",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get personalized help from our support team via email.",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for immediate assistance.",
      action: "Start Chat",
    },
  ]

  const faqs = [
    {
      question: "How do I import bookmarks from another browser?",
      answer:
        "Go to Settings > Import Data and select your previous browser. AeroBrowser will automatically import your bookmarks, history, and saved passwords.",
    },
    {
      question: "Is AeroBrowser free to use?",
      answer:
        "Yes, AeroBrowser is completely free to download and use. We don't charge for any core features and never will.",
    },
    {
      question: "How does AeroBrowser protect my privacy?",
      answer:
        "AeroBrowser includes built-in ad blocking, tracking protection, and secure DNS. We don't collect or sell your personal data.",
    },
    {
      question: "Can I sync my data across devices?",
      answer: "Yes, you can sync bookmarks, history, and settings across all your devices with end-to-end encryption.",
    },
    {
      question: "What platforms does AeroBrowser support?",
      answer: "AeroBrowser is available for macOS, Windows, and Linux. Mobile versions are coming soon.",
    },
    {
      question: "How do I report a bug or request a feature?",
      answer:
        "You can report bugs or request features through our GitHub repository or by contacting our support team directly.",
    },
  ]

  const quickLinks = [
    { icon: <Download className="w-5 h-5" />, title: "Download Latest Version", href: "/download" },
    { icon: <Settings className="w-5 h-5" />, title: "Browser Settings Guide", href: "#" },
    { icon: <HelpCircle className="w-5 h-5" />, title: "Troubleshooting", href: "#" },
    { icon: <Book className="w-5 h-5" />, title: "User Manual", href: "#" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <Navigation />

      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Support &
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Help Center</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get the help you need to make the most of AeroBrowser. We're here to support you every step of the way.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and more..."
                className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder-blue-300 rounded-full text-lg"
              />
            </div>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-blue-200 mb-4 flex justify-center">{option.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{option.title}</h3>
                <p className="text-blue-100 mb-4 text-sm">{option.description}</p>
                <Button className="border-white/30 hover:bg-white rounded-full bg-transparent border text-white hover:text-blue-600">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="text-blue-200">{link.icon}</div>
                  <span className="text-blue-100 hover:text-white">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16" id="faq">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
                >
                  <details className="group">
                    <summary className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        <HelpCircle className="w-5 h-5 text-blue-300 group-open:rotate-180 transition-transform duration-200" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-blue-100">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" id="contact">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Still Need Help?</h2>
            <p className="text-blue-100 text-center mb-8">
              Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
            </p>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-white/10 border-white/20 text-white placeholder-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder-blue-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                <Input
                  placeholder="How can we help?"
                  className="bg-white/10 border-white/20 text-white placeholder-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <Textarea
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-300 resize-none"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white hover:bg-blue-50 rounded-full px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
                >
                  <span className="text-blue-600">Send Message</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
