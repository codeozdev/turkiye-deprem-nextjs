import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Türkiye Deprem Tarihi",
  description: "Türkiye'de meydana gelen depremler hakkında bilgilere ulaşın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="sm:container lg:px-0 px-3 sm:h-[calc(100vh-56px)] py-10 sm:py-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
