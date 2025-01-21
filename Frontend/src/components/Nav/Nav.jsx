import React from "react";
import logo from "./Fairbasket.png"; // Import the logo image

function Nav() {
  return (
    <div className="fixed top-0 right-0 left-0 ">
      <div className="h-20 w-full px-48 bg-primary_light flex items-center justify-center gap-x-6">
        {/* Logo Section */}
        <div className="h-12 flex items-center justify-center">
          <img src={logo} alt="Fairbasket Logo" className="h-full w-full object-contain" />
        </div>

        {/* Address Section */}
        <div className="h-14 w-80 bg-primary rounded-full flex items-center justify-center">
          address
        </div>

        {/* Search Section */}
        <div className="h-14 w-2/3 bg-background rounded-full flex items-center justify-center">
          search
        </div>

        {/* Sign-in Section */}
        <div className="h-14 w-60 bg-primary rounded-full flex items-center justify-center">
          signin
        </div>

        {/* Cart Section */}
        <div className="h-14 w-12 bg-primary flex items-center justify-center">
          cart
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-10 w-full bg-[#EEF3CD]"></div>
    </div>
  );
}

export default Nav;
