"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#integration", label: "Integration" },
  ];

  return (
    <nav className="container mx-auto px-4 py-3 w-full flex justify-between items-center">
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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden text-white">
            <Menu size={24} />
            <span className="sr-only">Open menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[250px] sm:w-[300px] bg-gray-900"
        >
          <div className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navbar;
