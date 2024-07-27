/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import codingAnimatoin from "../../../assets/lottie-animation/coding.json";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import helloAnimation from "../../../assets/lottie-animation/hello.json";
import "./banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      // offset: 200,
    });
  }, []);
  return (
    <div className="relative bg-grad py-5 px-5 pt-5 md:pt-0">
      <div className="flex  flex-col-reverse md:flex-row h-screen pt-10 items-center gap-10 max-w-6xl mx-auto">
        <div className="text-white flex-1  md:w-1/2 space-y-3">
          <div className=" font-semibold uppercase flex items-center gap-3">
            <div className="w-16 bg-white rounded-md">
              <Lottie animationData={helloAnimation} />
            </div>
            <h2 data-aos="fade-right">There,</h2>
          </div>
          <h1 data-aos="fade-right" className="text-4xl font-bold">
            I'am <span className="text-[#03e9f4]">Yasin</span>,
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" text-3xl md:text-5xl font-bold text-white text-color-change"
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN stack Developer.",
                "Frontend Developer.",
                "React Developer.",
                "Web Designer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="white"
              typeSpeed={200}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h1>
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className=" text-slate-400"
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                `Hi, i'am Yasin, Experienced MERN stack developer skilled in React.js, Node.js/Express, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team`,
              ]}
              cursor
              cursorColor="white"
              typeSpeed={10}
              cursorStyle="."
            />
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="py-9 relative w-full "
          >
            <a
              href={
                "https://docs.google.com/document/d/1G4GGKaQSErGuvz_Ebg1PYFgS4KPIMbGdIMoPVo_dKvE/edit?usp=drive_link"
              }
              target="_blank"
              download
              className="button absolute left-[70px]"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="button2 absolute left-[220px] cursor-pointer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Hire me
            </ScrollLink>
          </div>
          <div className="flex items-center gap-2 relative">
            <h3
              style={{ letterSpacing: "3px" }}
              className=" uppercase text-sm text-slate-300  z-10"
            >
              Find with me
            </h3>
            <div className="find-border"></div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              // to="https://github.com/sadid56"
              target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white icon-bounc"
            >
              <FaGithub />
            </Link>
            <Link
              // to="https://www.facebook.com/sadidhasan.hasan.5"
              target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white icon-bounc2"
            >
              <FaFacebookF />
            </Link>
            <Link
              // to="https://www.linkedin.com/in/sadid-hasan-7126162a8/"
              target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white icon-bounc"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              // to="https://www.instagram.com/sadidhasan56/"
              target="_blank"
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white icon-bounc2"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" md:w-[450px]"
        >
          <Lottie animationData={codingAnimatoin} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
