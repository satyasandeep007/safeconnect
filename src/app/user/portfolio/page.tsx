"use client";

import { useEffect, useState } from "react";
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

interface NFT {
  id: string;
  name: string;
  imageUri: string;
  description?: string;
}

const PortfolioPage = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [activeTab, setActiveTab] = useState<"tokens" | "nfts">("tokens");
  const [loadingTokens, setLoadingTokens] = useState<boolean>(true);
  const [loadingNfts, setLoadingNfts] = useState<boolean>(true);
  const [errorTokens, setErrorTokens] = useState<string | null>(null);
  const [errorNfts, setErrorNfts] = useState<string | null>(null);
  const chainId = "11155111";
  const safeAddress = "0xE5D661626787d7aeAd7285e0aF6375E4CF3b77fb";

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const data = await getSafeTokens(chainId, safeAddress);
        setTokens(data.items);
      } catch (error) {
        setErrorTokens("Error fetching tokens. Please try again later.");
      } finally {
        setLoadingTokens(false);
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
        setErrorNfts("Error fetching NFTs. Please try again later.");
      } finally {
        setLoadingNfts(false);
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
          {loadingTokens ? (
            <div className="text-center text-gray-500">Loading tokens...</div>
          ) : errorTokens ? (
            <div className="text-center text-red-500">{errorTokens}</div>
          ) : tokens.length === 0 ? (
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
          {loadingNfts ? (
            <div className="text-center text-gray-500">Loading NFTs...</div>
          ) : errorNfts ? (
            <div className="text-center text-red-500">{errorNfts}</div>
          ) : nfts.length === 0 ? (
            <div className="text-center text-gray-500">No NFTs found</div>
          ) : (
            nfts.map((nft, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-4 rounded-lg mb-2"
              >
                <div className="flex-shrink-0 mr-4">
                  {/* <Image
                    src={nft.imageUri}
                    alt={nft.name}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  /> */}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{nft.name}</div>
                  {nft.description && (
                    <div className="text-sm text-gray-600">
                      {nft.description}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
