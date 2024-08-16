"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { AnimatedButton } from "@/components/Buttons";

const Exchange = () => {
  const { open } = useWeb3Modal();

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Crypto Exchange</h1>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
          <w3m-onramp-widget />
          <AnimatedButton
            className="bg-black   text-white flex justify-center group/modal-btn mt-4"
            onClick={() => {
              open({ view: "Account" });
            }}
          >
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Swap
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ⇄
            </div>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
