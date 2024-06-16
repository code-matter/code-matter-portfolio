import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "@/app/assets/styles/globals.scss";
import Navigation from "@/app/components/Navigation/Navigation";
import Construction from "./components/Construction/Construction";
const baloo = Baloo_2({ subsets: ["latin"] });

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
      <body className={baloo.className}>
        <Navigation />
        <Construction />
        {/* {children} */}
      </body>
    </html>
  );
}
