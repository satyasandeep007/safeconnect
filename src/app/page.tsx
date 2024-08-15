"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Home: React.FC = () => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const baseStyle =
    "px-4 py-2 font-bold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0 focus:outline-none";

  return (
    <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center">
      <header className="w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/walletconnect.png"
            width={20}
            height={20}
            className="mr-2"
            alt="logo"
          />
          <div className="text-xl font-bold text-black">Build the Internet</div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => {
              open({ view: "OnRampProviders" });
            }}
            className={`${baseStyle} bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 flex items-center`}
          >
            <Image
              src="https://icoholder.com/media/cache/ico_logo_view_page/files/img/3f90198db433d70d4b80933214def548.png"
              width={15}
              height={15}
              alt="buycrypto"
              className="mr-3"
            />
            Buy Crypto
          </button>

          <button
            onClick={() => {
              open({ view: "Account" });
            }}
            className={`${baseStyle} bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 flex items-center`}
          >
            Swap
          </button>
          {!isConnected ? (
            <w3m-connect-button />
          ) : (
            <>
              <w3m-network-button />
              <w3m-account-button balance={"show"} />
            </>
          )}
        </div>
      </header>
      <h2 className="my-8 text-2xl font-bold leading-snug text-center">
        Examples
      </h2>
    </main>
  );
};

export default Home;
