import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/header";
import { NextAuthProvider } from "@/app/provider";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Testing",
  description: "On Next Js",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={montserrat.className}>
        <head />
        <body>
          
            <Header />
            <div>{children}</div>
        </body>
      </html>
    </>
  );
}
