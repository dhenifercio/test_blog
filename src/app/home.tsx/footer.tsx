import Image from "next/image";
import logo1 from "../assets/logo1.png";
import logo from "../assets/logo.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomeFooter() {
  return(
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      </div>
      <footer className=" rounded-t-lg w-full h-60 flex bg-lime-50 border-t relative">
      <div className="absolute bottom-0 left-0 ml-4 mb-4 flex">
          <Image alt="logo" src={logo} width={60} height={100} />
          <Image alt="logo1" src={logo1} width={100} height={100} />
        </div>
        <div >
           <h1 className="text-sm  font-bold ml-4 ">Sobre</h1>
           <div className="flex space-x-56">
           <Accordion className="ml-4" type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Quem somos</AccordionTrigger>
             <AccordionContent>
             Empresa Ganhejunto
            </AccordionContent>
             </AccordionItem>
             <AccordionItem value="item-2">
             <AccordionTrigger>Contatar</AccordionTrigger>
             <AccordionContent>
             Telefone: (11) 9-9999-9999
            </AccordionContent>
             </AccordionItem>
            </Accordion>

            <div >
            <h1 className="text-sm font-bold ml-4  ">Políticas</h1>
            <Accordion className="ml-4" type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Termos de Privacidade</AccordionTrigger>
             <AccordionContent>
             Empresa Ganhejunto
            </AccordionContent>
             </AccordionItem>
             <AccordionItem value="item-2">
             <AccordionTrigger>Cookies</AccordionTrigger>
             <AccordionContent>
             Configurar
            </AccordionContent>
             </AccordionItem>
            </Accordion>
           </div>
           </div>

       
          
        </div>
      </footer>
    </div>
    </>
  )
}