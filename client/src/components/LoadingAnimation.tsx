import type React from "react"

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-teal-200 dark:border-teal-800 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-teal-500 border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Analyzing Materials</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our AI is processing your requirements</p>
      </div>
    </div>
  )
}

export default LoadingAnimation
