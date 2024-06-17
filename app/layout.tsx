import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamePlace - Gaming MarketPlace",
  description: "A MarketPlace em que você encontra itens e contas dos seus jogos favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-stone-200		`}
      >
      <Navbar />  
          {children}
      <Footer />
      </body>
    </html>
  );
}
