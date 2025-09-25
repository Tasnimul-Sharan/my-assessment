"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";

const slides = [
  {
    id: 1,
    type: "split",
    title: "Eros augue curabitur rutrum ibrium",
    desc: "Connection resizing strikethrough frame project layer opacity.",
    img: "/shoe1.png",
    dark: true,
  },
  {
    id: 2,
    type: "middle",
    img: "/shoe1.png",
    rightImg: "/shoe3.png",
    dark: false,
  },
  {
    id: 3,
    type: "triple",
    img: "/shoe2.png",
    leftImg: "/shoe1.png",
    rightImg: "/shoe3.png",
    dark: false,
  },
  {
    id: 4,
    type: "split-percent",
    imgLeft: "/shoe3.png",
    imgRight: "/shoe4.png",
    dark: false,
  },
  {
    id: 5,
    type: "full",
    img: "/shoe4.png",
    dark: false,
  },
  {
    id: 6,
    type: "bottom-text",
    img: "/shoe4.png",
    title: "Eros augue curabitur eu rutrum neque congue",
    desc: "Connection reesizing strikethrough frame project layer opacity. Rotate flatten align link invite plugin. Clip asset ellipse flatten hand align editor flatten. Device star union frame text vector. Select rectangle style select scrolling bold boolean.",
    dark: true,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[index];

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={nextSlide}
    >
      <NavBar darkBackground={slide.dark} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 flex"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {slide.type === "split" && (
            <>
              <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  {slide.title}
                </h2>
                <p className="text-gray-600">{slide.desc}</p>
              </div>
              <div className="w-full flex items-center justify-center">
                <Image src={slide.img} alt="shoe" width={900} height={600} />
              </div>
            </>
          )}

          {slide.type === "middle" && (
            <div className="relative w-full h-full flex items-center justify-center bg-white">
              <Image
                src={slide.leftImg}
                alt="shoe left"
                width={1200}
                height={1200}
                className="absolute left-0 opacity-50 object-contain"
              />
              <Image
                src={slide.img}
                alt="shoe center"
                width={900}
                height={600}
                className="relative z-10 object-cover"
              />
              <Image
                src={slide.rightImg}
                alt="shoe right"
                width={400}
                height={300}
                className="absolute right-0  object-cover"
              />
            </div>
          )}
          {slide.type === "triple" && (
            <div className="flex items-center justify-between w-full h-full bg-white">
              <Image
                src={slide.leftImg}
                alt="shoe left"
                width={1200}
                height={1200}
                className="w-1/4 h-full object-cover"
              />
              <Image
                src={slide.img}
                alt="shoe center"
                width={800}
                height={500}
                className="z-10"
              />
              <Image
                src={slide.rightImg}
                alt="shoe right"
                width={1200}
                height={1200}
                className="w-1/4 h-full object-cover"
              />
            </div>
          )}

          {slide.type === "split-percent" && (
            <div className="flex w-full h-full bg-gray-100">
              <div className="w-1/5 flex items-center justify-center">
                <Image
                  src={slide.imgLeft}
                  alt="shoe3"
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-4/5 flex items-center justify-center">
                <Image
                  src={slide.imgRight}
                  alt="shoe4"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}

          {slide.type === "full" && (
            <div className="flex items-center justify-center w-full h-full bg-white">
              <Image
                src={slide.img}
                alt="shoe full"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {slide.type === "bottom-text" && (
            <div className="flex flex-col w-full h-full bg-white">
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={slide.img}
                  alt="shoe4"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700"
                />
              </div>
              <div className="flex w-full bg-white p-12">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
