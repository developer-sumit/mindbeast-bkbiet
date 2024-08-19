import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CUSTOM
import { app } from "@/config";
import ScrollToTop from "@/components/shared/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: app.name,
  description: app.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
