import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image src="/aerobrowser-logo.png" alt="AeroBrowser Logo" width={32} height={32} className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold text-white">AeroBrowser</span>
            </div>
            <p className="text-blue-200">The modern browser built for speed, privacy, and beautiful design.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <div className="space-y-2 text-blue-200">
              <Link href="/features" className="block hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/download" className="block hover:text-white transition-colors">
                Download
              </Link>
              <Link href="/about" className="block hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <div className="space-y-2 text-blue-200">
              <Link href="/support" className="block hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/support#contact" className="block hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/support#faq" className="block hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <div className="space-y-2 text-blue-200">
              <Link href="/privacy" className="block hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center space-y-3">
          <p className="text-blue-200">&copy; 2025 AeroBrowser. All rights reserved.</p>
          <p className="text-blue-300 text-sm">
            Apple, iPhone, iPad, Mac, macOS, and the Apple logo are trademarks of Apple Inc., registered in the U.S. and
            other countries.
          </p>
        </div>
      </div>
    </footer>
  )
}
