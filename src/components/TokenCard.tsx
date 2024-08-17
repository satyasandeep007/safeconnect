"use client";

import Image from "next/image";
import { AnimatedButton } from "./Buttons"; // Assuming CustomButton is not used
import { useWeb3Modal } from "@web3modal/wagmi/react";

const TokenCard = ({ token, index }: any) => {
  const { open } = useWeb3Modal();

  return (
    <div
      key={index}
      className="flex justify-between items-center bg-white p-4 rounded-none mb-4 border border-[#C6EBDD] dark:bg-gray-900"
    >
      <div className="flex items-center space-x-4">
        <Image
          src={token.tokenInfo.logoUri}
          alt={token.tokenInfo.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <div className="text-lg font-semibold text-[#222222]">
            {token.tokenInfo.symbol}
          </div>
          <div className="text-sm font-light ">{token.tokenInfo.name}</div>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-end space-y-2">
        <div className="px-20">
          <div className="text-lg font-semibold">
            ${parseFloat(token.fiatBalance).toFixed(2)}
          </div>
          <div className="text-sm text-gray-500">
            {parseFloat(token.balance) / Math.pow(10, token.tokenInfo.decimals)}{" "}
            {token.tokenInfo.symbol}
          </div>
        </div>
        <AnimatedButton
          className="bg-[#222] text-white flex justify-center group/modal-btn mt-4 dark:bg-white dark:text-black rounded-none w-36 h-10"
          onClick={() => open({ view: "OnRampProviders" })}
          aria-label="Buy Crypto"
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Buy Crypto
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 dark:bg-white dark:text-black">
            $

            
          </div>
        </AnimatedButton>

        <AnimatedButton
          className="border border-[#222222] text-[#222] flex justify-center group/modal-btn mt-4 dark:bg-white dark:text-black rounded-none w-36 h-10"
          onClick={() => open({ view: "Account" })}
          aria-label="Swap"
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Swap
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20 dark:bg-white dark:text-black">
            ⇄
          </div>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default TokenCard;
