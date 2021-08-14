import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";
import BloodRequire from "./BloodRequire/BloodRequire";
import NavBar from "../../components/NavBar";
import BloodDonation from "./BloodDonation";
import Footer from "../../components/Footer";
import EvaluationBanner from "./EvaluationBanner";
import RohitBanner from "./RohitBanner";
import Blog from "./Blog";

const Home = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <NavBar />
        <Content className="p-5">
          <RohitBanner />
          <BloodMacro />
          <BloodRequire />
          <BloodDonation />
          <EvaluationBanner />
          <Blog />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
