import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-8"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="About Me" subtitle="My background and journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
              <img
                src="/mee.gif?height=600&width=600"
                alt="German Losada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300">
                I'm an innovative and detail-oriented Product Designer, Front-End Developer, and Digital Marketing
                Specialist with a strong focus on fintech solutions. I specialize in crafting user-centered products by
                combining intuitive UI/UX design, responsive front-end development, and data-driven marketing
                strategies.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                With extensive experience in agile methodologies, I excel in efficiently delivering cutting-edge
                financial products and services. My work showcases meticulous attention to motion design and impactful
                visual content that drives commercial success.
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                Passionate about collaborating with financial startups, I aim to innovate and elevate user experiences,
                contributing to the creation of groundbreaking fintech solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Name</div>
                  <div className="font-medium">German Losada</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium">gflosadaz@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium">Toronto, Ontario</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Phone</div>
                  <div className="font-medium">+1 (647) 809-4452</div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  )
}
