import type { Metadata } from "next";
import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import Transition from "@/components/Transition"

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
    // By default the screen displays like in mobile screen
    <html lang="en" className="w-[768px] bg-stone-900 mx-auto">
      <body className={abyss.className}>
        <Transition>
          { children }
        </Transition>
      </body>
    </html>
  );
}
