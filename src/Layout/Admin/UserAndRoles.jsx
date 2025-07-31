


import React, { useState, useEffect, useRef } from 'react';
import {
  UserPlusIcon,
  MoreVerticalIcon,
  EditIcon,
  TrashIcon,
  UserIcon,
  ShieldIcon,
  EyeIcon,
  FilterIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Card component (basic implementation)
const Card = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {children}
    </div>
  );
};

function UserAndRoles() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [dropdownUserId, setDropdownUserId] = useState(null); // Track which user's dropdown is open
  const filterDropdownRef = useRef(null);

  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      lastActive: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      role: 'Editor',
      lastActive: '1 day ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'Viewer',
      lastActive: '3 days ago',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'Editor',
      lastActive: '5 hours ago',
      status: 'active',
    },
    {
      id: 5,
      name: 'Alex Brown',
      email: 'alex.brown@example.com',
      role: 'Admin',
      lastActive: 'Just now',
      status: 'active',
    },
    {
      id: 6,
      name: 'Linda Taylor',
      email: 'linda.taylor@example.com',
      role: 'Viewer',
      lastActive: '1 week ago',
      status: 'inactive',
    },
  ]);

  // Handle clicks outside to close filter dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle filter dropdown visibility
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  // Handle tab selection from filter dropdown
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setIsFilterDropdownOpen(false);
  };

  // Toggle user actions dropdown
  const toggleUserDropdown = (userId) => {
    setDropdownUserId(dropdownUserId === userId ? null : userId);
  };

  // Handle delete user
  const handleDeleteUser = (userId) => {
    setUsersData(usersData.filter((user) => user.id !== userId));
    setDropdownUserId(null); // Close dropdown after delete
  };

  // Filter users based on active tab and search term
  const filteredUsers = usersData.filter((user) => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'admin' && user.role === 'Admin') ||
      (activeTab === 'editor' && user.role === 'Editor') ||
      (activeTab === 'viewer' && user.role === 'Viewer') ||
      user.status === activeTab;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Admin':
        return <ShieldIcon size={16} className="text-red-500" />;
      case 'Editor':
        return <EditIcon size={16} className="text-blue-500" />;
      case 'Viewer':
        return <EyeIcon size={16} className="text-green-500" />;
      default:
        return <UserIcon size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-2xl text-xl font-semibold text-gray-800">
            Users & Roles
          </h1>
          <p className="text-gray-500 md:text-xl text-sm">
            Manage users and their access permissions.
          </p>
        </div>
        <Link to="/admin_dashboard/add_rols" className="px-4 py-2 bg w-40 text-white rounded-md  flex items-center">
          <UserPlusIcon size={16} className="mr-2" />
        Add User
        </Link>
      </div>
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="relative" ref={filterDropdownRef}>
            <button
              onClick={toggleFilterDropdown}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm gap-2 items-center hover:bg-gray-50 flex"
            >
              <FilterIcon size={16} />
              Filter: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </button>
            {isFilterDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {['all', 'admin', 'editor', 'viewer', 'active', 'inactive'].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabSelect(tab)}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        activeTab === tab ? 'bg-gray-100 font-medium' : ''
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {tab !== 'all' &&
                        ` (${
                          usersData.filter((user) =>
                            tab === 'admin'
                              ? user.role === 'Admin'
                              : tab === 'editor'
                              ? user.role === 'Editor'
                              : tab === 'viewer'
                              ? user.role === 'Viewer'
                              : user.status === tab,
                          ).length
                        })`}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-text focus:border-blue-500"
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
                  User
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRoleIcon(user.role)}
                      <span className="ml-2 text-sm text-gray-900">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => toggleUserDropdown(user.id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <MoreVerticalIcon size={18} />
                      </button>
                      {dropdownUserId === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className=" w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 overflow-hidden rounded-md flex items-center"
                          >
                            <TrashIcon size={16} className="mr-2" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">{filteredUsers.length}</span> of{' '}
            <span className="font-medium">{filteredUsers.length}</span> users
          </div>
          <div className="flex space-x-1">
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 bg text-white rounded-md ">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default UserAndRoles;