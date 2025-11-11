"use client";

import Image from "next/image";
import { Menu, ShoppingCart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ResourcesBox from "@/components/ResourcesBox";
import MainHeader from "@/components/MainHeader";


export default function Home() {
  const ref = useRef<HTMLElement | null>(null);

  // Track scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const stepLiftY = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const resourceLiftY = useTransform(scrollYProgress, [0, 1], [15, -110]);
  const imageLiftY = useTransform(scrollYProgress, [0, 1], [10, -130]);

  /* Offsets for element fading */
  const offsets = [0.35, 0.38, 0.50, 0.53];
  const fadeDurations = 0.2;
  const opacities = offsets.map( offset =>
    useTransform(scrollYProgress, [offset, offset + fadeDurations], [0, 1])
  )

  return (
    <main className="min-h-screen overflow-x-hidden" ref={ref}>
      {/* Hero Image*/}
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
        style={{ y: stepLiftY }}
        className="relative bg-white min-h-[100vh] z-20"
      >
        {/* SVG Steps */}
        <div className="absolute -top-[90px] left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[110px]"
            preserveAspectRatio="none"
          >
            <path d="M0,100 L0,82 L288,82 L288,65 L576,65 L576,45 L864,45 L864,25 L1152,25 L1152,5 L1440,5 L1440,100 Z"
              fill="white"
            />
          </svg>

        </div>

        {/* Main body */}
        <div className="max-w-6xl mx-auto px-10 pt-36 pb-20 ">
          
          {/* What we do and resources */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
                <motion.div style={{ opacity: opacities[0] }} className="max-w-[480px]">
                  <MainHeader text={"What We Do."}/>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-md mb-5">
                    We empower individuals with dyslexia by providing support, resources,
                    and community across the UK. Our programmes focus on awareness,
                    practical tools, and confidence-building.
                  </p>
              </motion.div>
            </div>
            
            <div className="mt-10 max-[1023px]:ml-50 max-[767px]:ml-0">
              <motion.div style={{ opacity: opacities[1], y: resourceLiftY}} >
                <ResourcesBox />
              </motion.div>
            </div>
          </div>

          {/* Help Our Charity */}
          <div className="mt-15">
            <motion.div style={{opacity: opacities[2]}}>
              <MainHeader text={"Help Our Charity."}/>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-8 min-[1300px]:-ml-20">
              <motion.div style={{opacity: opacities[3], y: imageLiftY}}>
                <Image 
                  src="/child-learning.png"
                  alt="Child Learning"
                  width={600}
                  height={600}
                  className="object-cover mt-20"
                />
              </motion.div>

              <motion.div style={{opacity: opacities[3]}}>
                <p className="text-lg text-gray-700 leading-relaxed mb-5 -mt-20 max-w-full lg:max-w-md mx-auto text-center lg:text-left lg:mr-5">
                  Please donate or buy something from the charity to support us, there are some
                  other ways that you can support us even just by reading a few of our resources
                  and educate yourself on dyslexia.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
