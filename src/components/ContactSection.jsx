import React from "react";
import Container from "./shared/Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./about/Offices";

const ContactSection = () => {
  return (
    <Container>
      <FadeIn className="rounded-3xl bg-neutral-950 px-6 py-12 sm:px-8 sm:py-16">
        <div className="max-w-9xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            We&apos;re excited to hear about your project! Let us know what
            you&apos;re building, and we&apos;ll bring it to life.{" "}
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href={"/contact"} invert>
              Let&apos;s Discuss
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
