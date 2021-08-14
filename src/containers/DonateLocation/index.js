import React from "react";
import { Layout, Col, Row } from "antd";
import BloodDonation from "../Home/BloodDonation";

const DonateLocation = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>is Header</Header>
      <Content>
        <div className="max-w-screen-lg m-auto mt-8">
          <BloodDonation />

          <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
            <h1 className="text-2xl">เขตปธุมวัน</h1>
            <Row>
              <Col flex={3}>2 / 5</Col>
              <Col flex={2}>3 / 5</Col>
              <Col flex={2}>3 / 5</Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DonateLocation;
