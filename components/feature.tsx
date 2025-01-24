import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function KeyFeatures() {
  const features = [
    {
      title: "Solana blockchain insights.",
      img: "/insight.png",
      description:
        "felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
      title: "Memecoin market trends.",
      img: "/eco.png",
      description:
        "felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
    {
      title: "Real-time ecosystem tracking.",
      img: "/tracking.png",
      description:
        "felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
    },
  ];

  return (
    <div
      id="features"
      className="p-6 space-y-8 min-h-dvh isolate flex flex-col items-center justify-center md:items-start relative"
    >
      <div className="flex md:items-center flex-col md:flex-row w-full  justify-between">
        <div className="flex items-start gap-4 flex-col ">
          <div className="flex gap-3 mb-3">
            <div className="text-[13px] gap-2 px-4 py-3 rounded-full text-white bg-white/20 flex items-center justify-center">
              Lorem
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div className="text-[13px] gap-2 px-4 py-3 rounded-full text-white bg-white/20 flex items-center justify-center">
              Lorem
              <div className="h-2 w-2 rounded-full   bg-green-500" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white ml-2 mb-3">
            Key Features
          </h2>
        </div>
        <Button
          variant="outline"
          size={"lg"}
          className="text-white w-fit border-gray-600 rounded-full py-5 bg-transparent hover;bg-trandparent"
        >
          Get Started
        </Button>
      </div>
      <p className="text-gray-400 max-w-3xl">
        felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel,
      </p>
      <div className="grid grid-cols-1 gap-4 relative md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br cursor-pointer isolate p-0 overflow-hidden group rounded-xl w-full h-full    2xl:w-[382px] h-[295px] relative  border-none text-white"
          >
            <Image
              src={feature.img}
              alt={feature.title}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-500  -z-10 rounded-xl"
            />
            {/* <div className="aspect-square absolute top-0 left-0 z-10 bg-[#392058]/30" /> */}
            <CardContent className="p-6 rounded-xl space-y-6 h-full  bg-[#392058]/80">
              <h3 className="text-[30px] leading-[37px] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[18px] text-gray-200">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-full h-full absolute left-0 -z-20 rotate-45 inset-0">
        <Image
          src="/looper.png"
          alt="Hero Logo"
          width={1920}
          height={1080}
          className=""
        />
      </div>
    </div>
  );
}
