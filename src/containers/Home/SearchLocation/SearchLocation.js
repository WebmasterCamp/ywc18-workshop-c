import { Button, Typography, Input, Select } from 'antd';
const { Title } = Typography;
const { Option } = Select;

const SearchLocation = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-12">
      <div className="rounded-2xl shadow-md h-auto bg-white  p-8">
        <Title level={3}>ค้นหาจุดบริจาค</Title>
        <Input.Group compact>
          <Select
            size="large"
            style={{ width: 'calc(100% - 100px)' }}
            defaultValue="select"
          >
              <Option value="select" disabled>เลือกเขตที่ต้องการค้นหา</Option>
            <Option value="Ladkrabang">ลาดกระบัง</Option>
            <Option value="Ladprao">ลาดพร้าว</Option>
          </Select>
          <Button clas size="large" style={{ width: '100px' }}>
            ค้นหา
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default SearchLocation;
