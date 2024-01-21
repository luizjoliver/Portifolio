"use client"

import { experiencesData } from "@/lib/data";
import SectionHeading from "./Section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import React from "react";
import useSectionInView from "@/hooks/useSectionInView";

export default function Experience() {

    const {ref} = useSectionInView("Experiência",0.5)

  return (
    <section ref={ref} id="experiencia"  className="scroll-mt-28 mb-28 sm:mb-40" >
    <SectionHeading>Minha Experiência</SectionHeading>
    <VerticalTimeline lineColor="" animate={false}>
      {experiencesData.map((experience,index) => (
        
        <VerticalTimelineElement
        key={index}
        visible
        contentStyle={{
            background:"#f3f4f6",
            boxShadow:"none",
            border:"1px solid rgba(0,0,0,0.05)",
            textAlign:"center",
            padding:"1.3rem 2rem"
        }}
        contentArrowStyle={{
            borderRight:"0.4rem solid #9ca3af"
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
            fontSize:"1.5rem",
            background:"white"
        }}
        
        >
                        <h3 className="font-semibold capitalize">{experience.title}</h3>
                        <p className="font-normal !mt-0">{experience.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                            {experience.description}
                        </p>
         </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  </section>
  )
}
