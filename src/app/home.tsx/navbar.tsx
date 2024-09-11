"use client"
import Image from "next/image";
import logo1 from "../assets/logo1.png";
import logo from "../assets/logo.png";
import { Menubar, MenubarItem, MenubarSeparator, MenubarShortcut } from "@/components/ui/menubar";
import { MenubarContent, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import React from "react";

export default function HomeNavbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div className="bg-lime-50 w-full h-30 justify-between flex  p-3">
        <div className="flex justify-center items-center">
          <Image alt="logo" src={logo} width={60} height={100} />
          <Image alt="logo1" src={logo1} width={100} height={100} />
        </div>
        <div>
        <Menubar className=" w-64 justify-evenly">
          <MenubarMenu>
            <MenubarTrigger>
              Artigos
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Inovações 
              </MenubarItem>
              <MenubarSeparator/>
              <MenubarItem>Tecnológia</MenubarItem> 
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger>
              Podcast
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Inovações 
              </MenubarItem>
              <MenubarSeparator/>
              <MenubarItem>Tecnológia</MenubarItem> 
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Eventos
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Agendados
              </MenubarItem>
              <MenubarSeparator/>
              <MenubarItem>Gravados</MenubarItem> 
            </MenubarContent>
            </MenubarMenu>
        </Menubar>
       
       <div>
        <Command>
        <CommandDialog open={open} onOpenChange={setOpen}>oi
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
      <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
      </CommandGroup>
      </CommandList>
    </CommandDialog>
    </Command>
    </div>
      </div>
      </div>
      
     </>
  );
}
