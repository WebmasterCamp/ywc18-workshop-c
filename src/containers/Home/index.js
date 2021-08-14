import React from "react";
import { Layout } from "antd";

const Home = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
