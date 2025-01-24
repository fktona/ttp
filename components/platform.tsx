import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function PlatformFeatures() {
  const features = [
    {
      title: "AI Agent with Solana knowledge",
      description:
        "This AI Agent is built with an advanced understanding of the Solana blockchain and its ecosystem. From technical details about the blockchain, to tracking the latest innovations, our agent ensures every interaction delivers tailored, accurate, and valuable insights.",
    },
    {
      title: "Dynamic response management",
      description:
        "Goodbye to repetitive or generic replies. Our agent uses a cutting-edge response management system to Generate unique, context-specific answers for every question. Adapt to new trends and discussions on the forum, continuously improve through machine learning.",
    },
    {
      title: "Interactive forum posting mechanism",
      description:
        "Our agent integrates seamlessly into the forum, posting dynamic and meaningful responses to ongoing discussions.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-6 max-w-screen-2xl   mx-auto  ">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-[#1c1c24]  min-h-[295px] w-full  border-none text-white"
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
