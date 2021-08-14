import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";
import BloodRequire from "./BloodRequire/BloodRequire";
import NavBar from "../../components/NavBar";
import BloodDonation from "./BloodDonation";
import Footer from "../../components/Footer";
import EvaluationBanner from "./EvaluationBanner";
import RohitBanner from "./RohitBanner";

const Home = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <NavBar />
        <Content>
          <RohitBanner />
          <BloodMacro />
          <BloodRequire />
          <BloodDonation />
          <EvaluationBanner />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
