
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./skills.css";
// import SkillsProgress from "./SkillsProgress";
import SkillsTabs from "./SkillsTabs";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skils = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, 
      offset: 200,
    });
  }, []);
  return (
    <section className="max-w-6xl mx-auto ">
      <SectionTitle color={'My Skills'}/>
      <div data-aos="fade-down"
     data-aos-duration="1000" className="mt-10">
       <SkillsTabs/>
      </div>
    </section>
  );
};

export default Skils;
