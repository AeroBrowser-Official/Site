"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import type { JSX } from "react/jsx-runtime"

interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  html_url: string
  assets: Array<{
    name: string
    browser_download_url: string
    size: number
  }>
  prerelease: boolean
}

interface DownloadOption {
  platform: string
  icon: JSX.Element
  version: string
  size: string
  description: string
  releaseUrl: string
  primary: boolean
  badge: string
  loading: boolean
  available: boolean
}

// Apple Logo SVG Component
const AppleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

export default function DownloadPage() {
  const [downloads, setDownloads] = useState<DownloadOption[]>([
    {
      platform: "Release",
      icon: <AppleLogo className="w-8 h-8" />,
      version: "Loading...",
      size: "Latest",
      description: "Stable release for daily use",
      releaseUrl: "#",
      primary: true,
      badge: "Recommended",
      loading: true,
      available: true,
    },
    {
      platform: "Beta",
      icon: <AppleLogo className="w-8 h-8" />,
      version: "Loading...",
      size: "Latest",
      description: "Preview upcoming features",
      releaseUrl: "#",
      primary: false,
      badge: "Testing",
      loading: true,
      available: true,
    },
    {
      platform: "Alpha",
      icon: <AppleLogo className="w-8 h-8" />,
      version: "Loading...",
      size: "Latest",
      description: "Cutting-edge experimental build",
      releaseUrl: "#",
      primary: false,
      badge: "Experimental",
      loading: true,
      available: true,
    },
  ])

  useEffect(() => {
    fetchReleases()
  }, [])

  const fetchReleases = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/AeroBrowser-Official/AeroBrowser/releases")
      const releases: GitHubRelease[] = await response.json()

      // Find latest stable, beta, and alpha releases
      const stableRelease = releases.find((r) => !r.prerelease && !r.tag_name.includes("-"))
      const betaRelease = releases.find((r) => r.tag_name.includes("-beta"))
      const alphaRelease = releases.find((r) => r.tag_name.includes("-alpha"))

      const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString()
      }

      setDownloads([
        {
          platform: "Release",
          icon: <AppleLogo className="w-8 h-8" />,
          version: stableRelease?.tag_name || "Unavailable",
          size: stableRelease ? formatDate(stableRelease.published_at) : "No release",
          description: "Stable release for daily use",
          releaseUrl: stableRelease?.html_url || "#",
          primary: true,
          badge: "Recommended",
          loading: false,
          available: !!stableRelease,
        },
        {
          platform: "Beta",
          icon: <AppleLogo className="w-8 h-8" />,
          version: betaRelease?.tag_name || "Unavailable",
          size: betaRelease ? formatDate(betaRelease.published_at) : "No beta",
          description: "Preview upcoming features",
          releaseUrl: betaRelease?.html_url || "#",
          primary: false,
          badge: "Testing",
          loading: false,
          available: !!betaRelease,
        },
        {
          platform: "Alpha",
          icon: <AppleLogo className="w-8 h-8" />,
          version: alphaRelease?.tag_name || "Unavailable",
          size: alphaRelease ? formatDate(alphaRelease.published_at) : "No alpha",
          description: "Cutting-edge experimental build",
          releaseUrl: alphaRelease?.html_url || "#",
          primary: false,
          badge: "Experimental",
          loading: false,
          available: !!alphaRelease,
        },
      ])
    } catch (error) {
      console.error("Failed to fetch releases:", error)
      // Update with error state
      setDownloads((prev) =>
        prev.map((download) => ({
          ...download,
          version: "Error loading",
          size: "Error",
          loading: false,
          available: false,
          releaseUrl: "#",
        })),
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <Navigation />

      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Download
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">AeroBrowser</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get started with the fastest, most secure browser for macOS. Choose your preferred release channel below.
            </p>
          </div>

          {/* Download Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {downloads.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  option.primary ? "border-white/30 bg-white/15" : "border-white/20"
                } ${!option.available && !option.loading ? "opacity-60" : ""}`}
              >
                {option.badge && option.available && (
                  <div
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold ${
                      option.primary
                        ? "bg-green-500 text-white"
                        : option.badge === "Testing"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {option.badge}
                  </div>
                )}
                <div className="text-center">
                  <div className="text-blue-200 mb-4 flex justify-center">{option.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{option.platform}</h3>
                  <p className="text-blue-200 mb-1">{option.version}</p>
                  <p className="text-blue-200 mb-2">{option.size}</p>
                  <p className="text-sm text-blue-300 mb-6">{option.description}</p>

                  {option.loading ? (
                    <Button
                      disabled
                      className="w-full rounded-full font-semibold bg-white/20 text-white cursor-not-allowed"
                    >
                      <Loader2 className="w-5 h-5 mr-2 animate-spin text-white" />
                      <span className="text-white">Loading...</span>
                    </Button>
                  ) : !option.available ? (
                    <Button
                      disabled
                      className="w-full rounded-full font-semibold bg-gray-500/50 text-gray-300 cursor-not-allowed"
                    >
                      <X className="w-5 h-5 mr-2 text-gray-300" />
                      <span className="text-gray-300">Unavailable</span>
                    </Button>
                  ) : (
                    <a href={option.releaseUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full rounded-full font-semibold transition-all duration-200 hover:scale-105 ${
                          option.primary
                            ? "bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                            : "bg-blue-500 text-white hover:bg-blue-400 hover:text-white"
                        }`}
                      >
                        <ExternalLink className={`w-5 h-5 mr-2 ${option.primary ? "text-blue-600" : "text-white"}`} />
                        <span className={option.primary ? "text-blue-600" : "text-white"}>View {option.platform}</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Installation Instructions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <AppleLogo className="w-6 h-6 mr-3 text-white" />
              How to Download & Install
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  1
                </span>
                <span className="text-white">Click on your preferred release channel above</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  2
                </span>
                <span className="text-white">Download the .pkg file from the GitHub release page</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  3
                </span>
                <span className="text-white">Double-click the downloaded .pkg file to install</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  4
                </span>
                <span className="text-white">Launch AeroBrowser from Applications folder</span>
              </li>
            </ol>
          </div>

          {/* Cute Cat Section */}
          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-6xl mb-2">🐱</div>
              <p className="text-blue-200 text-sm">Even cats love AeroBrowser!</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
