"use client"

import useThemeContext from "@/hooks/useThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";



export default function ThemeSwitch() {

  const {theme,toogleTheme} = useThemeContext()

  return (
    <button className="fixed bottom-5 right-5 bg-gray-200 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    onClick={toogleTheme}>
        {
            theme === "light" ? <BsSun/> : <BsMoon/>
        }
    </button>
  )
}
