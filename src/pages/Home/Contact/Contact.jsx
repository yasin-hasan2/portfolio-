import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import phonePng from "../../../assets/icons/phone.png";
import homePng from "../../../assets/icons/home.png";
import EmailPng from "../../../assets/icons/email.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    // console.log(data);
    if (isNaN(data?.number)) {
      return toast.error("Please provide a valid number 😒!");
    }

    const templateParams = {
      name: data?.name,
      email: data?.email,
      number: data?.number,
      message: data?.message,
    };

    setLoading(true);

    const res = await emailjs.send(
      "service_ngz2qsb",
      "template_von4hdk",
      templateParams,
      "JlpXCvdYgzXy6-d-i"
    );
    if (res.status === 200) {
      toast.success("Message Send Success 😍!");
      reset();
      setLoading(false);
    } else {
      toast.error("Message Send Faild 🥲!");
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <SectionTitle color={"Contact"} text={"Me"} />
      {/* address */}
      <div
        data-aos="zoom-in"
        className="grid md:grid-cols-3 gap-10 mx-3 experience-style p-10 rounded-md shadow-md bg-opacity-60"
      >
        <div className="text-center space-y-1">
          <div className="w-10 mx-auto">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={phonePng}
              alt=""
            />
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-xl font-medium text-[#03e9f4]"
          >
            WhatsApp
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="text-gray-400 font-medium"
          >
            <small>+880 13016*****</small>
          </p>
        </div>
        <div className="text-center space-y-1">
          <div className="w-10 mx-auto">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={homePng}
              alt=""
            />
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-xl font-medium text-[#03e9f4]"
          >
            Home
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-gray-400 font-medium"
          >
            <small>Dhaka, Dhanmondi32</small>
          </p>
        </div>
        <div className="text-center">
          <div className="w-10 mx-auto space-y-1">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={EmailPng}
              alt=""
            />
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-xl font-medium text-[#03e9f4]"
          >
            Email
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="text-gray-400 font-medium"
          >
            <small>Ya705668@gmail.com</small>
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl text-center md:text-start font-medium mb-5 text-slate-400">
            Have a <span className="text-[#03e9f4]">Question</span>?
          </h2>
          <div className="flex  flex-col md:flex-row items-center  gap-10">
            <div className="flex-1 space-y-6">
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 w-[350px] md:w-full  py-2 rounded placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Name"
                {...register("name")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="email"
                placeholder="Your Email"
                {...register("email")}
                required
              />
              <br />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Phone Number"
                {...register("number")}
                required
              />
            </div>
            <div className="flex-1">
              <textarea
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                name="message"
                cols=""
                {...register("message")}
                placeholder="Your Message..."
                required
                rows="7"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            {loading ? (
              <button className="btn btn-disabled text-xl">
                Loading{" "}
                <span className="loading loading-spinner text-white"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group"
              >
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#03e9f4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#03e9f4]">
                  SEND MESSAGE
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
