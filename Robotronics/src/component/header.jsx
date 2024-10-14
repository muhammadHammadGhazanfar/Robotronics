import { useState } from "react";
import logo from "../assets/logo/Robotrinic.svg";
import basket from "../assets/logo/basket.svg";
import Aos from "aos";
import { NavLink } from "react-router-dom";

const Header = () => {
  useState(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // State for switch button

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggle = (isSignUpValue) => {
    if (isSignUpValue !== isSignUp) {
      setIsSignUp(isSignUpValue);
    }
  };

  return (
    <header className="text-gray-600 bg-white body-font rounded-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-20 h-20" />
          <h1 className="text-xs">
            ROBOTRONICS
            <br />
            <p className="text-xs text-gold ">P A K I S T A N</p>
          </h1>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex  md:items-center md:w-auto">
          <div className="flex space-x-5 flex-row">
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-shadow-md hover:text-black hover:border-b hover:border-black text-black text-lg transition duration-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg "
              to="/aboutUs"
            >
              Who We Are
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/International/Iservices"
            >
              Services
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Course"
            >
              Courses
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="#"
            >
              Events
            </NavLink>
            <NavLink
              className="mr-3 cursor-pointer poppins-light hover:text-black hover:border-b hover:border-black text-black text-lg"
              to="/Blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/International/home"
            >
              International
            </NavLink>
            <NavLink
              className="cursor-pointer hover:text-black poppins-light hover:border-b hover:border-black text-black text-lg"
              to="/COntactUS"
            >
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Switch Buttons */}
        <nav className="hidden md:flex  md:items-center md:w-auto">
          <div className="flex gap-x-2 ">
            <div className="flex border rounded-lg">
              <a
                className={`py-1 px-4 rounded m-2 cursor-pointer shadow-4xl focus:outline-none transition duration-300 ${
                  isSignUp ? "bg-signin text-white" : " text-gray-700"
                }`}
                onClick={() => handleToggle(true)}
                href="/Signup"
              >
                Sign Up
              </a>

              <a
                className={`py-1 px-4 rounded m-2 cursor-pointer p-1 shadow-4xl focus:outline-none transition duration-300 ${
                  !isSignUp ? "bg-signin text-white" : " text-gray-700"
                }`}
                onClick={() => handleToggle(false)}
                href="/Login"
              >
                login In
              </a>
            </div>
            <img className="flex" src={basket} alt="basket" />
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden border border-transparent rounded-md p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        <nav
          className={`${menuOpen ? "block" : "hidden"} md:hidden w-full mt-4`}
        >
          <div className="flex flex-col">
            {/* mobile Switch Buttons */}
            <div className="flex border w-1/2 rounded-lg">
              <button
                className={`py-1 px-4 rounded m-2 shadow-4xl focus:outline-none transition duration-300 ${
                  isSignUp ? "bg-signin text-white" : " text-gray-700"
                }`}
                onClick={() => handleToggle(true)}
              >
                Sign Up
              </button>
              <button
                className={`py-1 px-3 rounded m-2 p-1 shadow-4xl focus:outline-none transition duration-300 ${
                  !isSignUp ? "bg-signin text-white" : " text-gray-700"
                }`}
                onClick={() => handleToggle(false)}
              >
                Sign In
              </button>
            </div>
            <NavLink
              to="/"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Who We Are
            </NavLink>
            <NavLink
              to="#"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Services
            </NavLink>
            <NavLink
              to="/Course"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Courses
            </NavLink>
            <NavLink
              to="/shop"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Shop
            </NavLink>
            <NavLink
              to="#"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Events
            </NavLink>
            <NavLink
              to="/Blog"
              className="mb-2 cursor-pointer hover:text-black hover:underline text-base"
            >
              Blog
            </NavLink>
            <NavLink
              to="/COntactUS"
              className="cursor-pointer hover:text-black hover:underline text-base"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
