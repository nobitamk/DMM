import React, { useEffect, useState } from "react";

const sareeData = [
  { id: 1, name: "Pink Bridal Silk Saree", price: "₹12,999", img: "https://images.pexels.com/photos/16972960/pexels-photo-16972960.jpeg" },
  { id: 2, name: "Maroon Soft Silk Saree", price: "₹7,499", img: "https://images.pexels.com/photos/17673408/pexels-photo-17673408.jpeg" },
  { id: 3, name: "Red Kanchipuram Saree", price: "₹15,999", img: "https://images.pexels.com/photos/18983314/pexels-photo-18983314.jpeg" },
  { id: 4, name: "Gold Border Silk Saree", price: "₹9,999", img: "https://images.pexels.com/photos/6312829/pexels-photo-6312829.jpeg" },
  { id: 5, name: "Elegant Soft Pink Saree", price: "₹6,799", img: "https://images.pexels.com/photos/6312830/pexels-photo-6312830.jpeg" },
  { id: 6, name: "Royal Blue Dharmavaram Saree", price: "₹8,499", img: "https://images.pexels.com/photos/6312826/pexels-photo-6312826.jpeg" }
];

const Sarees = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Load saved items on mount
  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // SAVE wishlist
  const addToWishlist = (saree) => {
    let updated = [...wishlist];

    if (!updated.some(item => item.id === saree.id)) {
      updated.push(saree);
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // SAVE cart
  const addToCart = (saree) => {
    let updated = [...cart];

    if (!updated.some(item => item.id === saree.id)) {
      updated.push({ ...saree, qty: 1 });
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const isInWishlist = (id) => wishlist.some(item => item.id === id);
  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div style={{ padding: "20px", background: "#f7f2ef", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#8B0000", fontWeight: 700 }}>Dharmavaram Silk Sarees Collection</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "15px" }}>
        {sareeData.map((saree) => (
          <div key={saree.id} style={{ background: "#fff", padding: "10px", borderRadius: "10px", position: "relative", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>

            {/* wishlist + cart icons */}
            <div style={{ position: "absolute", top: "8px", right: "10px", display: "flex", gap: "10px" }}>

              {/* ❤️ WISHLIST */}
              <span
                onClick={() => addToWishlist(saree)}
                style={{
                  cursor: "pointer",
                  fontSize: "1.4rem",
                  color: isInWishlist(saree.id) ? "red" : "#b30000",
                  transition: "0.2s",
                }}
              >
                ❤️
              </span>

              {/* 🛒 CART */}
              <span
                onClick={() => addToCart(saree)}
                style={{
                  cursor: "pointer",
                  fontSize: "1.4rem",
                  color: isInCart(saree.id) ? "green" : "#b30000",
                  transition: "0.2s",
                }}
              >
                🛒
              </span>
            </div>

            <img
              src={saree.img}
              alt={saree.name}
              style={{ width: "100%", height: "180px", borderRadius: "10px", objectFit: "cover" }}
            />

            <h3 style={{ marginTop: "10px", color: "#800000" }}>{saree.name}</h3>
            <p style={{ color: "#b30000", fontWeight: "bold" }}>{saree.price}</p>

            <button
              onClick={() => addToCart(saree)}
              style={{ padding: "8px 20px", background: "#8B0000", color: "#fff", border: "none", borderRadius: "20px" }}
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Sarees;
