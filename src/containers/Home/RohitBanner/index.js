import React from "react";
import Banner from "../../../assets/svg/banner.svg";

const RohitBanner = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <img
        src={Banner}
        alt="banner"
        className="rounded-2xl cursor-pointer"
        style={{ width: "-webkit-fill-available" }}
      />
    </div>
  );
};

export default RohitBanner;
