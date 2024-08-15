"use client";

import Image from "next/image";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

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
          <div className="hidden sm:inline text-xl font-bold">
            Build the Internet
          </div>
        </div>
        <div className="flex items-center">
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
}
