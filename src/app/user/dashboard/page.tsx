"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { getCryptoMarketData, getNftsData } from "@/lib/api";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
};

type NFT = {
  id: string;
  name: string;
  image_url: string;
  symbol: string;
  floor_price: number | null;
};

const Dashboard = () => {
  const { isConnected, address, chain } = useAccount();
  const [coins, setCoins] = useState<Coin[]>([]);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"coins" | "nfts">("coins");
  const router = useRouter();

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      try {
        const data = await getCryptoMarketData();
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch market data", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTrendingNFTs = async () => {
      setLoading(true);
      try {
        const data = await getNftsData();
        setNfts(data);
      } catch (error) {
        console.error("Failed to fetch NFT data", error);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "coins") {
      fetchMarketData();
    } else {
      fetchTrendingNFTs();
    }
  }, [activeTab]);

  const TabButton = ({
    tab,
    label,
  }: {
    tab: "coins" | "nfts";
    label: string;
  }) => (
    <button
      className={`px-4 py-2 text-lg font-semibold ${
        activeTab === tab
          ? "text-blue-500 border-b-4 border-blue-500 dark:text-blue-400 dark:border-blue-400"
          : "text-gray-600 dark:text-gray-400"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6 space-y-8  dark:bg-gray-900 dark:text-white max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-left">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-medium mb-4">Account Overview</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Address:{" "}
            <span className="font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            isConnected: {String(isConnected)}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Chain: {chain?.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400">Balance: $50,000</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-medium mb-4">Recent Transactions</h2>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              Sent 0.5 BTC - $30,000
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Received 2.0 ETH - $6,000
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          <TabButton tab="coins" label="Top 10 Cryptocurrencies" />
          <TabButton tab="nfts" label="Trending NFTs" />
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : activeTab === "coins" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coins?.map((coin) => (
              <div
                key={coin.id}
                onClick={() => router.push(`/user/dashboard/tokens/${coin.id}`)}
                className="bg-white dark:bg-gray-800 border p-4 rounded-lg shadow-lg hover:cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                  <div>
                    <h2 className="text-lg font-semibold">{coin.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {coin.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-bold">
                    ${coin.current_price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Market Cap: ${coin.market_cap.toLocaleString()}
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts.length > 0 ? (
              nfts.map((nft) => (
                <div
                  key={nft.id}
                  className="bg-white dark:bg-gray-800 border p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={nft.image_url}
                      alt={nft.name}
                      className="w-10 h-10"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{nft.name}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {nft.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Floor Price: ${nft.floor_price?.toLocaleString() || "N/A"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400">
                No NFTs found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
