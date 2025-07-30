

import { Pencil } from "lucide-react"
import { useRef, useState } from "react"
import { FaUserTie } from "react-icons/fa6"

export default function Settings() {
  const fileInputRef = useRef(null)
  const [profileImage, setProfileImage] = useState(null) // Start with null for no default image

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">Configure your Humanize AI dashboard preferences.</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-gray-100">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Admin Profile Pic"
                className="w-full h-full object-cover"
                onError={() => setProfileImage(null)} // Fallback to icon if image fails to load
              />
            ) : (
              <FaUserTie className="w-16 h-16 text-gray-900" /> // Adjusted size for better fit
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const reader = new FileReader()
                reader.onload = (event) => {
                  setProfileImage(event.target.result)
                }
                reader.readAsDataURL(e.target.files[0])
              }
            }}
          />
          <p
            className="text-sm text-green-500 mt-2 cursor-pointer hover:underline"
            onClick={() => fileInputRef.current?.click()}
          >
            Edit Profile pic
          </p>
          <div className="flex items-center mt-2">
            <h2 className="text-xl font-semibold text-gray-800 mr-2">Admin User</h2>
            <Pencil className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
        </div>

        
        {/* Account Settings */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                defaultValue="Humanize AI"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                Timezone
              </label>
              <select
                id="timezone"
                defaultValue="Eastern Time (UTC-5)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Eastern Time (UTC-5)</option>
                <option>Central Time (UTC-6)</option>
                <option>Mountain Time (UTC-7)</option>
                <option>Pacific Time (UTC-8)</option>
              </select>
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select
                id="language"
                defaultValue="English"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Type your new password here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700 mb-1">
                New Email
              </label>
              <input
                type="email"
                id="newEmail"
                placeholder="Type your new email here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">System Settings</h3>
          <div className="space-y-6">
            <div>
              <label htmlFor="detectionSensitivity" className="block text-sm font-medium text-gray-700 mb-2">
                AI Detection Settings
              </label>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Low</span>
                <span>High</span>
              </div>
              <input
                type="range"
                id="detectionSensitivity"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full"
              />
            </div>
            <div>
              <label htmlFor="defaultDetectionModel" className="block text-sm font-medium text-gray-700 mb-1">
                Default Detection Model
              </label>
              <select
                id="defaultDetectionModel"
                defaultValue="Standard (balanced)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Standard (balanced)</option>
                <option>Strict (Higher Precision)</option>
                <option>Relaxed (Higher Threat)</option>
              </select>
            </div>
            <div>
              <label htmlFor="minConfidenceThreshold" className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Confidence Threshold
              </label>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>0%</span>
                <span>100%</span>
              </div>
              <input
                type="range"
                id="minConfidenceThreshold"
                min="0"
                max="100"
                defaultValue="70"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="flex justify-end mt-8">
          <button className="px-6 py-2 bg cursor-pointer text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}