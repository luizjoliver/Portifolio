import * as React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Heading } from '@react-email/heading';
import { Preview } from '@react-email/preview';
import { Tailwind } from '@react-email/tailwind';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Hr } from '@react-email/hr';

type ContactFormEmailProps ={
    message:string;
    senderEmail:string;
}


export function ContactFormEmail({message,senderEmail}:ContactFormEmailProps) {
  return (
  <Html>

     <Head/>

        <Preview>Nova mensagem do seu site portifolio</Preview>

        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 py-4 rounder-md'>
                        <Heading className='leading-tight'>Você recebeu a seguinte mensagem do form:</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>Autor da mensagem : {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>

  </Html>
  )
}
