import ContactSection from "@/components/ContactSection";
import Container from "@/components/shared/Container";
import Cultures from "@/components/about/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          At triangle, our strength lies in our team and our collaborative
          approach. We believe in placing our clients at the heart of everything
          we do, ensuring their vision drives every project from start to
          finish.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            What began as a side project among six passionate developers five
            years ago has now evolved into a full-fledged firm. For the past two
            years, we’ve dedicated ourselves to providing high-quality
            development services, refining our skills, and building strong
            client relationships.
          </p>
          <p>
            Each member of our team brings a unique set of expertise, but
            together, we form a cohesive unit that delivers seamless solutions.
            Our approach is simple: we combine technical expertise with creative
            problem-solving to offer solutions tailored to meet the individual
            needs of our clients.
          </p>
          <p>
            At triangle, we&apos;re more than just developers — we&apos;re your
            partner in turning ideas into reality.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="8" label="Underpaid employees" />
          <StatListItem value="10" label="Placated clients" />
          <StatListItem value="$23,813k" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
