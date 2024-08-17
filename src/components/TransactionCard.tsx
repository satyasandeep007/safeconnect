"use client";

import React from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const TransactionCard = ({
  tx,
  index,
  toggleTransaction,
  openTransaction,
}: any) => {
  const isTransfer = tx?.transaction?.txInfo?.type === "Transfer";
  const isCreation = tx?.transaction?.txInfo?.type === "Creation";

  return (
    <div>
      <div
        key={index}
        className="bg-white dark:bg-gray-800 border border-[#C6EBDD] dark:border-gray-700"
      >
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleTransaction(index)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {isTransfer
                ? "Transfer"
                : isCreation
                ? "Safe Account Created"
                : "Unknown"}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              {isTransfer
                ? `From ${tx?.transaction?.txInfo?.sender?.value?.slice(
                    0,
                    6
                  )}...${tx?.transaction?.txInfo?.sender?.value?.slice(-4)}`
                : isCreation
                ? `Created by ${tx?.transaction?.txInfo?.creator?.value?.slice(
                    0,
                    6
                  )}...${tx?.transaction?.txInfo?.creator?.value?.slice(-4)}`
                : "Details not available"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {new Date(tx?.transaction?.timestamp).toLocaleTimeString()}
            </span>
            <span
              className={`text-sm ${
                tx.transaction.txStatus === "SUCCESS"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {tx?.transaction?.txStatus}
            </span>
            {openTransaction === index ? (
              <IconChevronUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            ) : (
              <IconChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
          </div>
        </div>

        {/* Toggleable detailed view */}
        {openTransaction === index && (
          <div className="bg-[#C6EBDD]/30 dark:bg-gray-900 p-4 space-y-4">
            {isTransfer && (
              <>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Sender:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx?.transaction?.txInfo?.sender?.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Recipient:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx?.transaction?.txInfo?.recipient?.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Amount:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {parseFloat(tx?.transaction?.txInfo?.transferInfo?.value) /
                      1e18}{" "}
                    ETH
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Transaction hash:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx.transaction.txHash}
                  </div>
                </div>
              </>
            )}
            {isCreation && (
              <>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Creator:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx?.transaction?.txInfo?.creator?.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Factory:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx?.transaction?.txInfo?.factory?.name} -{" "}
                    {tx?.transaction?.txInfo?.factory?.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Mastercopy:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx?.transaction?.txInfo?.implementation?.name} -{" "}
                    {tx?.transaction?.txInfo?.implementation?.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Transaction hash:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tx.transaction.txHash}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
