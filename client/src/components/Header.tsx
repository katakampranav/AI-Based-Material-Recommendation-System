import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="mb-10">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
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
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">MaterialMind AI</h1>
                <p className="text-teal-100 mt-1">Intelligent material selection for modern construction</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-white">Powered by Advanced AI</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm p-5 rounded-xl">
            <p className="text-teal-50">
              Enter your project specifications below to receive AI-powered material recommendations tailored to your
              needs. Our system analyzes multiple factors including cost, durability, environmental impact, and more to
              provide you with optimal solutions.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
