import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";
import BloodRequire from "./BloodRequire/BloodRequire";

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>is Header</Header>
        <Content>
          <BloodMacro />
          <BloodRequire/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
