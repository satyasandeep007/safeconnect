"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { AnimatedButton } from "@/components/Buttons";

const Exchange = () => {
  const { open } = useWeb3Modal();

  // Handle potential errors
  const handleOpenModal = () => {
    try {
      open({ view: "Account" });
    } catch (error) {
      console.error("Error opening Web3Modal:", error);
      // You can show a user-friendly message here
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Crypto Exchange</h1>
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
        <w3m-onramp-widget aria-label="Onramp Widget" />
        <AnimatedButton
          className="bg-black text-white flex justify-center group relative mt-4"
          onClick={handleOpenModal}
          aria-label="Open Swap Modal"
        >
          <span className="group-hover:translate-x-40 text-center transition duration-500">
            Swap
          </span>
          <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ⇄
          </div>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Exchange;
