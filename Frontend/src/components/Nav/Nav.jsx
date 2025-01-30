import React, { useState } from "react";
import logo from "./assets/Fairbasket.png"; // Logo image
import cart from "./assets/Cart.svg"; // Cart icon
import camera from "./assets/Camera.svg"; // Camera icon
import searchIcon from "./assets/Search.svg"; // Search icon
import userIcon from "./assets/User.svg"; // User icon
import packageicon from "./assets/Package.png"; // Package icon
import { FaBars } from "react-icons/fa"; // Hamburger menu icon

function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div>
      {/* Main Navigation Bar (Hidden on Small Screens) */}
      <div className="font-secondary fixed top-0 right-0 left-0 bg-[#C8D76F] shadow-md h-24 hidden md:block">
        <div className="h-20 w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32">
          {/* Logo Section */}
          <div className="h-6">
            <img
              src={logo}
              alt="FairBasket Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Address Dropdown */}
          <div className="h-12 p-2 bg-[#A2BB5D] text-white rounded-full flex items-center gap-2 cursor-pointer">
            <img
              src={packageicon}
              alt="Cart"
              className="h-10 w-10 p-1 rounded-full"
            />
            <span className="text-xs ">
              How do you want <br /> your items?
            </span>
            <span className="text-lg px-3 hidden sm:block">▼</span>
          </div>

          {/* Search Section */}
          <div className="h-12 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white rounded-full flex items-center px-4">
            <input
              type="text"
              placeholder="Search any item you want"
              className="placeholder-dark_grey w-full h-12 outline-none text-dark_grey rounded-full ml-3 placeholder:text-sm"
            />

            <button className="h-10 w-12 mx-1 bg-[#EEF3CD] rounded-full flex items-center justify-center">
              <img src={camera} alt="Search" className="h-5 w-5" />
            </button>

            <button className="h-10 w-12 bg-[#A2BB5D] mx-1 rounded-full flex items-center justify-center">
              <img src={searchIcon} alt="Search" className="h-6 w-6" />
            </button>
          </div>

          {/* Sign-in Section */}
          <button className="h-12 px-4 sm:px-8 bg-[#A2BB5D] text-white rounded-full flex items-center gap-2 sm:gap-4 cursor-pointer">
            <img src={userIcon} alt="User" className="h-4 w-4 sm:h-6 sm:w-6" />
            <span className="text-xs ">
              Sign in <br /> Account
            </span>
          </button>

          {/* Cart Section */}
          <button className="flex-row items-center gap-2 text-[#A2BB5D] cursor-pointer">
            <div>
              <img src={cart} alt="Cart" className="h-6 w-8 sm:h-8 sm:w-8" />
            </div>
            <div>
              <span className="text-xs sm:text-sm text-white">0.00 $</span>
            </div>
          </button>
        </div>
        <div className="h-6 bg-[#EEF3CD]"></div>
      </div>

      {/* Mobile Navigation Bar (Visible on Small Screens) */}
      <div className="font-secondary fixed top-0 right-0 left-0 bg-[#C8D76F] shadow-md h-16 block md:hidden">
        <div className="h-full w-full flex items-center justify-between px-4">
          {/* Logo Section */}
          <div className="h-6">
            <img
              src={logo}
              alt="FairBasket Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileNav}
            className="text-white focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileNavOpen && (
          <div className="bg-[#C8D76F] w-full absolute top-16 left-0 shadow-lg">
            <div className="flex flex-col items-center gap-4 p-4">
              {/* Address Dropdown */}
              <div className="h-12 p-2 bg-[#A2BB5D] text-white rounded-full flex items-center gap-2 cursor-pointer">
                <img
                  src={packageicon}
                  alt="Cart"
                  className="h-10 w-10 p-1 rounded-full"
                />
                <span className="text-xs ">
                  How do you want <br /> your items?
                </span>
              </div>

              {/* Search Section */}
              <div className="h-12 w-full bg-white rounded-full flex items-center px-4">
                <input
                  type="text"
                  placeholder="Search any item you want"
                  className="placeholder-dark_grey w-full h-12 outline-none text-dark_grey rounded-full ml-3 placeholder:text-sm"
                />

                <button className="h-10 w-12 mx-1 bg-[#EEF3CD] rounded-full flex items-center justify-center">
                  <img src={camera} alt="Search" className="h-5 w-5" />
                </button>

                <button className="h-10 w-12 bg-[#A2BB5D] mx-1 rounded-full flex items-center justify-center">
                  <img src={searchIcon} alt="Search" className="h-6 w-6" />
                </button>
              </div>

              {/* Sign-in Section */}
              <button className="h-12 px-4 bg-[#A2BB5D] text-white rounded-full flex items-center gap-2 cursor-pointer">
                <img src={userIcon} alt="User" className="h-4 w-4" />
                <span className="text-xs ">
                  Sign in <br /> Account
                </span>
              </button>

              {/* Cart Section */}
              <button className="flex-row items-center gap-2 text-[#A2BB5D] cursor-pointer">
                <div>
                  <img src={cart} alt="Cart" className="h-6 w-8" />
                </div>
                <div>
                  <span className="text-xs text-white">0.00 $</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;