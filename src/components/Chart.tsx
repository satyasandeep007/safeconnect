"use client";

import React, { useLayoutEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getMarketChartData } from "@/lib/api";

function CustomTooltip({ payload, label, active, currency = "usd" }: any) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
        <p className="text-sm">{`${label} : ${new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 5,
        }).format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
}

const ChartComponent = ({ data, type }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey={type} stroke="#14ffec" strokeWidth={2} />
        <CartesianGrid stroke="#444" strokeDasharray="3 3" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Chart = ({ id }: any) => {
  const [chartData, setChartData] = useState([]);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);

  useLayoutEffect(() => {
    const getChartData = async (id: any) => {
      try {
        const data = await getMarketChartData(id, days);
        const convertedData = data[type].map((item: any[]) => ({
          date: new Date(item[0]).toLocaleDateString(),
          [type]: item[1],
        }));
        setChartData(convertedData);
      } catch (error) {
        console.error(error);
      }
    };

    getChartData(id);
  }, [id, type, days]);

  return (
    <div className="w-full h-60 bg-gray-900 p-8 rounded-lg shadow-lg">
      <ChartComponent data={chartData} type={type} />
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            type === "prices"
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setType("prices")}
        >
          Price
        </button>
        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            type === "market_caps"
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setType("market_caps")}
        >
          Market Caps
        </button>
        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            type === "total_volumes"
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setType("total_volumes")}
        >
          Total Volumes
        </button>

        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            days === 7
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setDays(7)}
        >
          7d
        </button>
        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            days === 14
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setDays(14)}
        >
          14d
        </button>
        <button
          className={`text-sm py-2 px-4 rounded-full transition-colors ${
            days === 30
              ? "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-gray-900"
              : "bg-gray-700 text-gray-300 dark:bg-gray-600 dark:text-gray-400"
          }`}
          onClick={() => setDays(30)}
        >
          30d
        </button>
      </div>
    </div>
  );
};

export default Chart;
