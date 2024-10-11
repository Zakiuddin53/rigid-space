import dynamic from "next/dynamic";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/home/Services";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import TechShowcase from "@/components/home/TechShowcase";
import { CardDemo } from "@/components/CardDemo";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import TopProjects from "@/components/home/TopProjects";
import IconCloud from "@/components/ui/icon-cloud";
import DotPattern from "@/components/ui/dot-pattern";

export default function Page() {
  return (
    <>
      <div className="relative">
        <DotPattern />
        <main className="text-black relative overflow-hidden">
          <FadeIn className="max-w-9xl mx-auto text-center">
            <h1 className="font-display text-8xl font-medium text-neutral-950">
              Innovate, <span className="gradient-text">Integrate</span>,
              Elevate
            </h1>
            <h2 className="mt-4 text-5xl font-medium text-neutral-950">
              Your IT Solution Partner
            </h2>
            <p className="mt-4 pb-1 text-xl text-neutral-600">
              Let&apos;s build your online presence together !
            </p>
          </FadeIn>

          <IconCloud
            iconSlugs={[
              "typescript",
              "javascript",
              "dart",
              "java",
              "react",
              "flutter",
              "android",
              "html5",
              "css3",
              "nodedotjs",
              "express",
              "nextdotjs",
              "prisma",
              "amazonaws",
              "postgresql",
              "firebase",
              "nginx",
              "vercel",
              "testinglibrary",
              "jest",
              "cypress",
              "docker",
              "git",
              "jira",
              "github",
              "gitlab",
              "visualstudiocode",
              "androidstudio",
              "sonarqube",
              "figma",
            ]}
          />
          <Services />
          <TopProjects />
          <TestimonialsCarousel />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
