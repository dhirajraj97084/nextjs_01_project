"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div>
       <div
      className={cn("fixed inset-x-0 max-w-3xl sm:top-5 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href={'/'}>
      <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
      </Link>
      <Link href={'/allprojects'}>
      <MenuItem setActive={setActive} active={active} item="All Projects">          
        </MenuItem>
      </Link>
        
        
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/html">HTML</HoveredLink>
            <HoveredLink href="/css">CSS</HoveredLink>
            <HoveredLink href="/js">JAVASCRIPTS</HoveredLink>
            <HoveredLink href="/tailwind">TAILWINDCSS</HoveredLink>
            <HoveredLink href="/fullstack">MERN STACK</HoveredLink>
            <HoveredLink href="/nextjs">NEXT JS</HoveredLink>
          </div>
        </MenuItem>       
        <Link href={'/contact'}>
         <MenuItem setActive={setActive} active={active} item="Contact ">          
        </MenuItem>
      </Link>
      </Menu>
    </div>
    </div>
  )
}

export default Navbar
