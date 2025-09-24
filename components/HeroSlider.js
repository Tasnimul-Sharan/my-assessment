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
