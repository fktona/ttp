"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function RecentForumPosts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://app.eventblink.xyz/forum-agent/allposts"
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

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

  return (
    <div className="w-full relative   z-20  px-6 py-12">
      <div className=" max-w-screen-2xl mx-auto lg:px-[100px] mt-[20px]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="lg:text-4xl text-3xl font-bold text-white">
            Recent Forum Post
          </h2>
          <Button
            variant="outline"
            className="rounded-full hover:bg-white/10 hidden lg:flex items-center justify-center border-white/20 bg-transparent text-white hover:text-white lg:px-[67px] lg:py-[22px] text-lg"
          >
            View all
          </Button>
        </div>

        <div
          // ref={scrollRef}
          className="grid grid-flow-col max-w-screen-2xl mx-auto gap-6 relative justify-center isolate hidden-scrollbar overflow-x-auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        >
          <div className="absolute  max-w-screen-2xl mx-auto top-0 left-0  flex justify-start w-full h-full z-10">
            <Image
              src="/blur1.svg"
              alt="blur"
              width={1920}
              height={1080}
              className="w-[500px] h-full object-cover"
            />
          </div>
          {posts.map((post) => (
            <Card
              key={post._id}
              className="w-[380px] z-10 border-none bg-white/10 flex-col justify-between flex"
            >
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {post.topic}
                </h3>
                <p
                  className="text-sm leading-relaxed text-gray-400 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: post.post }}
                />
              </CardContent>
              <CardFooter className="px-6 pb-6 flex items-end ">
                <Button
                  variant="outline"
                  className="rounded-full bg-transparent text-white hover:bg-transparent hover:text-white"
                >
                  <a
                    href="https://forum.solana.com/u/solinsights"
                    target="_blank"
                  >
                    Continue reading
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Button
            variant="outline"
            className="rounded-full lg:hidden border-white/20 bg-transparent text-white hover:bg-transparent hover:text-white lg:px-[67px] lg:py-[22px] text-lg"
          >
            <a href="https://github.com/SOLIN-SOL/sol-insight" target="_blank">
              View all
            </a>
          </Button>
        </div>
      </div>
      <div className="aspect-square   h-[100%] bottom-0  blur-[146px]   -z-10 mx-auto w-[100vw]   absolute  bg-[#392058]" />
    </div>
  );
}
