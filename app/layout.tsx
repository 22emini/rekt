import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$REKT - The Memecoin for Survivors",
  description: "From the ashes of rugs and liquidations rises $REKT - the memecoin that turns your losses into memes and your memes into gains. Only on Base.",
  icons: {
    icon: '/images/sittingrattel.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
