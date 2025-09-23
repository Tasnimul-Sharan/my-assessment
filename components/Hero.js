// import { useEffect, useRef } from "react";

// export default function Hero() {
//   const rootRef = useRef(null);

//   useEffect(() => {
//     let ctx;
//     if (typeof window === "undefined") return;
//     (async () => {
//       const gsap =
//         (await import("gsap")).gsap || (await import("gsap")).default;
//       const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
//       gsap.registerPlugin(ScrollTrigger);

//       ctx = gsap.context(() => {
//         gsap.from(".hero-img", {
//           y: 40,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//         });

//         gsap.to(".feature-card", {
//           scrollTrigger: {
//             trigger: ".feature-card",
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.15,
//         });
//       }, rootRef);
//     })();

//     return () => ctx?.revert?.();
//   }, []);

//   return (
//     <section ref={rootRef} className="py-16">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-6">Hero Title</h1>
//         <div className="hero-img w-full h-80 bg-gray-200 rounded" />
//         <div className="feature-card opacity-0 translate-y-6 mt-8 p-4 bg-white shadow rounded">
//           Animated Card
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Eros augue curabitur rutrum ibrium",
    desc: "Connection resizing strikethrough frame project layer opacity. Rotate flatten slight link invite plugin.",
    img: "/shoes/shoe1.jpg",
    bg: "bg-white",
  },
  {
    id: 2,
    title: "Nunc vel risus commodo viverra",
    desc: "Clip asset ellipse flatten hand align editor flatten. Device star union frame text vector.",
    img: "/shoes/shoe2.jpg",
    bg: "bg-red-600",
  },
  {
    id: 3,
    title: "Pellentesque habitant morbi",
    desc: "Select rectangle style select scrolling bold boolean. Resize flatten opacity layer frame.",
    img: "/shoes/shoe3.jpg",
    bg: "bg-blue-500",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={nextSlide}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 flex"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Left side */}
          <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
            <h2 className="text-4xl font-bold mb-4">{slides[index].title}</h2>
            <p className="text-gray-600">{slides[index].desc}</p>
          </div>

          {/* Right side */}
          <div
            className={`w-1/2 flex items-center justify-center ${slides[index].bg}`}
          >
            <img
              src={slides[index].img}
              alt="product"
              className="object-contain max-h-[80%]"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
