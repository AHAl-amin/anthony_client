"use client"

import { useState, useEffect } from "react"
import { ThumbsUp, ThumbsDown, Copy, Info, AlertCircle } from "lucide-react"
import { RxActivityLog } from "react-icons/rx"

function UserDashboardHome() {
  const [inputText, setInputText] = useState("")
  const [aiDetectionScore, setAiDetectionScore] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [humanizedOutput, setHumanizedOutput] = useState("")
  const [showOutput, setShowOutput] = useState(false)
  const [humanizationLevel, setHumanizationLevel] = useState("medium") // 'low', 'medium', 'high'
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [wordsRemaining, setWordsRemaining] = useState(2000)

  const MAX_CHARACTERS = 2000
  const MAX_WORDS = 2000 // Assuming 1 character = 1 word for simplicity in this demo

  // Calculate progress percentage for input text
  const progressPercentage = Math.min((inputText.length / MAX_CHARACTERS) * 100, 100)

  // Update words remaining based on input text length
  useEffect(() => {
    const currentWords = inputText.split(/\s+/).filter((word) => word.length > 0).length
    setWordsRemaining(MAX_WORDS - currentWords)
  }, [inputText])

  // Simulate AI detection and humanization process
  const handleHumanize = () => {
    setIsProcessing(true)
    setShowOutput(false)
    setAiDetectionScore(0) // Reset score before new detection

    // Simulate processing delay
    setTimeout(() => {
      // Generate random detection score for demo
      const randomScore = Math.floor(Math.random() * 100)
      setAiDetectionScore(randomScore)

      // Generate humanized output (in a real app, this would come from an API)
      const humanized = humanizeText(inputText, humanizationLevel)
      setHumanizedOutput(humanized)

      setIsProcessing(false)
      setShowOutput(true)
    }, 2000)
  }

  // Simple text humanization function (demo only)
  const humanizeText = (text, level) => {
    // This would be replaced with actual humanization logic based on 'level'
    let modifiedText = text
    if (level === "low") {
      modifiedText = text
        .split(" ")
        .map((word) => {
          if (Math.random() > 0.9) return word + "s"
          return word
        })
        .join(" ")
    } else if (level === "medium") {
      modifiedText = text
        .split(" ")
        .map((word) => {
          if (Math.random() > 0.7) return word + "ly"
          return word
        })
        .join(" ")
    } else if (level === "high") {
      modifiedText = text
        .split(" ")
        .map((word) => {
          if (Math.random() > 0.5) return word + "ing"
          return word
        })
        .join(" ")
    }
    return modifiedText
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(humanizedOutput)
    // Optionally, add a visual feedback like a toast notification
  }

  const getDetectionMessage = (score) => {
    if (score < 30) {
      return "Low AI detection - content appears human-like"
    } else if (score < 70) {
      return "Moderate AI detection - some humanization needed"
    } else {
      return "High AI detection - significant humanization recommended"
    }
  }

  const getDetectionColorClass = (score) => {
    if (score < 30) {
      return "bg-green-600"
    } else if (score < 70) {
      return "bg-yellow-500"
    } else {
      return "bg-red-600"
    }
  }

  return (
    <div className="container mx-auto my-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Detection Remover</h1>
        <p className="text-gray-400">Convert AI-generated content to human-like text that passes AI detection</p>
      </div>

      {/* Usage Statistics */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold  text-gray-800 mb-4">Usage Statistics</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Free Plan: {MAX_WORDS - wordsRemaining} / {MAX_WORDS} words used
          </span>
          <span className="text-sm font-medium bg text-gray-200 p-3 rounded-xl">{wordsRemaining} words remaining</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg h-2.5 rounded-full"
            style={{ width: `${((MAX_WORDS - wordsRemaining) / MAX_WORDS) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}

        <div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Input Text</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent resize-y min-h-[150px]"
              rows={8}
              placeholder="Paste your AI-generated text here to humanize it..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={MAX_CHARACTERS}
            />

            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span>
                {inputText.length}/{MAX_CHARACTERS} characters
              </span>
              <button
                onClick={() => setInputText("")}
                className="text hover:text-[#22C55E]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={inputText.length === 0}
              >
                Clear
              </button>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text border-gray-300 rounded focus:ring-[bg-[#22C55E]"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                I consent to the temporary processing of my input in accordance with the{" "}
                <a href="#" className="text hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text hover:underline">
                  Terms of Use
                </a>
                .
              </label>
            </div>


          </div>
          <div className="flex items-center text-xs text-gray-600 mt-4 p-3 ">

            <p className="text-center space-">
              Your text is temporarily processed for transformation purposes. We do not store or re-use your content. <br /><br />
              Your data stays private. Read our{" "}
              <a href="#" className="text hover:underline">
                data policy
              </a>
            </p>
          </div>

        </div>

        {/* Humanization Settings */}
      <div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Humanization Settings</h2>
          <div className="space-y-6 p-6 rounded-lg shadow-sm border border-gray-200">
            <label className=" text-gray-700 font-medium  flex gap-4 items-center mb-6"> <RxActivityLog className="rotate-90" />Humanization Level</label>
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-md">
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${humanizationLevel === "low" ? "bg-[#A9F0E9] text" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setHumanizationLevel("low")}
              >
                Low (~60%)
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${humanizationLevel === "medium" ? "bg-[#A9F0E9] text" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setHumanizationLevel("medium")}
              >
                Medium (~40%)
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${humanizationLevel === "high" ? "bg-[#A9F0E9] text" : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setHumanizationLevel("high")}
              >
                High (~20%)
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Balanced humanization - Good for most content needs</p>
            <button
              className="w-full bg text-white px-4 py-3 rounded-md hover:bg-[#30B2A8]/80 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              onClick={handleHumanize}
              disabled={inputText.length === 0 || isProcessing || !agreedToTerms}
            >
              {isProcessing ? "Processing..." : "Humanize Text"}
            </button>
          </div>

        </div>
      </div>

        {/* AI Detection Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Detection</h2>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-gray-700">AI Detection Score:</span>
            <span className="font-bold text-gray-900">{aiDetectionScore}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ${getDetectionColorClass(aiDetectionScore)}`}
              style={{ width: `${aiDetectionScore}%` }}
            ></div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{getDetectionMessage(aiDetectionScore)}</p>

          {aiDetectionScore >= 70 && (
            <div className="flex items-center bg-[#FEFCE8] p-3 rounded-md  text-[#A16207]">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">
                This text is likely to be flagged as AI-generated. We recommend humanizing it.
              </span>
            </div>
          )}
          {aiDetectionScore < 70 && aiDetectionScore > 0 && (
            <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md border border-green-200">
              <Info className="w-5 h-5 mr-2" />
              <span className="text-sm">This text appears human-like.</span>
            </div>
          )}
          {aiDetectionScore === 0 && (
            <div className="flex items-center text-gray-500 bg-gray-50 p-3 rounded-md border border-gray-200">
              <Info className="w-5 h-5 mr-2" />
              <span className="text-sm">No AI detection performed yet.</span>
            </div>
          )}
        </div>

        {/* Humanized Output Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Humanized Output</h2>
          <div className="p-4 bg-gray-50 rounded-md mb-4 border border-gray-200 min-h-[150px] flex items-center justify-center text-gray-600">
            {showOutput ? <p className="text-gray-800">{humanizedOutput}</p> : <p>Humanized text will appear here</p>}
          </div>

          {showOutput && (
            <>
              <div className="flex justify-end space-x-4 mb-4">
                <button
                  className="flex items-center text-gray-500 hover:text-gray-600 text-sm font-medium"
                  onClick={handleCopyToClipboard}
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy to Clipboard
                </button>
              </div>

              <div className="text-xs text-gray-400 mb-4">
                <span className="font-semibold text-green-400">Changed:</span> tone softened, structure varied, detection bypassed
              </div>

              <div className="flex justify-end space-x-4">
                <button className="flex items-center text-gray-600 hover:text-green-600 text-sm">
                  <div className="font-semibold"> Was This Helpful?</div>
                  <ThumbsUp className="mr-1 border size-6 rounded ml-2 p-1" />

                </button>
                <button className="flex items-center text-gray-600 hover:text-red-600 text-sm">
                  <ThumbsDown className="border size-6 rounded p-1" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">This helps gather early data and improve the humanizer logic over time.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDashboardHome


