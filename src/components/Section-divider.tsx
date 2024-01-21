"use client"
import {motion} from "framer-motion"

export default function Sectiondivider() {
  return (
    <motion.div className="bg-gray-300 h-16 my-24 w-1 rounded-full hidden sm:block"
    initial={{opacity:0, y: 100}}
    animate={{opacity:100 , y:0}}
    transition={{delay:0.2}}>

    </motion.div >
  )
}
