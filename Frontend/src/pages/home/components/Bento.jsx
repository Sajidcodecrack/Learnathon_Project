import React from "react";

const Bento = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 h-[110%] py-10 z-10">
      {/* Grid Container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-3 md:grid-rows-4 grid-rows-6 gap-4 md:gap-6">
        
        {/* Card 1 */}
        <div className="col-span-1 row-span-1 bg-yellow h-60 md:h-72 rounded-md relative overflow-hidden group">
          <img src="/Bento1.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Fresh Produce</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Farm-fresh vegetables and fruits</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              Discover locally sourced, seasonal produce picked at peak freshness. Our selection includes organic options and rare varieties.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-1 col-span-1 md:row-span-2 row-span-1 bg-action_red rounded-md relative overflow-hidden group">
          <img src="/Bento2.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Special Offers</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Up to 60% off on selected items</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              Weekly deals on premium products. Members get early access to exclusive discounts and bundle offers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 row-span-1 bg-primary rounded-md relative overflow-hidden group">
          <img src="/Bento3.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Dairy & Eggs</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Fresh dairy products daily</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              Sourced from local farms, our dairy selection includes organic milk, artisanal cheese, and free-range eggs.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-1 col-span-1 md:row-span-2 row-span-1 bg-primary_light rounded-md relative overflow-hidden group">
          <img src="/Bento4.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Pantry Essentials</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Stock up on everyday basics</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              From grains to canned goods, find everything you need to keep your pantry well-stocked with quality essentials.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-span-1 row-span-1 bg-yellow rounded-md relative overflow-hidden group">
          <img src="/Bento5.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Snacks & Treats</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Stock up on everyday basics</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              Explore our curated selection of gourmet snacks, chocolates, and healthy alternatives for guilt-free indulgence.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="md:col-span-2 col-span-1 row-span-1 bg-green-900 rounded-md relative overflow-hidden group">
          <img src="/Bento6.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 transform-gpu origin-center" />
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Organic Selection</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2 transition-all duration-300 ease-in-out group-hover:scale-105 origin-left">Premium organic products for healthy living</p>
            <p className="text-sm text-white/80 mt-2 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden group-hover:scale-105 origin-left">
              Certified organic products from trusted suppliers, including fresh produce, pantry items, and wellness products.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bento;
