import dynamic from "next/dynamic";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import TechShowcase from "@/components/TechShowcase";
import { CardDemo } from "@/components/CardDemo";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import TopProjects from "@/components/TopProjects";

export default function Page() {
  return (
    <>
      <main className="text-black">
        <FadeIn className="max-w-9xl mx-auto text-center">
          <h1 className="font-display text-8xl font-medium text-neutral-950">
            Innovate, Integrate, Elevate
          </h1>
          <h2 className="mt-4 text-5xl font-medium text-neutral-950">
            Your IT Solution Partner
          </h2>
          <p className="mt-4 pb-1 text-xl text-neutral-600">
            Ready to take your business to the next level?
          </p>
        </FadeIn>

        {/* <CardDemo /> */}
        <Services />
        <TopProjects />
        <TestimonialsCarousel />
        <ContactSection />
      </main>
    </>
  );
}
