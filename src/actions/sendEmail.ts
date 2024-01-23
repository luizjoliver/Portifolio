'use server'

import { getErrorMessage } from '@/lib/utils/getErrorMessage';
import { validateString } from '@/lib/utils/validateString';
import { Resend } from 'resend';
import { ContactFormEmail }from '@/email/ContactFormEmail';
import React from 'react';


const resend = new Resend(process.env.RESEND_API_KEY);
    



export async function SendEmail(formData:FormData) {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    if (!validateString(senderEmail, 500)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message",
        };
      }
    
      let data;
     
      try {
        data = await resend.emails.send({
          from: `Portfólio <onboarding@resend.dev>`,
          to: 'luizfellipejoliver14@gmail.com',
          reply_to:senderEmail as string,
          subject:"Messagem do formulário de contato",
          react: React.createElement(ContactFormEmail,{
              message:message as string,
              senderEmail:senderEmail as string
          })
  
        })
      } catch (error) {
        return {
          error: getErrorMessage(error)
        };
      }

      
     return {
        data
     }
}