// src/components/Section2.jsx
import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 40px",
        background: "#120009",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "60px",
      }}
    >
      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ flex: 1 }}
      >
        <h2 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>
          Designed With <span style={{ color: "#f6c67b" }}>Purpose</span>
        </h2>

        <p style={{ maxWidth: "450px", lineHeight: 1.7, opacity: 0.85 }}>
          Every pixel crafted to deliver elegance. Every transition tailored to
          tell a story. Your brand deserves more than just a website — it
          deserves a digital identity that speaks luxury.
        </p>

        <div
          style={{
            marginTop: "30px",
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, #f5d89c, #b27b44)",
          }}
        />
      </motion.div>

      {/* RIGHT: Animated Decorative Shape */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        style={{
          flex: 1,
          height: "260px",
          borderRadius: "30px",
          background:
            "linear-gradient(135deg, rgba(255,215,150,0.25), rgba(255,215,150,0.05))",
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 50px rgba(255,215,150,0.1)",
        }}
      ></motion.div>
    </section>
  );
};

export default Section2;
