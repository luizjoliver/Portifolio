

import { projectsData } from "@/lib/data";
import SectionHeading from "./Section-heading";
import React from "react";
import Project from "./Project";



export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-28">
     
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

