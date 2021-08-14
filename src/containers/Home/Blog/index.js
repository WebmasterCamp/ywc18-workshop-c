import React from "react";
import Banner from "../../../assets/blogbanner_1.png";
import Banner2 from "../../../assets/blogbanner_2.jpg";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12 ">
      <p className="font-semibold text-xl mb-4">บทความ</p>
      <Row gutter={32}>
        <Col span={12}>
          <Link to="/blog/1">
            <div className="rounded-2xl shadow-md h-auto bg-white ">
              <div
                className="bg-no-repeat bg-center bg-primary-200 bg-cover h-52 rounded-xl mb-4"
                style={{ backgroundImage: `url(${Banner})` }}
              />
              <div className="block py-4 px-8">
                <p className="text-xl font-semibold mb-4">
                  รีวิวบริจาคเลือดครั้งแรก! จากมนุษย์ที่กลัวเข็มสุดหัวใจ
                </p>
                <p
                  className="text-base font-regular"
                  style={{ color: "#838383" }}
                >
                  หนึ่งในอุปสรรคสำคัญที่ขวางกั้นระหว่างเรากับการบริจาคเลือดคงหนีไม่พ้น
                  ‘อาการกลัวเข็ม’ ซึ่งขอบอกเลยว่าเป็นเรื่องปกติมากๆ
                  โดยอาการนี้มีชื่อโรคอย่าง เป็นทางการว่า ‘Trypanophobia’ หรือ
                  ‘Needle Phobia’ นั่นเอง ...
                </p>
              </div>
            </div>
          </Link>
        </Col>
        <Col span={12}>
          <Link to="/blog/2">
            <div className="rounded-2xl shadow-md h-auto bg-white ">
              <div
                className="bg-no-repeat bg-center bg-primary-200 bg-cover h-52 rounded-xl mb-4"
                style={{ backgroundImage: `url(${Banner2})` }}
              />
              <div className="block py-4 px-8">
                <p className="text-xl font-semibold mb-4">
                  เลือดกรุ๊ปไหนกินอะไรดี
                </p>
                <p
                  className="text-base font-regular"
                  style={{ color: "#838383" }}
                >
                  ทุกคนเคยสงสัยไหมว่ากรุ๊ปเลือดสามารถบอกอะไรเราได้บ้าง?
                  ทุกคนอาจจะเคยเห็น การบอกนิสัยจากกรุ๊ปเลือด
                  การทำนายดวงจากกรุ๊ปเลือด
                  เเล้วกรุ๊ปเลือดยังสามารถบอกอะไรเราได้อีกบ้างนะ
                  มีหนังสือเล่นหนึ่ง ...
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
