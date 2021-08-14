import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {rewardItems } from './rewardItems'

const RewardCatalog = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-xl m-auto mb-12 p-5">
          <h1 className="font-bold text-3xl mb-12">แลกของรางวัล</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewardItems.map(reward => {
              return <Reward reward={reward} key={reward.rewardId} />;
            })}
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

const Reward = props => {
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
            <p className="text-secondary-200 hover:text-secondary-200">{description}</p>
            <span className="text-primary-200">{point} คะแนน</span>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="rounded-2xl shadow-md h-auto bg-white mb-1">
      <div
        className="rounded-t-2xl bg-center bg-cover bg-gray-200 bg-no-repeat h-40"
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
