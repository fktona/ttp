import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-12 h-12 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana_Forum_AI_Agent-Zfp9E50Hb3L5GFoDgtp97zNY6vomvj.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex gap-8">
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/features"
            className="text-white/80 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/integration"
            className="text-white/80 hover:text-white transition-colors"
          >
            Integration
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="w-24 h-24 relative mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#184bff] to-[#34ccb8] opacity-20 blur-xl" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana_Forum_AI_Agent-Zfp9E50Hb3L5GFoDgtp97zNY6vomvj.png"
                alt="Hero Logo"
                width={96}
                height={96}
                className="relative z-10"
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Empowering Solana with Intelligent Insights
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mb-12">
              felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel,
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#ba5ee6] hover:bg-[#ba5ee6]/90 text-white px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              >
                Ask me anything
              </Button>
            </div>
          </div>

          {/* Isometric Grid Illustration */}
          <div className="relative w-full aspect-video max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#184bff] to-[#34ccb8] opacity-30 blur-3xl -z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana_Forum_AI_Agent-Zfp9E50Hb3L5GFoDgtp97zNY6vomvj.png"
              alt="Isometric Grid"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
