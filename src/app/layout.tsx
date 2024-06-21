import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/assets/styles/globals.scss";
import Navigation from "@/app/components/Navigation/Navigation";
const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <Navigation />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
