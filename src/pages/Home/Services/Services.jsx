import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./services.css";
import { Tilt } from "react-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services.json");
      return res.data;
    },
  });
  // console.log(services);
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle color={"My"} text={"Services"} />
      <div data-aos-duration="1000" className="grid md:grid-cols-2 gap-6 mx-3">
        {services.map((service) => (
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            key={service.id}
            className="">
            <Tilt
              options={{ scale: 1, max: 25, speed: 400, perspective: 1000 }}>
              <div className="text-center w-ful space-y-4 card-grad p-3 md:p-7 rounded-md border-slate-900 border-2 h-[320px]">
                <img src={service?.icon} className="w-14 mx-auto" alt="" />
                <h2 className="text-3xl font-bold text-[#37c5cd]">
                  {service?.service_name}
                </h2>
                <p className=" font-medium text-slate-400">
                  {service?.description}
                </p>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
