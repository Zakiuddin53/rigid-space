import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container className="py-1 bg-[#19181A]">
      {" "}
      {/* Set background color */}
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/triangle.png"
              alt="Company Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="flex items-center gap-x-8">
            <Link
              href="/work"
              className="text-[#B19F9E] hover:text-[#CEBC81] transition-colors text-lg"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className="text-[#B19F9E] hover:text-[#CEBC81] transition-colors text-lg"
            >
              About Us
            </Link>
            <Link
              href="/process"
              className="text-[#B19F9E] hover:text-[#CEBC81] transition-colors text-lg"
            >
              Our Process
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button
            href="/contact"
            className="text-lg bg-[#479761] text-white hover:bg-[#CEBC81] hover:text-[#19181A]"
          >
            Contact us
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
