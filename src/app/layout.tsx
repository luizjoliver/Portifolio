import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/Active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeSwitchProvider from "@/context/Theme-context";

const inter = Inter({ subsets: ["latin"],
weight:["100","300","500","700","900"]});

export const metadata: Metadata = {
  title: "Luiz Joliver | Portifólio",
  description: "Luiz joliver é um desenvolvedor web ,portanto cria aplicações e apps na área do desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`bg-gray-50 text-gray-950 relative ${inter.className}  pt-28 sm:p-35
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

        <div className="bg-[#a1e4c8] -z-10 absolute top[-6rem] right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#367a5f]"></div>

        <div className="bg-[#dbd7fb] -z-10 absolute top[-1rem] left-[-35rem] h-[31.25rem]
        w-[59rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7a74b1]"></div>

        
  <ThemeSwitchProvider>  
    <ActiveSectionContextProvider>
        <Header/>
         {children}
         <Footer/>
         <Toaster position="top-right"/>
       </ActiveSectionContextProvider>
      <ThemeSwitch/>
    </ThemeSwitchProvider>    
        </body>
    </html>
  );
}
