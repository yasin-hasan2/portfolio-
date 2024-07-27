import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import logo from "../../../assets/images/my-logo-removebg-preview.png";
import { Link as ScrollLink } from "react-scroll";
import "./navber.css";

//style={{backdropFilter:'blur(50px)'}}
const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [sroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="nav"
        style={
          sroll
            ? { backdropFilter: "blur(50px)" }
            : { backgroundColor: "transparent" }
        }
        className={` w-full fixed top-0 z-50  transition-all ease-in duration-1000 
      }`}
      >
        <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto py-4  md:py-6 ">
          {/* <h1 className="text-3xl  text-white italic">Sadid</h1> */}
          <div className="w-[120px]">
            <h1 className="text-4xl text-white font-FontSixtyFour">Yasin</h1>
          </div>
          <ul
            className={`text-white flex uppercase  text-sm  cursor-pointer   ${
              isToggle
                ? "flex-col absolute md:block top-0 left-0 min-h-screen bg-slate-900  md:bg-transparent w-1/2 pt-10  rounded-l-sm shadow-2xl "
                : "hidden md:flex"
            } items-center gap-7`}
          >
            <li>
              <ScrollLink
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className={`group transition duration-300  ${
                  !sroll ? "homeActive" : undefined
                }`}
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Skills
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                services
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink
                to="gallery"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Gallery
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-50}
                className="group transition duration-300"
              >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
              </ScrollLink>
            </li>
          </ul>
          <button
            className="md:hidden text-3xl transition-all ease-in duration-300 z-50"
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? <IoMdClose /> : <FiAlignJustify />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navber;
