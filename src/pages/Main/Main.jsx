import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import FooterNav from "../shared/FooterNav/FooterNav";
import AnimatedCursor from "react-animated-cursor";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <FooterNav />
      <AnimatedCursor />
    </div>
  );
};

export default Main;
