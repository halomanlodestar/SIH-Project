"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/Navbar";
import Link from "next/link";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Sheet open={menuOpen}>
        <SheetTrigger>
          <div
            // variant={"ghost"}
            onClick={() => setMenuOpen(!menuOpen)}
            className={"md:hidden block cursor-pointer"}
          >
            {menuOpen ? <X /> : <Menu />}
          </div>
        </SheetTrigger>

        <SheetContent className={"bg-background"}>
          <SheetHeader
            className={"w-full items-center flex flex-row justify-end"}
          >
            <X
              className={"cursor-pointer"}
              onClick={() => setMenuOpen(false)}
            />
          </SheetHeader>
          <br />
          <br />
          <br />
          <ul className={"flex flex-col text-xl space-y-5"}>
            {NavLinks.map((item) => (
              <Link onClick={() => setMenuOpen(false)} href={item.path}>
                {item.name}
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavMenu;
