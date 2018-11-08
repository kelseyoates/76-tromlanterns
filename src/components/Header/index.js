import React from "react";
import Link from "gatsby-link";
import logoSmall from "../../images/logo-small.svg";


const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="primary">
      <div className="flex flex-wrap items-baseline justify-between mx-auto px-4">
        <Link to="/" className="flex  no-underline text-white">

         <img src={logoSmall} className="logo" />
        {/* <svg
            className="fill-current h-8 mr-2 w-8"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          {/* <span className="font-bold text-xl tracking-tight">
           Two Lanterns
          </span> */}
        </Link>

        <button
          className="block  sm:hidden flex items-baseline px-3 py-2 rounded text-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden sm:flex  w-full sm:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/"
              className=" px-4 mt-02 xsm:block sm:inline-block no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/#services"
              className=" px-4 xsm:block sm:inline-block mt-02  no-underline text-white"
            >
              Services
            </Link>

 <a href="https://medium.com/@twolanterns"
              className=" px-4 xsm:block sm:inline-block mt-02 no-underline text-white"
            >
              Blog
            </a>


            <Link
              to="/#contact"
              className=" px-4 xsm:block sm:inline-block mt-02 no-underline text-white"
            >
              Contact
            </Link>

             
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
