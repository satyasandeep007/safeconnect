"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";

const Home: React.FC = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

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
      <Hero />
    </main>
  );
};

export default Home;
