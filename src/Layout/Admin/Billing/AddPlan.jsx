"use client"

import { useState } from "react"
import { IoAdd } from "react-icons/io5"

export default function AddPlan() {
  const [planName, setPlanName] = useState("")
  const [price, setPrice] = useState("")
  const [billingPeriod, setBillingPeriod] = useState("Monthly")
  const [freeTrialDays, setFreeTrialDays] = useState("")
  const [featureInput, setFeatureInput] = useState("")
  const [features, setFeatures] = useState([])

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFeatures([...features, featureInput.trim()])
      setFeatureInput("")
    }
  }

  const handleSave = () => {
    console.log({
      planName,
      price,
      billingPeriod,
      freeTrialDays,
      features,
    })
    // Here you would typically send this data to a backend
    alert("Plan saved! Check console for data.")
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
        <p className="text-gray-500 mt-1">Let's start with the fundamentals of your subscription plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="planName" className="block text-sm font-medium text-gray-700 mb-1">
            Plan Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="planName"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="e.g., Premium, Pro, Enterprise"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="billingPeriod" className="block text-sm font-medium text-gray-700 mb-1">
            Billing Period
          </label>
          <select
            id="billingPeriod"
            value={billingPeriod}
            onChange={(e) => setBillingPeriod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          >
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="freeTrialDays" className="block text-sm font-medium text-gray-700 mb-1">
            Free Trial Days
          </label>
          <input
            type="number"
            id="freeTrialDays"
            value={freeTrialDays}
            onChange={(e) => setFreeTrialDays(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
        </div>
      </div>

      <div className="bg-[#DDE7FF] p-6 rounded-lg mb-8 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add Features</h3>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            placeholder="Enter a feature or benefit..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
          <button
            onClick={handleAddFeature}
            className="p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded focus:ring-offset-2 cursor-pointer"
            aria-label="Add feature"
          >
          
           <IoAdd />
          </button>
        </div>
        {features.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="font-medium">No features added yet.</p>
            <p className="text-sm">Add some features to make your plan attractive!</p>
          </div>
        ) : (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-green-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-center w-full ">
        <button
          onClick={handleSave}
          className="bg-blue-600/50 hover:bg-blue-700 cursor-pointer md:w-1/2 text-white font-medium py-3 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}
