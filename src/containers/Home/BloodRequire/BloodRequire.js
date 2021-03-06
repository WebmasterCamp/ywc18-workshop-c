import { Row, Col, Space, Typography } from "antd";
import { default as BloodTypeA } from "../../../assets/svg/blood-type/BloodTypeA.svg";
import { default as BloodTypeB } from "../../../assets/svg/blood-type/BloodTypeB.svg";
import { default as BloodTypeO } from "../../../assets/svg/blood-type/BloodTypeO.svg";
import { default as BloodTypeAB } from "../../../assets/svg/blood-type/BloodTypeAB.svg";

const { Title, Text } = Typography;

const bloodRequireData = [
  {
    type: "A",
    requiredUnitPerMonth: 12200,
    aqquiredUnit: 2612,
    requiredUnit: 9588,
    logo: BloodTypeA,
  },
  {
    type: "B",
    requiredUnitPerMonth: 18300,
    aqquiredUnit: 4433,
    requiredUnit: 13867,
    logo: BloodTypeB,
  },
  {
    type: "O",
    requiredUnitPerMonth: 24400,
    aqquiredUnit: 5147,
    requiredUnit: 19253,
    logo: BloodTypeO,
  },
  {
    type: "AB",
    requiredUnitPerMonth: 6100,
    aqquiredUnit: 1132,
    requiredUnit: 4968,
    logo: BloodTypeAB,
  },
];

const BloodRequire = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
        <Row>
          <Col span={8}>
            <p className="text-base font-semibold mb-6">ปริมาณเลือดที่ขาดรายวัน</p>
          </Col>
          <Col span={8} offset={8}>
            <Text className="float-right" type="secondary">ข้อมูล ณ วันที่ 15 สิงหาคม 2564</Text>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {bloodRequireData.map((bloodRequire) => {
            return (
              <RequireCard
                bloodRequire={bloodRequire}
                key={bloodRequire.type}
              />
            );
          })}
        </Row>
      </div>
    </div>
  );
};

const RequireCard = props => {
  const { bloodRequire } = props;
  const { requiredUnit, logo } = bloodRequire;
  return (
    <Col className="gutter-row" span={6}>
      <Space>
        <img src={logo} alt="logo" />
        <Space direction="vertical" className="ml-5">
          <Text>ความต้องการโลหิต</Text>
          <Title level={4}>{requiredUnit} ยูนิต</Title>
        </Space>
      </Space>
    </Col>
  );
};

export default BloodRequire;
