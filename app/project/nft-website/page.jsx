// app/project/nft-website/page.jsx
import NftWebsite from "@/components/nft";
import { ProjectSideNavigation } from "@/components/project-side-navigation";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B090D]">
      <ProjectSideNavigation />
      <NftWebsite />
    </main>
  );
}
