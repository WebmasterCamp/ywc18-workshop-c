import { Button } from "antd";
import React from "react";
import Image from "../../../assets/vector-evaluation.png";

const EvaluationBanner = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <div className="rounded-2xl shadow-md h-auto bg-white py-8 px-16 flex justify-between items-center">
        <div className="block">
          <p className="font-normal mb-2 text-5xl">คุณสมบัติผู้บริจาคเลือด</p>
          <p className="font-normal mb-8 text-xl">
            ตรวจสอบคุณสมบัติเบื้องต้นก่อน ไปบริจาคเลือด
          </p>
          <Button type="primary" size={"large"} style={{ width: "160px" }}>
            ตรวจเลย
          </Button>
        </div>
        <div className="block">
          <img src={Image} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default EvaluationBanner;
