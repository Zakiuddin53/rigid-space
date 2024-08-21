import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6 lg:max-w-7xl">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Acme Inc.</span>
          </Link>
          <p className="text-muted-foreground">
            Acme Inc. is an innovation partner that provides cutting-edge
            software solutions to elevate our clients&apos; businesses.
          </p>
        </div>
        <div className="flex justify-center">
          <nav className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="grid gap-2">
              <h4 className="text-sm font-semibold">Navigation</h4>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-sm font-semibold">Get in Touch</h4>
          <form className="flex w-full max-w-md flex-col gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button type="submit">Contact Us</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
