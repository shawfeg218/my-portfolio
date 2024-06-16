import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ProviderWrapper from "@/components/provider-wrapper";
import Navbar from "@/components/Navbar";

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
    icon: "/svg/pyramid720.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 min-w-0 mx-auto max-w-2xl px-6">{children}</main>
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
