
import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { IoIosRocket, IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
const FooterNav = () => {
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
        <div className="w-full py-4  text-white sticky z-50 bottom-0 md:hidden" style={{ backdropFilter: "blur(50px)" }}>
            <ul className="flex items-center justify-between px-5">
            <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className={`group transition duration-300 text-2xl ${
                !sroll ? "homeActive" : undefined
              }`}>
              <IoMdHome />
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
              className="group transition duration-300 text-2xl">
              <FaUserTie />
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="group transition duration-300 text-2xl">
              <IoIosRocket />
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="group transition duration-300 text-2xl">
              <MdEmail />
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#03e9f4]"></span>
            </ScrollLink>
          </li>
            </ul>
        </div>
    );
};

export default FooterNav;