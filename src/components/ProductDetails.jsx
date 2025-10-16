// src/components/ProductDetails.jsx
import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function ProductDetails({ product }) {
  if (!product) return <p className="text-center text-red-500 mt-10">Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-xl p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain max-h-[400px]"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{product.title}</h1>

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-green-600">
            ₹{product.price?.toLocaleString("en-IN") || product.lowestPrice?.toLocaleString("en-IN")}
          </span>
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-lg">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
          {product.priceDrop && (
            <span className="text-red-600 font-semibold">↓ ₹{product.priceDrop.toLocaleString("en-IN")} drop</span>
          )}
        </div>

        {/* Rating & Verified */}
        <div className="flex items-center gap-3">
          <span className="flex items-center text-yellow-500">
            <FaStar className="mr-1" /> {product.rating?.toFixed(1)}
          </span>
          {product.verified && (
            <span className="flex items-center text-green-500 gap-1">
              <FaCheckCircle /> Verified Seller
            </span>
          )}
        </div>

        {/* Seller Info */}
        {product.sellerInfo && (
          <div className="bg-gray-50 p-3 rounded-lg flex flex-col gap-1">
            <p className="font-semibold text-gray-800">Seller: {product.sellerInfo.name}</p>
            <p className="text-gray-500 text-sm">Rating: {product.sellerInfo.rating} / 5</p>
            {product.sellerInfo.verified && <span className="text-green-500 text-sm">Verified Seller</span>}
          </div>
        )}

        {/* Description */}
        {product.description && (
          <div className="mt-2">
            <h3 className="font-semibold text-gray-900 mb-1">Description</h3>
            <p className="text-gray-700 text-sm">{product.description}</p>
          </div>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mt-2">
            <h3 className="font-semibold text-gray-900 mb-1">Features</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Reviews</h3>
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800">{review.user}</span>
                    <span className="flex items-center text-yellow-500 text-sm">
                      <FaStar className="mr-1" /> {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
