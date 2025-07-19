import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  TrendingUpIcon,
} from 'lucide-react';

// Fallback Card component (in case ../ui/Card is missing)
const Card = ({ children, className, title }) => {
  return (
    <div className={`p-4 bg-white rounded-lg shadow ${className}`}>
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      {children}
    </div>
  );
};

const SeoInsights = () => {
  // Sample data for charts
  const seoScoreData = [
    { name: 'Week 1', value: 72 },
    { name: 'Week 2', value: 75 },
    { name: 'Week 3', value: 78 },
    { name: 'Week 4', value: 82 },
    { name: 'Week 5', value: 85 },
    { name: 'Week 6', value: 88 },
  ];
  const contentIndexedData = [
    { name: 'Week 1', value: 15 },
    { name: 'Week 2', value: 22 },
    { name: 'Week 3', value: 28 },
    { name: 'Week 4', value: 35 },
    { name: 'Week 5', value: 42 },
    { name: 'Week 6', value: 48 },
  ];
  const seoIssuesData = [
    { name: 'Keyword density', count: 12, status: 'warning' },
    { name: 'Missing meta descriptions', count: 8, status: 'error' },
    { name: 'Duplicate content', count: 3, status: 'error' },
    { name: 'Heading structure', count: 5, status: 'warning' },
    { name: 'Image alt text', count: 10, status: 'warning' },
    { name: 'Internal linking', count: 7, status: 'warning' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'error':
        return <XCircleIcon size={16} className="text-red-500" />;
      case 'warning':
        return <AlertCircleIcon size={16} className="text-orange-500" />;
      default:
        return <CheckCircleIcon size={16} className="text-green-500" />;
    }
  };

  // Dark mode state (optional, included for consistency with AdminDashboard)
  const [darkMode] = React.useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          SEO & Indexing Insights
        </h1>
        <p className="text-gray-500">
          Monitor how well your humanized content performs for search engines.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="transition-transform hover:translate-y-[-5px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Overall SEO Score
              </p>
              <p className="text-2xl font-semibold mt-1">88%</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +3% from last month
              </p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <CheckCircleIcon size={20} className="text-blue-600" />
            </div>
          </div>
        </Card>
        <Card className="transition-transform hover:translate-y-[-5px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Content Indexed
              </p>
              <p className="text-2xl font-semibold mt-1">48</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +6 from last month
              </p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircleIcon size={20} className="text-green-600" />
            </div>
          </div>
        </Card>
        <Card className="transition-transform hover:translate-y-[-5px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Position</p>
              <p className="text-2xl font-semibold mt-1">4.2</p>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <TrendingUpIcon size={14} className="mr-1" /> +0.8 from last month
              </p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUpIcon size={20} className="text-purple-600" />
            </div>
          </div>
        </Card>
        <Card className="transition-transform hover:translate-y-[-5px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">SEO Issues</p>
              <p className="text-2xl font-semibold mt-1">45</p>
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircleIcon size={14} className="mr-1" /> +12 from last month
              </p>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircleIcon size={20} className="text-orange-600" />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="SEO Score Trend" className="shadow bg-white rounded-xl p-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={seoScoreData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={darkMode ? '#4B5563' : '#E5E7EB'}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: darkMode ? '#D1D5DB' : '#6B7280' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: darkMode ? '#D1D5DB' : '#6B7280' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div
                          className={`px-3 py-1 rounded shadow-md text-center ${
                            darkMode ? 'bg-gray-700 text-gray-100' : 'bg-[#5B21BD] text-white'
                          }`}
                        >
                          <p className="text-sm font-medium">{payload[0].value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Content Indexed Over Time" className="shadow bg-white rounded-xl p-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={contentIndexedData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={darkMode ? '#4B5563' : '#E5E7EB'}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: darkMode ? '#D1D5DB' : '#6B7280' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: darkMode ? '#D1D5DB' : '#6B7280' }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div
                          className={`px-3 py-1 rounded shadow-md text-center ${
                            darkMode ? 'bg-gray-700 text-gray-100' : 'bg-[#10b981] text-white'
                          }`}
                        >
                          <p className="text-sm font-medium">{payload[0].value} pages</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <defs>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="98%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#colorValue2)"
                  dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <Card title="SEO Issues to Address">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {seoIssuesData.map((issue, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {issue.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {getStatusIcon(issue.status)}
                      <span className="ml-2 capitalize">{issue.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {issue.count} pages
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[150px]">
                      <div
                        className={`h-2.5 rounded-full ${
                          issue.status === 'error' ? 'bg-red-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${(issue.count / 12) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default SeoInsights;