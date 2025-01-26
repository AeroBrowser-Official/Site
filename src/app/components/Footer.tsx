export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} AeroBrowser Official (Kilian Balaguer). All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  