import React from "react";
import { Layout } from "antd";
import BloodMacro from "./BloodMacro/BloodMacro";
import BloodRequire from "./BloodRequire/BloodRequire";
import SearchLocation from "./SearchLocation/SearchLocation";
import NavBar from "../../components/NavBar";

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <NavBar/>
        <Content>
          <BloodMacro />
          <BloodRequire/>
          <SearchLocation/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
