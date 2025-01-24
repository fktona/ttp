import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <div className=" p-8 md:p-16" id="about">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Top indicators */}
            <div className="flex gap-2">
              <div className="text-[13px] gap-2 px-4 py-3 rounded-full text-white bg-white/20 flex items-center justify-center">
                Lorem
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="text-[13px] gap-2 px-4 py-3 rounded-full text-white bg-white/20 flex items-center justify-center">
                Lorem
                <div className="h-2 w-2 rounded-full   bg-green-500" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              About Section dolor sit amet, consectetuer adipiscing
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-400">
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
              </p>
              <p className="text-gray-400">
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
              </p>
            </div>

            {/* Button */}
            <Button className="gred rounded-full">Get Started</Button>
          </div>

          {/* Right side placeholder */}
          <div className="hidden md:block">
            <div className="w-full aspect-square bg-[#261C37] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
