"use client"


import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import type { SectionName } from "../../types";



type activeSectionType = {
    activeSection:SectionName,
    timeOfLastClick:number,
    setActiveSection: Dispatch<SetStateAction<SectionName>>,
    setTimeofLastClick: Dispatch<SetStateAction<number>>
}

export const ActiveSectionContext = createContext<activeSectionType >({} as activeSectionType)




export default function ActiveSectionContextProvider({children}:{children:ReactNode}){

        const [activeSection,setActiveSection] = useState<SectionName>("Home")
        const [timeOfLastClick,setTimeofLastClick] = useState(0)


return(
    <>
    <ActiveSectionContext.Provider value={{
        activeSection,setActiveSection,
        timeOfLastClick,setTimeofLastClick
        }}>
        {children}
    </ActiveSectionContext.Provider>
    </>
)


}

export function useActiveSection (){

    return useContext(ActiveSectionContext)
}