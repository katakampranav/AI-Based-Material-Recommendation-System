import type React from "react"
import type { FormData, RecommendationResponse } from "../types"
import ExportButton from "./ExportButton"

interface ResultsHeaderProps {
  results: RecommendationResponse
  formData: FormData
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ results, formData }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-3 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              AI Recommendation Results
            </h2>
            <ExportButton data={results} formData={formData} />
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Budget</div>
              <div className="mt-1 text-lg font-semibold text-gray-800 dark:text-white">₹{formData.budget}</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Environment</div>
              <div className="mt-1 text-lg font-semibold text-gray-800 dark:text-white">{formData.environment}</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Required Strength</div>
              <div className="mt-1 text-lg font-semibold text-gray-800 dark:text-white">
                {formData.requiredStrength}
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Based on your inputs, our AI system has analyzed various materials and provided the following
            recommendations. The materials are ranked based on their suitability for your specific requirements
            including budget constraints, environmental factors, strength requirements, and desired durability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResultsHeader
