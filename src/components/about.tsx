"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>
          About Me
        </SectionHeading>
      </Fade>
        

        <div className="grid xl:grid-cols-2 lg:text-start">

          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
              
As an Informatics graduate focusing on career development in the fields of mobile
development, web development, and data analysis, I have technical expertise in building
Android applications using Kotlin, designing interactive websites with HTML, CSS, and JavaScript, and
performing data analysis using Python and SQL. I am also well-versed in various mobile
 frameworks, application testing and debugging techniques, and data visualization and interpretation methods.
I am currently proactively pursuing various industry certifications to strengthen my competencies, and
is ready to make a real contribution through efficient, innovative, and data-driven digital solutions.
                
              </div>
            </div>
          </div>
          <div>
          <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
          <Image
              src="/about.png"
              width="600"
              height="600"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full mt-8 object-cover"
            />
          </Fade>
          
          </div>
        </div>
      </div>
    </motion.section>
  );
}
