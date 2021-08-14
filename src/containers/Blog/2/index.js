import React from "react";
import { Layout } from "antd";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Banner from "../../../assets/blogbanner_2.jpg";
import BannerA from "../../../assets/GA.jpeg";
import BannerB from "../../../assets/GB.png";
import BannerO from "../../../assets/GO.png";
import BannerAB from "../../../assets/GAB.jpg";

const Blog2 = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-16 p-5">
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px rounded-xl mb-16"
            style={{ backgroundImage: `url(${Banner})` }}
          />
          <h1 className="font-bold text-4xl mb-4">เลือดกรุ๊ปไหนกินอะไรดี</h1>
          <p className="text-sm font-normal mb-10">10 สิงหาคม 2021</p>

          <p className="text-lg font-normal" style={{ textIndent: "50px" }}>
            เคยสงสัยไหมว่ากรุ๊ปเลือดสามารถบอกอะไรเราได้บ้าง?
          </p>
          <p className="text-lg font-normal" style={{ textIndent: "50px" }}>
            นอกจากการบอกนิสัย หรือการทำนายดวงแล้ว จริงๆ
            แล้วกรุ๊ปเลือดยังสามารถบอกอะไรเราได้อีกบ้างนะ
            มีหนังสือเล่มหนึ่งชื่อว่า Eat Right For Your Type โดย DR. Peter J.
            D’Adamo ได้อธิบายไว้ว่า
            “อาหารที่เรารับประทานจะมีโปรตีนที่เป็นอนุมูลอิสระที่เรียก ‘เลนติน’
            อยู่ ซึ่งมีคุณสมบัติในการเหนี่ยวนำและเกาะติดเลือด
            ถ้าเรารับประทานอาหารไม่เหมาะกับหมู่เลือดของเรา
            จะทำให้การเผาผลาญและการผลิตฮอร์โมนเกิดความผิดปกติได้”
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            แล้วอาหารประเภทไหนถึงจะเหมาะสมกับกรุ๊ปเลือดแต่ละกรุ๊ป ไปดูกันเลย
          </p>
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px w-4/5 mx-auto rounded-xl mb-8"
            style={{ backgroundImage: `url(${BannerA})` }}
          />
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            กรุ๊ป A : หรือ "สายผัก"
            เป็นกรุ๊ปที่สามารถรับประทานเนื้อสัตว์ได้น้อยที่สุดและต้องรับประทานผักมาก
            เนื่องจากมีกรดในกระเพาะอาหารต่ำกว่ากรุ๊ปอื่นๆและมีความเข้มข้นในเลือดสูง
            ซึ่งอาหารที่คนกรุ๊ป A ควรรับประทานมีดังนี้
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ควรรับประทาน : อาหารประเภทปลา เช่น ปลาแซลมอน ปลาซาร์ดีน ผัก/ผลไม้
            เช่น บรอกโคลี สับปะรด เครื่องดื่ม เช่น ชา กาแฟ
            *ควรดื่มหลังรับประทานอาหาร (เพราะเป็นเครื่องดื่มที่ช่วยเพิ่มกรด)
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ไม่ควรรับประทาน : อาหารประเภท เนื้อหมู แฮม เบคอน ปู หอย
            นมและผลิตภัณฑ์จากนม น้ำมันถั่วเหลือง เป็นต้น
          </p>
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px w-4/5 mx-auto rounded-xl mb-8"
            style={{ backgroundImage: `url(${BannerB})` }}
          />
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            กรุ๊ป B : หรือ "สายหลากหลาย" เป็นกรุ๊ปที่สามารถรับประทานได้หลากหลาย
            และครอบคลุมได้ทุกหมู่ได้ทั้งเนื้อสัตว์และผักผลไม้
            เพราะมีความเข้มข้นของเลือดในระดับที่พอดี
            แต่จะอ้วนได้ง่ายและมีปัญหาภูมิคุ้มกันบกพร่องได้ง่าย
            ซึ่งอาหารที่คนกรุ๊ป B ควรรับประทานมีดังนี้
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ควรรับประทาน : อาหารประเภท เนื้อแกะ เนื้อปลา เนื้อแพะ เนื้อกระต่าย
            ผัก/ผลไม้ เช่น กะหล่ำปลี บรอกโคลีสับปะรด แตงโม เครื่องดื่ม เช่น ชา
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ไม่ควรรับประทาน : แฮม เบคอน ปู กุ้งมังกร มะพร้าว อะโวคาโด ถั่วลิสง
            ถั่วเหลือง เป็นต้น
          </p>
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px w-4/5 mx-auto rounded-xl mb-8"
            style={{ backgroundImage: `url(${BannerO})` }}
          />
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            กรุ๊ป O : หรือ "สายเนื้อ"
            เป็นกรุ๊ปที่สามารถรับประทานเนื้อสัตว์ได้มากที่สุด
            เนื่องจากกระเพาะมีความเป็นกรดสูงสามารถย่อยเนื้อสัตว์ได้ดี
            ทำให้สามารถเผาผลาญและดูดซึมได้ดี ซึ่งอาหารที่คนกรุ๊ป O
            ควรรับประทานมีดังนี้
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ควรรับประทาน : เนื้อสัตว์แทบทุกชนิด เช่น ปลา ไก่ เนื้อวัว เนื้อแกะ
            ผัก/ผลไม้ เช่น พลับ พรุน บรอกโคลี หอมหัวใหญ่ เครื่องดื่ม เช่น
            น้ำสับปะรด
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ไม่ควรรับประทาน : อาหารประเภท เนื้อหมู ห่าน กะหล่ำปลี มันฝรั่ง
            นมและผลิตภัณฑ์จากนม กาแฟ เป็นต้น
          </p>
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px w-4/5 mx-auto rounded-xl mb-8"
            style={{ backgroundImage: `url(${BannerAB})` }}
          />
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            กรุ๊ป AB : หรือ "สายผสมผสาน" เป็นกรุ๊ปที่เกิดจาก กรุ๊ป A กับ B
            มารวมกัน
            ดังนั้นการรับประทานอาหารที่เหมาะเป็นการผสมระหว่างการกินแบบเน้นผักมากกว่าเนื้อสัตว์และการกินแบบหลากหลายนิดๆ
            และคนกรุ๊ปนี้ส่วนใหญ่จะมีปัญหาสุขภาพค่อนข้างเยอะ
            เพราะระบบภูมิคุ้มกันต่ำ อ่อนแอ มากกว่ากรุ๊ปอื่นๆ ซึ่งอาหารที่คนกรุ๊ป
            AB ควรรับประทานมีดังนี้
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ควรรับประทาน : อาหารประเภท เนื้อแกะ เนื้อแพะ ปลาทูน่า ปลาซาร์ดีน
            ผัก/ผลไม้ เช่น บรอกโคลี่ ดอกกะหล่ำ องุ่น พลัม สับปะรด เครื่องดื่ม
            เช่น ชาคาโมมายล์ ชาเขียว ไวน์แดง ( 1แก้ว/วัน )
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ไม่ควรรับประทาน : ปลาเนื้อขาว ปลาแซลมอน แฮม เบคอน กล้วย มะพร้าว
            เป็นต้น
          </p>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Blog2;
