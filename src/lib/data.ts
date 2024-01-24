import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dashgo from "@/public/dashgo.png"
import dtmoney from "@/public/dtmoney.png";

import petzone from "@/public/petzone.png"
 
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiência",
    hash: "#experiencia",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experiencesData = [
  {
    title: "Curso Técnologo ADS",
    location: "Brasil, DF",
    description:
      "Eu começei o curso técnologo ADS em 2022 na UNICEUB com data prevista de término para final do segundo semestre de 2024",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Projeto Integrador PetZone",
    location: "Brasil, DF",
    description:
      "Durante o curso de ADS trabalhei paralelamente no projeto PetZone juntamente com alguns colegas de turma durante a disciplina Projeto Integrador.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Curso Full Stack - OneBitCode",
    location: "Remoto, Brasil",
    description:
      "Realizei o curso de certificção Full Stack OneBitCode paralelamente durante os meus primeiros messes no curso técnologo de ADS",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "DashGo",
    description:
      "O Projet Dashgo conta com um dashboard  visual com os dados cadastrados do cliente , portanto sendo um ferramenta visual poderosa",
    tags: ["React", "Next.js", "ChackraUI","ReactQuery","apexcharts"],
    imageUrl: dashgo,
    repositoryUrl:"https://github.com/luizjoliver/Dashgo"
  },
  {
    title: "dtMoney",
    description:
      "Projeto dtMoney é um projeto com inteface moderna , que tem como função auxilíar a gerenciar as despesas diárias , sendo um ótimo ajudante na hora de gerenciar os gastos",
    tags: ["React",  "Next.js","Miragejs", "Tailwind"],
    imageUrl: dtmoney,
    repositoryUrl:"https://github.com/luizjoliver/Dt-Money"
  },
  {
    title: "PetZone",
    description:
      "Projeto PetZone foi um projeto criado durante o meu curso Técnologo ADS. PetZone tem o intuito de ser uma plataforma pet que possa ajuda veterinários ao atender as necessidades dos Pets",
    tags: ["React", "Next.js", "Sass", "AOS","MongoDB"],
    imageUrl: petzone,
    repositoryUrl:"https://github.com/luizjoliver/Projeto-Integrador"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Jest",
  "Zod",
  "RactQuery",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Chackra UI",
  "Materia UI",
  "Framer Motion",
] as const;