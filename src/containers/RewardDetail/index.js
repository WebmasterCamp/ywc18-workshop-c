import React from 'react';
import { Layout } from 'antd';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const RewardDetail = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-4 p-5">
          <img
            src="/asset/reward-img/reward.png"
            className="w-full rounded-xl mb-10"
            alt="reward"
          />

          <h1 className="font-bold text-4xl mb-4">
            ส่วนลด mo-mo paradise มูลค่า 100 บาท
          </h1>
          <p className="text-sm font-normal mb-2">
            ตั้งแต่วันที่ 10 สิงหาคม 2021 - 30 สิงหาคม 2021
          </p>
          <p className="font-bold text-3xl mb-4 text-primary-200 mb-5">
            100 คะแนน
          </p>
          <h2 className="font-bold text-2xl mb-4">วิธีแลกรับของรางวัล</h2>
          <p className=" font-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pretium nisi at dui ultrices, pharetra dapibus quam luctus. Cras id
            tempor nisi. Mauris varius euismod pulvinar. Phasellus et mauris non
            augue ultricies molestie non pharetra magna. Sed ut fringilla elit,
            at ornare eros. Pellentesque eu orci ut nisl placerat pretium a id
            dolor. Duis non lobortis urna.
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
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default RewardDetail;