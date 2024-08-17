"use client";

import React, { useEffect, useState } from "react";
import { getCoinData } from "@/lib/api";
import { useRouter } from "next/navigation"; // Updated imports
import Image from "next/image";
import Chart from "@/components/Chart";

const HighLowIndicator = ({ currentPrice, high, low }: any) => {
  const [green, setGreen] = useState(0);

  useEffect(() => {
    if (high !== low) {
      let total = high - low;
      let greenZone = ((high - currentPrice) * 100) / total;
      setGreen(Math.ceil(greenZone));
    }
  }, [currentPrice, high, low]);

  return (
    <div className="flex items-center w-full">
      <span
        className="bg-red h-2 rounded-l-lg"
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green h-2 rounded-r-lg"
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </div>
  );
};

const CryptoDetails = ({ params }: { params: { coinId: string } }) => {
  const router = useRouter();
  const [data, setData]: any = useState(null);
  const [currency, setCurrency] = useState("usd"); // Assuming USD as default
  const coinId = params.coinId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCoinData(coinId);
        console.log(result);

        setData(result);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchData();
  }, [coinId]);

  return (
    <div>
      <div
        className="w-full max-w-7xl h-[90%] bg-gray-900 rounded-lg overflow-hidden text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {data ? (
          <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div className="flex items-center mb-4">
                {data.image?.large && (
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={data.image.large}
                    alt={data.name}
                  />
                )}
                <div className="ml-4">
                  <h1 className="text-2xl font-semibold">{data.name}</h1>
                  <span className="text-sm bg-cyan-600 text-white py-1 px-2 rounded uppercase">
                    {data.symbol}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Price</span>
                  <div
                    className={`text-sm font-medium flex items-center rounded ${
                      data.market_data.price_change_percentage_24h > 0
                        ? "bg-green-500 text-green-900"
                        : "bg-red-500 text-red-900"
                    } p-2`}
                  >
                    <span>
                      {Number(
                        data.market_data.price_change_percentage_24h
                      ).toFixed(2)}
                      %
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`ml-2 ${
                        data.market_data.price_change_percentage_24h > 0
                          ? "fill-green-900 rotate-180"
                          : "fill-red-900"
                      }`}
                    >
                      <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    maximumSignificantDigits: 5,
                  }).format(data.market_data.current_price[currency])}
                </h2>

                <div className="flex justify-between">
                  <div>
                    <span className="text-sm text-gray-300">Market Cap</span>
                    <h2 className="text-lg font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 0,
                      }).format(data.market_data.market_cap[currency])}
                    </h2>
                  </div>
                  <div>
                    <span className="text-sm text-gray-300">
                      Fully Diluted Valuation
                    </span>
                    <h2 className="text-lg font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        notation: "compact",
                      }).format(
                        data.market_data.fully_diluted_valuation[currency]
                      )}
                    </h2>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-gray-300">Total Volume</span>
                  <h2 className="text-lg font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.total_volume[currency])}
                  </h2>
                </div>

                <HighLowIndicator
                  currentPrice={data.market_data.current_price[currency]}
                  high={data.market_data.high_24h[currency]}
                  low={data.market_data.low_24h[currency]}
                />

                <div className="flex justify-between">
                  <div>
                    <span className="text-sm text-gray-300">Low 24H</span>
                    <h2 className="text-lg font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 5,
                      }).format(data.market_data.low_24h[currency])}
                    </h2>
                  </div>
                  <div>
                    <span className="text-sm text-gray-300">High 24H</span>
                    <h2 className="text-lg font-bold">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        minimumFractionDigits: 5,
                      }).format(data.market_data.high_24h[currency])}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">About {data.name}</h2>
              <p
                className="text-sm text-gray-400"
                dangerouslySetInnerHTML={{ __html: data.description.en }}
              ></p>
              <Chart id={coinId} className="mt-6" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full text-white">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoDetails;
