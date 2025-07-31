// src/Pages/UserDashboard/UserSettings.jsx
import { useState, useRef } from "react";
import { ArrowLeft, Upload, Save, CreditCard, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImageSrc, setProfileImageSrc] = useState("/assets/placeholder.svg");
  const fileInputRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-200 p-6 md:p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="flex items-center border-b border-gray-200 pb-3 mb-6">
          
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Profile Picture Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Profile Picture</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src={profileImageSrc}
                alt="Profile Picture"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="flex flex-col items-center sm:items-start gap-2">
                <button
                  className="flex items-center px-3 py-1.5 bg text-white rounded-md transition"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload Image
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (profileImageSrc.startsWith("blob:")) {
                        URL.revokeObjectURL(profileImageSrc);
                      }
                      setProfileImageSrc(URL.createObjectURL(file));
                    }
                  }}
                />
                <p className="text-xs text-gray-600">JPEG or PNG, max 2MB</p>
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Your Name</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Fisrt name"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                 placeholder="Last name"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
                />
              </div>
            </div>
            <button className="flex items-center px-3 py-1.5 bg text-white rounded-md hover:bg transition">
              <Save className="h-4 w-4 mr-1" />
              Save Name
            </button>
          </div>

          {/* Email Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Email Address</h2>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email-address"
                placeholder="Email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
              />
            </div>
            <button className="flex items-center px-3 py-1.5 bg text-white rounded-md hover:bg transition">
              <Save className="h-4 w-4 mr-1" />
              Save Email
            </button>
          </div>

          {/* Password Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
            <div className="space-y-3">
              <div className="relative">
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="current-password"
                  className="mt-1 w-full p-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute top-8 right-2 text-gray-600"
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="relative">
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                  className="mt-1 w-full p-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute top-8 right-2 text-gray-600"
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="relative">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  className="mt-1 w-full p-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-bg focus:border-bg"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-8 right-2 text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <button className="flex items-center px-3 py-1.5 bg text-white md:text-[14px] text-[12px] rounded-md hover:bg transition">
                <Save className="h-4 w-4 mr-1" />
                Update Password
              </button>
              <Link to='/verify' href="" className="text-sm text-[#E15111] text-bg hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="space-y-3 md:w-1/2">
            <h2 className="text-lg font-semibold text-gray-900">Subscription Details</h2>
            <div className="border border-gray-200 rounded-md p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base font-semibold text-gray-900">Free Plan</p>
                  <p className="text-xs text-gray-600">2,000 words per month</p>
                </div>
                <CreditCard className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Words Used</p>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full mr-4 h-2">
                    <div className="bg h-2 rounded-full" style={{ width: "22%" }}></div>
                  </div>
                  <span className="text-xs text-gray-700">500/2,000</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
                <div>
                  <p className="font-medium">Renewal Date</p>
                  <p>April 1, 2025</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Billing Cycle</p>
                  <p>Monthly</p>
                </div>
              </div>
              <button className="w-full flex items-center justify-center px-3 py-1.5 bg text-white rounded-md hover:bg transition">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}