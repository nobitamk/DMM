import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Videos from "./components/Videos";
import Model3D from "./components/Model3D";

import Sales from "./pages/Sales";
import BestSellers from "./pages/BestSeller";     // corrected name
import NewArrivals from "./pages/NewArrivals";
import Sarees from "./pages/Sarees";
import About from "./pages/About";                // ⭐ new About page

import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import Loader from "./components/Loader";

function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL FULL SCREEN LOADER */}
      <Loader />

      <div
        style={{
          background: "#0d0d0d",
          overflowX: "hidden",
          width: "100%",
          maxWidth: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {/* HEADER ALWAYS VISIBLE */}
        <Header />

        {/* ROUTES */}
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section2 />
                <Section3 />
                <Videos />
                <Model3D />
              </>
            }
          />

          {/* SHOP RELATED PAGES */}
          <Route path="/sales" element={<Sales />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/sarees" element={<Sarees />} />

          {/* INFORMATION PAGES */}
          <Route path="/about" element={<About />} />

          {/* SYSTEM PAGES */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* GLOBAL FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
