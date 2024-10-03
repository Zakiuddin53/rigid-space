import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container className="py-2">
      <div className="flex items-center justify-between">
        {/* Logo - Shifted to the left */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/triangle.png"
              alt="Company Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-grow flex items-center justify-center">
          <div className="flex items-center gap-x-8">
            <Link
              href="/work"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/process"
              className="text-neutral-200 hover:text-white transition-colors"
            >
              Our Process
            </Link>
          </div>
        </div>

        {/* Contact Button - Shifted to the right */}
        <div className="flex-shrink-0">
          <Button href="/contact">Contact us</Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
