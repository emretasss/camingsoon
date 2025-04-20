import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Doğru ithalat

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marithen - Coming Soon",
  description: "Marithen yakında hizmetinizde. Güncellemeler için takipte kalın!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}