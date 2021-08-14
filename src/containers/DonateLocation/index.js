import React from "react";
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
    title: "เขต",
    dataIndex: "district",
    key: "district",
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

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-8">
          <BloodDonation />

          <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
            <h1 className="text-2xl mb-6">{"จุดบริจาคในกรุงเทพ"}</h1>
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
