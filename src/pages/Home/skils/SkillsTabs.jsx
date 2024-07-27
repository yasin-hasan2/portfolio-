/* eslint-disable react-hooks/exhaustive-deps */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SkillsItems from "../../shared/SkillsItems/SkillsItems";
import { useState } from "react";

const SkillsTabs = () => {
  const [currentTab, setCurrentTab] = useState("Front-End");
  const { data: skills = [] } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axios.get("/skills.json");
      return res.data;
    },
  });

  const tabsArray = ["Front-End", "Backend", "Experts", "Tools"];

  const FrontEndData = skills.filter(
    (frontEnd) => frontEnd?.category === "Front-End"
  );
  const BackendData = skills.filter(
    (Backend) => Backend?.category === "Backend"
  );
  const ExpertsData = skills.filter(
    (Experts) => Experts?.category === "Experts"
  );
  const OthersData = skills.filter((other) => other?.category === "Tools");

  return (
    <div>
      <Tabs>
        <TabList className={"flex flex-wrap justify-center gap-5 outline-none"}>
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

        <TabPanel>
          <SkillsItems skills={FrontEndData} />
        </TabPanel>

        <TabPanel>
          <SkillsItems skills={BackendData} />
        </TabPanel>

        <TabPanel>
          <SkillsItems skills={ExpertsData} />
        </TabPanel>
        <TabPanel>
          <SkillsItems skills={OthersData} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SkillsTabs;
