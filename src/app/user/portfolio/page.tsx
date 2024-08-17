"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getSafeCollectibles, getSafeTokens } from "@/lib/api";
import TokenCard from "@/components/TokenCard";

interface Token {
  tokenInfo: {
    type: string;
    address: string;
    decimals: number;
    symbol: string;
    name: string;
    logoUri: string;
  };
  balance: string;
  fiatBalance: string;
  fiatConversion: string;
}

const PortfolioPage = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [nfts, setNfts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"tokens" | "nfts">("tokens");
  const chainId = "11155111";
  const safeAddress = "0xE5D661626787d7aeAd7285e0aF6375E4CF3b77fb";

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const data = await getSafeTokens(chainId, safeAddress);
        setTokens(data.items);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };

    fetchTokens();
  }, [chainId, safeAddress]);

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const data = await getSafeCollectibles(chainId, safeAddress);
        setNfts(data.results);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNfts();
  }, [chainId, safeAddress]);

  return (
    <div className="w-full max-w-screen">
      <div className="mb-4 flex">
        <button
          className={`flex-1 py-2 px-4 text-lg ${
            activeTab === "tokens" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("tokens")}
        >
          Tokens
        </button>
        <button
          className={`flex-1 py-2 px-4 text-lg ${
            activeTab === "nfts" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("nfts")}
        >
          NFTs
        </button>
      </div>

      {activeTab === "tokens" ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tokens</h2>

          {tokens.length === 0 ? (
            <div className="text-center text-gray-500">No tokens found</div>
          ) : (
            tokens.map((token, index) => (
              <TokenCard token={token} index={index} key={index} />
            ))
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">NFTs</h2>

          {nfts.length === 0 ? (
            <div className="text-center text-gray-500">No NFTs found</div>
          ) : (
            nfts.map((nft, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2"
              >
                <div className="text-lg font-semibold">NFT {index + 1}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
