import { Card, Space, Typography, Divider } from 'antd';
const { Title, Text } = Typography;

const bloodRequireData = [
  {
    type: 'A',
    requiredUnitPerMonth: 12200,
    aqquiredUnit: 2612,
    requiredUnit: 9588,
  },
  {
    type: 'B',
    requiredUnitPerMonth: 18300,
    aqquiredUnit: 4433,
    requiredUnit: 13867,
  },
  {
    type: 'O',
    requiredUnitPerMonth: 24400,
    aqquiredUnit: 5147,
    requiredUnit: 19253,
  },
  {
    type: 'AB',
    requiredUnitPerMonth: 6100,
    aqquiredUnit: 1132,
    requiredUnit: 4968,
  },
];

const BloodRequire = () => {
  return (
    <Space>
      {bloodRequireData.map(bloodRequire => {
        return (
          <RequireCard bloodRequire={bloodRequire} key={bloodRequire.type} />
        );
      })}
    </Space>
  );
}

const RequireCard = props => {
  const { bloodRequire } = props;
  const { type, requiredUnitPerMonth, aqquiredUnit, requiredUnit } =
    bloodRequire;
  return (
    <Card>
      <Title>{type}</Title>
      <Text>ความต้องการโลหิต {requiredUnitPerMonth} ยูนิต/เดือน</Text>
      <Divider />
      <Text>โลหิตที่ได้รับ {aqquiredUnit} ยูนิต</Text>
      <Divider />
      <Text>ยังคงต้องการ {requiredUnit} ยูนิต</Text>
    </Card>
  );
};

export default BloodRequire;