import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import FlickeringGrid from "../registry/magicui/flickering-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADAS - Autonomous Drone Aerial Systems",
  description: "The world's most advanced autonomous drone network for logistics and surveillance.",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}> 
        <Providers>
          <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
            <FlickeringGrid className="w-full h-full opacity-30" squareSize={4} gridGap={8} color="#60A5FA" maxOpacity={0.2} flickerChance={0.06} width={1920} height={1200} />
          </div>
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
