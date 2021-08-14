import React from "react";
import { Layout, Table, Progress } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { user } from "../../utilities/constants";
import NextDonate from "../../assets/svg/next_donate.svg";
import PointDonate from "../../assets/svg/point_donate.svg";

const columns = [
  {
    title: "สถานที่",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "ปริมาณ",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "วันที่",
    dataIndex: "time",
    key: "time",
  },
];

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <div className="max-w-screen-xl m-auto mt-8">
          <div className="block my-auto text-center">
            <div
              className="bg-no-repeat bg-center bg-primary-200 bg-cover rounded-full bg-primary-200 h-36 w-36 mx-auto mb-4"
              style={{ backgroundImage: `url(${user.picture})` }}
            />
            <p className="text-2xl font-semibold mb-2">{user.username}</p>
            <p className="text-sm mb-5">{"Blood Type : " + user.bloodType}</p>
            {/* <Button type="primary">แก้ไขข้อมูล</Button> */}
          </div>

          <div className="rounded-2xl shadow-md h-auto bg-white mb-12 p-4">
            <div className="flex">
              <div className="flex flex justify-center w-full items-center">
                <img src={NextDonate} alt="NextDonate" />
                <div className="block ml-8">
                  <p className="text-sm">การบริจาคครั้งถัดไป</p>
                  <p className="text-2xl font-semibold text-primary-200">
                    83 วัน
                  </p>
                  <Progress
                    percent={3}
                    showInfo={false}
                    style={{ width: "240px" }}
                  />
                </div>
              </div>
              <div
                className="w-px h-auto flex "
                style={{ background: "#D9D9D9" }}
              />
              <div className="flex flex justify-center w-full items-center ">
                <img src={PointDonate} alt="PointDonate" />
                <div className="block ml-8">
                  <p className="text-sm">คะแนนของฉัน</p>
                  <p className="text-2xl font-semibold text-primary-200">
                    {user.point} คะแนน
                  </p>
                  <p className="text-sm text-primary-200 cursor-pointer">
                    แลกของรางวัล
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
            <h1 className="text-2xl mb-6">{"ประวัติการบริจาคโลหิต"}</h1>
            <Table columns={columns} dataSource={user.history} rowKey="id" />
          </div>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Profile;
