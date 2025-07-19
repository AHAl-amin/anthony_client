import React, { useState } from 'react';
import { CiFilter } from 'react-icons/ci';

function Humanization() {
  // JSON data
  const humanizationData = [
    {
      id: 1,
      title: 'Marketing Campaign Email',
      originalScore: 87,
      newScore: 23,
      requestedBy: 'john.doe@example.com',
      date: '2023-07-12',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Blog Post: 10 Tips for Better Writing',
      originalScore: 75,
      newScore: null,
      requestedBy: 'sarah.smith@example.com',
      date: '2023-07-12',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Product Description: Smart Watch',
      originalScore: 95,
      newScore: 31,
      requestedBy: 'mike.johnson@example.com',
      date: '2023-07-11',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Customer Support Response Template',
      originalScore: 82,
      newScore: null,
      requestedBy: 'emma.wilson@example.com',
      date: '2023-07-11',
      status: 'failed',
    },
    {
      id: 5,
      title: 'Social Media Post Draft',
      originalScore: 76,
      newScore: 18,
      requestedBy: 'alex.brown@example.com',
      date: '2023-07-10',
      status: 'completed',
    },
    {
      id: 6,
      title: 'Research Paper Introduction',
      originalScore: 68,
      newScore: null,
      requestedBy: 'linda.taylor@example.com',
      date: '2023-07-10',
      status: 'pending',
    },
  ];

  // State for active tab, search, and dropdown visibility
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle tab selection from dropdown
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Filter data based on active tab and search term
  const filteredData = humanizationData.filter((item) => {
    const matchesTab = activeTab === 'all' || item.status === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.requestedBy.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Humanization Requests
        </h1>
        <p className="text-gray-500">
          View and manage content humanization requests.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Removed the original nav bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm gap-2 items-center hover:bg-gray-50 flex"
            >
              <CiFilter className="size-6" />
              Filter: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {['all', 'pending', 'completed', 'failed'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabSelect(tab)}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                      activeTab === tab ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {tab === 'pending' && ` (${humanizationData.filter(item => item.status === 'pending').length})`}
                    {tab === 'completed' && ` (${humanizationData.filter(item => item.status === 'completed').length})`}
                    {tab === 'failed' && ` (${humanizationData.filter(item => item.status === 'failed').length})`}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Original AI Score
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  New AI Score
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requested By
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="text-red-600 font-medium">
                      {item.originalScore}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.newScore !== null ? (
                      <span className="text-green-600 font-medium">
                        {item.newScore}%
                      </span>
                    ) : (
                      <span className="text-gray-400">Pending</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.requestedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing{' '}
            <span className="font-medium">1</span> to{' '}
            <span className="font-medium">{filteredData.length}</span> of{' '}
            <span className="font-medium">{filteredData.length}</span> results
          </div>
          <div className="flex space-x-1">
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Humanization;