import React from "react";

import { FaX } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex items-center gap-4 lg:w-[30%] bg-white lg:sticky lg:top-0  lg:overflow-y-auto lg:self-start">
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 translate-x-0 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar content */}
      <div
        className={`lg:static absolute top-0 left-0 z-30 w-full h-full flex items-center transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="w-[65%] md:w-[50%] lg:w-[100%] bg-white h-full">
          {/* categories */}
          <div className="mt-12 mx-5">
            <div className="pb-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-black underline-offset-[15px] underline decoration-black">
                Categories
              </h3>
            </div>
            <p className="font-semibold mt-1 text-sm">Budget Store</p>
          </div>
          {/* Discount */}
          <div className="mt-6 mx-5">
            <div className="pb-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black underline-offset-[15px] underline decoration-black">
                Discount Applied
              </h3>
              <CgLoadbar />
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm">30% Off</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm">20% Off</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm">10% Off</label>
              </div>
            </div>
          </div>
          {/* vandors */}
          <div className="mt-8 mx-5">
            <div className="pb-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black underline-offset-[15px] underline decoration-black">
                Filter By Vendors
              </h3>
              <CgLoadbar />
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm">
                  Othoba Global Sourching (Toys)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm">
                  Othoba Global Sourcing
                </label>
              </div>
            </div>
          </div>
          {/* Rating */}
          <div className="mt-8 mx-5">
            <div className="pb-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black underline-offset-[15px] underline decoration-black">
                Filter By Rating
              </h3>
              <CgLoadbar />
            </div>
            <div className="mt-2 flex flex-col gap-3">
              {/* 5star */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FF9933]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </label>
              </div>
              {/* 4star */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FF9933]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </label>
              </div>
              {/* 3star */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm flex items-center">
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FF9933]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </label>
              </div>
              {/* 2star */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm flex items-center">
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FF9933]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </label>
              </div>
              {/* 1star */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <label className="text-[#333333] text-sm flex items-center">
                  {[...Array(1)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FF9933]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* close button */}
        <div
          className="backdrop-sepia-50 bg-black/50 w-[35%] md:w-[50%] h-full lg:hidden"
          onClick={toggleSidebar}
        >
          <FaX className="text-gray-200 text-2xl ml-24 mt-12 md:ml-80" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
