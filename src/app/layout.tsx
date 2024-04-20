import type { Metadata } from "next";
import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";

// New default font
const abyss = Abyssinica_SIL({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Invitación Digital - X",
  description: "---",
  icons: '/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abyss.className}>{children}</body>
    </html>
  );
}
