"use client"

import { projectsData } from "@/lib/data"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import {motion} from "framer-motion"

type ProjectProps = (typeof projectsData)[number]


export default function Project ({title,description,imageUrl,tags,repositoryUrl}:ProjectProps){

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress }=useScroll({
    target:sectionRef,
    offset:["0 1","1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0,1] , [0.7,1] )
  const opacityProgress = useTransform(scrollYProgress, [0,1] , [0.5,1] )

  return(
    <motion.div 
        ref={sectionRef}
        style={{
            scale:scaleProgress,
            opacity:opacityProgress
        }}
        className="group mb-3 sm:mb-8 last:mb-0 ">

         

        <section 
        className="relative bg-gray-100 max-w-[42rem] border border-black-5
        overflow-hidden sm:pr-8 sm:h-[22rem] sm:group-even:pl-8 rounded-lg
        hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:border-0
        ">
           <div className="pt-4 pb-7 px-5 h-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
           flex flex-col sm:group-even:ml-[18rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-semibold ">{title}</h3>
              <a  href={repositoryUrl} target="_blank" className="text-xs bg-gray-950 rounded-sm text-white p-[0.2rem] focus:scale-110 hover:bg-gray-950
             hover:scale-110 active:scale-105 
           dark:bg-white dark:bg-opacity-10">
                Ver Código
              </a>
            </div>
            <p className="mt-2 leading-relaxed text-gray-700 mb-4 dark:text-white/70 ">{description}</p>
            <span className="font-bold text-gray-950  dark:text-gray-200 text-xs py-2">Ferramentas</span>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {
                  tags.map((tag,i) =>(
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase
                    tracking-wider text-white rounded-full dark:text-white/70" key={i}>{tag}
                    </li>
                  ))
                }
            </ul>
          </div>
         
            <Image src={imageUrl} alt="Projetos que eu contribui" quality={95} className="absolute
            top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition hidden sm:block
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:-translate-y-3
            group-hover:-rotate-2
            group-even:right-[initial]
            group-even:-left-40
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2"/>
         

        </section>

        
        

    </motion.div>
  )
}