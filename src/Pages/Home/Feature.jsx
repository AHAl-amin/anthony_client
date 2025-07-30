function Feature() {
  return (
    <div className="py-16 px-4 md:max-w-6xl w-full mx-auto inter">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-xl font-semibold mb-4" style={{ color: "#30B2A8" }}>
          Features
        </p>
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Everything you need for AI text humanization
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
          Our advanced platform helps you create content that passes AI detection while maintaining quality and SEO
          value.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Detection Engine */}
        <div className="bg-white p-8 rounded-xl border border-gray-100  hover:shadow-lg shadow transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
               
              >
                <svg className="w-8 h-8 text-[#30B2A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                AI Detection Engine
              </h3>
              <p style={{ color: "#6B7280" }}>
                Analyze your content with our advanced AI detection system that simulates popular detectors like GPTZero
                and Originality.ai
              </p>
            </div>
          </div>
        </div>

        {/* Humanization Technology */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg shadow transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
               
              >
                <svg className="w-8 h-8 text-[#30B2A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                Humanization Technology
              </h3>
              <p style={{ color: "#6B7280" }}>
                Three levels of humanization (Low, Medium, High) to make your content pass AI detection with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Optimized */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg shadow transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                
              >
                <svg className="w-8 h-8 text-[#30B2A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                SEO Optimized
              </h3>
              <p style={{ color: "#6B7280" }}>
                Maintain SEO value in your content while making it appear human-written, ensuring your rankings don't
                suffer.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Analytics */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg shadow transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
               
              >
                <svg className="w-8 h-8 text-[#30B2A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                Usage Analytics
              </h3>
              <p style={{ color: "#6B7280" }}>
                Track your usage, monitor detection scores, and optimize your content strategy with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
