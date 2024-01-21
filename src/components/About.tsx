"use client"

import SectionHeading from "./Section-heading";
import {motion} from "framer-motion"
import useSectionInView from "@/hooks/useSectionInView";

export default function About() {

  const {ref} = useSectionInView("Sobre",0.75)

    
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    ref={ref}
    initial={{opacity:0, y:100}}
    animate={{opacity:1 , y:0}}
    transition={{delay:0.175}}
    id="sobre">

          <SectionHeading>Sobre eu </SectionHeading>

          <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
          </p>
    </motion.section>
  )
}
