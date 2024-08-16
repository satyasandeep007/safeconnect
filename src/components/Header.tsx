"use client";

import Image from "next/image";
import { useAccount } from "wagmi";

const DashboardHeader: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <header className="w-full py-2 px-12 bg-white flex justify-between items-center">
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
  );
};

export default DashboardHeader;
