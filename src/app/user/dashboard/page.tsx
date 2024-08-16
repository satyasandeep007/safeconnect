"use client";

import { useWalletInfo } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Dashboard = () => {
  const { walletInfo } = useWalletInfo();
  const { isConnected, status, address, chain } = useAccount();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-medium">Account Overview</h2>
          <p className="text-sm text-gray-500 mt-2">Address: {address}</p>
          <p className="text-sm text-gray-500 mt-2">
            Connected Wallet: {walletInfo?.name}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            isConnected: {String(isConnected)}
          </p>
          <p className="text-sm text-gray-500 mt-2">Status: {status}</p>
          <p className="text-sm text-gray-500 mt-2">Chain: {chain?.name}</p>
          <p className="text-sm text-gray-500 mt-2">Balance: $50,000</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-medium">Recent Transactions</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">Sent 0.5 BTC - $30,000</li>
            <li className="text-sm text-gray-600">Received 2.0 ETH - $6,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
