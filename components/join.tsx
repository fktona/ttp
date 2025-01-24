import React from "react";
import { Button } from "./ui/button";

function Join() {
  return (
    <div className="relative lg:px-[60px] px-6 isolate w-full min-h-[40vh] flex md:items-center flex-col md:flex-row gap-5  items-start justify-center md:justify-between mt-10 text-white text-center">
      <iframe
        src="https://my.spline.design/bganimationcopy-234b90662a22017486bd860c12da2cf6/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute -z-10 inset-0"
      ></iframe>
      <h2 className="font-bold md:text-[57px] text-[38px] leading-[90%] lg:max-w-[70%] text-start">
        Join our community on discord to stay up to
        <br className="hidden lg:block" /> date
      </h2>
      <Button className="bg-white rounded-full hover:bg-white/90 text-black px-8 py-6 text-lg ">
        Join Discord
      </Button>
    </div>
  );
}

export default Join;
