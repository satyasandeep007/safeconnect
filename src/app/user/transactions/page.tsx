"use client";

import { useEffect, useState } from "react";
import { getSafeTransactions } from "@/lib/api";
import TransactionCard from "@/components/TransactionCard";
import { useAccount } from "wagmi";

interface Transaction {
  transaction: {
    txInfo: {
      type: string;
      sender?: { value: string };
      recipient?: { value: string };
      creator?: { value: string };
      factory?: { name: string; value: string };
      implementation?: { name: string; value: string };
      transferInfo?: { value: string };
    };
    timestamp: string;
    txStatus: string;
    txHash: string;
  };
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [openTransaction, setOpenTransaction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isConnected, address, chainId }: any = useAccount();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data: Transaction[] = await getSafeTransactions(chainId, address);
        setTransactions(data);
      } catch (error) {
        setError("Error fetching transactions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [chainId, address]);

  const toggleTransaction = (index: number) => {
    setOpenTransaction(openTransaction === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen">
      <h3 className="text-2xl font-semibold mb-4">Transactions</h3>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : transactions.length === 0 ? (
        <div className="text-center text-gray-500">No transactions found</div>
      ) : (
        <div className="space-y-2">
          {transactions.map((tx, index) => (
            <TransactionCard
              tx={tx}
              index={index}
              toggleTransaction={toggleTransaction}
              openTransaction={openTransaction}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Transactions;
