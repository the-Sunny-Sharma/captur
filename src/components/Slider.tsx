"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

//Defining the type for a single slide
interface Slide {
  image: string;
}

//Define the type for the props
interface SliderProps {
  slides: Slide[];
}

export default function Slider({ slides }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[800px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000 "
                  : "opacity-0 "
              }
            >
              <FaArrowAltCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={30}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt={`Slide ${index}`}
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowAltCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
