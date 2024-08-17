"use client";

import React from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const TransactionCard = ({
  tx,
  index,
  toggleTransaction,
  openTransaction,
}: any) => {
  return (
    <div>
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleTransaction(index)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Safe Account created</span>
            <span className="text-gray-500">
              Created by {tx.transaction.txInfo.creator.value.slice(0, 6)}
              ...
              {tx.transaction.txInfo.creator.value.slice(-4)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">
              {new Date(tx.transaction.timestamp).toLocaleTimeString()}
            </span>
            <span
              className={`text-sm ${
                tx.transaction.txStatus === "SUCCESS"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {tx.transaction.txStatus}
            </span>
            {openTransaction === index ? (
              <IconChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <IconChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </div>
        </div>

        {/* Toggleable detailed view */}
        {openTransaction === index && (
          <div className="bg-gray-50 p-4 space-y-4">
            {/* Display more details */}
            <div>
              <div className="text-sm font-semibold">Creator:</div>
              <div className="text-sm text-gray-600">
                {tx.transaction.txInfo.creator.value}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Factory:</div>
              <div className="text-sm text-gray-600">
                {tx.transaction.txInfo.factory.name} -{" "}
                {tx.transaction.txInfo.factory.value}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Mastercopy:</div>
              <div className="text-sm text-gray-600">
                {tx.transaction.txInfo.implementation.name} -{" "}
                {tx.transaction.txInfo.implementation.value}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Transaction hash:</div>
              <div className="text-sm text-gray-600">
                {tx.transaction.txHash}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
