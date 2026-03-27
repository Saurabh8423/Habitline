import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase";
import Download from "./components/Download/Download";
import Achievements from "./components/Achievements/Achievements";
import ConsistencyStats from "./components/ConsistencyStats/ConsistencyStats";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Download />
      <Achievements />
      <ConsistencyStats />
      <Footer />
    </>
  );
}

export default App;