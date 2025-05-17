import type React from "react"

interface TopPredictionsProps {
  predictions: string[]
  analysisData: any[]
}

const TopPredictions: React.FC<TopPredictionsProps> = ({ predictions, analysisData }) => {
  // Find the analysis data for each prediction
  const predictionDetails = predictions.map((prediction) => {
    return analysisData.find((item) => item.material === prediction)
  })

  const getBadgeColor = (value: string, type: string) => {
    if (type === "within_budget") {
      return value === "Yes"
        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
    }

    return value === "Yes"
      ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
      : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Top Material Recommendations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictionDetails.map((prediction, index) => (
              <div key={index} className="bg-gradient-to-r from-teal-500 to-emerald-500 p-1 rounded-xl shadow-md">
                <div className="bg-white dark:bg-gray-800 h-full rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{predictions[index]}</h3>
                  </div>

                  {prediction && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Strength:</span>
                        <span className="font-medium text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                          {prediction.strength}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Durability:</span>
                        <span className="font-medium text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                          {prediction.durability}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                        <span className="font-medium text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                          {prediction.cost_estimate}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                        <span
                          className={`font-medium px-2 py-1 rounded-md ${getBadgeColor(prediction.within_budget, "within_budget")}`}
                        >
                          {prediction.within_budget}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Eco-Friendly:</span>
                        <span
                          className={`font-medium px-2 py-1 rounded-md ${getBadgeColor(prediction.eco_friendly, "eco_friendly")}`}
                        >
                          {prediction.eco_friendly}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Coastal:</span>
                        <span
                          className={`font-medium px-2 py-1 rounded-md ${getBadgeColor(prediction.suitable_for_coastal_environment, "coastal")}`}
                        >
                          {prediction.suitable_for_coastal_environment}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPredictions