import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#8B0000", textAlign: "center" }}>Your Wishlist ❤️</h1>

      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items added yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
              <p style={{ color: "#b30000", fontWeight: "bold" }}>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
