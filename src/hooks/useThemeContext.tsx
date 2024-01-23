"use client"

import { ThemeContext } from "@/context/Theme-context"
import { useContext } from "react"



export default function useThemeContext() {

    const context = useContext(ThemeContext)

    if(context === null){
      throw new Error("useThemeContext muts be used within a ThemeContextProvider")
    }
    
  return context

}

