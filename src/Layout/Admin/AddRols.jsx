import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function AddRoles() {
  const [status, setStatus] = useState("active");
  const [viewerPermission, setViewerPermission] = useState(false);
  const [subscriptionEditorPermission, setSubscriptionEditorPermission] = useState(false);
  const [subAdminPermission, setSubAdminPermission] = useState(false);
  const navigate =useNavigate()

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <header className="mb-6">
        <div 
            onClick={() =>navigate("/admin_dashboard/user_roles")}
         className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
          <FaChevronLeft className="h-4 w-4" />
          Back to Roles
        </div>
      </header>

      <main className="mx-auto w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Add New Role</h1>
          <p className="text-gray-500 text-sm">Create a new role with specific permissions for your team members</p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="role-name" className="block text-sm font-medium text-gray-700">
              Role Name <span className="text-red-500">*</span>
            </label>
            <input
              id="role-name"
              type="text"
              placeholder="Enter role name"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe the purpose of this role"
              className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Permissions</h2>
            <div className="grid gap-4 rounded-md border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <label htmlFor="viewer-permission" className="text-sm font-medium text-gray-700">
                  Viewer
                </label>
                <button
                  role="switch"
                  aria-checked={viewerPermission}
                  onClick={() => setViewerPermission(!viewerPermission)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    viewerPermission ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span className="sr-only">Toggle Viewer permission</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      viewerPermission ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="subscription-editor-permission" className="text-sm font-medium text-gray-700">
                  Subscription editor
                </label>
                <button
                  role="switch"
                  aria-checked={subscriptionEditorPermission}
                  onClick={() => setSubscriptionEditorPermission(!subscriptionEditorPermission)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    subscriptionEditorPermission ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span className="sr-only">Toggle Subscription editor permission</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      subscriptionEditorPermission ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="sub-admin-permission" className="text-sm font-medium text-gray-700">
                  Sub - Admin
                </label>
                <button
                  role="switch"
                  aria-checked={subAdminPermission}
                  onClick={() => setSubAdminPermission(!subAdminPermission)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    subAdminPermission ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span className="sr-only">Toggle Sub - Admin permission</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      subAdminPermission ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Status</h2>
            <div className="flex gap-2">
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2   cursor-pointer  focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                  status === "active"
                    ? "bg-[#BBF7D0] text-gray-700 hover:bg-green-600/80"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setStatus("active")}
              >
                Active
              </button>
              <button
                className={`inline-flex   cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                  status === "inactive"
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setStatus("inactive")}
              >
                Inactive
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button className="inline-flex items-center cursor-pointer border border-gray-300 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-gray-100 text-gray-700">
            Cancel
          </button>
          <button className="inline-flex  cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
            Save Role
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddRoles;