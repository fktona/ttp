import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function AboutSection() {
  return (
    <div
      className=" p-8 md:p-16 lg:px-[100px] max-w-screen-2xl   mx-auto "
      id="about"
    >
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Top indicators */}

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Welcome to the Solana Forum AI Agent – our intelligent guide to
              navigating the dynamic world of the Solana blockchain ecosystem
            </h2>

            {/* Description */}
            <div className="flex flex-col gap-4 justify-start ">
              <p className="text-gray-400">
                Whether you're a developer, investor, or an enthusiast, the
                Solana Forum AI Agent is here to simplify complexity and provide
                clarity. From analyzing market trends to tracking the latest
                developments, our goal is to keep you informed, engaged, and
                ahead of the curve
              </p>
              <Button
                asChild
                className="gred text-white mt-6  w-fit px-8 py-6 relative z-20 text-lg rounded-full"
              >
                <Link href="https://github.com/SOLIN-SOL/sol-insight">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side placeholder */}
          <div className="hidden md:block">
            <div className="w-full aspect-square  rounded-lg">
              <Image
                src="/aboutimg.svg"
                alt="About"
                width={1920}
                height={1080}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
