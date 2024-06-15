import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/app/assets/styles/globals.scss";
import Navigation from "@/app/components/Navigation/Navigation";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Matter's Portfolio",
  description: "My portfolio, built to last!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
