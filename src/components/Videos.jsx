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
          <video src="/video2.mp4" autoPlay muted loop playsInline></video>
          <video src="/video3.mp4" autoPlay muted loop playsInline></video>
          <video src="/video4.mp4" autoPlay muted loop playsInline></video>
        </div>
      </section>
    </>
  );
};

export default Videos;
