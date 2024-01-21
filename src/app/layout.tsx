import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/Active-section";

const inter = Inter({ subsets: ["latin"],
weight:["100","300","500","700","900"]});

export const metadata: Metadata = {
  title: "Luiz Joliver | Portifólio",
  description: "Luiz joliver é um desenvolvedor full stack , ou seja consegue atuar em ambas as áreas do desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-gray-50 text-gray-950 relative ${inter.className} h-[500vh] pt-28 sm:p-35`}>

        <div className="bg-[#a1e4c8] -z-10 absolute top[-6rem] right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <div className="bg-[#dbd7fb] -z-10 absolute top[-1rem] left-[-35rem] h-[31.25rem]
        w-[59rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        
   <ActiveSectionContextProvider>
          <Header/>
         {children}
   </ActiveSectionContextProvider>
        
        </body>
    </html>
  );
}
