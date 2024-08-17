"use client";

import Image from "next/image";
import { useState } from "react";

// Supported Cryptos and their Logos
const supportedCryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: "/path/to/bitcoin-logo.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: "/path/to/ethereum-logo.png",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    logo: "/path/to/usdc-logo.png",
  },
];

const Exchange = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Side: Information about Onramp */}
      <div className="flex-1 bg-white p-6 shadow-xl rounded-lg max-w-md mx-auto bg-gradient-to-r from-blue-400 to-purple-500 transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          What is Onramp?
        </h1>
        <p className="text-lg text-gray-100 mb-6">
          Onramp allows you to easily convert fiat currency into cryptocurrency
          directly within the app. With Onramp, you can quickly buy popular
          digital assets and get started with your crypto journey seamlessly.
          Enjoy a smooth and secure onboarding process without the hassle.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Supported Assets
        </h2>
        <div
          className={`grid grid-cols-2 ${
            showMore ? "md:grid-cols-3" : "md:grid-cols-2"
          } gap-4`}
        >
          {supportedCryptos.map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex items-center space-x-4 p-2 border border-gray-300 rounded-lg bg-white shadow-sm transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={crypto.logo}
                alt={crypto.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{crypto.name}</h3>
                <p className="text-sm text-gray-600">{crypto.symbol}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Right Side: Onramp Widget and Swap Button */}
      <div className="flex-1 bg-white p-6 shadow-xl rounded-lg max-w-md mx-auto bg-gradient-to-r from-green-400 to-blue-500 transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">On Ramp</h1>
        <w3m-onramp-widget aria-label="Onramp Widget" />
        <span className="text-sm text-gray-600">Powered By Coinbase</span>
      </div>
    </div>
  );
};

export default Exchange;
