"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import ThemeToggle from "./ThemeToggle";

const DashboardHeader: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <header className="w-full py-4 px-8 bg-[#FCFAF6] dark:bg-gray-900 flex justify-between items-center ">
      <div className="flex items-center">
        <Image
          src="/walletconnect.png"
          width={24}
          height={24}
          className="mr-3"
          alt="logo"
        />
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          1Connect
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <div className="flex items-center gap-x-3">
          {!isConnected ? (
            <w3m-connect-button />
          ) : (
            <>
              <w3m-network-button />
              <w3m-account-button balance={"show"} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
