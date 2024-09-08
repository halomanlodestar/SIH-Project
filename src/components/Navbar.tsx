import NavMenu from "@/components/NavMenu";

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
        "w-full h-20 text-lg border flex items-center justify-between container-x"
      }
    >
      <nav>Home</nav>
      <nav>
        <ul className={"hidden md:flex space-x-4"}>
          {NavLinks.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <NavMenu />
      </nav>
    </header>
  );
};

export default Navbar;
