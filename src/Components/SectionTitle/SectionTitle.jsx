/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SectionTitle = ({ color, text }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="my-16 w-[200px] mx-auto relative">
      <h2 className="text-4xl font-semibold text-center text-slate-400">
        <span className="text-color-change">{color}</span> {text}
      </h2>
      <h2 className="text-4xl font-semibold text-center text-slate-400 absolute -bottom-2 right-1 section-text">
        <span className="text-color-change">{color}</span> {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
