"use client";

import Image from "next/image";
import { useState } from "react";
import BitcoinLogo from "@/assets/cryptos/bitcoin.png";
import EthereumLogo from "@/assets/cryptos/ethereum.png";
import USDTLogo from "@/assets/cryptos/tether.png";
import inchLogo from "@/assets/cryptos/1inch.png";
import BNBLogo from "@/assets/cryptos/bnb.png";
import CoinbaseLogo from "@/assets/coinbase-2.png";

const supportedCryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: BitcoinLogo,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: EthereumLogo,
  },
  {
    name: "Tether",
    symbol: "USDT",
    logo: USDTLogo,
  },
  {
    name: "Binance",
    symbol: "BNB",
    logo: BNBLogo,
  },
  {
    name: "1inch",
    symbol: "1INCH",
    logo: inchLogo,
  },
];

const Exchange = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          What is Onramp?
        </h1>
        <p className="text-lg mb-6 text-gray-800">
          Onramp is designed to make your entry into the world of cryptocurrency
          seamless and hassle-free. By allowing you to convert fiat currency
          directly within the app, Onramp simplifies your experience, enabling
          you to buy popular digital assets swiftly. With minimal KYC
          requirements,{" "}
          <span className="text-[#4eb680] font-semibold">Onramp</span> ensures a
          smooth, secure, and quick onboarding process.
          <br />
          <br />
          <span className="font-semibold text-[#0052cc]">Coinbase</span> Onramp
          is a industry-leading platform that offers a streamlined user
          experience with minimal KYC requirements. Its robust security and
          intuitive interface make it easy to manage your crypto transactions
          confidently.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
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

      <div className="flex-1 bg-white p-6 shadow-custom rounded-lg max-w-md mx-auto border border-gray-200 h-[44vh] mt-12">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">On Ramp</h1>
        <w3m-onramp-widget aria-label="Onramp Widget" />
        <div className="flex items-center space-x-2 mt-8">
          <span className="text-sm text-gray-600">Powered by</span>
          <Image
            src={CoinbaseLogo}
            width={100}
            height={40}
            alt="Coinbase"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
