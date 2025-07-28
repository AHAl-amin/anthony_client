"use client"

import {
    ArrowLeft,
    Mail,
    Calendar,
    User,
    Zap,
    TrendingUp,
    Star,
    CheckCircle,
    XCircle,
    AlertTriangle,
    FileText,
    Edit3,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function UserActivityDetails() {
    const userData = {
        id: "olivia-martinez",
        name: "Olivia Martinez",
        email: "olivia.martinez@example.com",
        avatar: "/placeholder.svg?height=64&width=64",
        joinedDate: "Apr 17, 2022",
        role: "Editor",
        bio: "Senior editor with 10+ years of experience in digital publishing.",
        metrics: {
            totalActions: 241,
            successRate: "93%",
            engagementScore: 224,
            recentStatus: "Team Lead",
        },
        recentActivities: [
            {
                id: 1,
                title: "Checked Text",
                description: "Proofread and corrected customer-facing email templates",
                status: "Success",
                time: "2 days ago",
            },
            {
                id: 2,
                title: "Edited Document",
                description: "Revised technical documentation for clarity and accuracy",
                status: "Success",
                time: "6 days ago",
            },
        ],
        performanceMetrics: {
            success: { count: 2, percentage: 100 },
            warning: { count: 0, percentage: 0 },
            failed: { count: 0, percentage: 0 },
            breakdown: [
                { activity: "Checked Text", count: 1 },
                { activity: "Edited Document", count: 1 },
            ],
        },
        statusHistory: [
            {
                id: 1,
                status: "Team Lead",
                description: "Current status",
                date: "Jan 5, 2023",
            },
            {
                id: 2,
                status: "High Performer",
                description: "Status changed from Active",
                date: "Aug 16, 2022",
            },
            {
                id: 3,
                status: "Active",
                description: "Status changed from Onboarded",
                date: "May 25, 2022",
            },
            {
                id: 4,
                status: "Onboarded",
                description: "Status changed from Onboarding",
                date: "Apr 17, 2022",
            },
        ],
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case "Success":
                return <CheckCircle className="h-4 w-4 text-green-500" />
            case "Warning":
                return <AlertTriangle className="h-4 w-4 text-yellow-500" />
            case "Failed":
                return <XCircle className="h-4 w-4 text-red-500" />
            default:
                return null
        }
    }

    return (
        <div className="w-full mx-auto bg-gray-100  rounded-lg">
            <div className="mb-6">
                <Link to="/admin_dashboard/user_activity" className="inline-flex items-center text hover:text-blue-800 text-sm font-medium">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Activity Log
                </Link>
            </div>
            <div className="bg-[#EEF2FF] rounded-lg shadow-sm  my-10 ">

                <div className="p-6  flex flex-col md:flex-row items-center justify-center md:items-start">
                    <img
                        src="https://i.ibb.co/84dbpd0/image.png"
                        alt={userData.name}
                        className="h-24 w-24 rounded-full object-cover  mb-4 md:mb-0 md:mr-6"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                        <p className="text-gray-600 flex items-center justify-center md:justify-start mt-1">
                            <Mail className="h-4 w-4 mr-2" />
                            {userData.email}
                        </p>
                        <p className="text-gray-600 flex items-center justify-center md:justify-start mt-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Joined {userData.joinedDate}
                        </p>
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mt-3">
                            {userData.role}
                        </span>
                    </div>
                </div>
                <p className="text-gray-700 pb-4 text-center ">{userData.bio}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Actions</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{userData.metrics.totalActions}</p>
                    </div>
                    <Zap className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Success Rate</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{userData.metrics.successRate}</p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Engagement Score</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{userData.metrics.engagementScore}</p>
                    </div>
                    <Star className="h-6 w-6 text-gray-400" />
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Recent Status</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{userData.metrics.recentStatus}</p>
                    </div>
                    <User className="h-6 w-6 text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-gray-600" />
                        Recent Activities
                    </h3>
                    <div className="space-y-4">
                        {userData.recentActivities.map((activity) => (
                            <div key={activity.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                                <div className="flex justify-between items-start">
                                    <div className="">
                                        <p className="font-medium text-gray-900">{activity.title}</p>
                                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end text-sm text-gray-500">
                                        <div className="flex items-center mb-1 bg-[#F0FDF4] border border-[#BBF7D0] p-1 rounded-2xl">
                                            {getStatusIcon(activity.status)}
                                            <span className="ml-1">{activity.status}</span>
                                        </div>
                                        <span>{activity.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-gray-600" />
                        Performance Metrics
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center text-sm text-gray-700 mb-1 ">
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Success
                                </div>
                                <span>{userData.performanceMetrics.success.count} activities</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-green-500 h-2.5 rounded-full"
                                    style={{ width: `${userData.performanceMetrics.success.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                                <div className="flex items-center">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                                    Warning
                                </div>
                                <span>{userData.performanceMetrics.warning.count} activities</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-yellow-500 h-2.5 rounded-full"
                                    style={{ width: `${userData.performanceMetrics.warning.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                                <div className="flex items-center">
                                    <XCircle className="h-4 w-4 text-red-500 mr-2" />
                                    Failed
                                </div>
                                <span>{userData.performanceMetrics.failed.count} activities</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-red-500 h-2.5 rounded-full"
                                    style={{ width: `${userData.performanceMetrics.failed.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Activity Breakdown</h4>
                        <div className="space-y-2">
                            {userData.performanceMetrics.breakdown.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm text-gray-700">
                                    <span>{item.activity}</span>
                                    <span>{item.count} activities</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <Edit3 className="h-5 w-5 mr-2 text-gray-600" />
                    Status History
                </h3>
                <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    {userData.statusHistory.map((entry, index) => (
                        <div key={entry.id} className="mb-6 relative">
                            <div className="absolute left-[-27px] top-0 h-4 w-4 rounded-full bg-blue-600 border-2 border-white"></div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium text-gray-900">{entry.status}</p>
                                    <p className="text-sm text-gray-600 mt-1">{entry.description}</p>
                                </div>
                                <span className="text-sm text-gray-500">{entry.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
