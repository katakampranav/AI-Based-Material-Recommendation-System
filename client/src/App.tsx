"use client"

import { useState } from "react"
import type { FormData, RecommendationResponse } from "./types"
import { getMaterialRecommendations } from "./services/api"
import { ThemeProvider } from "./context/ThemeContext"
import Header from "./components/Header"
import InputForm from "./components/InputForm"
import TopPredictions from "./components/TopPredictions"
import CompetitorAnalysis from "./components/CompetitorAnalysis"
import LoadingAnimation from "./components/LoadingAnimation"
import MaterialComparison from "./components/MaterialComparison"
import ResultsHeader from "./components/ResultsHeader"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<RecommendationResponse | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [submittedFormData, setSubmittedFormData] = useState<FormData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)
    setSubmittedFormData(data)

    try {
      const response = await getMaterialRecommendations(data)
      setResults(response)
      setShowResults(true)

      // Smooth scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById("results-section")
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } catch (err) {
      console.error("Error fetching recommendations:", err)
      setError("Failed to fetch recommendations. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
          <Header />

          <div className="mb-12">
            <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1">
                <div className="bg-white dark:bg-gray-800">
                  <LoadingAnimation />
                </div>
              </div>
            </div>
          )}

          {!isLoading && showResults && results && submittedFormData && (
            <div id="results-section" className="space-y-8 animate-fadeIn">
              <ResultsHeader results={results} formData={submittedFormData} />

              <TopPredictions predictions={results.top_3_predictions} analysisData={results.competitor_analysis} />

              <MaterialComparison data={results.competitor_analysis} />

              <CompetitorAnalysis data={results.competitor_analysis} />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App