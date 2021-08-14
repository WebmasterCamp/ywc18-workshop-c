import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { rewardItems } from "./rewardItems";
import PointDonate from "../../assets/svg/point_donate.svg";
import { user } from "../../utilities/constants";

const RewardCatalog = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-xl m-auto mb-12 p-5">
          <div className="flex items-center mb-12 flex-wrap">
            <h1 className="font-bold text-3xl mb-5">แลกของรางวัล</h1>
            <div className="flex flex justify-center items-center ml-4 sm:ml-auto min-w-lg p-5 bg-white rounded-2xl">
              <img src={PointDonate} alt="PointDonate" width="54rem" />
              <div className="block ml-6">
                <p className="text-sm whitespace-nowrap	">คะแนนของฉัน</p>
                <p className="text-2xl font-semibold text-primary-200 whitespace-nowrap	">
                  {user.point} คะแนน
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewardItems.map((reward) => {
              return <Reward reward={reward} key={reward.rewardId} />;
            })}
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

const Reward = (props) => {
  const { rewardId, rewardName, description, point, img, available } =
    props.reward;
  if (available) {
    return (
      <Link to={`/redeem/${rewardId}`}>
        <div className="rounded-2xl shadow-md h-auto bg-white mb-1">
          <div
            className="rounded-t-2xl bg-center bg-cover bg-gray-200 bg-no-repeat h-40"
            style={{
              backgroundImage: `url('/asset/reward-img/${img}')`,
            }}
          ></div>
          <div className="p-6">
            <h6 className="font-bold text-lg">{rewardName}</h6>
            <p className="text-secondary-200 hover:text-secondary-200">
              {description}
            </p>
            <span className="text-primary-200">{point} คะแนน</span>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="rounded-2xl shadow-md h-auto bg-white mb-1">
      <div
        className="rounded-t-2xl bg-center bg-cover bg-gray-200 bg-no-repeat h-40 opacity-50"
        style={{
          backgroundImage: `url('/asset/reward-img/${img}')`,
        }}
      ></div>
      <div className="p-6">
        <h6 className="font-bold text-lg">{rewardName}</h6>
        <p>{description}</p>
        <span className="text-primary-200">{point} คะแนน</span>
      </div>
    </div>
  );
};

export default RewardCatalog;
