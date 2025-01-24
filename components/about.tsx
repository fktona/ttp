import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <div className=" p-8 md:p-16 max-w-screen-2xl   mx-auto " id="about">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Top indicators */}

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Welcome to the Solana Forum AI Agent – our intelligent guide to
              navigating the dynamic world of the Solana blockchain ecosystem
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-400">
                Whether you're a developer, investor, or an enthusiast, the
                Solana Forum AI Agent is here to simplify complexity and provide
                clarity. From analyzing market trends to tracking the latest
                developments, our goal is to keep you informed, engaged, and
                ahead of the curve
              </p>
            </div>
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
