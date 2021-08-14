import React from "react";
import { Layout } from "antd";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Banner from "../../assets/blogbanner_1.png";

const Blog = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content>
        <div className="max-w-screen-lg m-auto mt-16">
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-372px rounded-xl mb-16"
            style={{ backgroundImage: `url(${Banner})` }}
          />
          <h1 className="font-bold text-4xl mb-4">
            รีวิวบริจาคเลือดครั้งแรก! จากมนุษย์ที่กลัวเข็มสุดหัวใจ
          </h1>
          <p className="text-sm font-normal mb-10">10 สิงหาคม 2021</p>

          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            หนึ่งในอุปสรรคสำคัญที่ขวางกั้นระหว่างเรากับการบริจาคเลือดคงหนีไม่พ้น
            ‘อาการกลัวเข็ม’ ซึ่งขอบอกเลยว่าเป็นเรื่องปกติมากๆ
            โดยอาการนี้มีชื่อโรคอย่างเป็นทางการว่า ‘Trypanophobia’ หรือ ‘Needle
            Phobia’ นั่นเอง อาการกลัวเข็มอาจเกิดขึ้นจาก เหตุการณ์ฝังใจในอดีต
            หรือมีคนในครอบครัวกลัวจนกลัวตาม
            เมื่อเห็นเข็มแล้วจะทำให้เกิดอาการแพนิก ใจสั่น หัวใจเต้นเร็ว
            หรือถึงขั้นเป็นลมเลยก็เป็นได้ คอลัมน์ RhoReview
            ในวันนี้จึงเป็นการพูดคุยกับ ไตเติ้ล—ชญานิศ พรหมฮวบ
            อดีตมนุษย์กลัวเข็ม สุดหัวใจที่เพิ่งเข้าวงการบริจาคเลือดมาหมาดๆ
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            “เราเป็นคนกลัวเข็มตั้งแต่จำความได้
            ขนาดที่แค่เห็นหน้าหมอก็ร้องไห้ออกมาแล้ว ทั้งๆ
            ที่หมอยังไม่ทันได้ทำอะไรเลยสักอย่าง พอโตขึ้น
            มาก็พยายามทำตัวให้แข็งแรงจะได้ไม่ต้องไปโรงพยาบาลเสี่ยงเจอการฉีดยาโดยไม่จำเป็นก่อนหน้านี้เราเห็นแคมเปญการบริจาคเลือด
            บ่อยมาก
            แน่นอนว่าคนอย่างเราไม่เคยคิดจะไปสักครั้งขนาดที่สภากาชาดอยู่ข้างมหาวิทยาลัยยังไม่คิดจะไปเหยียบกระทั่งช่วงโควิด-19
            ที่กินระยะเวลามาเป็นปี
            ทำให้เราเริ่มรู้สึกเหนื่อยกับการต้องใช้ชีวิตในห้องสี่เหลี่ยม
            ไม่ได้ไปเจอใครเลย แถมยังเจอข่าวสูญเสียทุกวัน
            สุขภาพจิตย่ำแย่ลงเยอะมาก เหมือนใช้ชีวิตไปวันๆ
            พอดีกับที่ไถฟีดเฟซบุ๊กเจอว่าสภากาชาดขาดเลือด ด้วยความที่มันเบื่อมากๆ
            อยากออกจากห้อง เราเลยรวบรวมความกล้าสุดชีวิต ลองไปดูสักครั้ง
            ถ้าไม่ไหวค่อยกลับ
          </p>
          <p
            className="text-lg font-normal mb-6"
            style={{ textIndent: "50px" }}
          >
            ตอนไปถึงแอบตกใจ ตึกใหญ่กว่าที่คิด พอเข้าไปก็มีวัดอุณหภูมิ
            แล้วเราก็ต้องไปกรอกประวัติ ช่วงโควิดแบบนี้จะมีกรอกแบบประเมิน
            โควิดด้วย จากนั้นก็วัดความดัน เอาแบบฟอร์มไปยื่นที่เคาน์เตอร์
            ทางเจ้าหน้าที่จะให้บัตรคิวมาเพื่อรอเข้าห้องตรวจคัดกรองเบื้องต้น
            ขั้นตอนทั้งหมดสะดวกมากๆ
            มือใหม่ที่พกความขี้กลัวมาเต็มกระเป๋าอย่างเรายังเอาอยู่
            แต่ความซวยมันอยู่ตรงนี้ เราเพิ่งรู้ว่ามันต้อง ตรวจเลือดก่อน
            ซึ่งวิธีการตรวจก็ต้องใช้เข็มเล็กๆ เรียกไม่ถูกเหมือนกัน
            ทิ่มเข้าไปที่ปลายนิ้ว จังหวะนั้นโคตรอยากเดินออกไป แต่อีโก้ มันค้ำคอ
            บวกกับรู้สึกอยากเอาชนะตัวเอง เอาจริงๆ
            ก็จำความรู้สึกไม่ค่อยได้แล้วว่าเจ็บมั้ย เพราะมันเกิดขึ้นเร็วมาก
            รู้ตัวอีกทีก็ได้ ยาบำรุงเลือดมาแล้ว
            ต่อไปก็รอพบหมอซักประวัติเพื่อความแน่ใจอีกรอบว่าเราพร้อมบริจาคแล้วจริงๆ
            จากนั้นก็เดินขึ้นบันไดเลื่อนไปรอ หน้าห้องเชือด
            พอถึงคิวเจ้าหน้าที่ก็จะเรียกเข้าไป ข้างในสะอาดมาก มีกลิ่นคล้ายๆ
            เวลาไปโรงพยาบาล เก้าอี้เป็นแบบยกขาสูงขึ้นหน่อย
            สักพักเจ้าหน้าที่ก็จะโผล่มาพร้อมถาดอุปกรณ์
            พอเห็นเข็มของจริงเท่านั้นแหละ น้ำตาคลอนำหนึ่ง
            จังหวะที่เขาแทงลงไปคือไหลพราก แต่ร้องเงียบๆ นะ เดี๋ยวเจ้าหน้าที่ตกใจ
            (หัวเราะ) ความรู้สึกคือตึงๆ ที่แขน
            ระหว่างนั้นก็ต้องบีบให้เลือดมันไหลเข้าถุงไปด้วย ใจนึงก็คิด
            ว่ามาทำอะไรวะเนี่ย โคตรเจ็บ แต่อีกใจก็โคตรสะใจ นี่สิวะชีวิต
            มันต้องรู้สึกแบบนี้พอเลือดเต็มถุงแล้วก็ถอนเข็มออก พักสิบนาทีดูอาการ
            แล้วก็ไปกินขนมเพิ่มพลังในห้องฝั่งตรงข้าม โอวัลตินโคตรหวาน
            (เน้นเสียง) แต่วันที่ผ่านความเจ็บปวดอย่างสาหัสมาได้ เราว่ามันดี
            ต่อใจจริงๆ แม้ตอนแรกเรามาบริจาคเพราะความเบื่อ อยากเอาชนะตัวเองด้วย
            แต่พอได้อ่านพวกใบปลิวหรือแผ่นพับของสภากาชาด
            เลยได้รู้เรื่องความสำคัญของเลือดเยอะขึ้น ก็รู้สึกภูมิใจขึ้นมา
            เหมือนได้ช่วยเหลือคนจริงๆ เราว่ามันคล้ายๆ
            โควิดเหมือนกันนะที่ไม่รู้ว่า
            ปัญหาการขาดเลือดมันจะมาถึงตัวเราหรือครอบครัวของเราเมื่อไหร่
            (นิ่งคิด) เราคิดว่าถ้ามีโอกาสหรือไม่ติดขัดอะไร ก็จะมาบริจาคเลือด
            ไปเรื่อยๆ เท่าที่ร่างกายพร้อมแหละ”
          </p>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Blog;
