import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import IconList from "./ui/icon-list";

export default function Footer() {
  return (
    <footer className="w-full lg:px-[100px] bg-black py-3 px-4">
      <div className="container mx-auto flex items-center justify-center md:justify-between text-sm text-gray-300">
        <div>Some AI Agent © {new Date().getFullYear()} all right reserved</div>
        <IconList />{" "}
        <nav className="md:flex  gap-6 hidden">
          <a href="#about" className="hover:text-white transition-colors">
            About Us
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#integration" className="hover:text-white transition-colors">
            Integration
          </a>
        </nav>
      </div>
    </footer>
  );
}
