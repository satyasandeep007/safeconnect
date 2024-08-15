// app/layout.tsx

"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconCurrencyEthereum,
  IconArrowsUpDown,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useAccount } from "wagmi";
import { LogoIcon } from "@/components/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: "Dashboard",
      href: "/user/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/user/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Portfolio",
      href: "/user/portfolio",
      icon: (
        <IconCurrencyEthereum className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/user/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Exchange",
      href: "/user/exchange",
      icon: (
        <IconArrowsUpDown className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const { isConnected } = useAccount();

  return (
    <html>
      <body>
        <div
          className={cn(
            "rounded-md flex flex-col md:flex-row bg-gray-200  w-full flex-1 max-w-screen mx-auto border border-neutral-200 overflow-hidden",
            "h-screen"
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? (
                  <>
                    {!isConnected ? (
                      <w3m-connect-button />
                    ) : (
                      <>
                        <w3m-account-button balance={"hide"} />
                      </>
                    )}
                  </>
                ) : (
                  <LogoIcon />
                )}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
              </div>
              <div>
                {open ? (
                  <>
                    {!isConnected ? (
                      <w3m-connect-button />
                    ) : (
                      <>
                        <w3m-network-button />
                        <w3m-account-button balance={"show"} />
                      </>
                    )}
                  </>
                ) : (
                  <LogoIcon />
                )}
              </div>
            </SidebarBody>
          </Sidebar>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
