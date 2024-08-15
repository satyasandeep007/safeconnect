// src/pages/Portfolio.tsx

import { FC } from "react";

const Portfolio: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="text-lg">User: John Doe</div>
        </div>
      </header>

      {/* Portfolio Overview */}
      <section className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="flex justify-between items-center">
            <div className="text-lg">
              <div>Total Balance:</div>
              <div className="text-2xl font-bold">$12,345.67</div>
            </div>
            <div className="text-lg">
              <div>Investments:</div>
              <div className="text-2xl font-bold">10</div>
            </div>
          </div>
        </div>

        {/* Investment Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Investment Details</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200 border-b">
                <th className="py-2 px-4 text-left">Investment</th>
                <th className="py-2 px-4 text-left">Current Value</th>
                <th className="py-2 px-4 text-left">Historical Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Bitcoin</td>
                <td className="py-2 px-4">$8,000.00</td>
                <td className="py-2 px-4">+10% (Last 30 Days)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Ethereum</td>
                <td className="py-2 px-4">$4,000.00</td>
                <td className="py-2 px-4">+5% (Last 30 Days)</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul>
            <li className="flex justify-between py-2 border-b">
              <div>Buy BTC</div>
              <div className="text-green-600">+$500.00</div>
            </li>
            <li className="flex justify-between py-2 border-b">
              <div>Sell ETH</div>
              <div className="text-red-600">-$200.00</div>
            </li>
            {/* Add more transactions as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
