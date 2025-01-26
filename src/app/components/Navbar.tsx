import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-purple-600 dark:text-purple-400 font-bold text-xl">
              AeroBrowser
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/download"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

