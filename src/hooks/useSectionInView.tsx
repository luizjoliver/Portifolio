"use client"

import { useActiveSection } from '@/context/Active-section'
import  { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '../../types'

type useSectionInViewProps = SectionName

export default function useSectionInView(sectionName : useSectionInViewProps,threshold:number) {

    const {setActiveSection,timeOfLastClick} = useActiveSection()
  
    const {ref, inView } = useInView({
      threshold:threshold
    })
  
      useEffect(() =>{
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName)
        }
      },[inView,setActiveSection,timeOfLastClick,sectionName])

  return {
    ref
  }
}
