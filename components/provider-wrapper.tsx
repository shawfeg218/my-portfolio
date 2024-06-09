"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "./theme-provider";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
