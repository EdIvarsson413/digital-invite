import type { Metadata } from "next";
import { Abyssinica_SIL } from "next/font/google";
import "./globals.css";
import Transition from "@/components/invitation/Transition"

// New default font
const abyss = Abyssinica_SIL({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Diana Guadalupe - Invitación Digital",
  description: "",
  icons: '/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // By default the screen (md) displays like in mobile screen
    <html lang="en" className="md:w-[768px] md:bg-stone-900 mx-auto">
      <body id="root" className={abyss.className}>
        <Transition>
          { children }
        </Transition>
      </body>
    </html>
  );
}
