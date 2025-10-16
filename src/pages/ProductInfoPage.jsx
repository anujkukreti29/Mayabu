// src/pages/ProductInfoPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import ProductDetails from "../components/ProductDetails";
import PriceComparison from "../components/PriceComparison";
import PriceHistoryChart from "../components/PriceHistoryChart";

export default function ProductInfoPage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Product not found
        </h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg font-semibold"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  const comparisons = [
    { platform: "Flipkart", price: product.price || product.lowestPrice, link: "#" },
    { platform: "Amazon", price: product.price ? product.price + 500 : product.lowestPrice + 500, link: "#" },
    { platform: "Reliance Digital", price: product.price ? product.price - 200 : product.lowestPrice - 200, link: "#" },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto py-8 px-4 space-y-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Product Card */}
      <motion.div
        className="bg-white rounded-3xl shadow-xl p-6 flex flex-col sm:flex-row gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Image */}
        <div className="sm:w-1/3 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="sm:w-2/3 flex flex-col justify-between space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 line-clamp-2">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 flex-wrap">
            {product.lowestPrice ? (
              <>
                <span className="text-2xl font-bold text-green-600">
                  ₹{product.lowestPrice.toLocaleString("en-IN")}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-lg">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                )}
                {product.priceDrop && (
                  <span className="text-red-600 font-semibold text-lg">
                    ↓ ₹{product.priceDrop.toLocaleString("en-IN")} drop
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-2xl font-bold text-pink-600">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-lg">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Rating & Verified */}
          <div className="flex items-center gap-4 flex-wrap">
            {product.rating && (
              <span className="text-yellow-500 font-medium text-lg">
                ⭐ {product.rating.toFixed(1)}
              </span>
            )}
            {product.verified && (
              <span className="text-green-600 font-semibold text-lg">
                Verified Seller
              </span>
            )}
          </div>

          {/* Urgency & Trending */}
          <div className="flex flex-wrap gap-3 mt-2">
            {product.urgency && (
              <span className="text-red-600 font-semibold text-sm sm:text-base">
                {product.urgency}
              </span>
            )}
            {product.trending && (
              <span className="text-orange-600 font-semibold text-sm sm:text-base">
                🔥 Trending Deal
              </span>
            )}
          </div>

          {/* Short Description */}
          {product.description && (
            <p className="text-gray-700 text-sm sm:text-base mt-2">
              {product.description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Features */}
      {product.features && (
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-3 text-gray-900">🔹 Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            {product.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Seller Info */}
      {product.sellerInfo && (
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">🏪 Seller Info</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Name: <strong>{product.sellerInfo.name}</strong>
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Rating: <strong>{product.sellerInfo.rating.toFixed(1)}</strong>
            </p>
            {product.sellerInfo.verified && (
              <p className="text-green-600 font-semibold text-sm sm:text-base">
                Verified Seller
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Price Comparison */}
      <PriceComparison comparisons={comparisons} />

      {/* Price History Chart */}
      {product.priceHistory && <PriceHistoryChart priceHistory={product.priceHistory} />}

      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-gray-900">📝 Customer Reviews</h2>
          <div className="space-y-4 text-sm sm:text-base">
            {product.reviews.map((r, idx) => (
              <div key={idx} className="border-b pb-2">
                <p className="font-semibold">{r.user}</p>
                <p className="text-yellow-500">⭐ {r.rating.toFixed(1)}</p>
                <p className="text-gray-700">{r.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
