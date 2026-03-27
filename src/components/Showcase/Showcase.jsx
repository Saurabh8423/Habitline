import "./Showcase.css";
import laptopImg from "../../assets/laptop.png";

// images
import img1 from "../../assets/P1.jpg";
import img2 from "../../assets/p2.jpg";
import img3 from "../../assets/p3.jpg";
import img4 from "../../assets/p4.jpg";
import img5 from "../../assets/p5.jpg";
import img6 from "../../assets/p6.jpg";
import img7 from "../../assets/p7.jpg";
import img8 from "../../assets/p8.jpg";
import img9 from "../../assets/p9.jpg";
import img10 from "../../assets/p10.jpg";
import img11 from "../../assets/p11.jpg";
import img12 from "../../assets/p12.jpg";
import img13 from "../../assets/p13.jpg";
import img14 from "../../assets/p14.jpg";
import img15 from "../../assets/p15.jpg";
import img16 from "../../assets/p16.jpg";
import img17 from "../../assets/p17.jpg";
import img18 from "../../assets/p18.jpg";
import img19 from "../../assets/p19.jpg";

const Showcase = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19
  ];

  // emojis list
  const emojis = ["👍", "❤️", "🔥", "🌸", "👏", "💯", "✨", "😍", "🎉"];

  return (
    <section className="showcase">

      {/* ROW 1 */}
      <div className="scroll-row row-left">
        {[...images, ...images].map((img, i) => (
          <div className="mini-card" key={i}>
            <img src={img} alt="" />

            {/* FLOATING EMOJI */}
            <span
              className="emoji"
              style={{
                left: `${Math.random() * 70 + 10}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              {emojis[i % emojis.length]}
            </span>

          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="scroll-row row-right">
        {[...images, ...images].map((img, i) => (
          <div className="mini-card" key={i}>
            <img src={img} alt="" />

            {/* FLOATING EMOJI */}
            <span
              className="emoji"
              style={{
                left: `${Math.random() * 70 + 10}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              {emojis[(i + 3) % emojis.length]}
            </span>

          </div>
        ))}
      </div>

      {/* CENTER */}
      <div className="showcase-center">
        <img src={laptopImg} alt="laptop" />
      </div>

    </section>
  );
};

export default Showcase;