import React from "react";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Blog = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-16">
          <div className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px rounded-xl mb-16" />
          <h1 className="font-bold text-4xl mb-4">หัวข้อบทความ</h1>
          <p className="text-sm font-normal mb-10">10 สิงหาคม 2021</p>

          <p className="text-lg font-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pretium nisi at dui ultrices, pharetra dapibus quam luctus. Cras id
            tempor nisi. Mauris varius euismod pulvinar. Phasellus et mauris non
            augue ultricies molestie non pharetra magna. Sed ut fringilla elit,
            at ornare eros. Pellentesque eu orci ut nisl placerat pretium a id
            dolor. Duis non lobortis urna.
          </p>
          <p className="text-lg font-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pretium nisi at dui ultrices, pharetra dapibus quam luctus. Cras id
            tempor nisi. Mauris varius euismod pulvinar. Phasellus et mauris non
            augue ultricies molestie non pharetra magna. Sed ut fringilla elit,
            at ornare eros. Pellentesque eu orci ut nisl placerat pretium a id
            dolor. Duis non lobortis urna.
          </p>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Blog;
