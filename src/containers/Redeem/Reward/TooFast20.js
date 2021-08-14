import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Modal } from 'antd';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const TooFast20 = () => {
  const { Content } = Layout;
  const [isRedeemModalVisible, setRedeemModalVisible] = useState(false);

  const showModal = () => {
    setRedeemModalVisible(true);
  };

  const hideModal = () => {
    setRedeemModalVisible(false);
  };

  return (
    <Layout>
      <NavBar />

      <Content>
        <div className="max-w-screen-lg m-auto mt-4 mb-4 p-5">
          <img
            src="/asset/reward-img/reward06.png"
            className="w-full rounded-xl mb-10"
            alt="reward"
          />

          <h1 className="font-bold text-4xl mb-4">
            คูปองส่วนลด Too Fast To Sleep
          </h1>
          <p className="text-sm font-normal mb-2">
            ตั้งแต่วันที่ 10 สิงหาคม 2021 - 30 สิงหาคม 2021
          </p>
          <p className="font-bold text-3xl mb-4 text-primary-200 mb-5">
            20 คะแนน
          </p>
          <h2 className="font-bold text-2xl mb-4">เงื่อนไข</h2>
          <ul>
            <li>- ไม่จำกัดจำนวนสิทธิ์</li>
            <li>- สิทธิพิเศษนี้ไม่สามารถเปลี่ยนแปลงเป็นเงินสดได้</li>
            <li>
              - ลูกค้านำรหัสที่ได้รับไปจากการกดรับสิทธิ์
              แสดงต่อเจ้าหน้าที่ร้านค้าเพื่อรับสิทธิ์
            </li>
            <li>
              - สงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไข โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              และไม่สามารถใช้ร่วมกับรายการส่งเสริมการขายหรือส่วนลดอื่น ๆ ได้
            </li>
          </ul>
          <div className="flex justify-center	mt-8">
            <Button
              type="primary"
              size="large"
              className="rounded-md"
              onClick={showModal}
            >
              แลกของรางวัล
            </Button>
          </div>
        </div>
        <Modal
          visible={isRedeemModalVisible}
          closable={false}
          cancelText="กลับสู่หน้าหลัก"
          okText="กลับสู่หน้าแลกของรางวัล"
          className="text-center"
          footer={null}
        >
          <h2 className="font-bold text-2xl mt-10">
            คูปองส่วนลด Too Fast To Sleep มูลค่า 20 บาท
          </h2>
          <div className="flex justify-center">
            <img
              src="/asset/mock-reward-qr.png"
              className="max-w-xs"
              alt="reward"
            />
          </div>
          <div className="flex flex-col justify-center	mt-4">
            <Link to="/redeem">
              <Button
                type="primary"
                size="large"
                className="w-full mb-2"
                onClick={hideModal}
              >
                กลับสู่หน้าแลกของรางวัล
              </Button>
            </Link>
            <Link to="/">
              <Button
                size="large"
                className="w-full"
                onClick={hideModal}
                color="default"
              >
                กลับสู่หน้าหลัก
              </Button>
            </Link>
          </div>
        </Modal>
      </Content>
      <Footer />
    </Layout>
  );
};

export default TooFast20;
