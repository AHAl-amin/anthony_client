"use client"

import { useState } from "react"

export default function PaymentHistory() {
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const data = {
    transactions: [
      {
        id: "IN-00234",
        shortId: "ch_1234",
        user: { name: "Sarah Johnson", email: "sarah@example.com" },
        amount: "$499.00",
        status: "Succeeded",
        date: "11/15/2023",
        paymentMethod: "Visa ending in 4242",
        actions: ["Refund", "Details"],
      },
      {
        id: "IN-00578",
        shortId: "ch_5678",
        user: { name: "Michael Chen", email: "michael@example.com" },
        amount: "$49.00",
        status: "Failed",
        date: "11/2/2023",
        paymentMethod: "Mastercard ending in 5555",
        actions: ["Details"],
      },
      {
        id: "IN-00912",
        shortId: "ch_9012",
        user: { name: "Emma Wilson", email: "emma@example.com" },
        amount: "$19.00",
        status: "Succeeded",
        date: "10/10/2023",
        paymentMethod: "American Express ending in 0005",
        actions: ["Refund", "Details"],
      },
      {
        id: "IN-00356",
        shortId: "ch_3456",
        user: { name: "James Rodriguez", email: "james@example.com" },
        amount: "$49.00",
        status: "Succeeded",
        date: "10/20/2023",
        paymentMethod: "Visa ending in 9876",
        actions: ["Refund", "Details"],
      },
      {
        id: "IN-00780",
        shortId: "ch_7890",
        user: { name: "Olivia Smith", email: "olivia@example.com" },
        amount: "$499.00",
        status: "Refunded",
        date: "10/5/2023",
        paymentMethod: "Mastercard ending in 1234",
        actions: ["Details"],
      },
      {
        id: "IN-00248",
        shortId: "ch_2488",
        user: { name: "William Taylor", email: "william@example.com" },
        amount: "$49.00",
        status: "Failed",
        date: "9/28/2023",
        paymentMethod: "Visa ending in 5678",
        actions: ["Details"],
      },
      {
        id: "IN-00137",
        shortId: "ch_1357",
        user: { name: "Sophia Brown", email: "sophia@example.com" },
        amount: "$19.00",
        status: "Succeeded",
        date: "9/15/2023",
        paymentMethod: "Discover ending in 9012",
        actions: ["Refund", "Details"],
      },
    ],
  }

  const handleDetailsClick = (transaction) => {
    setSelectedTransaction(transaction)
    setIsDetailsDialogOpen(true)
  }

  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case "Succeeded":
        return "bg-green-100 text-green-700"
      case "Failed":
        return "bg-red-100 text-red-700"
      case "Refunded":
        return "bg-purple-100 text-purple-700"
      default:
        return ""
    }
  }

  const getActionButtonClasses = (action) => {
    switch (action) {
      case "Refund":
        return "text-red-500 border border-red-200 hover:bg-red-50 hover:text-red-600"
      case "Details":
        return "text-blue-500 border border-blue-200 hover:bg-blue-50 hover:text"
      default:
        return ""
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 pb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Payment History</h2>
        <p className="text-gray-500 mt-1">View and manage payment transactions</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-[150px] py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Transaction
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Amount</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="py-3 px-6 text-right text-xs font-medium text-gray-600 uppercase tracking-wider pr-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-6">
                  <div className="font-medium text-gray-900">{transaction.id}</div>
                  <div className="text-sm text-gray-500">{transaction.shortId}</div>
                </td>
                <td className="py-3 px-6">
                  <div className="font-medium text-gray-900">{transaction.user.name}</div>
                  <div className="text-sm text-gray-500">{transaction.user.email}</div>
                </td>
                <td className="py-3 px-6 text-gray-700">{transaction.amount}</td>
                <td className="py-3 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(transaction.status)}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-gray-700">{transaction.date}</td>
                <td className="py-3 px-6 text-gray-700">{transaction.paymentMethod}</td>
                <td className="py-3 px-6 text-right pr-6  md:space-y-0 space-y-2 ">
                  {transaction.actions.map((action) => (
                    <button
                      key={action}
                      className={`ml-2 inline-flex  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 py-1 cursor-pointer ${getActionButtonClasses(action)}`}
                      onClick={() => action === "Details" && handleDetailsClick(transaction)}
                    >
                      {action}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDetailsDialogOpen && selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Transaction Details</h3>
              <button
                onClick={() => setIsDetailsDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="py-4 grid gap-3">
              <p className="text-sm text-gray-500">Details for transaction ID: {selectedTransaction.id}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="text-sm font-medium text-gray-600">Transaction ID:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.id}</div>

                <div className="text-sm font-medium text-gray-600">Short ID:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.shortId}</div>

                <div className="text-sm font-medium text-gray-600">User Name:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.user.name}</div>

                <div className="text-sm font-medium text-gray-600">User Email:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.user.email}</div>

                <div className="text-sm font-medium text-gray-600">Amount:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.amount}</div>

                <div className="text-sm font-medium text-gray-600">Status:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.status}</div>

                <div className="text-sm font-medium text-gray-600">Date:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.date}</div>

                <div className="text-sm font-medium text-gray-600">Payment Method:</div>
                <div className="text-sm text-gray-800">{selectedTransaction.paymentMethod}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
