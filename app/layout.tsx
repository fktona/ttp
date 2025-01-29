import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sol-Insights",
  description: "Solana Insight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased font-helvetica overflow-x-hidden    bg-black`}
      >
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
