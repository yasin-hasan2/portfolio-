import "./loading.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Line } from "rc-progress";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    const intervalId = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : prevPercentage;
      });
    }, 26);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-[100vh] items-center justify-center bg-black">
      <div>
        <div className="glitch-text flex gap-5 items-center">
          <h2 data-aos="fade-right" className="last-text">
            Y
          </h2>
          <h2 data-aos="fade-left" className="">
            A
          </h2>
          <h2 data-aos="fade-right" className="last-text">
            S
          </h2>
          <h2 data-aos="zoom-in" className="">
            I
          </h2>
          <h2 data-aos="fade-left" className="last-text">
            N
          </h2>
        </div>
        <div>
          <Line
            percent={loadingPercentage}
            strokeWidth={6}
            strokeColor="#03e9f4"
            trailColor="#0a2729"
            trailWidth={6}
            strokeLinecap="butt"
          />
          <div className=" font-semibold mt-2 text-slate-700 flex items-center justify-center">
            {loadingPercentage}% Loading
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
