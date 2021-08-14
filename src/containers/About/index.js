import React from "react";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Banner from "../../assets/blogbanner_1.png";

const About = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-16">
          <h1 className="font-bold text-4xl mb-8 text-center ">
            เกี่ยวกับเราเกี่ยวกับเรา
          </h1>

          <p
            className="text-lg font-normal mb-6 text-center"
            style={{ textIndent: "50px" }}
          >
            <span className="text-primary-200 font-bold">Rhohit </span>
            เกิดจากรวมตัวของกลุ่มคนที่เชื่อว่าการบริจาคเลือดช่วยชีวิตคนได้จริงๆ
            โดยเฉพาะอย่างยิ่งในกลุ่มผู้ป่วยที่ต้องการเลือดปริมาณมากอย่าง
            การผ่าตัด การประสบอุบัติเหตุรุนแรง
            หรือมีปัญหาที่ทำให้ร่างกายผลิตเลือดเองไม่ได้
            ความสำคัญที่ส่งผลโดยตรงต่อชีวิตคนทั้งคนทำให้เราเกิดความตั้งใจ
            อยากทำให้การบริจาคเลือดเป็นเรื่องง่ายใกล้ตัว
            และเข้าถึงผู้คนในสังคมได้มากขึ้น
            เราจึงจัดทำเว็บไซต์นี้ขึึ้นมาเพื่อเป็นสื่อกลางในการรวบรวมข้อมูลข่าวสาร
            เกี่ยวกับการบริจาคเลือด โดยมีทั้งคอนเทนต์บทความ รูปภาพ
            เเละระบบอำนวยความสะดวกต่างๆ ซึ่งครอบคลุมตั้งแต่ขั้นตอน
            การตรวจสอบคุณสมบัติ ผู้บริจาค
            ไปจนถึงการค้นหาจุดรับบริจาคเลือดที่ใกล้คุณมากที่สุดสุดท้ายนี้ Rhohit
            เชื่อเป็นอย่างยิ่งว่า เลือดเพียงหนึ่งถุงสามารถช่วยชีวิตได้มากกว่า
            หนึ่งคน เพราทุกคนที่ได้รับไปล้วนเป็นคนที่มีค่าสำหรับใครสักคนเสมอ
          </p>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
