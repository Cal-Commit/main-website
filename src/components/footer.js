import React from "react";
import { Typography } from "@material-tailwind/react";
import logo from "../static/img/Cal Commit Logo.svg";

function CCFooter() {
  return (
    <footer className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 border border-white py-4 px-8 rounded-md shadow-lg backdrop-filter: blur(5px) bg-white bg-opacity-70">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <Typography
            as="a"
            href="#"
            className="flex items-center transition-all duration-300 ease-in-out mr-4 cursor-pointer py-1.5 font-black font-dela-gothic text-gray-900 text-3xl backdrop-blur-md rounded-lg shadow-sm p-2 "
          >
            <img src={logo} alt="Cal Commit" className="h-10 w-auto mr-2" /> Cal
            Commit
          </Typography>
          <p className="text-blue-gray-900 mt-4">&copy; 2023 All Rights Reserved.</p>
        </div>
        <div className="flex font-dm-sans  gap-10 text-blue-gray-900">
          <ul>
            <h3 class="block  font-semibold text-lg leading-relaxed tracking-normal ">
              Cal Commit Websites
            </h3>
            <li className="mb-2">
              <a
                href="https://calcommit.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://dashboard.calcommit.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="https://branch.calcommit.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a branch
              </a>
            </li>
          </ul>
          <ul>
          <h3 class="block  font-semibold text-lg leading-relaxed tracking-normal ">
              Our Socials
            </h3>
            <li className="mb-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default CCFooter;
