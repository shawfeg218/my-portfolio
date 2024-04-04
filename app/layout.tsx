import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ProviderWrapper from "@/components/provider-wrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased flex flex-col min-h-[100dvh]", fontSans.variable)}>
        <ProviderWrapper>
          <main className="grow min-w-0 mx-auto max-w-7xl">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
