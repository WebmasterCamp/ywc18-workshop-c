import React from "react";
import { Progress } from "antd";

const BloodMacro = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
        <p className="text-base font-semibold mb-6">หลอดพลังเลือด</p>
        <div className="flex ">
          <p className="text-4xl font-semibold text-primary-200 mb-2">2/</p>
          <p className="text-2xl font-semibold text-primary-200 mb-2 self-end">
            5 Unit
          </p>
        </div>

        <p className="text-base mb-4">
          บริจาคอีก 3 Unit จะได้รับเหรียญเกียรติยศ
        </p>
        <Progress percent={60} showInfo={false} />
      </div>
    </div>
  );
};

export default BloodMacro;
