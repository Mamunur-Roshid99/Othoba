import React, { useState, useEffect } from 'react'

import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from './SideBar';
import Products from './Products';

const MainLayout = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false) 

    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    useEffect(() => {
      if (isSideBarOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isSideBarOpen]);

  return (
    <section className="container w-[95%] lg:w-[97%] mx-auto mb-5 lg:flex justify-between gap-3">
      <SideBar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
      <div className="lg:w-[70%]">
        {/*  */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 md:gap-4">
            {/* menu bar icon */}
            <div
              className="text-[#439DDF] border-2 border-[#439DDF] p-3 text-sm rounded-sm hover:bg-[#439DDF] hover:text-white active:bg-[#439DDF] active:text-white duration-300 flex items-center gap-2 font-semibold md:py-2 lg:hidden"
              onClick={toggleSidebar}
            >
              <FaBarsStaggered />
              <h4 className="hidden md:block">FILTERS</h4>
            </div>
            {/* position */}
            <div className="flex items-center gap-2">
              <span className="hidden md:block font-bold text-sm">Sort by</span>
              <select className="border border-gray-300 w-32 rounded p-2 text-sm cursor-pointer focus:outline-none">
                <option value="position">Position</option>
                <option value="nameasc">NameAsc</option>
                <option value="namedesc">NameDesc</option>
                <option value="priceasc">PriceAsc</option>
                <option value="pricedesc">PriceDesc</option>
                <option value="newarrivals">NewArrivals</option>
                <option value="featured">Featured</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          {/* show */}
          <div>
            <select className="border border-gray-300 w-24 rounded p-2 text-sm cursor-pointer focus:outline-none">
              <option value="show48">Show 48</option>
              <option value="show72">Show 72</option>
              <option value="show96">Show 96</option>
            </select>
          </div>
        </div>
        <Products />
        <div class="flex flex-col gap-4 md:flex-row items-center justify-between text-gray-500 text-sm py-8">
          <div>
            Showing <span class="text-black">1 - 48</span> of{" "}
            <span class="text-black">182</span> Products
          </div>
          <div class="flex items-center space-x-2">
            <button class="text-gray-400 cursor-pointer">&larr; Prev</button>
            <button class="w-8 h-8 rounded border border-gray-200 cursor-pointer text-blue-600 font-medium">
              1
            </button>
            <button class="w-8 h-8 rounded hover:border hover:border-gray-200 hover:text-blue-600 cursor-pointer duration-300">
              2
            </button>
            <button class="w-8 h-8 rounded hover:border hover:border-gray-200 hover:text-blue-600 cursor-pointer duration-300">
              3
            </button>
            <button class="w-8 h-8 rounded hover:border hover:border-gray-200 hover:text-blue-600 cursor-pointer duration-300">
              4
            </button>
            <button class="text-gray-600 hover:text-black cursor-pointer">
              {" "}
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainLayout
