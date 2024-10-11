import React from "react";
import SectionIntro from "../SectionIntro";
import Container from "../Container";
import FadeIn from "../FadeIn";
import Link from "next/link";
import Image from "next/image";

const TopProjects = () => {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader />
        <ProjectGrid />
      </Container>
    </section>
  );
};

const SectionHeader = () => (
  <div className="text-center mb-16">
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Top Projects
      </h2>
      <p className="mt-4 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
        Innovative solutions
        <br />
        that drive results
      </p>
    </FadeIn>
  </div>
);

const ProjectGrid = () => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

const ProjectCard = ({ title, description, imageUrl }) => (
  <FadeIn>
    <div className="relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 border border-black">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </Link>
      <div className="relative group">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={400}
          className="object-cover w-full h-64 transition-opacity duration-300 group-hover:opacity-50"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-display text-base font-semibold text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-neutral-300">{description}</p>
        </div>
      </div>
    </div>
  </FadeIn>
);

const projects = [
  {
    title: "Project 1",
    description:
      "A cutting-edge web application that revolutionizes the way users interact with data.",
    imageUrl: "/11.png",
  },
  {
    title: "Project 2",
    description:
      "A mobile-first application that streamlines the way users manage their daily tasks.",
    imageUrl: "/sopay.png",
  },
  {
    title: "Project 3",
    description:
      "A data visualization tool that helps users make informed decisions based on complex data sets.",
    imageUrl: "/ezyform.png",
  },
];

export default TopProjects;
