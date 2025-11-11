"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLElement | null>(null);

  // Track scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll into vertical lift of the white section
  // tweak the -250 value to change how far the white section rises
  const liftY = useTransform(scrollYProgress, [0, 1], [0, -270]);

  // Title opacity (fade in as steps lift)
  const titleOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  return (
    <main className="min-h-screen overflow-x-hidden" ref={ref}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-30">
        <div className="flex items-end gap-3">
          <Image src="/logo.png" alt="British Dyslexics Logo" width={44} height={44} />
          <h1 className="text-2xl font-bold text-black">British Dyslexics</h1>
        </div>

        <div className="flex items-center gap-4 text-3xl cursor-pointer text-black">
          <span aria-hidden>☰</span>
          <span aria-hidden>🛒</span>
        </div>
      </nav>

      {/* Hero Image (full viewport) */}
      <section className="relative w-full h-screen">
        <Image
          src="/child-reading.jpeg"
          alt="Child reading"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* Rising White Section with stepped top edge */}
      <motion.section
        style={{ y: liftY }}
        className="relative bg-white min-h-[100vh] z-20"
      >
        {/* SVG Steps (steeper, increasing height right -> left) */}
        <div className="absolute -top-[90px] left-0 w-full overflow-hidden pointer-events-none">
          <svg
  viewBox="0 0 1440 100"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-[100px]"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,100
      L0,82
      L288,82
      L288,65
      L576,65
      L576,45
      L864,45
      L864,25
      L1152,25
      L1152,5
      L1440,5
      L1440,100
      Z
    "
    fill="white"
  />
</svg>

        </div>

        {/* Content container */}
        <div className="max-w-6xl mx-auto px-10 pt-36 pb-20">
          {/* Left-aligned title */}
          <motion.div style={{ opacity: titleOpacity }} className="max-w-[480px]">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">What We Do.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We empower individuals with dyslexia by providing support, resources,
              and community across the UK. Our programmes focus on awareness,
              practical tools, and confidence-building.
            </p>
          </motion.div>

          {/* Placeholder right content to match screenshot layout */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="w-full h-60 bg-gray-200 rounded-lg" />
            </div>
            <div className="col-span-1">
              <div className="w-full h-52 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
