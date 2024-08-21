import { DescriptionOne } from "@/components/component/description-one";
import { Hero } from "@/components/component/hero";
import { Services } from "@/components/component/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
