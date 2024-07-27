/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EducationTabContent = ({educations}) => {
    useEffect(() => {
        Aos.init({
          duration: 500,
          // offset: 200,
        });
      }, []);
    return (
          <div className="mx-5 md:mx-1 mb-1 mt-5 md:mt-10">
            {educations.map((education) => (
              <div  style={{ boxShadow: "0px 0px 7px  #03e9f4" }} key={education.id} className=" rounded-md p-10 space-y-4 h-full ">
                <div className="flex gap-4 md:gap-0 flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-medium text-[#37ccd4]">{education?.intitude_name}</h2>
                    <h2 className="text-[18px] font-medium">{education?.education_name}</h2>
                  </div>
                  <div>
                    <h2 className="bg-[#103551] px-2 py-1 w-fit rounded mb-2 font-medium">{education?.result}</h2>
                    <h2 className="font-medium">{education?.year}</h2>
                  </div>
                </div>
                <p className="text-gray-400">{education.description}</p>
              </div>
            ))}
          </div> 
    );
};

export default EducationTabContent;