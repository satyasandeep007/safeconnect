import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/lib/wagmiConfig";
import AppKitProvider from "@/app/providers";
import { Loading } from "@/components/Loading";
import { ThemeProvider } from "./themeprovider";

export const metadata: Metadata = {
  title: "Safe Connect",
  description: "Safe Portfolio Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=epilogue@100,101,200,201,300,400,401,500,501,600,601,700,701,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loading>
          <ThemeProvider>
            <AppKitProvider initialState={initialState}>
              {children}
            </AppKitProvider>
          </ThemeProvider>
        </Loading>
      </body>
    </html>
  );
}
