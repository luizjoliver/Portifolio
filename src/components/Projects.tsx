"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./Section-heading";
import Project from "./Project";
import useSectionInView from "@/hooks/useSectionInView";
import React from "react";




export default function Projects() {

  const {ref} = useSectionInView("Projetos",0.45)

  return (
    <section id="projetos" className="scroll-mt-28 mb-28" ref={ref}>
     
        <SectionHeading>Meus projetos</SectionHeading>
     
      <div>
        {projectsData.map((project,i) =>(
          
          <React.Fragment key={i}>
            <Project {...project}/>
          </React.Fragment>

        ))}
      </div>
    </section>
  )
}

