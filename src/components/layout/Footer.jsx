import React from "react";
import Container from "../Container";
import FadeIn from "../FadeIn";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="h-px bg-black" />
      <div className="py-8">
        <Container>
          <div className="flex flex-col items-center">
            <nav className="mb-6">
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
        </Container>
      </div>
    </div>
  );
};

export default Footer;
