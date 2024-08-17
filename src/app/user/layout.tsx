"use client";

import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCurrencyEthereum,
  IconArrowsUpDown,
  IconCopy,
  IconArrowsExchange,
} from "@tabler/icons-react";
import { useAccount, useDisconnect } from "wagmi";
import DashboardHeader from "@/components/Header";
import { useRouter } from "next/navigation"; // Updated import for client-side navigation

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const router = useRouter(); // Use useRouter for client-side navigation

  useEffect(() => {
    if (!isConnected) {
      router.push(`/`); // Use router.push for navigation
    }
  }, [isConnected, router]);

  const handleDisconnect = () => {
    disconnect();
    router.push(`/`); // Use router.push for navigation
  };

  const links = [
    {
      label: "Dashboard",
      href: "/user/dashboard",
      icon: (
        <IconBrandTabler className="text-[#222222] dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Transactions",
      href: "/user/transactions",
      icon: (
        <IconArrowsExchange className="text-[#222222] dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Portfolio",
      href: "/user/portfolio",
      icon: (
        <IconCurrencyEthereum className="text-[#222222] dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exchange",
      href: "/user/exchange",
      icon: (
        <IconArrowsUpDown className="text-[#222222] dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      onClick: () => handleDisconnect(),
      icon: (
        <IconArrowLeft className="text-[#222222] dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const truncateAddress = (address: string) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
  };

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000);
    }
  };

  return (
    <div className="flex h-screen bg-[#FCFAF6] dark:bg-gray-900">
      {" "}
      {/* Added dark mode support */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden relative">
            {/* <div className="text-black dark:text-white flex items-center space-x-2">
              <span className="text-sm">
                {isConnected ? truncateAddress(address || "") : "Not Connected"}
              </span>
              <button
                onClick={copyToClipboard}
                className="text-neutral-700 dark:text-neutral-200"
              >
                <IconCopy className="h-4 w-4" />
              </button>
              {tooltipVisible && (
                <div className="absolute top-full mt-1 bg-[#222222] text-white p-1 rounded text-xs">
                  Copied!
                </div>
              )}
            </div> */}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
