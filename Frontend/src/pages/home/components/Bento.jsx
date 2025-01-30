import React from "react";

const Bento = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Grid Container */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 auto-rows-[minmax(150px,_auto)]">
        
        {/* Card 1 */}
        <div className="bg-yellow-200 p-4 flex items-center justify-center rounded-lg">
          <p className="text-lg font-semibold">Up to 60% off</p>
        </div>

        {/* Card 2 */}
        <div className="bg-red-400 text-white p-6 flex flex-col justify-center items-center rounded-lg md:col-span-1">
          <p className="text-xl font-bold text-center">Healthy, Affordable, and Delivered Fresh!</p>
          {/*
          <img
            src="/basket.png"
            alt="Grocery Bag"
            className="w-24 mt-3"
          />*/}
        </div>

        {/* Card 3 */}
        <div className="bg-green-300 p-6 flex flex-col justify-center items-center rounded-lg">
          <p className="text-lg font-semibold text-center">Pure, Fresh, and Creamy - Milk Deals You'll Love!</p>
        </div>

        {/* Card 4 */}
        <div className="bg-green-600 text-white p-6 flex flex-col justify-center items-center rounded-lg md:col-span-2">
          <p className="text-xl font-bold text-center">Farm-Fresh Vegetables, Delivered to Your Doorstep!</p>
          <img src="/vegetables.png" alt="Vegetables" className="w-full h-32 object-cover mt-3 rounded-lg" />
        </div>

        {/* Card 5 */}
        <div className="bg-green-200 p-6 flex flex-col justify-center items-center rounded-lg">
          <p className="text-lg font-semibold text-center">Fresh Picks, Big Savings – Shop Now!</p>
        </div>

        {/* Card 6 */}
        <div className="bg-orange-300 p-6 flex flex-col justify-center items-center rounded-lg">
          <p className="text-lg font-semibold text-center">Your Daily Veggie Needs, Now on Sale!</p>
          <img
            src="/delivery.png"
            alt="Delivery"
            className="w-24 mt-3"
          />
        </div>

      </div>
    </div>
  );
};

export default Bento;
