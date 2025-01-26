"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function RecentForumPosts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const timer = setInterval(scroll, 30);
    return () => clearInterval(timer);
  }, []);

  // Generate 12 dummy posts
  const posts = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
    content:
      "felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,",
  }));

  return (
    <div className="w-full relative  z-20 mt-20  px-6 py-12 ">
      <div className="mx-auto  lg:px-[100px]   ">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="lg:text-4xl text-3xl font-bold text-white">
            Recent Forum Post
          </h2>
          <Button
            variant="outline"
            className="rounded-full hover:bg-white/10 hidden lg:flex items-center justify-center  border-white/20 bg-transparent text-white   hover:text-white lg:px-[67px] lg:py-[22px] text-lg"
          >
            View all
          </Button>
        </div>

        <div
          // ref={scrollRef}
          className="grid grid-flow-col gap-6 relative justify-center isolate hidden-scrollbar  overflow-x-auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        >
          {posts.map((post, index) => (
            <Card
              key={post.id + index + Math.random()}
              className="w-[380px] z-10 border-none bg-white/10 "
            >
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button
                  variant="outline"
                  className="rounded-full bg-transparent text-white  hover:bg-transparent hover:text-white"
                >
                  Continue reading
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Button
            variant="outline"
            className="rounded-full lg:hidden border-white/20 bg-transparent text-white  hover:bg-transparent hover:text-white lg:px-[67px] lg:py-[22px] text-lg"
          >
            View all
          </Button>
        </div>
      </div>

      <div className="aspect-square   h-[250%] -top-0  blur-[246px] rounded-full   -z-10 mx-auto w-[100vw]   absolute  bg-[#392058]" />
    </div>
  );
}
