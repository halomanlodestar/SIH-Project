import NavMenu from "@/components/NavMenu";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Application",
    path: "/application",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <header
      className={
        "w-full h-20 text-md border-b flex items-center justify-between container-x"
      }
    >
      <nav>
        <Image
          width={32}
          height={32}
          src={"/favicon.png"}
          alt={"SIH"}
          className={"rounded-full"}
        />
      </nav>
      <nav>
        <ul className={"hidden md:flex space-x-4"}>
          {NavLinks.map((item) => (
            <Link href={item.path} key={item.name} className={"cursor-pointer"}>
              {item.name}
            </Link>
          ))}
        </ul>
        <div className={"md:hidden"}>
          <NavMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
