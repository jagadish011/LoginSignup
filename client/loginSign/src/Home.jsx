import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 text-white py-4 px-8">
        <h1 className="text-xl font-semibold">Customer Dashboard</h1>
      </nav>
      
      {/* Content Section */}
      <div className="flex flex-col items-start justify-start w-4/5 my-8">
        <h2 className="text-2xl mb-4">Welcome, User!</h2>
        <p className="text-gray-600">Here are your dashboard options:</p>
        <ul className="list-disc pl-5">
          <li>View Account Details</li>
          <li>Track Orders</li>
          <li>Update Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;