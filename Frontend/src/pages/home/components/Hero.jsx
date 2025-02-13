import React from "react";
import Scene from "./Scene";
import camera from "../assets/Camera.svg"; // Camera icon
import Orb from "../../../../Orb/Orb";

function Hero() {
  return (
    <div className="min-h-screen  bg-white mt-20 md:mt-0">
      <div className="h-full lg:h-[85vh] w-full bg-white flex flex-col lg:flex-row overflow-hidden mt-10">
        {/* Right Section (3D Model) */}
        <div className="order-1 lg:order-2 h-60 lg:h-full pt-36 w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pt-0 overflow-hidden min-w-[400px] -ml-3 md:-ml-16">
          <Scene />
        </div>

        {/* Left Section (Text & Buttons) */}
        <div className="order-2 lg:order-1 h-full w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-start lg:pl-36 pt-8 md:pt-40 space-y-12">
          {/* Heading Section */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 font-heading leading-tight animate-fade-in">
              Discover Your Groceries <br />
              <span className="text-primary">with a Simple Scan</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-secondary leading-relaxed tracking-wide">
              Welcome to the future of grocery shopping! Our AI-powered platform
              lets you find prices and products effortlessly.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-8 w-auto">
            <button className="w-auto px-8 py-4 bg-primary text-white rounded-full text-base font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              GET STARTED
            </button>
            <button className="w-auto px-8 py-4 bg-action_red text-white rounded-full text-base font-semibold hover:bg-action_red-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              MARKETPLACE
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative group mt-4">
            <div className="flex items-center bg-light_grey rounded-full pl-8 pr-4 w-[400px] h-14 transition-all duration-300 group-hover:shadow-md">
              <input
                type="text"
                placeholder="Find best price with our latest AI scanner"
                className="w-full bg-transparent outline-none placeholder-dark_grey text-dark_grey text-base focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
              />
              <button className="bg-white h-12 w-14 rounded-full flex items-center justify-center hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 ml-2">
                <img
                  src={camera}
                  alt="Camera"
                  className="h-6 w-6 cursor-pointer filter-none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="w-full bg-white mt-10 md:-mt-24 px-4 md:px-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 px-4">
            {/* Users Stat */}
            <div className="text-center rounded-2xl p-4 md:p-0 w-full md:w-auto mb-4 md:mb-0">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg md:text-xl font-semibold text-gray-800">Active Users</div>
              <p className="text-gray-600 mt-2 md:mt-2 text-sm md:text-base">Trust our platform daily</p>
            </div>

            {/* Shops Stat */}
            <div className="text-center rounded-2xl p-4 md:p-0 w-full md:w-auto mb-4 md:mb-0">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg md:text-xl font-semibold text-gray-800">Partner Shops</div>
              <p className="text-gray-600 mt-2 md:mt-2 text-sm md:text-base">Across the country</p>
            </div>

            {/* Delivery Personnel Stat */}
            <div className="text-center rounded-2xl p-4 md:p-0 w-full md:w-auto">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-lg md:text-xl font-semibold text-gray-800">Delivery Partners</div>
              <p className="text-gray-600 mt-2 md:mt-2 text-sm md:text-base">Ready to serve you</p>
            </div>
          </div>
        </div>

      {/* Orb and Features Section */}
      <div className="bg-transparent  w-full z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Orb Container */}
          <div className="w-full lg:w-1/2 h-[50vh]">
            <Orb />
          </div>

          {/* Features Container */}
          <div className="w-full lg:w-1/2 space-y-8 p-5">
            <h2 className="text-4xl font-bold text-gray-900">
              AI-Powered <span className="text-primary">Marketplace</span>
            </h2>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Price Analysis</h3>
                  <p className="text-gray-600">Real-time price comparison and trend analysis across multiple stores</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Product Recognition</h3>
                  <p className="text-gray-600">Advanced AI scanning technology for quick product identification</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Insights</h3>
                  <p className="text-gray-600">User-driven reviews and recommendations for informed decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
