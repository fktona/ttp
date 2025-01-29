import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function PlatformFeatures() {
  const features = [
    {
      title: "AI Agent with Solana knowledge",
      description:
        "This AI Agent is built with an advanced understanding of the Solana blockchain and its ecosystem. From technical details about the blockchain, to tracking the latest innovations, our agent ensures every interaction delivers tailored, accurate, and valuable insights.",
      bg: "#1A1B23",
    },
    {
      title: "Dynamic response management",
      description:
        "Goodbye to repetitive or generic replies. Our agent uses a cutting-edge response management system to Generate unique, context-specific answers for every question. Adapt to new trends and discussions on the forum, continuously improve through machine learning.",
      bg: "#5DC0FF",
    },
    {
      title: "Interactive forum posting mechanism",
      description:
        "Our agent integrates seamlessly into the forum, posting dynamic and meaningful responses to ongoing discussions.",

      bg: "#B25ADE",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:px-[100px] p-6 max-w-screen-2xl relative  mx-auto  ">
      <div className="absolute top-0 left-0  flex justify-start w-full h-full z-10">
        <Image
          src="/blur1.svg"
          alt="blur"
          width={1920}
          height={1080}
          className="w-[500px] h-full object-cover"
        />
      </div>
      {features.map((feature, index) => (
        <Card
          key={index}
          className="  min-h-[295px] w-full  border-none text-white"
          style={{ backgroundColor: feature.bg }}
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
              <h3
                className={cn(
                  "text-[28px] leading-[37px] text-center font-semibold",
                  index == 0 ? "text-white" : "text-black"
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "text-[14px] leading-[21px] text-center text-gray-400",
                  index == 0 ? "text-[#898CA9]" : "text-black"
                )}
              >
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
