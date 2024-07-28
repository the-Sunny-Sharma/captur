import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </div>
  );
}
