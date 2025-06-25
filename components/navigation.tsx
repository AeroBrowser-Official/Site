"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/download", label: "Download" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
  ]

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image src="/aerobrowser-logo.png" alt="AeroBrowser Logo" width={32} height={32} className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-white">AeroBrowser</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-blue-200 transition-colors duration-200 ${
                  pathname === item.href ? "text-blue-200" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/download">
            <Button className="hidden sm:flex bg-white hover:bg-blue-50 rounded-full px-6 py-2 font-semibold transition-all duration-200 hover:scale-105">
              <span className="text-blue-600">Download Now</span>
            </Button>
          </Link>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-800/95 backdrop-blur-sm border-t border-white/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/download" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-white hover:bg-blue-50 rounded-full font-semibold">
                <span className="text-blue-600">Download Now</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
