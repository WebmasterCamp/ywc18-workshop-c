import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../assets/svg/banner.svg";

const RohitBanner = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <Link to="/redeem">
        <img
          src={Banner}
          alt="banner"
          className="rounded-2xl cursor-pointer"
          style={{ width: "-webkit-fill-available" }}
        />
      </Link>
    </div>
  );
};

export default RohitBanner;
