import React from "react";
import { Progress } from "antd";

const BloodMacro = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="rounded-2xl shadow-sm h-auto bg-white  p-8">
        <div className="text-base font-semibold">หลอดพลังเลือด</div>
        <div className="text-4xl font-semibold">40/100</div>
        <p className="text-base">เก็บเพิ่มอีก 60 คะแนนเพื่อรับ Reward</p>
        <Progress percent={60} showInfo={false} />
      </div>
    </div>
  );
};

export default BloodMacro;
