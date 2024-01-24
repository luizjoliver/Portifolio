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
            Depois de finalizar meu segundo grau{" "}, Eu decidi investir na minha paixão pela área de tecnologia
            e programação. Então acabei escolhendo cursar a aréa tecnólogo em ADS{" "}
            <span className="font-medium">e estudar cada vez mais sobre programação , tais como fundamentos sobre desenvolvimento full stack e afins.</span>.{" "}
            <span className="italic">Minha parte favorita na programação </span> é poder resolver 
            problemas do mundo real e gerar maior qualidade de vida neste mundo moderno para as pessoas. Minha stack atual é {" "}
            <span className="font-medium">
            React, Next.js, Node.js, MySQL, e MongoDB
            </span>
            .Eu também utilizo typeScript devido as grandes vantagens e o Prisma ORM. Estou sempre diposto a aprender novas tecnologias com intuito de resolução de problemas e atualmente estou procurando por uma nova oportunidade na área{" "}.
          </p>
    </motion.section>
  )
}
