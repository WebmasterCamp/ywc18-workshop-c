import React from "react";
import { Input, Select, Button } from "antd";
import { district } from "../../../utilities/district";

const BloodDonation = () => {
  const { Option } = Select;

  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
        <p className="text-base font-semibold mb-4">ค้นหาจุดบริจาค</p>

        <form className="flex" method="get">
          <Select
            size="large"
            showSearch
            style={{ width: "100%" }}
            placeholder="เลือกเขตที่ต้องการค้นหา"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {district.map((data) => (
              <Option value={data.district} key={data.district}>
                {data.district}
              </Option>
            ))}
          </Select>
          <Button type="primary" size="large">
            ค้นหาจุดบริจาค
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonation;
