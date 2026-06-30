import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalPRO Realty | DFW and West Texas Real Estate",
  description:
    "A modern LocalPRO Realty landing page for buyers, sellers, commercial clients, and home valuation leads across Dallas-Fort Worth and West Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
