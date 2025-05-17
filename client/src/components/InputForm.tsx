"use client"

import type React from "react"
import { useState } from "react"
import type { FormData } from "../types"

interface InputFormProps {
  onSubmit: (data: FormData) => void
  isLoading: boolean
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    budget: "",
    environment: "",
    requiredStrength: "",
    durability: "",
    ecoFriendly: "",
    leadTime: "",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.budget || isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
      newErrors.budget = "Please enter a valid budget amount"
    }

    if (!formData.environment) {
      newErrors.environment = "Please select an environment"
    }

    if (!formData.requiredStrength) {
      newErrors.requiredStrength = "Please select required strength"
    }

    if (
      !formData.durability ||
      isNaN(Number(formData.durability)) ||
      Number(formData.durability) < 1 ||
      Number(formData.durability) > 10
    ) {
      newErrors.durability = "Please enter a durability rating between 1-10"
    }

    if (!formData.ecoFriendly) {
      newErrors.ecoFriendly = "Please specify if eco-friendly is required"
    }

    if (
      !formData.leadTime ||
      isNaN(Number(formData.leadTime)) ||
      Number(formData.leadTime) < 1 ||
      Number(formData.leadTime) > 45
    ) {
      newErrors.leadTime = "Please enter a lead time between 1-45 days"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user makes a change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Project Specifications
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Budget */}
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Budget (₹)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
                    ₹
                  </span>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`block w-full pl-8 pr-3 py-3 rounded-lg border ${
                      errors.budget
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                        : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                    placeholder="Enter budget amount"
                  />
                </div>
                {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
              </div>

              {/* Environment */}
              <div className="space-y-2">
                <label htmlFor="environment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Environment
                </label>
                <select
                  id="environment"
                  name="environment"
                  value={formData.environment}
                  onChange={handleChange}
                  className={`block w-full px-3 py-3 rounded-lg border ${
                    errors.environment
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                      : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                >
                  <option value="" disabled>
                    Select environment
                  </option>
                  <option value="Coastal">Coastal</option>
                  <option value="Dry">Dry</option>
                  <option value="Humid">Humid</option>
                </select>
                {errors.environment && <p className="text-red-500 text-xs mt-1">{errors.environment}</p>}
              </div>

              {/* Required Strength */}
              <div className="space-y-2">
                <label
                  htmlFor="requiredStrength"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Required Strength
                </label>
                <select
                  id="requiredStrength"
                  name="requiredStrength"
                  value={formData.requiredStrength}
                  onChange={handleChange}
                  className={`block w-full px-3 py-3 rounded-lg border ${
                    errors.requiredStrength
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                      : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                >
                  <option value="" disabled>
                    Select strength
                  </option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                {errors.requiredStrength && <p className="text-red-500 text-xs mt-1">{errors.requiredStrength}</p>}
              </div>

              {/* Durability */}
              <div className="space-y-2">
                <label htmlFor="durability" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Durability (1-10)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="durability"
                    name="durability"
                    min="1"
                    max="10"
                    value={formData.durability}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 rounded-lg border ${
                      errors.durability
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                        : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                    placeholder="Enter durability (1-10)"
                  />
                </div>
                {errors.durability && <p className="text-red-500 text-xs mt-1">{errors.durability}</p>}
              </div>

              {/* Eco-Friendly */}
              <div className="space-y-2">
                <label htmlFor="ecoFriendly" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Eco-Friendly
                </label>
                <select
                  id="ecoFriendly"
                  name="ecoFriendly"
                  value={formData.ecoFriendly}
                  onChange={handleChange}
                  className={`block w-full px-3 py-3 rounded-lg border ${
                    errors.ecoFriendly
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                      : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                >
                  <option value="" disabled>
                    Select option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.ecoFriendly && <p className="text-red-500 text-xs mt-1">{errors.ecoFriendly}</p>}
              </div>

              {/* Lead Time */}
              <div className="space-y-2">
                <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Lead Time (days)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="leadTime"
                    name="leadTime"
                    min="1"
                    max="45"
                    value={formData.leadTime}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 pr-12 rounded-lg border ${
                      errors.leadTime
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-700"
                        : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                    placeholder="Enter days (1-45)"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 pointer-events-none">
                    days
                  </span>
                </div>
                {errors.leadTime && <p className="text-red-500 text-xs mt-1">{errors.leadTime}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`mt-8 w-full sm:w-auto flex items-center justify-center px-8 py-4 text-white font-medium rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 focus:ring-4 focus:ring-teal-300 focus:outline-none transition-all ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Analyzing Materials...
                </>
              ) : (
                <>
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Generate Recommendations
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputForm
