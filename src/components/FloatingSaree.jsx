// src/components/FloatingSaree.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 👉 Import must ALWAYS be at the top
import sareeImage from "../assets/saree.png";

gsap.registerPlugin(ScrollTrigger);

const FloatingSaree = () => {
  const sareeRef = useRef(null);

  useEffect(() => {
    const el = sareeRef.current;

    // Scroll-based unfolding animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#saree-sections",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    // SECTION 1 → folded
    tl.fromTo(
      el,
      {
        y: 0,
        scale: 0.9,
        opacity: 1,
        backgroundPosition: "center 100%",
      },
      {
        y: 80,
        scale: 1,
        backgroundPosition: "center 50%",
        duration: 1,
        ease: "none",
      }
    )
      // SECTION 2 → semi-open
      .to(el, {
        y: 180,
        scale: 1.05,
        backgroundPosition: "center 50%",
        duration: 1,
      })
      // SECTION 3 → fully open
      .to(el, {
        y: 260,
        scale: 1.12,
        backgroundPosition: "center 0%",
        duration: 1,
      });

    // Fade-out after 3rd section
    gsap.to(el, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#saree-sections",
        start: "bottom-=120 top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={sareeRef}
      style={{
        position: "fixed",
        top: "18%",
        right: "6%",
        width: "270px",
        height: "380px",
        backgroundImage: `url(${sareeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 300%",
        backgroundPosition: "center 100%",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(0,0,0,0.55)",
        zIndex: 20,
        pointerEvents: "none",
      }}
    />
  );
};

export default FloatingSaree;
