"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Container";
import FadeIn from "../FadeIn";
import SectionIntro from "../SectionIntro";
import List, { ListItem } from "../List";

const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Short description of Project 1",
    longDescription:
      "Detailed description of Project 1. Explain the challenge, your solution, and the impact it had.",
    image: "11.png",
    technologies: ["Node", "Next", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Short description of Project 2",
    longDescription:
      "Detailed description of Project 2. Highlight key features and outcomes.",
    image: "agency.png",
    technologies: ["React", "Tailwind", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "Short description of Project 3",
    longDescription:
      "Detailed description of Project 3. Explain the challenge, your solution, and the impact it had.",
    image: "ezyform.png",
    technologies: ["Electron", "React", "Tailwind"],
  },
];

export default function ProjectShowcase() {
  return (
    <>
      <Container className="mt-16 sm:mt-24 lg:mt-16">
        <SectionHeader />
      </Container>
      <Container className="mt-12">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </Container>
    </>
  );
}

const ProjectItem = ({ project, index }) => (
  <div className="mb-24 lg:flex lg:items-center lg:gap-16">
    <div
      className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
    >
      <FadeIn>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover rounded-lg shadow-2xl"
        />
      </FadeIn>
    </div>
    <div
      className={`mt-8 lg:mt-0 lg:w-1/2 ${
        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <List className="lg:px-8">
        <ListItem title={project.title}>{project.longDescription}</ListItem>
        <ListItem title="Technologies Used">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </ListItem>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            View Project Details <ExternalLink className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </List>
    </div>
  </div>
);

const SectionHeader = () => (
  <div className="text-center mb-16">
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our Projects
      </h2>
      <p className="mt-4 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
        Showcasing our best work and
        <br />
        innovative solutions
      </p>
      <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
        Explore our portfolio of successful projects that demonstrate our
        expertise and creativity in solving complex challenges.
      </p>
    </FadeIn>
  </div>
);
