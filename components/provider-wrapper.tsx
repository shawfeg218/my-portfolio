"use client";
import { ThemeProvider } from "./theme-provider";
import { NextUIProvider } from "@nextui-org/react";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </>
  );
}
