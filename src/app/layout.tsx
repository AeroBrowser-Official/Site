import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AeroBrowser",
  description: "A modern and powerful macOS Web Browser",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ThemeToggle />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  (function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDarkMode);
  })()
`,
          }}
        />
      </body>
    </html>
  )
}

