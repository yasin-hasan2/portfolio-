import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import projectAnimation from "../../../assets/lottie-animation/projects.json";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedGithub, setSelectedGithub] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/projects.json");
      return res.data;
    },
  });

  const handleTechnologyClick = (index) => {
    setSelectedTechnology(selectedTechnology === index ? null : index);
  };

  const handleGithubClick = (index) => {
    setSelectedGithub(selectedGithub === index ? null : index);
  };

  const handleSlideChange = (swiper) => {
    setCurrentProjectIndex(swiper.realIndex);
  };
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <section className="max-w-6xl mx-auto  overflow-hidden">
      <SectionTitle color={"Projects"} />
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-20">
        <div className="order-2 md:order-1 mx-5">
          <h2 className=" font-medium  mb-2 uppercase text-slate-300">
            Project Number:{" "}
            <span className="text-[#03e9f4] lowercase">
              {currentProjectIndex + 1} of {projects.length}
            </span>
          </h2>

          <Swiper
            data-aos="fade-up"
            data-aos-duration="1000"
            effect={"cards"}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
            // navigation={{
            //   nextEl: "#swiper-button-next",
            //   prevEl: "#swiper-button-prev",
            // }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" style="background-color: #03e9f4; width: 15px; height: 15px; margin-top: 10px;"></span>'
                );
              },
            }}
            onSlideChange={handleSlideChange}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={project?.id}
                className="project-card p-3 rounded-md "
              >
                <div className=" h-48 overflow-y-auto ">
                  <img
                    src={project?.project_thumnail}
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-xl text-gray-300 font-medium uppercase relative">
                      {project?.project_name}
                      <span className="border-b-2 border-gradient"></span>
                    </h1>
                    <div className="relative flex items-center gap-2">
                      <button
                        style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                        className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                        onClick={() => handleTechnologyClick(index)}
                      >
                        {selectedTechnology === index ? (
                          <IoMdClose />
                        ) : (
                          <GrTechnology />
                        )}
                      </button>
                      {selectedTechnology === index && (
                        <div className="absolute bg-slate-900 p-5 rounded-md right-28 bottom-0 space-y-3 w-[180px] ">
                          <p>
                            Technologies: 👇
                            <br />
                            <small>
                              {project?.technology.map((tech, index) => (
                                <span key={tech}>
                                  {index + 1 + " " + tech}
                                  {index < project.technology.length - 1 && (
                                    <br />
                                  )}
                                </span>
                              ))}
                            </small>
                          </p>
                        </div>
                      )}
                      <button
                        style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                        className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                        onClick={() => handleGithubClick(index)}
                      >
                        {selectedGithub === index ? (
                          <IoMdClose />
                        ) : (
                          <FaGithub />
                        )}
                      </button>
                      {selectedGithub === index && (
                        <ul className="absolute bg-slate-800 p-5 rounded-md right-10 w-[180px] top-8 space-y-3">
                          <li>
                            <a
                              className="btn btn-sm"
                              href={
                                project?.project_source[0]?.client_github_link
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              Front End
                              <FaGithub />
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-sm"
                              href={
                                project?.project_source[1]?.server_github_link
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              Backend
                              <FaGithub />
                            </a>
                          </li>
                        </ul>
                      )}
                      <a
                        style={{ boxShadow: "0px 0px 8px 0px #03e9f4" }}
                        className="btn btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#34c5cd] hover:text-white text-[#03e9f4] hover:border-white text-xl"
                        href={project?.project_source[2]?.live_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TbWorld />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-400">{project?.description}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* <div id="swiper-button-prev" className="swiper-button-prev"></div>
            <div id="swiper-button-next" className="swiper-button-next"></div> */}
          </Swiper>
        </div>
        <div
          data-aos="fade-down-left"
          className="md:w-[400px] order-1 md:order-2 md:ml-20"
        >
          <Lottie animationData={projectAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
