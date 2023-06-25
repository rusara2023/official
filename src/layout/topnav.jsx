import * as React from "react";
import { Navbar, IconButton, MobileNav } from "@material-tailwind/react";
import LOGO from "../images/logo.png";
import { Link } from "gatsby";
export default function TopNav() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Navbar className="sticky mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 rounded-none bg-neutral-950 border-0 z-50">
      <div className="container mx-auto flex items-center justify-evenly">
        <Link activeClassName="text-white border-b" to="/about" className="hidden lg:block text-neutral-500 animate hover:text-white hover:scale-105">
          ABOUT US
        </Link>
        <Link activeClassName="text-white border-b" to="/events" className="hidden lg:block text-neutral-500 animate hover:text-white hover:scale-105">
          EVENTS
        </Link>
        <Link to="/" className="text-neutral-500 animate hover:text-white hover:scale-105">
          <img src={LOGO} alt="Ruusara 2023" className="w-18 h-18" />
        </Link>
        <Link activeClassName="text-white border-b" to="/gallery" className=" hidden lg:block text-neutral-500 animate hover:text-white hover:scale-105">
          GALLERY
        </Link>
        <Link activeClassName="text-white border-b" to="/contact" className="hidden lg:block text-neutral-500 animate hover:text-white hover:scale-105">
          CONTACTS
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 p-1 bg-neutral-600 lg:hidden text-white hover:text-red-900 hover:bg-neutral-950"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container grid grid-cols-1 gap-4 w-full divide-y divide-neutral-700 bg-neutral-900 mx-auto p-4 rounded-b-lg">
        <Link activeClassName="text-white border-b" to="/about" className="text-neutral-500 animate text-center hover:text-white hover:scale-105">
          ABOUT US
        </Link>
        <Link activeClassName="text-white border-b" to="/events" className="text-neutral-500 animate text-center pt-4 hover:text-white hover:scale-105">
          EVENTS
        </Link>
        <Link activeClassName="text-white border-b" to="/gallery" className=" text-neutral-500 animate text-center pt-4 hover:text-white hover:scale-105">
          GALLERY
        </Link>
        <Link activeClassName="text-white border-b" to="/contact" className=" text-neutral-500 animate text-center pt-4 hover:text-white hover:scale-105">
          CONTACTS
        </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}
