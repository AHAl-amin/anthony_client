import React, { useState } from 'react';

function AiDetection() {
  // JSON data
  const detectionData = [
    {
      id: 1,
      title: 'Marketing Campaign Email',
      aiScore: 87,
      humanScore: 13,
      user: 'john.doe@example.com',
      date: '2023-07-12',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Blog Post: 10 Tips for Better Writing',
      aiScore: 32,
      humanScore: 68,
      user: 'sarah.smith@example.com',
      date: '2023-07-11',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Product Description: Smart Watch',
      aiScore: 95,
      humanScore: 5,
      user: 'mike.johnson@example.com',
      date: '2023-07-10',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Customer Support Response Template',
      aiScore: 58,
      humanScore: 42,
      user: 'emma.wilson@example.com',
      date: '2023-07-10',
      status: 'completed',
    },
    {
      id: 5,
      title: 'Social Media Post Draft',
      aiScore: 76,
      humanScore: 24,
      user: 'alex.brown@example.com',
      date: '2023-07-09',
      status: 'completed',
    },
    {
      id: 6,
      title: 'Research Paper Introduction',
      aiScore: 12,
      humanScore: 88,
      user: 'linda.taylor@example.com',
      date: '2023-07-09',
      status: 'completed',
    },
    {
      id: 7,
      title: 'Website About Us Page',
      aiScore: 45,
      humanScore: 55,
      user: 'david.miller@example.com',
      date: '2023-07-08',
      status: 'completed',
    },
    {
      id: 8,
      title: 'Website About Us Page',
      aiScore: 45,
      humanScore: 55,
      user: 'david.miller@example.com',
      date: '2023-07-08',
      status: 'completed',
    },
    {
      id: 9,
      title: 'Website About Us Page',
      aiScore: 45,
      humanScore: 55,
      user: 'david.miller@example.com',
      date: '2023-07-08',
      status: 'completed',
    },
  ];

  // State for search
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search term
  const filteredData = detectionData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          AI Detection Scores
        </h1>
        <p className="text-gray-500">
          View and manage AI detection results for content.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm flex items-center hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm flex items-center hover:bg-gray-50">
              Export
            </button>
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search content..."
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
                  AI Score
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Human Score
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
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
              {paginatedData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-[100px]">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: `${item.aiScore}%` }}
                        ></div>
                      </div>
                      <span>{item.aiScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-[100px]">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: `${item.humanScore}%` }}
                        ></div>
                      </div>
                      <span>{item.humanScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
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
            <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, filteredData.length)}
            </span>{' '}
            of <span className="font-medium">{filteredData.length}</span> results
          </div>
          <div className="flex space-x-1">
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled
            >
              {currentPage}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              page !== currentPage && (
                <button
                  key={page}
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            ))}
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiDetection;