import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EducationTabContent from "./EducationTabContent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const EducationTabs = () => {
  const [currentTab, setCurrentTab] = useState("HSC");
  const { data: educations = [] } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const res = await axios.get("/education.json");
      return res.data;
    },
  });
  useEffect(() => {
    Aos.init({
      duration: 500,
      // offset: 200,
    });
  }, []);
  const tabsArray = ["HSC", "SSC"];
  const hscData = educations.filter((education) => education?.category === "HSC");
  const sscData = educations.filter((education) => education?.category === "SSC");
  return (
    <div className="md:w-1/2">
      <Tabs>
        <TabList  data-aos="fade-down"
            data-aos-duration="1000" className={"flex flex-wrap justify-center gap-5 outline-none"}>
          {tabsArray.map((tabArray) => (
            <Tab
              onClick={() => setCurrentTab(tabArray)}
              className={`outline-none cursor-pointer font-semibold text-gray-300 bg-[#092152] px-4 py-2 rounded-md ${
                currentTab === tabArray
                  ? "border-b-2 border-[#03e9f4]"
                  : undefined
              }`}
              key={tabArray}>
              {tabArray}
            </Tab>
          ))}
        </TabList>
        <TabPanel  data-aos="fade-down-right"
            data-aos-duration="1000">
          <EducationTabContent educations={hscData} />
        </TabPanel>
        <TabPanel>
          <EducationTabContent educations={sscData} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EducationTabs;
