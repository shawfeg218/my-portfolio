import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav";
import ProviderWrapper from "@/components/provider-wrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Shawn Feng",
    template: "%s | Shawn Feng",
  },
  description: "Frontend web developer.",
  icons: {
    icon: "/svg/SIcon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ProviderWrapper>
          <main className="min-h-screen min-w-0 mx-auto py-12 max-w-2xl border border-red-500">
            <Navbar />
            {children}
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
