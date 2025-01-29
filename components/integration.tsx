import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Integration() {
  return (
    <div className="w-full px-5 relative s   lg:px-[120px] aspect-video  rounded-xl  max-w-screen-2xl z-30  mx-auto ">
      <div className="w-full h-full 2xl:min-h-[700px] min-h-[378px] relative bottom-0 z-30 flex items-end   mx-auto left-0  rounded-xl">
        <Image
          src={"/int.svg"}
          alt="integration"
          fill
          className="hidden md:block"
        />
        <Image
          src={"/ini-mobile.png"}
          alt="integration"
          fill
          className="md:hidden"
        />
        <div className=" px-10 lg:px-[57px] lg:pb-12  pb-4  relative z-20      lg:space-y-[22px] space-y-3  font-helvetica   text-white ">
          <h2 className="lg:text-[50px] text-[25px]">Integration</h2>
          <p className="lg:text-[36px] lg:leading-[43px] leading-[15px] text-[14px] lg:max-w-[80%] ">
            Integrate our framework to start understanding real-time market
            movements,
            {/* <br className="hidden md:block" /> */}
            including memecoin trends and opportunities, with actionable data.
          </p>
          <Button className="lg:text-[20px] text-[14px]  rounded-full lg:py-6 py-3    flex items-center justify-center gap-4  bg-[#392058]">
            <a
              href="https://github.com/SOLIN-SOL/sol-insight"
              target="_blank"
              className="flex items-center gap-2"
            >
              Get Code
              <Image
                src="/github.png"
                alt="github Logo"
                width={20}
                height={10}
              />
            </a>
          </Button>
        </div>
      </div>

      {/* <Image
        src="/blur.png"
        alt="integration"
        width={1000}
        height={1000}
        className="object-cover lg:object-contain lg:w-[60%] w-full  aspect-video rounded-xl  z-10 top-0 blur-sm absolute left-0"
      />
      <div className="w-full min-h-[60%]  absolute bottom-0 z-30 blur-xl   mx-auto left-0 bg-[#1A1B23] rounded-xl" />
      <div className="w-full min-h-[60%]  absolute px-5 bottom-0 z-40 flex flex-col justify-center   mx-auto left-0 bA1B23] rounded-xl">
        <div className="w-full  lg:px-[100px]  space-y-[32px] font-helvetica py-[93px]  text-white ">
          <h2 className="lg:text-[50px] text-[30px]">Integration</h2>
          <p className="lg:text-[20px] ">
            Integrate our framework to start understanding real-time market
            movements,
            <br className="hidden md:block" />
            including memecoin trends and opportunities,
            <br className="hidden md:block" /> with actionable data.
          </p>
          <Button className="text-[20px]  rounded-full py-6    flex items-center justify-center gap-4  bg-[#392058]">
            <a
              href="https://github.com/SOLIN-SOL/sol-insight"
              target="_blank"
              className="flex items-center gap-2"
            >
              Get Code
              <Image
                src="/github.png"
                alt="github Logo"
                width={20}
                height={10}
              />
            </a>
          </Button>
        </div>
      </div>

      <div
        id="integration"
        className="lg:h-[80dvh]  isolate  max-h-[700px]   min-h-[450px] rounded-xl lg:w-[80%] w-full backdrop-blur-lg  mx-auto relative  text-white flex  items-start gap-6 justify-end py-8 lg:py-[56px] bg-[#392058]/40 "
      >
        <Image
          alt="chat-gpt"
          src={"/chat-gp.svg"}
          width={100}
          height={100}
          className="relative -right-[16px] md:-right-[55px] md:w-[117px] w-[38px] aspect-square"
        />
      </div> */}
    </div>
  );
}
