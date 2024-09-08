"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Button
      variant={"ghost"}
      onClick={() => setMenuOpen(!menuOpen)}
      className={"md:hidden block"}
    >
      {menuOpen ? <X /> : <Menu />}
    </Button>
  );
};

export default NavMenu;
