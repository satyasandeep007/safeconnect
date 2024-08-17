"use client";

import { useEffect, useState } from "react";
import { getSafeTransactions } from "@/lib/api";
import TransactionCard from "@/components/TransactionCard";

const Transactions = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [openTransaction, setOpenTransaction] = useState<number | null>(null);
  const chainId = "11155111";
  const safeAddress = "0xE5D661626787d7aeAd7285e0aF6375E4CF3b77fb";

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data: any = await getSafeTransactions(chainId, safeAddress);
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const toggleTransaction = (index: number) => {
    setOpenTransaction(openTransaction === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen">
      <h3>Transactions</h3>
      {transactions.length === 0 ? (
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
