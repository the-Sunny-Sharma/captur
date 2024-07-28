import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/Slider";
import { SliderData } from "@/data/SliderData";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <br />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
