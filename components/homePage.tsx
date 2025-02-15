"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const subtleUp = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <div className="flex  h-[calc(100dvh-20px)] max-h-[900px] mt-[20px]  overflow-hidden  flex-col max-w-screen-2xl   mx-auto   relative isolate text-white">
      <motion.main
        className="w-full mx-auto px-4 pt-8 relative z-20 h-fit"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-6xl relative mx-auto">
          <div className="flex relative flex-col  text-center mb-32">
            <motion.div
              className="absolute left-0  lg:bottom-24 -bottom-24"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/solana.svg"
                alt="solana"
                width={60}
                height={60}
                className=""
              />
              <Image
                src="/star-white.svg"
                alt="Hero Logo"
                width={80}
                height={80}
                className="absolute -bottom-[20px] animate-puls -left-6"
              />
            </motion.div>

            <motion.div
              className="absolute right-0 z-50  lg:bottom-24 -bottom-16"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/chatgpt.png"
                alt="chatgpt"
                width={60}
                height={60}
                className=""
              />
              <Image
                src="/star-white.svg"
                alt="Hero Logo"
                width={80}
                height={80}
                className="absolute -bottom-[20px] animate-puls -left-6"
              />
            </motion.div>

            <motion.h1
              className="text-[40px] relative md:text-7xl font-bold mb-8 bg-clip-text text-white"
              variants={subtleUp}
            >
              Your Gateway to Real
              <br className="hidden lg:block" /> Time Solana Insights
              <Image
                src="/star.png"
                alt="Hero Logo"
                width={60}
                height={60}
                className="absolute hidden md:block  right-0 lg:top-0 top-16"
              />
            </motion.h1>
            <motion.p
              className="text-white/60 mx-auto text-xl max-w-2xl mb-12"
              variants={subtleUp}
              transition={{ delay: 0.2 }}
            >
              Stay informed. Stay ahead. Empowering the Solana community with
              accurate, timely updates on market trends
            </motion.p>
            <motion.div
              className="flex flex-col mx-auto sm:flex-row gap-4"
              variants={subtleUp}
              transition={{ delay: 0.3 }}
            >
              <Button
                asChild
                className="gred text-white px-8 py-6 relative z-20 text-lg rounded-full"
              >
                <Link href="#about">Learn More</Link>
              </Button>
              {/* <Button
                variant="outline"
                className="border-white hidden lg:flex items-center justify-center  border-2 text-white hover:bg-white/10 bg-transparent px-8 py-6 text-lg rounded-full"
              >
                Ask me anything
              </Button> */}
            </motion.div>
          </div>
        </div>

        <iframe
          src="https://my.spline.design/boxeshovercopycopy-b6b7c8e050afa9ffab103ea661aa326f"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute overflow-x-hidden top-[70%] mx-auto mix-blend-luminosity left-[20%] inset-0 grow z-10"
        ></iframe>
      </motion.main>
    </div>
  );
}
