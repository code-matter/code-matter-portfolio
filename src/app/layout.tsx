import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/assets/globals.scss";

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
