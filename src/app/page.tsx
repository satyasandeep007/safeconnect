"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import Hero from "@/components/Hero";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      redirect(`/user/dashboard`);
    }
  }, [isConnected]);

  return (
    <main className="h-screen bg-[#FCFAF6]">
      <header className="max-w-7xl mx-auto w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/walletconnect.png"
            width={20}
            height={20}
            className="mr-2"
            alt="logo"
          />
          <div className="text-xl font-bold text-black">1Connect</div>
        </div>
        <div className="flex items-center gap-x-2">
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
      <Hero isConnected={isConnected} />
    </main>
  );
};

export default Home;
