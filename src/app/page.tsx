"use client";

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
      <div className="w-full  max-w-7xl mx-auto py-8 flex justify-between items-center">
        <p className="text-[26px] font-bold text-left uppercase">
          <span className="text-[26px] font-bold text-left uppercase text-[#222]">
            Bit
          </span>
          <span className="text-[26px] font-bold text-left uppercase text-[#4eb680]">
            core
          </span>
        </p>
        <div className="flex gap-6">
          <p className="text-normal font-light text-left text-[#222]">Features</p>
          <p className="text-normal font-light text-left text-[#222]">Programs</p>
          <p className="text-normal font-light text-left text-[#222]">Pricing</p>
          <p className="text-normal font-light text-left text-[#222]">Company</p>
        </div>
        <div className="flex gap-2">
          <div className="flex justify-center  items-center">
            {!isConnected ? (
              <w3m-connect-button size="sm" />
            ) : (
              <>
                <w3m-network-button />
                <w3m-account-button balance={"show"} />
              </>
            )}
          </div>
        </div>
      </div>
      <Hero isConnected={isConnected} />
    </main>
  );
};

export default Home;
