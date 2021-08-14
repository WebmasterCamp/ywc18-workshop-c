import { default as Logo } from '../assets/svg/logo.svg';
import { UserOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
const { Header } = Layout;
const { Link } = Typography;

const NavBar = () => {
  return (
    <Header className="mb-12">
      <div className="max-w-screen-xl m-auto">
        <div className="flex">
          <img src={Logo} alt="logo"/>
          <div className="ml-auto">
            <Link>เกี่ยวกับเรา</Link>
            <UserBtn />
          </div>
        </div>
      </div>
    </Header>
  );
};

const UserBtn = () => {
  return (
    <Button
      className="ml-10"
      type="primary"
      shape="round"
      icon={<UserOutlined />}
    >
      {' '}
      teamcywc
    </Button>
  );
};

export default NavBar;
