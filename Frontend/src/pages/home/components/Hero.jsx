import React from "react";
import Scene from "./Scene";
import camera from "../assets/Camera.svg"; // Camera icon

function Hero() {
  const cardsData = [
    {
      id: 1, // Add a unique ID
      title: "AI Powered",
      description:
        "Welcome to the future of grocery shopping! Our AI-powered platform lets you find prices and products effortlessly.",
      backgroundImage: "/HeroCard1.png",
    },

    {
      id: 2, // Add a unique ID
      title: "Value For Money",
      description:
        "Welcome to the future of grocery shopping! Our AI-powered platform lets you find prices and products effortlessly.",
      backgroundImage: "/HeroCard2.png",
    },
    {
      id: 3, // Add a unique ID
      title: "Transparency",
      description:
        "Welcome to the future of grocery shopping! Our AI-powered platform lets you find prices and products effortlessly.",
      backgroundImage: "/HeroCard3.png",
    },
  ];

  return (
    <div className=" h-screen pt-32">
      <div className=" h-full lg:h-4/6 w-full bg-white flex flex-col lg:flex-row overflow-clip ">
        {/* Right Section (3D Model) - Top on Small Screens */}
        <div className="order-1 lg:order-2 h-60 lg:h-full pt-36  w-full lg:w-1/2 flex items-center justify-center lg:justify-end  lg:pt-12 overflow-hidden min-w-[400px]">
          <Scene />
        </div>

        {/* Left Section (Text & Buttons) - Bottom on Small Screens */}
        <div className="order-2 lg:order-1 h-full w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-start px-4 sm:px-8 md:px-16 lg:pl-32 pt-5 md:pt-16  overflow-hidden">
          {/* Heading Section */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-black font-heading leading-tight">
            Discover Your Groceries <br /> with a Simple Scan
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl font-secondary">
            Welcome to the future of grocery shopping! Our AI-powered platform
            lets you find prices and products effortlessly.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-row gap-6 w-auto">
            <button className="w-auto px-6 py-3 bg-primary text-white rounded-full text-sm sm:text-base font-semibold hover:bg-primary-dark transition-colors duration-300">
              GET STARTED
            </button>
            <button className="w-auto px-6 py-3 bg-action_red text-white rounded-full text-sm sm:text-base font-semibold hover:bg-action_red-dark transition-colors duration-300">
              MARKETPLACE
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex items-center bg-light_grey rounded-full pl-6 pr-3 w-[440px] h-12 sm:h-14">
            <input
              type="text"
              placeholder="Find best price with our latest AI scanner"
              className="w-full bg-transparent outline-none placeholder-dark_grey text-dark_grey text-sm sm:text-base"
            />
            <button className="bg-white h-8 sm:h-10 w-10 sm:w-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
              <img
                src={camera}
                alt="Camera"
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 w-full z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden`}
              style={{
                backgroundImage: `url(${card.backgroundImage})`, // Use the image URL from card data
                backgroundSize: "cover", // Ensure the image covers the card
                backgroundPosition: "center", // Center the image
              }}
            >

              {/* Card Content */}
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
