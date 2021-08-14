import React, { useState } from "react";
import { Layout, Table } from "antd";
import BloodDonation from "../Home/BloodDonation";
import { mainBloodService } from "../../utilities/bloodservice";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const columns = [
  {
    title: "สถานที่",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "เวลาทำการ",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "เบอร์ติดต่อ",
    dataIndex: "tel",
    key: "tel",
  },
];

const DonateLocation = () => {
  const { Content } = Layout;
  const [service, setService] = useState("จุดประจำ");

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-8">
          <BloodDonation />

          <div className="rounded-full shadow-md h-auto bg-white mb-12 p-4">
            <div className="flex">
              <div
                className={
                  service === "จุดประจำ"
                    ? "flex justify-center w-full items-center cursor-pointer text-primary-200"
                    : "flex justify-center w-full items-center cursor-pointer"
                }
                onClick={() => setService("จุดประจำ")}
              >
                จุดประจำ
              </div>
              <div className="w-px h-8" style={{ background: "#D9D9D9" }} />
              <div
                className={
                  service === "จุดบริการชั่วคราว"
                    ? "flex justify-center w-full items-center cursor-pointer text-primary-200"
                    : "flex justify-center w-full items-center cursor-pointer"
                }
                onClick={() => setService("จุดบริการชั่วคราว")}
              >
                จุดบริการชั่วคราว
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
            <h1 className="text-2xl mb-6">{"เขตปธุมวัน"}</h1>
            <Table
              columns={columns}
              dataSource={mainBloodService}
              rowKey="id"
            />
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default DonateLocation;
