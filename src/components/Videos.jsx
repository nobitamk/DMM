const Videos = () => {
  return (
    <>
      <style>{`
        .video-section {
          padding: 20px;
          color: white;
        }

        .video-slider {
          display: flex;
          overflow-x: auto;
          gap: 12px;
          margin-top: 10px;
        }

        .video-slider video {
          min-width: 240px;
          height: 330px;
          border-radius: 12px;
          object-fit: cover;
        }
      `}</style>

      <section className="video-section">
        <h2>Saree Opening Showcase</h2>

        <div className="video-slider">
          <video src="https://res.cloudinary.com/dubfi0v52/video/upload/v1763808961/video2_lrscrr.mp4" autoPlay muted loop playsInline></video>
          <video src="https://res.cloudinary.com/dubfi0v52/video/upload/v1763809222/video4_dwsnwv.mp4" autoPlay muted loop playsInline></video>
          <video src="https://res.cloudinary.com/dubfi0v52/video/upload/v1763809222/video4_dwsnwv.mp4" autoPlay muted loop playsInline></video>
        </div>
      </section>
    </>
  );
};

export default Videos;
