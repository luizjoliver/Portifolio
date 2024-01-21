"use client"

import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "./Section-heading";
import { skillsData } from "@/lib/data";
import {motion} from "framer-motion"

const fadeInAnimationVariants = {
  initial:{
    opacity:0,
    y:100
  },
  animate: (index:number) =>({
    opacity:1,
    y:0,
    transition:{
      delay:0.05 * index
    }
  })
}

export default function Skills() {

    const {ref} = useSectionInView("Habilidades",0.5)

  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    id="habilidades">
        <SectionHeading>Minhas Hablidades</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill,index) => (
            <motion.li 
            className="bg-white border border-black/[0.1]
            rounded-xl px-5 py-3" 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once:true
            }}
            custom={index}
            key={index}>

              {skill}

              </motion.li>
          ))}
        </ul>
    </section>
  )
}
