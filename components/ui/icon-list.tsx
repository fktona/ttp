import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Update the path to your Button component

const IconList: React.FC = () => {
  const icons = [
    {
      name: "x.svg",
      url: "https://x.com/SolanaInsights",
    },
    {
      name: "solana-icon.svg",
      url: "https://github.com/SOLIN-SOL/sol-insight",
    },
    {
      name: "github.svg",
      url: "https://forum.solana.com/u/solinsights",
    },
  ];

  return (
    <div className="flex md:gap-4 gap-3 items-center">
      {icons.map((icon) => (
        <Button
          key={icon.name}
          size="icon"
          className="hover:bg-white/70 rounded-full bg-white/10 transition-colors"
          asChild
        >
          <Link href={icon.url}>
            <Image
              src={icon.name}
              alt={`${icon.name} icon`}
              width={20}
              height={20}
            />
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default IconList;
