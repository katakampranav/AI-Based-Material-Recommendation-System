"use client"

import type React from "react"
import { useState } from "react"
import type { MaterialAnalysis } from "../types"

interface MaterialComparisonProps {
  data: MaterialAnalysis[]
}

const MaterialComparison: React.FC<MaterialComparisonProps> = ({ data }) => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)

  const toggleMaterialSelection = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
    } else {
      if (selectedMaterials.length < 3) {
        setSelectedMaterials([...selectedMaterials, material])
      }
    }
  }

  const comparisonData = data.filter((item) => selectedMaterials.includes(item.material))

  const getStatusColor = (value: string) => {
    if (value === "Yes") {
      return "text-green-600 dark:text-green-400"
    } else if (value === "No") {
      return "text-red-600 dark:text-red-400"
    }
    return "text-gray-700 dark:text-gray-300"
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Compare Materials
              </h2>
              <button
                onClick={() => setShowComparison(true)}
                disabled={selectedMaterials.length < 2}
                className={`px-4 py-2 rounded-lg text-white font-medium transition-all ${
                  selectedMaterials.length < 2
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                }`}
              >
                Compare Selected ({selectedMaterials.length}/3)
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Select up to 3 materials to compare their properties side by side.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleMaterialSelection(item.material)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedMaterials.includes(item.material)
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium ${
                        selectedMaterials.includes(item.material)
                          ? "text-teal-700 dark:text-teal-300"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.material}
                    </span>
                    {selectedMaterials.includes(item.material) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {item.strength} strength, {item.durability} durability
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showComparison && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Material Comparison</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                  <div className="font-medium text-gray-400 dark:text-gray-500 mb-6">Property</div>
                  <div className="space-y-4">
                    <div className="py-2 font-medium">Material</div>
                    <div className="py-2">Strength</div>
                    <div className="py-2">Durability</div>
                    <div className="py-2">Eco-Friendly</div>
                    <div className="py-2">Cost Estimate</div>
                    <div className="py-2">Coastal Suitable</div>
                    <div className="py-2">Lead Time</div>
                    <div className="py-2">Within Budget</div>
                  </div>
                </div>

                {comparisonData.map((material, index) => (
                  <div key={index} className="col-span-1">
                    <div className="font-medium text-teal-500 mb-6">Material {index + 1}</div>
                    <div className="space-y-4">
                      <div className="py-2 font-bold text-gray-800 dark:text-white">{material.material}</div>
                      <div className="py-2">{material.strength}</div>
                      <div className="py-2">{material.durability}</div>
                      <div className={`py-2 ${getStatusColor(material.eco_friendly)}`}>{material.eco_friendly}</div>
                      <div className="py-2">{material.cost_estimate}</div>
                      <div className={`py-2 ${getStatusColor(material.suitable_for_coastal_environment)}`}>
                        {material.suitable_for_coastal_environment}
                      </div>
                      <div className="py-2">{material.lead_time}</div>
                      <div className={`py-2 ${getStatusColor(material.within_budget)}`}>{material.within_budget}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Remarks</h4>
                <div className="space-y-4">
                  {comparisonData.map((material, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="font-medium text-gray-800 dark:text-white mb-2">{material.material}</div>
                      <div className="text-gray-600 dark:text-gray-300">{material.remarks}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button
                onClick={() => setShowComparison(false)}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MaterialComparison
