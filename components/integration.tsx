import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Integration() {
  return (
    <div
      id="integration"
      className="lg:min-h-[85dvh] z-30 min-h-[450px] lg:w-[80%] w-full backdrop-blur-lg  mx-auto relative lg:px-[77px] px-5 text-white flex flex-col items-start gap-6 justify-end lg:py-[56px] bg-[#392058]/40 rounded-[14px]"
    >
      <h2 className="lg:text-[50px] text-[30px]">Integration</h2>
      <p className="lg:text-[20px]">
        felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        <br className="hidden md:block" />
        consequat massa quis enim. Donec pede justo, fringilla vel,
      </p>
      <Button className="text-[20px]  rounded-full py-6 flex items-center justify-center gap-4 bg-[#392058]">
        Get Code
        <Image src="/github.png" alt="github Logo" width={20} height={10} />
      </Button>
    </div>
  );
}
