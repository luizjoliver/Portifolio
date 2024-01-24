/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import {BsArrowRight,BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/hooks/useSectionInView";
import { useActiveSection } from "@/context/Active-section";




export default function Intro() {

  const {ref} = useSectionInView("Home",0.5)

  const {setActiveSection,setTimeofLastClick} = useActiveSection()

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    id="home" ref={ref}>
        <div className="flex items-center justify-center">
            <div>
                <motion.div 
                initial={{ opacity:0,scale:0 }}
                animate={{opacity:1, scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2
                }}>
                    <Image src="https://avatars.githubusercontent.com/u/106269210?v=4" alt="Luiz Photo"
                    height="192"
                    width="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full border-[0.35rem] border-white
                    object-cover shadow-xl"/>
                </motion.div>

                 
            </div>

        </div>

         <motion.h1 className="text-2xl mb-10 mt-4 px-4 font-medium 
         !leading-[1.5] sm:text-4xl"
         initial={{opacity:0 , y: 100}}
         animate={{opacity:1 , y: 0}}>
            <span className="font-bold">Oi, Eu sou o Luiz.</span> Um{" "}
            <span className="font-bold">desenvolvedor web </span> com curso tecnólogo em{" "}
            <span className="font-bold">ADS</span>. Eu adoro
            construir <span className="italic">aplicações & apps</span> 
        </motion.h1 >

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4
        text-lg font-medium"
        initial={{opacity:0 , y: 100}}
        animate={{opacity:1 , y: 0}}
        transition={{delay:0.25}}>

            <Link href="#contato" className="group bg-gray-900 text-white
            px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110 active:scale-105 hover:bg-gray-950
            transition">Entrar em contato <BsArrowRight className=" group-hover:translate-x-1 bg-opacity-70"
            onClick={() =>{
                setActiveSection("Sobre")
                setTimeofLastClick(Date.now())
            }}/>
            </Link>

               <a href="https://drive.google.com/file/d/1xY7kbFaY4u12XaLcNsj2WmMW40CBHk9c/view?usp=sharing"  target="_blank" download className="group bg-white px-7 py-3 flex 
                   items-center gap-2 rounded-full  outline-none focus:scale-110
                   hover:scale-110 active:scale-105 
                   transition cursor-pointer border
                   border-black/10 dark:bg-white/10" >
                  Baixar currículo <HiDownload className="opacity-60 group-hover:translate-y-1"/>
               </a>

               <a href="https://www.linkedin.com/in/luiz-fellipe-joliver/" target="_blank" className="bg-white text-gray-900
                  p-4 flex items-center gap-2 rounded-full focus:scale-[1.15]
                  hover:scale-[1.15] active:scale-105 
                  transition cursor-pointer border
                  border-black/10 dark:bg-white/10 dark:text-white/60">
                <BsLinkedin/>
               </a>

               <a href="https://github.com/luizjoliver" target="_blank" className="bg-white text-gray-900
                  p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15]
                  hover:scale-[1.15] active:scale-105 
                  transition cursor-pointer border
                  border-black/10 dark:bg-white/10 dark:text-white/60">
                <FaGithubSquare/>
               </a>

        </motion.div >
    </section>
  )
}
