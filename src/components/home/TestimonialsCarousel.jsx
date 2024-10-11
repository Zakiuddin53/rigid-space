"use client";

import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO",
    company: "TechCorp",
    quote:
      "Working with this software agency has been a game-changer for our company. Their expertise and dedication to quality are unmatched.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager",
    company: "InnovateTech",
    quote:
      "The team's ability to translate our vision into a functional, sleek product exceeded our expectations. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Inc.",
    quote:
      "From concept to execution, their software development process was smooth and transparent. They're true partners in our success.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Engineering",
    company: "TechGiant",
    quote:
      "Their innovative solutions and attention to detail have significantly improved our project outcomes. A pleasure to work with!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function TestimonialsCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="w-full py-20 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          What Our Clients Say
        </h2>
        <motion.div ref={carousel} className="overflow-hidden cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: [-width, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] p-4"
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white dark:bg-gray-800 border-none shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out group-hover:text-primary">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-4 text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
