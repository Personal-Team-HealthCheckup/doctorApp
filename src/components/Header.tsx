import { healthcareLogo } from "@/public/images/assets";
import Image from "next/image";
import React from "react";
import { usePathname } from 'next/navigation'
const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Service", link: "/Service" },
  { id: 3, title: "Contact Us", link: "/Contact" },
  { id: 4, title: "Help", link: "/Help" },
  { id: 5, title: "Blog", link: "/Blog" },
];
const Header =()=> {
  const pathName = usePathname()
  
    return (
      <nav className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between w-[100%]">
            <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center  w-[100%] sm:items-center sm:justify-start md:justify-between">
              <div className="flex flex-shrink-0  items-center">
                <Image
                  className="h-9 w-auto"
                  src={healthcareLogo}
                  alt="doctor app logo"
                />
              </div>
              <div className="hidden  sm:flex flex-1 justify-center">
                <div className="flex space-x-4">
                  {navLinks.map((navLink) => (
                    <a href={navLink.link} key={navLink.id}
                     className={navLink.link === (pathName ?? "/") ? "tabActive" : "tab"}
                     >
                      {navLink.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden  sm:flex">
                <div className="flex space-x-4">
                  <button type="button" className="button">
                    signup
                  </button>
                  <button type="button" className="button-login">
                    login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((navLink) => (
              <a
                href={navLink.link}
                key={navLink.id}
                className={navLink.link === (pathName ?? "/") ? "tabMobileActive" : "tabMobile"}
              >
                {navLink.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
}
export default Header;