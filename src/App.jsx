import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Solution from "./components/Solution";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="sm:mx-16 mx-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <AboutUs />
        <Features />

        <Partners />
        <Solution />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
