import AboutSection from "@/components/about";
import Empower from "@/components/empower";
import { KeyFeatures } from "@/components/feature";
import HomePage from "@/components/homePage";
import Integration from "@/components/integration";
import Join from "@/components/join";
import { PlatformFeatures } from "@/components/platform";
import RecentForumPosts from "@/components/recent-forum-posts";

export default function Page() {
  return (
    <div className="w-full space-y-[100px]  overflow-x-hidden   ">
      <HomePage />
      <RecentForumPosts />
      <Integration />
      <AboutSection />
      <PlatformFeatures />
      <KeyFeatures />
      <Join />
      <Empower />
    </div>
  );
}
