import "./Achievements.css";

import studyImg from "../../assets/A1.png";
import gymImg from "../../assets/A2.png";
import meditationImg from "../../assets/A3.png";
import familyImg from "../../assets/A4.png";

const achievementData = [
  {
    image: studyImg,
    title: "Study Room",
    badge: "STUDY ROOM",
    mainText: "Completed 21-day streak using Habitline",
  },
  {
    image: gymImg,
    title: "Gym Room",
    badge: "GYM ROOM",
    mainText: "Completed 21-day streak using Habitline",
  },
  {
    image: meditationImg,
    title: "Meditation Room",
    badge: "MEDITATION ROOM",
    mainText: "Completed 21-day streak using Habitline",
  },
  {
    image: familyImg,
    title: "Do Anything Room",
    badge: "DO ANYTHING ROOM",
    mainText: "Completed 21-day streak using Habitline",
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
              <div className="card-top">
                <h3 className="room-title">{item.title}</h3>

                <div className="live-badge">
                  <span className="dot"></span> 1642 Live
                </div>
              </div>

              <div className="achievement-text">
                 {/* Bottom Badge */}
  <div className="bottom-badge">
    {item.badge}
  </div>
                <h3>{item.mainText}</h3>
              </div>

              {/* Hover Button */}
              <button
                className="join-btn"
                onClick={() => alert(`Joining ${item.title}`)}
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
