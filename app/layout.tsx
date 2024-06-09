import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ProviderWrapper from "@/components/provider-wrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <div className="flex flex-col h-screen">
            <Navbar />
            <ScrollArea className="flex-1">
              <main className="min-w-0 mx-auto max-w-3xl px-6">{children}</main>
            </ScrollArea>
            <Footer />
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
