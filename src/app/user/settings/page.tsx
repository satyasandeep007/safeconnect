import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-medium mb-4">Account Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="******"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </form>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-medium mb-4">Notifications</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm font-medium">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm font-medium">
                Push Notifications
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Save Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
