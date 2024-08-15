// pages/profile.tsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            <img
              src="/default-profile.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Information */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
            <p className="text-gray-600">Wallet Address: 0x1234...abcd</p>
          </div>
        </div>
        {/* Edit Button */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>

      {/* Settings Section */}
      <div className="w-full max-w-4xl mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Account Settings
        </h2>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email</span>
            <span className="text-gray-600">johndoe@example.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Wallet Address</span>
            <span className="text-gray-600">0x1234...abcd</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Password</span>
            <button className="text-blue-500 hover:underline">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
