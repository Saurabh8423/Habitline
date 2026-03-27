import { useState } from "react";
import "./Navbar.css";

// 🔥 ADD YOUR ICONS HERE
import logoIcon from "../../assets/Icon.png";
import appleIcon from "../../assets/v1.png";
import playIcon from "../../assets/v2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="logo-box">
        <img src={logoIcon} alt="logo" className="logo-icon" />
        <span className="logo-text">Habitline</span>
      </div>

      {/* CENTER MENU */}
      <div className={`menu-box ${menuOpen ? "active" : ""}`}>
        <ul className="menu">
          <li>What's inside</li>
          <li>Use case</li>
          <li>Metrics</li>
          <li>Smart Assist</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">

        {/* ICON BUTTONS */}
        <div className="icon-box">
          <button className="icon-btn">
            <img src={appleIcon} alt="apple" />
          </button>

          <button className="icon-btn">
            <img src={playIcon} alt="play" />
          </button>
        </div>

        {/* HAMBURGER */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>

    </nav>
  );
};

export default Navbar;