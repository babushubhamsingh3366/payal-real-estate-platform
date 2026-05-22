import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import VevaSection from "./components/VevaSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0A0A0B] text-[#F5F0E8] font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Leadership />
      <Achievements />
      <VevaSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
