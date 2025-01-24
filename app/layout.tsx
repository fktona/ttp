import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased font-helvetica overflow-x-hidden   lg:px-[100px] bg-black`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
