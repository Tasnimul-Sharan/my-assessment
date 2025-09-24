// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     id: 1,
//     title: "Eros augue curabitur rutrum ibrium",
//     desc: "Connection resizing strikethrough frame project layer opacity. Rotate flatten slight link invite plugin.",
//     img: "/shoe1.png",
//     bg: "bg-white",
//   },
//   {
//     id: 2,
//     title: "Nunc vel risus commodo viverra",
//     desc: "Clip asset ellipse flatten hand align editor flatten. Device star union frame text vector.",
//     img: "/shoe2.png",
//     bg: "bg-red-600",
//   },
//   {
//     id: 3,
//     title: "Pellentesque habitant morbi",
//     desc: "Select rectangle style select scrolling bold boolean. Resize flatten opacity layer frame.",
//     img: "/shoe3.png",
//     bg: "bg-blue-500",
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden cursor-pointer"
//       onClick={nextSlide}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slides[index].id}
//           className="absolute inset-0 flex"
//           initial={{ x: "100%", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: "-100%", opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           {/* Left column */}
//           <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
//             <h2 className="text-4xl font-bold mb-4">{slides[index].title}</h2>
//             <p className="text-gray-600">{slides[index].desc}</p>
//           </div>

//           {/* Right column */}
//           <div
//             className={`w-full flex items-center justify-center ${slides[index].bg}`}
//           >
//             <Image
//               src={slides[index].img}
//               alt="product"
//               width={1200}
//               height={800}
//               priority
//               className="object-cover width-full h-full"
//             />
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";
// import NavBar from "./NavBar"; // import navbar

const slides = [
  {
    id: 1,
    title: "Eros augue curabitur rutrum ibrium",
    desc: "Connection resizing strikethrough frame project layer opacity. Rotate flatten slight link invite plugin.",
    img: "/shoe1.png",
    bg: "bg-white",
    dark: false, // light bg → black logo/menu
  },
  {
    id: 2,
    title: "Nunc vel risus commodo viverra",
    desc: "Clip asset ellipse flatten hand align editor flatten. Device star union frame text vector.",
    img: "/shoe2.png",
    bg: "bg-red-600",
    dark: true, // dark bg → white logo/menu
  },
  {
    id: 3,
    title: "Pellentesque habitant morbi",
    desc: "Select rectangle style select scrolling bold boolean. Resize flatten opacity layer frame.",
    img: "/shoe3.png",
    bg: "bg-blue-500",
    dark: true, // dark bg → white logo/menu
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
      {/* Navbar - dynamic darkBackground */}
      <NavBar darkBackground={slides[index].dark} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 flex"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Left column */}
          <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
            <h2 className="text-4xl font-bold mb-4">{slides[index].title}</h2>
            <p className="text-gray-600">{slides[index].desc}</p>
          </div>

          {/* Right column */}
          <div
            className={`w-full flex items-center justify-center ${slides[index].bg}`}
          >
            <Image
              src={slides[index].img}
              alt="product"
              width={1200}
              height={800}
              priority
              className="object-cover width-full h-full"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import NavBar from "./NavBar";

// const slides = [
//   {
//     id: 1,
//     layout: "split", // text left, image right
//     title: "Eros augue curabitur rutrum ibrium",
//     desc: "Connection resizing strikethrough frame project layer opacity. Rotate flatten slight link invite plugin.",
//     img: "/shoe1.png",
//     // bg: "bg-white",
//     dark: false,
//   },
//   {
//     id: 2,
//     layout: "full-image", // full bg red with shoe
//     img: "/shoe2.png",
//     // bg: "bg-red-600",
//     dark: true,
//   },
//   {
//     id: 3,
//     layout: "center", // center shoe
//     img: "/shoe3.png",
//     bg: "bg-gradient-to-r from-red-600 to-white",
//     dark: true,
//   },
//   {
//     id: 4,
//     layout: "full-image",
//     img: "/shoe4.png",
//     // bg: "bg-green-200",
//     dark: false,
//   },
//   {
//     id: 5,
//     layout: "image-bottom-text", // image top, text bottom
//     title: "Eros augue curabitur rutrum neque congue",
//     desc: "Natural photo background with bottom text.",
//     img: "/shoe5.png",
//     // bg: "bg-sky-200",
//     dark: false,
//   },
//   {
//     id: 6,
//     layout: "image-left-text-right", // image left, text right
//     title: "Eros augue curabitur rutrum neque congue",
//     desc: "Sky background with right text block.",
//     img: "/shoe6.png",
//     // bg: "bg-sky-300",
//     dark: false,
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const slide = slides[index];

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden"
//       onClick={nextSlide}
//     >
//       <NavBar darkBackground={slide.dark} />

//       <motion.div
//         key={slide.id}
//         className={`absolute inset-0 flex items-center justify-center ${slide.bg}`}
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: "-100%", opacity: 0 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       >
//         {slide.layout === "split" && (
//           <div className="flex w-full h-full">
//             <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
//               <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-gray-600">{slide.desc}</p>
//             </div>
//             <div className="w-1/2 flex items-center justify-center">
//               <Image
//                 src={slide.img}
//                 alt="product"
//                 width={600}
//                 height={600}
//                 priority
//               />
//             </div>
//           </div>
//         )}

//         {slide.layout === "full-image" && (
//           <Image
//             src={slide.img}
//             alt="product"
//             fill
//             className="object-cover"
//             priority
//           />
//         )}

//         {slide.layout === "center" && (
//           <div className="flex items-center justify-center w-full h-full">
//             <Image
//               src={slide.img}
//               alt="product"
//               width={600}
//               height={600}
//               priority
//             />
//           </div>
//         )}

//         {slide.layout === "image-bottom-text" && (
//           <div className="flex flex-col w-full h-full">
//             <div className="flex-1 flex items-center justify-center">
//               <Image
//                 src={slide.img}
//                 alt="product"
//                 width={600}
//                 height={600}
//                 priority
//               />
//             </div>
//             <div className="p-12 bg-white">
//               <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-gray-600">{slide.desc}</p>
//             </div>
//           </div>
//         )}

//         {slide.layout === "image-left-text-right" && (
//           <div className="flex w-full h-full">
//             <div className="w-2/3 flex items-center justify-center">
//               <Image
//                 src={slide.img}
//                 alt="product"
//                 width={800}
//                 height={800}
//                 priority
//               />
//             </div>
//             <div className="w-1/3 flex flex-col justify-center p-12 bg-white">
//               <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-gray-600">{slide.desc}</p>
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
