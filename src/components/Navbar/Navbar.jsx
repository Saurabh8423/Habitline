import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Logo */}
      <div className="logo-box">
        <span className="dot"></span>
        <span className="logo-text">Habitline</span>
      </div>

      {/* Center Menu */}
      <div className={`menu-box ${menuOpen ? "active" : ""}`}>
        <ul className="menu">
          <li>What's inside</li>
          <li>Use case</li>
          <li>Metrics</li>
          <li>Smart Assist</li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="right-section">

        {/* Icons */}
        <div className="icon-box">
          <button></button>
          <button>▶</button>
        </div>

        {/* Hamburger */}
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