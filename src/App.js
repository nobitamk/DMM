import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Videos from "./components/Videos";
import Model3D from "./components/Model3D";

import Sarees from "./components/Sarees";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import Loader from "./components/Loader"; // ⭐ Add loader

function App() {
  return (
    <BrowserRouter>
      {/* ⭐ FULL SCREEN LOADER */}
      <Loader />

      <div
        style={{
          background: "#0d0d0d",
          color: "#000",
          overflowX: "hidden",
          width: "100%",
          maxWidth: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {/* ⭐ HEADER ALWAYS VISIBLE */}
        <Header />

        {/* ⭐ ROUTES */}
        <Routes>
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

          <Route path="/sarees" element={<Sarees />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* ⭐ GLOBAL FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
