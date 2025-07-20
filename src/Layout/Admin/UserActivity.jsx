"use client"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Link } from "react-router-dom"

export default function UserActivity() {
  const activityData = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "https://i.ibb.co/84dbpd0/image.png",
      },
      action: "Humanized Content",
      time: "2 hours ago",
      status: "Success",
    },
    {
      id: 2,
      user: {
        name: "Sarah Miller",
        avatar: "https://i.ibb.co/60hvPZRS/bannerimg-01.png",
      },
      action: "Checked Text",
      time: "3 hours ago",
      status: "Success",
    },
    {
      id: 3,
      user: {
        name: "Michael Brown",
        avatar: "https://i.ibb.co/35jgdnGk/image-7.png",
      },
      action: "Viewed SEO Report",
      time: "5 hours ago",
      status: "Warning",
    },
    {
      id: 4,
      user: {
        name: "Emily Davis",
        avatar: "https://i.ibb.co/84dbpd0/image.png",
      },
      action: "Generated Content",
      time: "1 day ago",
      status: "Failed",
    },
    {
      id: 5,
      user: {
        name: "James Wilson",
         avatar: "https://i.ibb.co/60hvPZRS/bannerimg-01.png",
      },
      action: "Humanized Content",
      time: "1 day ago",
      status: "Success",
    },
    {
      id: 6,
      user: {
        name: "Olivia Martinez",
        avatar: "https://i.ibb.co/60hvPZRS/bannerimg-01.png",
      },
      action: "Checked Text",
      time: "2 days ago",
      status: "Success",
    },
    {
      id: 7,
      user: {
        name: "William Taylor",
        avatar: "https://i.ibb.co/84dbpd0/image.png",
      },
      action: "Viewed SEO Report",
      time: "2 days ago",
      status: "Warning",
    },
    {
      id: 8,
      user: {
        name: "Sophia Anderson",
         avatar: "https://i.ibb.co/35jgdnGk/image-7.png",
      },
      action: "Generated Content",
      time: "3 days ago",
      status: "Success",
    },
  ]

  const getStatusDisplay = (status) => {
    switch (status) {
      case "Success":
        return (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span>Success</span>
          </div>
        )
      case "Warning":
        return (
          <div className="flex items-center text-yellow-600">
            <AlertTriangle className="h-4 w-4 mr-1" />
            <span>Warning</span>
          </div>
        )
      case "Failed":
        return (
          <div className="flex items-center text-red-600">
            <XCircle className="h-4 w-4 mr-1" />
            <span>Failed</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">User Activity</h2>
        <p className="text-gray-500 mt-1">Monitor and analyze user actions across the platform</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 pb-4">
          <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-[25%]">
                  User
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-[30%]">
                  Action
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-[20%]">
                  Time
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-[25%]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                 <Link to="/admin_dashboard/user_activity_dettails">
                  <td className="py-3 px-6">
                    <div className="flex items-center">
                      <img
                        src={activity.user.avatar || "/placeholder.svg"}
                        alt={activity.user.name}
                        className="h-8 w-8 rounded-full mr-3"
                      />
                      <span className="font-medium text-gray-900">{activity.user.name}</span>
                    </div>
                  </td>
                 </Link>
                  <td className="py-3 px-6 text-gray-700">{activity.action}</td>
                  <td className="py-3 px-6 text-gray-700">{activity.time}</td>
                  <td className="py-3 px-6">{getStatusDisplay(activity.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
