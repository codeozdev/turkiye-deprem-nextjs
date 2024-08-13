import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import React from "react";

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
      <body className="font-ubuntu">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="max-w-6xl 3xl:max-w-7xl mx-auto my-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
