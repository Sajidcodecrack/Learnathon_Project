import React from "react";

const Bento = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Grid Container */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        
        {/* Card 1 - Discount */}
        <div className="col-span-4 bg-[#F7D794] p-6 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Up to 60% off</h3>
            <div className="mt-4">
              <img src="/groceries.png" alt="Grocery Items" className="max-h-24 mx-auto" />
            </div>
          </div>
        </div>

        {/* Card 2 - Healthy & Fresh */}
        <div className="col-span-4 md:col-span-4 bg-[#E66767] text-white p-6 rounded-2xl flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-center mb-4">Healthy, Affordable, and Delivered Fresh!</h3>
          <img src="/mesh-bag.png" alt="Mesh Bag with Fruits" className="max-h-28" />
        </div>

        {/* Card 3 - Milk Products */}
        <div className="col-span-4 bg-[#95D195] p-6 rounded-2xl flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center mb-4">Pure, Fresh, and Creamy – Milk Deals You'll Love!</h3>
          <img src="/dairy.png" alt="Dairy Products" className="max-h-24" />
        </div>

        {/* Card 4 - Fresh Picks */}
        <div className="col-span-4 md:col-span-4 bg-[#B8E4B8] p-6 rounded-2xl flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center mb-4">Fresh Picks, Big Savings – Shop Now!</h3>
          <img src="/produce-box.png" alt="Fresh Produce Box" className="max-h-28" />
        </div>

        {/* Card 5 - Daily Veggies */}
        <div className="col-span-4 bg-[#FFE4B5] p-6 rounded-2xl flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center mb-4">Your Daily Veggie Needs, Now on Sale!</h3>
          <img src="/delivery-person.png" alt="Delivery Person" className="max-h-24" />
        </div>

        {/* Card 6 - Farm Fresh Banner */}
        <div className="col-span-full bg-[#2E8B57] text-white p-6 rounded-2xl flex flex-col justify-center items-center" style={{ height: '200px' }}>
          <h3 className="text-3xl font-bold text-center">Farm-Fresh Vegetables, Delivered to Your Doorstep!</h3>
          <img src="/vegetables-shelf.png" alt="Fresh Vegetables Display" className="w-full h-24 object-cover mt-4 rounded-lg" />
        </div>

      </div>
    </div>
  );
};

export default Bento;
