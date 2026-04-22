import Chatminds from "@/components/chatminds";
import { ProjectSideNavigation } from "@/components/project-side-navigation";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F8FB]">
      <ProjectSideNavigation />
      <Chatminds />
    </main>
  );
}
