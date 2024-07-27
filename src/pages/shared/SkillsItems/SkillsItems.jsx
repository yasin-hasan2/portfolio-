/* eslint-disable react/prop-types */
import "./items.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SkillsItems = ({ skills }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  return (
    <div className="mt-10 grid grid-cols-2 mx-3  md:grid-cols-4 lg:grid-cols-6 gap-5 ">
      {skills?.map((skill) => (
        <div data-aos="fade-up" key={skill?.id}>
          <div className="skill-card p-4 cursor-pointer rounded-md transform transition duration-500 hover:scale-125 hover:text-slate-900 ">
            <div className="w-10 skill-icon h-10   mx-auto">
              <img
                src={skill?.logo}
                className="w-10 h-10 object-cover rounded-full border-2 border-[#11c6cf]"
                alt=""
              />
            </div>
            <h2 className="text-xl text-gray-300 font-semibold text-center mt-2">
              {skill?.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsItems;
