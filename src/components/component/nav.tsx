import Link from "next/link";

export function Nav() {
  return (
    <header className="flex items-center justify-center h-16 px-4 md:px-6 backdrop-blur-sm bg-white/80 border-b">
      <nav className="flex items-center gap-6">
        <Link
          href="#"
          className="relative inline-block text-sm font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="relative inline-block text-sm font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          prefetch={false}
        >
          Portfolio
        </Link>
        <Link
          href="#"
          className="relative inline-block text-sm font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
          prefetch={false}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
