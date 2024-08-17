"use client";

import Image from "next/image";
import { AnimatedButton, CustomButton } from "./Buttons";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const TokenCard = ({ token, index }: any) => {
  const { open } = useWeb3Modal();

  return (
    <div
      key={index}
      className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2"
    >
      <div className="flex items-center space-x-4">
        <Image
          src={token.tokenInfo.logoUri}
          alt={token.tokenInfo.name}
          width={20}
          height={20}
          className="rounded-full"
        />
        <div>
          <div className="text-lg font-semibold">{token.tokenInfo.name}</div>
          <div className="text-sm text-gray-500">{token.tokenInfo.symbol}</div>
        </div>
      </div>

      <AnimatedButton
        className="bg-black text-white flex justify-center group/modal-btn mt-4"
        onClick={() => {
          open({ view: "OnRampProviders" });
        }}
      >
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Buy Crypto
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ⇅
        </div>
      </AnimatedButton>
      <AnimatedButton
        className="bg-black text-white flex justify-center group/modal-btn mt-4"
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

      <div className="text-right">
        <div className="text-lg font-semibold">
          ${parseFloat(token.fiatBalance).toFixed(2)}
        </div>
        <div className="text-sm text-gray-500">
          {parseFloat(token.balance) / Math.pow(10, token.tokenInfo.decimals)}{" "}
          {token.tokenInfo.symbol}
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
