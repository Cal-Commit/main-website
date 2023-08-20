import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import logo from "../static/img/Cal Commit Logo.svg";
import { Link } from "react-router-dom";

function CCNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-all duration-300 ease-in-out p-1  text-md font-dm-sans font-semibold"
      >
        <Link to="/pages" className="relative group">
          <span>Placeholder</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-calcommit-orange transition-all group-hover:w-full"></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-all duration-300 ease-in-out p-1 text-md font-dm-sans font-semibold"
      >
        <Link to="/pages" className="relative group">
          <span>Placeholder</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-calcommit-orange transition-all group-hover:w-full"></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-all duration-300 ease-in-out p-1 text-md font-dm-sans font-semibold"
      >
        <Link to="/pages" className="relative group">
          <span>Placeholder</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-calcommit-orange transition-all group-hover:w-full"></span>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-all duration-300 ease-in-out p-1 text-md font-dm-sans font-semibold"
      >
        <Link to="/pages" className="relative group">
          <span>Placeholder</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-calcommit-orange transition-all group-hover:w-full"></span>
        </Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 font-dm-sans bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 border-0 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="flex items-center transition-all duration-300 ease-in-out mr-4 cursor-pointer py-1.5 font-black font-dela-gothic text-gray-900 text-3xl bg-gray-50 backdrop-blur-md rounded-lg shadow-sm p-2 md:hover:scale-105 md:hover:shadow-lg md:hover:-rotate-12"
        >
          <img src={logo} alt="Cal Commit" className="h-10 w-auto mr-2" /> Cal
          Commit
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            size="sm"
            className="hidden transition-all duration-300 ease-in-out shadow-md lg:inline-block bg-calcommit-orange text-white font-dm-sans text-lg border-2 border-transparent capitalize hover:scale-105 hover:rotate-6 hover:shadow-lg hover:bg-white hover:border-calcommit-orange hover:text-black"
          >
            <span>Sign Up</span>
          </Button>
          <Button
            size="sm"
            className="hidden transition-all duration-300 ease-in-out shadow-md lg:inline-block bg-white text-black border-2 border-calcommit-orange font-dm-sans text-lg capitalize hover:scale-105 hover:rotate-6 hover:shadow-lg hover:bg-calcommit-orange hover:text-white"
          >
            <span>Sign In</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Sign Up</span>
        </Button>
      </Collapse>
    </Navbar>
  );
}

export default CCNavbar;
