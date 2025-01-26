"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconList from "./ui/icon-list";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#integration", label: "Integration" },
  ];

  return (
    <nav className="container mx-auto px-4 py-3 lg:px-[100px] w-full flex justify-between items-center">
      <div className="w-12 h-12 relative">
        <Image
          src="/logo-top.png"
          alt="Logo"
          width={37}
          height={33}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white/80 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <IconList />
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden text-white">
            <Menu size={24} />
            <span className="sr-only">Open menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="w-full h-screen bg-black p-0">
          <div className="flex flex-col h-full relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo-top.png"
                  alt="Logo"
                  width={37}
                  height={33}
                  className="object-contain"
                />
              </div>
              <SheetTrigger asChild>
                <button className="text-white">
                  <X size={24} />
                  <span className="sr-only">Close menu</span>
                </button>
              </SheetTrigger>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors text-2xl py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="absolute bottom-6 w-full flex justify-center z-30">
                <IconList />
              </div>

              <div className="  w-full h-[180px]   blur-[116px]   mx-auto   absolute bottom-0 bg-[#392058]" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navbar;
