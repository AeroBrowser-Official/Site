"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"

interface Release {
  tag_name: string
  html_url: string
  prerelease: boolean
}

export default function DownloadPage() {
  const [releases, setReleases] = useState<{ alpha: Release | null; beta: Release | null; stable: Release | null }>({
    alpha: null,
    beta: null,
    stable: null,
  })

  useEffect(() => {
    async function fetchReleases() {
      try {
        const response = await fetch("https://api.github.com/repos/AeroBrowser-Official/AeroBrowser/releases")
        const data: Release[] = await response.json()

        const latestReleases = {
          alpha: data.find((release) => release.tag_name.includes("alpha")) || null,
          beta: data.find((release) => release.tag_name.includes("beta")) || null,
          stable:
            data.find(
              (release) =>
                !release.tag_name.includes("alpha") && !release.tag_name.includes("beta") && !release.prerelease,
            ) || null,
        }

        setReleases(latestReleases)
      } catch (error) {
        console.error("Error fetching releases:", error)
      }
    }

    fetchReleases()
  }, [])

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8">Download Your macOS App</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <ReleaseCard title="Stable Release" release={releases.stable} />
        <ReleaseCard title="Beta Release" release={releases.beta} />
        <ReleaseCard title="Alpha Release" release={releases.alpha} />
      </div>
    </div>
  )
}

function ReleaseCard({ title, release }: { title: string; release: Release | null }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {release ? (
        <>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Version: {release.tag_name}</p>
          <a
            href={release.html_url}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </a>
        </>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No {title.toLowerCase()} available</p>
      )}
    </div>
  )
}

