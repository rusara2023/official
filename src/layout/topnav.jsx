import React from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import LOGO from "../images/logo.png";
import { Link } from "gatsby";
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar style={{backgroundColor:'#0D0D0D'}} className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-0">
        <div className="flex items-center justify-center">
          <Link to="/about-us" className="text-yellow-500 hover:text-white px-8 lg:px-12">About Us</Link>
          <Link to="/">
            <img alt="Ruusara" src={LOGO} className="w-48 h-48" />
          </Link>
        </div>
        <MobileNav className="bg-dark border-none" open={openNav}></MobileNav>
      </Navbar>
    </>
  );
}
