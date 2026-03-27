import "./Download.css";

const Download = () => {
  return (
    <section className="download">
      <div className="download-header">
         <h1>The Silent Revolution</h1>
      </div>

      {/* Rating */}
      <div className="rating">
        ⭐ <span>4.7 rating</span>
        <small>(based on 125 reviews)</small>
      </div>

      {/* Text */}
      <p className="download-text">
        Stay consistent with a system that fits into real life. Simple cards,
        clear routines, and gentle nudges help you build progress that lasts.
      </p>

      {/* Buttons */}
      <div className="download-buttons">
        <button className="btn apple">
           Download for iPhone
        </button>

        <button className="btn android">
          🤖 Get it on Android
        </button>
      </div>

    </section>
  );
};

export default Download;