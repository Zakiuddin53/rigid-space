"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
  ];

  return (
    <nav className="bg-[#19181A] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Company Name */}
        <div className="text-xl font-bold">
          <Link href="/">WebTrek</Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#CEBC81] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Us Button - Visible on all screen sizes */}
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-[#CEBC81] to-[#E8DCCA] text-[#19181A] hover:from-[#E8DCCA] hover:to-[#CEBC81] font-semibold rounded-full"
            >
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-[#CEBC81]"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#19181A]"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[#CEBC81] transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
