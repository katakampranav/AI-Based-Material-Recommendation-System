"use client"

import type React from "react"
import type { RecommendationResponse, FormData } from "../types"

interface ExportButtonProps {
  data: RecommendationResponse
  formData: FormData
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, formData }) => {
  const exportAsPDF = () => {
    // In a real implementation, you would use a library like jsPDF
    // For this example, we'll just create a formatted text version
    const content = `
MaterialMind AI - Material Recommendation Report
===============================================

Project Requirements:
- Budget: ₹${formData.budget}
- Environment: ${formData.environment}
- Required Strength: ${formData.requiredStrength}
- Durability Priority: ${formData.durability}/10
- Eco-Friendly Preference: ${formData.ecoFriendly}
- Maximum Lead Time: ${formData.leadTime} days

Top Recommended Materials:
${data.top_3_predictions
  .map((material, index) => {
    const details = data.competitor_analysis.find((item) => item.material === material)
    return `
${index + 1}. ${material}
   - Strength: ${details?.strength}
   - Durability: ${details?.durability}
   - Cost: ${details?.cost_estimate}
   - Within Budget: ${details?.within_budget}
   - Eco-Friendly: ${details?.eco_friendly}
   - Coastal Suitable: ${details?.suitable_for_coastal_environment}
   - Lead Time: ${details?.lead_time}
   - Remarks: ${details?.remarks}
`
  })
  .join("")}

Complete Material Analysis:
${data.competitor_analysis
  .map((material, index) => {
    return `
${index + 1}. ${material.material}
   - Strength: ${material.strength}
   - Durability: ${material.durability}
   - Cost: ${material.cost_estimate}
   - Within Budget: ${material.within_budget}
   - Eco-Friendly: ${material.eco_friendly}
   - Coastal Suitable: ${material.suitable_for_coastal_environment}
   - Lead Time: ${material.lead_time}
   - Remarks: ${material.remarks}
`
  })
  .join("")}

Report generated on: ${new Date().toLocaleString()}
`

    // Create a blob and download it
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `material-recommendation-report-${new Date().toISOString().slice(0, 10)}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={exportAsPDF}
      className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Export Report
    </button>
  )
}

export default ExportButton
