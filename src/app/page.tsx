import { Hero } from "@/components/component/hero";
import HomePageProducts from "@/components/component/home-page-products";
import { Services } from "@/components/component/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HomePageProducts />
    </>
  );
}
