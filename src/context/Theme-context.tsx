"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark"

type createContextProps = {
  theme:string,
  toogleTheme: () => void
}

export const ThemeContext = createContext<createContextProps | null>(null)



export default function ThemeSwitchProvider({children} :{children:ReactNode}) {

  const [theme,setTheme] = useState<Theme>("light")

  const toogleTheme = () =>{

      if(theme === "light"){
          setTheme("dark")
          window.localStorage.setItem("theme","dark")
          document.documentElement.classList.add("dark")
      }else{
          setTheme("light")
          window.localStorage.setItem("theme","light")
          document.documentElement.classList.remove("dark")
      }
  }

  useEffect(() =>{

      const themeStored = localStorage.getItem("theme") as Theme || null
      

      if(themeStored){
          setTheme(themeStored)
          if(themeStored === "dark"){
              document.documentElement.classList.add("dark")
          }
      }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
          setTheme("dark")
          document.documentElement.classList.add("dark")
      }

  },[])



  return (
    <ThemeContext.Provider value={{theme,toogleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
