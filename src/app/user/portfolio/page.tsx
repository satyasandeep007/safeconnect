// pages/profile.tsx
import React from "react";

const Portfolio = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-medium">Bitcoin (BTC)</h2>
          <p className="text-sm text-gray-500">Amount: 0.5 BTC</p>
          <p className="text-sm text-gray-500">Value: $30,000</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-medium">Ethereum (ETH)</h2>
          <p className="text-sm text-gray-500">Amount: 2.0 ETH</p>
          <p className="text-sm text-gray-500">Value: $6,000</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-medium">Aptos (APT)</h2>
          <p className="text-sm text-gray-500">Amount: 100 APT</p>
          <p className="text-sm text-gray-500">Value: $5,000</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
