import React from "react";

const Bento = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 h-[110%] py-10 mt-[500px] lg:mt-0 md:mt-[400px] z-10">
      {/* Grid Container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-3 md:grid-rows-4 grid-rows-6 gap-4 md:gap-6">
        
        {/* Card 1 */}
        <div className="col-span-1 row-span-1 bg-yellow h-60 md:h-72 rounded-md relative overflow-hidden group">
          <img src="/Bento1.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Fresh Produce</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Farm-fresh vegetables and fruits</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-1 col-span-1 md:row-span-2 row-span-1 bg-action_red rounded-md relative overflow-hidden group">
          <img src="/Bento2.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Special Offers</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Up to 60% off on selected items</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 row-span-1 bg-primary rounded-md relative overflow-hidden group">
          <img src="/Bento3.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Dairy & Eggs</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Fresh dairy products daily</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-1 col-span-1 md:row-span-2 row-span-1 bg-primary_light rounded-md relative overflow-hidden group">
          <img src="/Bento4.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Pantry Essentials</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Stock up on everyday basics</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-span-1 row-span-1 bg-yellow rounded-md relative overflow-hidden group">
          <img src="/Bento5.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Snacks & Treats</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Indulge in delicious snacks</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="md:col-span-2 col-span-1 row-span-1 bg-green-900 rounded-md relative overflow-hidden group">
          <img src="/Bento6.jpg" alt="Grocery Items" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">Organic Selection</h3>
            <p className="text-sm md:text-base text-white/90 mt-1 md:mt-2">Premium organic products for healthy living</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bento;
