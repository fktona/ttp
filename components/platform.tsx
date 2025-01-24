import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function PlatformFeatures() {
  const features = [
    {
      title: "AI Agent with Solana knowledge",
      description:
        "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform",
    },
    {
      title: "Dynamic response management",
      description:
        "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform",
    },
    {
      title: "Interactive forum posting mechanism",
      description:
        "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-[#1c1c24] 2xl:w-[382px] h-[295px] w-full  border-none text-white"
        >
          <CardContent className="p-6 flex flex-col  items-center  h-full space-y-4">
            <Image
              src="/glass.svg"
              alt="Feature 1"
              width={45}
              height={24}
              className=""
            />
            <div className="grow  flex-1 flex flex-col  items-center justify-center gap-4 ">
              <h3 className="text-[28px] leading-[37px] text-center font-semibold">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[21px] text-center text-gray-400">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
