import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">AeroBrowser</h1>
        <p className="text-xl text-gray-200 mb-8">A powerful and intuitive application for your Mac</p>
        <Link
          href="/download"
          className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Download Now
        </Link>
      </header>
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Feature 1</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of feature 1 and how it benefits the user.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Feature 2</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of feature 2 and how it benefits the user.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Feature 3</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of feature 3 and how it benefits the user.</p>
        </div>
      </section>
    </div>
  )
}

