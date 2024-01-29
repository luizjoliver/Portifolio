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
            Depois de finalizar meu segundo grau{" "}, eu decidi investir na minha paixão pela área de tecnologia
            e programação. Então acabei escolhendo cursar a aréa de ADS{" "}
            <span className="font-medium">e estudar cada vez mais sobre programação , tais como fundamentos sobre desenvolvimento <span className="italic">full stack </span>e afins...</span>{" "}
            Minha parte favorita na programação  é poder resolver 
            problemas do mundo real e gerar maior qualidade de vida neste mundo moderno para as pessoas. Minha stack atual é {" "}
            <span className="font-medium">React,TypeScript,Next.js, Node.js, MySQL/PostgreSQL, Prisma ORM e MongoDB  </span>
            . Sou uma pessoa que sempre está diposta a aprender novas tecnologias com intuito de resolução de problemas e atualmente estou procurando por uma nova oportunidade na área{" "}.
          </p>
    </motion.section>
  )
}
