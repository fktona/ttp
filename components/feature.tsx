import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function KeyFeatures() {
  const features = [
    {
      title: "Solana blockchain insights.",
      img: "/insight.png",
      description:
        "Our AI Agent delves deep into the Solana blockchain to provide in-depth analyses of blockchain protocols, transaction trends, and ecosystem dynamics. Alongside expert commentary on the latest Solana developments, ensuring you're always informed.",
    },
    {
      title: "Memecoin market trends.",
      img: "/eco.png",
      description:
        "Our agent provides real-time data on popular tokens within the Solana network, Insightful analysis of market movements and trends and comprehensive updates on emerging opportunities in the memecoin space",
    },
    {
      title: "Real-time ecosystem tracking.",
      img: "/tracking.png",
      description:
        "Stay in the loop using our agent through continuous monitoring of Solana-related news, community developments, and technical upgrades and dynamic, real-time reports designed to keep pace with the ecosystem.",
    },
  ];

  return (
    <div className="w-full relative isolate   z-[100]">
      <div className="absolute top-0 left-0  flex justify-start w-full h-full z-10">
        <Image
          src="/grad.svg"
          alt="blur"
          width={1920}
          height={1080}
          className="w-[25%] -rotate-90 h-full -top-[25%] absolute opacity-65  blur-[70px] -z-20  -right-2  object-contain"
        />
        <Image
          src="/layer.svg"
          alt="blur"
          width={1920}
          height={1080}
          className="w-[25%]  h-full -top-[65%] absolute  blur-[70px]  -z-10  -right-2  object-cover"
        />
      </div>
      <div
        id="features"
        className="p-6 space-y-8 z-[100] lg:px-[100px] max-w-screen-2xl   mx-auto     lg:max-h-[900px]  isolate flex flex-col items-center justify-center md:items-start relative"
      >
        {" "}
        <div className="flex md:items-center z-50 relative flex-col md:flex-row w-full  justify-between">
          <div className="flex items-start gap-4 flex-col ">
            <h2 className="text-4xl font-bold text-white ml-2 mb-3">
              Key Features
            </h2>
          </div>
          <Button
            variant="outline"
            size={"lg"}
            className="text-white w-fit border-gray-600 rounded-full py-5 bg-transparent hover;bg-trandparent"
          >
            <a href="https://github.com/SOLIN-SOL/sol-insight" target="_blank">
              Get Started
            </a>
          </Button>
        </div>
        <p className="text-gray-400 max-w-3xl">
          Our AI Agent delves deep into the Solana blockchain to provide
          in-depth analyses of blockchain protocols, transaction trends, and
          ecosystem dynamics. Alongside expert commentary on the latest Solana
          developments, ensuring you're always informed.
        </p>
        <div className="grid grid-cols-1 gap-4 relative md:grid-cols-2    mx-auto xl:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className=" cursor-pointer isolate p-0 overflow-hidden  group rounded-xl w-full    min-h-[295px] relative  border-none text-white"
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
                <p className="text-[18px] text-gray-200">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="w-full h-full absolute -left-[50%]  bottom-[100%] -z-20 rotate-[310deg] inset-0">
          {/* <Image
          src="/looper.png"
          alt="Hero Logo"
          width={1920}
          height={1080}
          className=""
        /> */}
        </div>
      </div>
    </div>
  );
}
