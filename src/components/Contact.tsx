"use client"

import SectionHeading from './Section-heading'
import useSectionInView from '@/hooks/useSectionInView'
import {motion} from "framer-motion"
import { SendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

export default function Contact() {

    const {ref} = useSectionInView("Contato",0.75)


  return (
    <motion.section id='contato' ref={ref} className='mb-20 sm:mb-28 w-[min(100,38rem)] text-center
    scroll-mt-28'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
        duration:1
    }}
    viewport={{once:true}}>
        <SectionHeading>Entrar em Contato</SectionHeading>

        <p className='text-gray-700 -mt-6 text-[1rem] dark:text-white/80 pt-5'> Entre em contato atráves do meu email 
            <a href="mailto:luizfellipejoliver14@gmail.com" className='text-gray-950 hover:underline
            dark:text-gray-500'> luizfellipejoliver14@gmail.com </a> 
           ou diretamente atráves deste formulário
        </p>

        <form className='mt-10 flex flex-col dark:text-black' action={async (formData )=> {

           const {data,error} = await SendEmail(formData)

           
           if (error) {
            toast.error(error);
            return;
           }

           toast.success("Email enviado com sucesso")
           
        }}>
            <input type='email' className='h-14 px-4 rounded-lg border border-black/10 dark:outline-none
            dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
            name='senderEmail'
            placeholder='Seu email'
            required
            maxLength={300}/>
            <textarea className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:outline-none
            dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
            name='message'
            placeholder='Sua mensagem ...'
            required
            maxLength={5000}
            />

            <SubmitButton/>
        </form>
    </motion.section>
  )
}
