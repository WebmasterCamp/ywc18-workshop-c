import { Row, Col, Space, Typography } from "antd";
const { Title, Text } = Typography;

const bloodRequireData = [
  {
    type: "A",
    requiredUnitPerMonth: 12200,
    aqquiredUnit: 2612,
    requiredUnit: 9588,
  },
  {
    type: "B",
    requiredUnitPerMonth: 18300,
    aqquiredUnit: 4433,
    requiredUnit: 13867,
  },
  {
    type: "O",
    requiredUnitPerMonth: 24400,
    aqquiredUnit: 5147,
    requiredUnit: 19253,
  },
  {
    type: "AB",
    requiredUnitPerMonth: 6100,
    aqquiredUnit: 1132,
    requiredUnit: 4968,
  },
];

const BloodRequire = () => {
  return (
    <div className="max-w-screen-xl m-auto bg-white rounded-xl shadow-xl p-5 ">
      <Title level={2}>ปริมาณเลือดที่ขาดรายวัน</Title>
      <Text>ข้อมูล ณ วันที่ 15 สิงหาคม 2564</Text>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {bloodRequireData.map((bloodRequire) => {
          return (
            <RequireCard bloodRequire={bloodRequire} key={bloodRequire.type} />
          );
        })}
      </Row>
    </div>
  );
};

const RequireCard = (props) => {
  const { bloodRequire } = props;
  const { type, requiredUnitPerMonth } = bloodRequire;
  return (
    <Col className="gutter-row" span={6}>
      <Space>
        <Title>{type}</Title>
        <Space direction="vertical">
          <Text>ความต้องการโลหิต</Text>
          <Title level={4} style={{ margin: 0 }}>
            {requiredUnitPerMonth} ยูนิต/เดือน
          </Title>
        </Space>
      </Space>
    </Col>
  );
};

export default BloodRequire;
