import "./Achievements.css";

import studyImg from "../../assets/A1.png";
import gymImg from "../../assets/A2.png";
import meditationImg from "../../assets/A3.png";
import familyImg from "../../assets/A4.png";

const achievementData = [
  {
    image: studyImg,
  },
  {
    image: gymImg,
    large: true,
  },
  {
    image: meditationImg,
  },
  {
    image: familyImg,
  },
];

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="achievements-header">
        <h2>
          What users are achieving <br /> with Habitline
        </h2>

        <div className="rating-box">
          <div className="avatars">
            <img src="https://i.pravatar.cc/40?img=1" alt="user" />
            <img src="https://i.pravatar.cc/40?img=2" alt="user" />
            <img src="https://i.pravatar.cc/40?img=3" alt="user" />
            <img src="https://i.pravatar.cc/40?img=4" alt="user" />
            <span className="you-badge">You?</span>
          </div>

          <div className="stars">★★★★★</div>
          <p>Trusted worldwide</p>
        </div>
      </div>

      <div className="achievement-grid">
        {achievementData.map((item, index) => (
          <div
            className={`achievement-card ${item.large ? "large-text" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="achievement-overlay"></div>

            <div className="achievement-content">
              <span className="room-title">{item.title}</span>

              <div className="achievement-text">
                <h3>{item.mainText}</h3>
                <p>{item.subText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;