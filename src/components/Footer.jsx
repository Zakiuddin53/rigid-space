import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Link from "next/link";

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="flex flex-col items-center justify-center border-t border-neutral-950/10 pt-12 pb-8">
          <nav className="mb-8">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/our-work"
                  className="text-sm text-neutral-700 hover:text-neutral-950"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-neutral-700 hover:text-neutral-950"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-process"
                  className="text-sm text-neutral-700 hover:text-neutral-950"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-neutral-700">
            © Triangle {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
