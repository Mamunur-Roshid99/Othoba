import React from 'react'

import { CiHeart } from "react-icons/ci";

const ProductsCard = ({product}) => {
  return (
    <div className="w-full relative max-w-[190px] bg-white shadow px-2 pb-5 hover:shadow-lg">
      {/* Image */}
      <div className="w-full h-[180px] bg-gray-100 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Heart */}
      <div className="flex justify-between items-start mt-2">
        <h3 className="text-sm font-semibold text-gray-800 lg:text-[13px]">{product.name}</h3>
        <button className="mt-2 lg:text-lg">
          <CiHeart />
        </button>
      </div>

      {/* Rating + Sold */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span className="text-[#D6D6D6]">({product.reviews})</span>
        </div>
        <span className="text-[#808080] font-semibold text-[15px]">
          {product.sold} sold
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mt-1">
        <div className="text-[15px] font-bold text-black">
          TK {product.price}
        </div>
        <div>
          {product.priceoff && (
            <span className="text-[15px] font-bold text-[#808080] line-through">
              TK {product.priceoff}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsCard
