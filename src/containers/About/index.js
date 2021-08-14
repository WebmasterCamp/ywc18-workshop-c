import React from "react";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const About = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-16">
          <h1 className="font-bold text-4xl mb-8 text-center ">เกี่ยวกับเรา</h1>

          <p className="text-lg font-normal " style={{ textIndent: "50px" }}>
            <span className="text-primary-200 font-bold">Rhohit </span>
            เกิดจากรวมตัวของกลุ่มคนที่เชื่อว่าการบริจาคเลือดช่วยชีวิตคนได้จริงๆ
            โดยเฉพาะอย่างยิ่งในกลุ่มผู้ป่วยที่ต้องการเลือดปริมาณมากอย่าง
            การผ่าตัด การประสบอุบัติเหตุรุนแรง
            หรือมีปัญหาที่ทำให้ร่างกายผลิตเลือดเองไม่ได้
          </p>
          <p className="text-lg font-normal" style={{ textIndent: "50px" }}>
            ความสำคัญที่ส่งผลโดยตรงต่อชีวิตคนทั้งคนทำให้เราเกิดความตั้งใจ
            อยากทำให้การบริจาคเลือดเป็นเรื่องง่ายใกล้ตัว
            และเข้าถึงผู้คนในสังคมได้มากขึ้น
            เราจึงจัดทำเว็บไซต์นี้ขึึ้นมาเพื่อเป็นสื่อกลางในการรวบรวมข้อมูลข่าวสารเกี่ยวกับการบริจาคเลือด
            โดยมีทั้งคอนเทนต์บทความ รูปภาพ เเละระบบอำนวยความสะดวกต่างๆ
            ซึ่งครอบคลุมตั้งแต่ขั้นตอน การตรวจสอบคุณสมบัติผู้บริจาค
            ไปจนถึงการค้นหาจุดรับบริจาคเลือดที่ใกล้คุณมากที่สุด
          </p>
          <p
            className="text-lg font-normal mb-16"
            style={{ textIndent: "50px" }}
          >
            สุดท้ายนี้ Rhohit เชื่อเป็นอย่างยิ่งว่า
            เลือดเพียงหนึ่งถุงสามารถช่วยชีวิตได้มากกว่าหนึ่งคน
            เพราทุกคนที่ได้รับไปล้วนเป็นคนที่มีค่าสำหรับใครสักคนเสมอ
          </p>

          <h1 className="font-bold text-4xl mb-8 text-center ">ติดต่อเรา</h1>
          <p className="text-lg font-normal mb-4 text-center">
            Facebook :{" "}
            <a href="https://www.facebook.com/RhohitTH/">
              facebook.com/rhohit.th
            </a>
          </p>
          <p className="text-lg font-normal mb-6 text-center">
            Twitter : <a href="https://twitter.com/rhohit_th">@rhohit_th</a>
          </p>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
