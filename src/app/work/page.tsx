import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world."
      />
      <Portfolio />
    </div>
  );
}
