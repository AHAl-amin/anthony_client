import React from 'react';
import { TrendingUpIcon, UsersIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Link } from 'react-router-dom';

// Card component
const Card = ({ children, className, title }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>}
      {children}
    </div>
  );
};

// AdminOverview component
const AdminOverview = () => {
  // Sample data for charts
  const textsCheckedData = [
    { name: 'Mon', value: 42 },
    { name: 'Tue', value: 55 },
    { name: 'Wed', value: 38 },
    { name: 'Thu', value: 72 },
    { name: 'Fri', value: 65 },
    { name: 'Sat', value: 30 },
    { name: 'Sun', value: 25 },
  ];

  const successRateData = [
    { name: 'Mon', value: 68 },
    { name: 'Tue', value: 71 },
    { name: 'Wed', value: 70 },
    { name: 'Thu', value: 73 },
    { name: 'Fri', value: 71 },
    { name: 'Sat', value: 70 },
    { name: 'Sun', value: 72 },
  ];

  const activeUsersData = [
    { name: 'Mon', value: 16 },
    { name: 'Tue', value: 19 },
    { name: 'Wed', value: 18 },
    { name: 'Thu', value: 20 },
    { name: 'Fri', value: 19 },
    { name: 'Sat', value: 17 },
    { name: 'Sun', value: 15 },
  ];

  const seoPassData = [
    { name: 'Mon', value: 25 },
    { name: 'Tue', value: 28 },
    { name: 'Wed', value: 26 },
    { name: 'Thu', value: 30 },
    { name: 'Fri', value: 27 },
    { name: 'Sat', value: 24 },
    { name: 'Sun', value: 22 },
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening with your content.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Texts Checked</p>
              <p className="text-2xl font-semibold mt-1">327</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +12% from last week
              </p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <CheckCircleIcon size={20} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4 h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={textsCheckedData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#3b82f6] text-white px-2 py-1 rounded shadow-md">
                          <p className="text-sm">{payload[0].value} checked</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#colorValue1)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Humanization Success</p>
              <p className="text-2xl font-semibold mt-1">71%</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +5% from last week
              </p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUpIcon size={20} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4 h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={successRateData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#10B981] text-white px-2 py-1 rounded shadow-md">
                          <p className="text-sm">{payload[0].value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#colorValue2)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Users</p>
              <p className="text-2xl font-semibold mt-1">19</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +10% from last week
              </p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <UsersIcon size={20} className="text-purple-600" />
            </div>
          </div>
          <div className="mt-4 h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={activeUsersData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#8B5CF6] text-white px-2 py-1 rounded shadow-md">
                          <p className="text-sm">{payload[0].value} users</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fill="url(#colorValue3)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">SEO Pass Rate</p>
              <p className="text-2xl font-semibold mt-1">269</p>
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircleIcon size={14} className="mr-1" /> -6% from last week
              </p>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircleIcon size={20} className="text-orange-600" />
            </div>
          </div>
          <div className="mt-4 h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={seoPassData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#F97316] text-white px-2 py-1 rounded shadow-md">
                          <p className="text-sm">{payload[0].value} passed</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#F97316" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#F97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F97316"
                  strokeWidth={2}
                  fill="url(#colorValue4)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <UsersIcon size={18} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">User activity {item}</p>
                  <p className="text-sm text-gray-500">Action performed on content</p>
                </div>
                <div className="text-sm text-gray-400">2h ago</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link to="/admin_dashboard/user_activity" className="text-blue-600 text-sm font-medium hover:underline">View all</Link>
          </div>
        </Card>
        <Card title="Weekly Usage Summary">
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="h-48 w-48 mx-auto">
                <div className="h-full w-full rounded-full border-8 border-blue-500 border-opacity-20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t-8 border-blue-500 transform rotate-45" />
                  <div className="text-2xl font-bold text-gray-800">78%</div>
                </div>
              </div>
              <p className="mt-4 text-gray-500">Of your monthly quota used</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;