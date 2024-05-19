import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "400" });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <main className={raleway.className}>
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
