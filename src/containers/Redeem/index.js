import React from 'react';
import { Layout, Row, Col } from 'antd';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const rewards = [
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
    img: 'reward.png'
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
    img: 'reward.png'
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
  {
    rewardName: 'ชื่อสินค้า',
    rewardId: '1',
    description: 'คำอธิบาย',
    point: 50,
  },
];

const Redeem = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <NavBar />
        <Content>
          <div className="max-w-screen-xl m-auto mb-12 p-5">
            <h1 className="font-bold text-3xl mb-12">แลกของรางวัล</h1>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {rewards.map(reward => {
                return <Reward reward={reward} key={reward.rewardId} />;
              })}
            </Row>
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

const Reward = props => {
  const { rewardName, description, point, img } = props.reward;
  return (
    <Col className="gutter-row" span={6} xs={24} md={12} xl={8}>
      <div className="rounded-2xl shadow-md h-auto bg-white mb-8">
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
    </Col>
  );
};

export default Redeem;
