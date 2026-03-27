import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* CENTER CONTENT */}
      <div className="hero-content">
        <h1>
          No chat. No noise. <br />
          Just cameras on and work getting done — with people <br />
          from 47 countries watching each other rise.
        </h1>

        <div className="hero-badge">
          <span className="badge-new">New</span>
          <span className="badge-2">
            2,847 people studying live right now across 47 countries
          </span>
        </div>
      </div>

      {/* FLOATING CARDS */}
      <div className="hero-notifications">
        <div className="notify-card">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="flag"
          />
          <div className="text-box">
            <p className="name">
              Rohan kumar <span className="joined">Joined</span>
            </p>
            <p className="status">Deep Focus Room · Just now</p>
          </div>
        </div>

        <div className="notify-card">
          <img
            src="https://flagcdn.com/w40/au.png"
            alt="Australia"
            className="flag"
          />
          <div className="text-box">
            <p className="name">
              Alive. <span className="joined">Joined</span>
            </p>
            <p className="status">Deep Focus Room · Just now</p>
          </div>
        </div>

        <div className="notify-card">
          <img
            src="https://flagcdn.com/w40/ca.png"
            alt="Canada"
            className="flag"
          />
          <div className="text-box">
            <p className="name">
              Sofia. <span className="joined">Joined</span>
            </p>
            <p className="status">Deep Focus Room · Just now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
