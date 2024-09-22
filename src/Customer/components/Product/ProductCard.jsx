import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer ">
      <div className="h-[15rem]">
        <img
          className="h-full w-full opject-cover object-left-top"
          src={product.image}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semi-bold">{product.selling_price}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-red-600 font-semibold"> {product.disscount}% off </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
