import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";
import BloodRequire from "./BloodRequire/BloodRequire";
import NavBar from "../../components/NavBar";
import BloodDonation from "./BloodDonation";

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <NavBar/>
        <Content>
          <BloodMacro />
          <BloodRequire />
          <BloodDonation />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
