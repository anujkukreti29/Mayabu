// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductInfoPage from "./pages/ProductInfoPage"; // ✅ Product details page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Info Page */}
        <Route path="/product/:id" element={<ProductInfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
