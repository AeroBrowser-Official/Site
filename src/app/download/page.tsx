export default function Download() {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">Download Your macOS App</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Thank you for your interest in Your macOS App. Click the button below to start your download.
          </p>
          <a
            href="#" // Replace with actual download link
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors inline-block"
          >
            Download for macOS
          </a>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            System Requirements: macOS 10.15 or later, 4GB RAM, 500MB free disk space
          </p>
        </div>
      </div>
    )
  }
  
  