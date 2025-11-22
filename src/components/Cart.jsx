import React, { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    // If items don’t have qty, assign qty:1
    const updated = data.map(item => ({
      ...item,
      qty: item.qty ? item.qty : 1
    }));

    setItems(updated);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const increaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const getTotal = () => {
    return items
      .reduce((total, item) => {
        const price = Number(item.price.replace(/[₹,]/g, ""));
        return total + price * item.qty;
      }, 0)
      .toLocaleString("en-IN", { style: "currency", currency: "INR" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#8B0000", textAlign: "center" }}>Your Cart 🛒</h1>

      {items.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Your cart is empty.
        </p>
      ) : (
        <div style={{ marginTop: "20px" }}>

          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "15px",
                background: "#fff",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                alignItems: "center",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "120px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />

              <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: "5px 0", color: "#800000" }}>
                  {item.name}
                </h3>

                <p style={{ color: "#b30000", fontWeight: "bold" }}>
                  {item.price}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => decreaseQty(item.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                <p
                  onClick={() => removeItem(item.id)}
                  style={{
                    marginTop: "10px",
                    color: "red",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "0.9rem",
                  }}
                >
                  Remove
                </p>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#8B0000" }}>
              Cart Total: {getTotal()}
            </h2>

            <button
              style={{
                padding: "12px 30px",
                background: "#8B0000",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
