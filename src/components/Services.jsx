import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionHeader />
      </Container>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Integrated Product Solutions">
              We specialize in delivering comprehensive and cohesive solutions
              to streamline and optimize product development, guiding projects
              from concept to market with high-quality execution. The rest of
              the website will serve as a functional shell, using placeholder
              text where necessary.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like React Native and Google Web Toolkit.
            </ListItem>
            <ListItem title="SEO Strategies">
              We offer comprehensive SEO strategies designed to enhance
              visibility and drive organic traffic. Our cohesive approach
              optimizes every aspect of your online presence, ensuring your
              brand reaches its target audience effectively from concept to full
              implementation.
            </ListItem>
            <ListItem title="Strategic Product Planning">
              We provide comprehensive and cohesive product roadmaps, ensuring
              streamlined development and successful launches. Our strategic
              planning process optimizes each stage from concept to market,
              aligning with your business goals for maximum impact
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

const SectionHeader = () => (
  <div className="text-center mb-16">
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Services
      </h2>
      <p className="mt-4 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
        We help you identify, explore and
        <br />
        respond to new opportunities.
      </p>
    </FadeIn>
  </div>
);

export default Services;
