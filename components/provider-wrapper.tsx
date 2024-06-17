"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "./theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
