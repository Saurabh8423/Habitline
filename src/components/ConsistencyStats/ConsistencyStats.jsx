import "./ConsistencyStats.css";
import globeVideo from "../../assets/globe-video.mp4";
import cloudImg from "../../assets/cloud.png";

const ConsistencyStats = () => {
  return (
    <section className="consistency">
      {/* Top badge */}
      <div className="consistency-badge">Real habits, real numbers</div>

      {/* Heading */}
      <h2>
        How people stay <br /> consistent over time
      </h2>

      {/* Big number */}
      <div className="big-number-wrap">
        <h1 className="big-number">62,000+</h1>

        <div className="floating-label">Check-ins logged last month</div>
      </div>

      {/* Globe Video */}
      <div className="globe-wrapper">
        <div className="globe-mask">
          <video
            className="globe-video"
            src={globeVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="cloud-fade">
          <img src={cloudImg} alt="Cloud overlay" className="cloud-image" />
        </div>
      </div>

      {/* Bottom stats */}
      <div className="bottom-stats">
        <div className="stat-box">
          <h3>
            87<span>%</span>
          </h3>
          <p>Faster AI execution</p>
        </div>

        <div className="stat-box">
          <h3>46</h3>
          <p>Sessions completed on average</p>
        </div>

        <div className="stat-box">
          <h3>
            32<span>+</span>
          </h3>
          <p>Countries with active Habitline users</p>
        </div>
      </div>
    </section>
  );
};

export default ConsistencyStats;