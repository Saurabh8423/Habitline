import "./Showcase.css";
import laptopImg from "../../assets/laptop.png";

// import small images (add your own)
import img1 from "../../assets/p1.jpeg";
import img2 from "../../assets/p1.jpeg";
import img3 from "../../assets/p1.jpeg";
import img4 from "../../assets/p1.jpeg";
import img5 from "../../assets/p1.jpeg";
import img6 from "../../assets/p1.jpeg";
import img7 from "../../assets/p1.jpeg";
import img8 from "../../assets/p1.jpeg";
import img9 from "../../assets/p1.jpeg";
import img10 from "../../assets/p1.jpeg";
import img11 from "../../assets/p1.jpeg";
import img12 from "../../assets/p1.jpeg";

const Showcase = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <section className="showcase">

      {/* ROW 1 */}
      <div className="scroll-row row-left">
        {[...images, ...images].map((img, i) => (
          <div className="mini-card" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="scroll-row row-right">
        {[...images, ...images].map((img, i) => (
          <div className="mini-card" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* CENTER LAPTOP */}
      <div className="showcase-center">
        <img src={laptopImg} alt="laptop" />
      </div>

    </section>
  );
};

export default Showcase;