"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, Home, Menu, Laugh, BookCheck, BookUser, Columns4 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { motion } from "framer-motion"
type Menu = {
  label: string
  name: string
  icon: React.ReactNode
  submenu?: Submenu[]
  href: string
}

type Submenu = {
  name: string
  icon: React.ReactNode
  href: string
}

export function SidebarMenu() {
  const pathname = usePathname();

  const menus: Menu[] = [
    {
      label: "",
      name: "Home",
      icon: <Home size={15} className="mr-2" />,
      href: "/",
    },
    {
      label: "Principios",
      name: "Comunicación",
      icon: <BookUser size={15} className="mr-2" />,
      href: "/comunicacion",
    },
    {
      label: "Principios",
      name: "Comprender",
      icon: <BookCheck size={15} className="mr-2" />,
      href: "/comprender",
    },
    {
      label: "Principios",
      name: "Motivar",
      icon: <Laugh size={15} className="mr-2" />,
      href: "/motivar",
    },
    {
      label: "Principios",
      name: "Justicia",
      icon: <Columns4 size={15} className="mr-2" />,
      href: "/justicia",
    },
  ];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  return (
    <ScrollArea className="h-screen lg:w-48 sm:w-full rounded-md">
      <div className="md:px-4 sm:p-0 mt-5 ">
        {uniqueLabels.map((label, index) => (
          <React.Fragment key={label}>
            {label && (
              <p className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300  ${index > 0 ? 'mt-10' : ''}`}>
                {label}
              </p>
            )}
            {menus
              .filter((menu) => menu.label === label)
              .map((menu) => (
                <React.Fragment key={menu.name}>
                  {menu.submenu && menu.submenu.length > 0 ? (
                    <Accordion
                      key={menu.name}
                      type="single"
                      className="mt-[-10px] mb-[-10px] p-0 font-normal"
                      collapsible
                    >
                      <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                        <AccordionTrigger>
                          <motion.div
                            drag
                            dragConstraints={{
                              top: -50,
                              left: -50,
                              right: -50,
                              bottom: -50.

                            }}
                            className={cn(
                              "w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-gray-200 hover:text-black rounded-md",
                              pathname === menu.href && "bg-black text-white hover:bg-black hover:text-white"
                            )}>
                            <div className="flex justify-between w-full [&[data-state=open]>svg]:rotate-180">
                              <div className="flex">
                                <div className="w-6">{menu.icon}</div>
                                {menu.name}
                              </div>
                              <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                            </div>
                          </motion.div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.submenu.map((submenu) => (
                            <Link key={submenu.name} href={submenu.href} className={cn(
                              "text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white my-2 items-center p-4 hover:bg-gray-200 hover:text-black rounded-md",
                              pathname === submenu.href && "bg-black text-white hover:bg-black hover:text-white"
                            )}>
                              <div className="w-6">{submenu.icon}</div>
                              {submenu.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link href={menu.href} className={cn(
                      "flex text-xs h-10 bg-white my-2 items-center p-4 hover:bg-gray-200 hover:text-black rounded-md",
                      pathname === menu.href && "bg-black text-white hover:bg-black hover:text-white"
                    )}>
                      <div className="w-6">{menu.icon}</div>
                      {menu.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
