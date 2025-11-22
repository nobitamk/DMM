import React from "react";

const Model3D = () => {
  return (
    <>
      <style>{`
        .model3d-section {
          padding: 40px 20px;
          background: radial-gradient(circle at center, #5c1e1e 0%, #150909 80%);
          border-radius: 12px;
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          color: white;
        }

        /* LEFT TEXT */
        .model3d-text {
          flex: 1;
          min-width: 260px;
          max-width: 400px;
          text-align: left;
        }

        .model3d-text h2 {
          font-size: 2.3rem;
          line-height: 1.2;
          font-weight: 900;
          text-transform: uppercase;
          color: #ffd9a3;
          text-shadow: 0 5px 20px rgba(0,0,0,0.4);
        }

        .model3d-text p {
          margin-top: 15px;
          font-size: 1.1rem;
          color: #ffefdd;
          opacity: 0.9;
        }

        /* RIGHT 3D VIEWER */
        .model3d-viewer {
          flex: 1;
          min-width: 260px;
          max-width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        model-viewer {
          width: 100%;
          height: 420px;
          max-width: 400px;
          background: #111;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        /* ⭐ MOBILE VERSION — FIXES YOUR ISSUE */
        @media (max-width: 768px) {
          .model3d-section {
            flex-direction: column;
            text-align: center;
            padding: 25px 15px;
          }

          .model3d-text {
            text-align: center;
            max-width: 90%;
          }

          .model3d-text h2 {
            font-size: 1.9rem;
          }

          .model3d-text p {
            font-size: 1rem;
          }

          model-viewer {
            height: 260px;      /* 🔥 Visible properly on all mobiles */
            max-width: 300px;   /* 🔥 Prevents overflow */
          }
        }
      `}</style>

      <section className="model3d-section">

        {/* LEFT SIDE TEXT */}
        <div className="model3d-text">
          <h2>
            BRIDE <br />
            WE MAKE
          </h2>
          <p>
            Explore the saree in 3D — elegance crafted for your perfect wedding moment.
          </p>
        </div>

        {/* RIGHT SIDE 3D MODEL */}
        <div className="model3d-viewer">
          <model-viewer
            src="https://files.catbox.moe/khn3rr.glb"
            auto-rotate
            camera-controls
            exposure="1"
          ></model-viewer>
        </div>
      </section>
    </>
  );
};

export default Model3D;

