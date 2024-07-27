// Home.js
import { Element } from "react-scroll";
import Navber from "../../shared/Navber/Navber";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skils from "../skils/Skils";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { FaLongArrowAltUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import ParticlesAnimation from "../ParticlessJs/Particless";
import Lottie from "lottie-react";
import earthAnimation from "../../../assets/lottie-animation/earth.json";
import { useEffect, useState } from "react";
import "./Home.css";
import Loading from "../../shared/loading/Loading";
// import Gallery from "../Gallery/Gallery";
import FooterNav from "../../shared/FooterNav/FooterNav";
import AnimatedCursor from "react-animated-cursor";

const LoadingSpinner = () => {
  return (
    <div className="">
      <Loading />
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setScrollToTopVisible(true);
    } else {
      setScrollToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div>
          <ParticlesAnimation />
          <Element name="home" className="element">
            <Navber />
          </Element>
          <Banner />
          <div className="w-[100px] md:w-[150px] right-4 md:left-24 absolute">
            <Lottie animationData={earthAnimation} />
          </div>
          <div
            className={`${
              scrollToTopVisible ? "fixed" : "hidden"
            } top-[85%] right-5 z-50`}
          >
            <button
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-sm md:btn-md btn-circle animate-bounce text-xl border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white "
              onClick={scrollToTop}
            >
              <FaLongArrowAltUp />
            </button>
          </div>
          <Element name="about" className="element">
            <About />
          </Element>
          <Element name="skills" className="element">
            <Skils />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="services" className="element">
            <Services />
          </Element>
          {/* <Element name="gallery" className="element">
          <Gallery/>
          </Element> */}
          <Element name="contact" className="element">
            <Contact />
          </Element>
          <Footer />
          <FooterNav />
          <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color="253, 228, 23"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={9}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              {
                target: ".custom",
                options: {
                  innerSize: 12,
                  outerSize: 20,
                  color: "253, 228, 23",
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5,
                },
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
