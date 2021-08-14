import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>is Header</Header>
        <Content>
          <BloodMacro />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
