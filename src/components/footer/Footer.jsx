import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-gray-800">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-xl font-bold">NisH Store</span>
          </a>
          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 nishStore —
            <Link
              to={"/"}
              className="text-gray-100 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @nishStore
            </Link>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="cursor-pointer w-5">
              <Link to='https://www.linkedin.com/in/nishant-chauhan-b76371255/'>
              <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
              </Link>
            </a>
            
            <a className="cursor-pointer w-5 ml-3">
              <Link to='https://github.com/NISHANTCHAUHAN1'>
              <img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" />
              </Link>
            </a>

            <a className="ml-3 cursor-pointer w-5">
            <Link to='https://www.instagram.com/_.sky_14/'>
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" />
              </Link>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
