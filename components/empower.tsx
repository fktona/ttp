import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Empower() {
  return (
    <div className="lg:h-[70dvh] lg:px-[100px] max-h-[700px] h-[500px] isolate w-full relative flex flex-col  max-w-screen-2xl   mx-auto  items-center justify-center">
      <div
        className=" w-[80%] relative -top-7 text-white flex-col md:text-[53px] text-[30px] lg:leading-[63px] h-[80%] bg-white/5 backdrop-blur-lg rounded-3xl flex items-center gap-6 justify-center
      text-center"
      >
        <p>
          Empowering Solana <br />
          with Intelligent Insights
        </p>
        <Button
          size="lg"
          className="bg-[#10FB9B] bg-[#10FB9B]/70 text-black text-lg rounded-full"
        >
          Get Started
        </Button>
      </div>
      <div className="absolute -z-10  inset-0 ">
        <Image
          src="/gradient.svg"
          alt="solana"
          fill
          // objectPosition="center"
          className="md:object-contain object-cover"
        />
      </div>
    </div>
  );
}
