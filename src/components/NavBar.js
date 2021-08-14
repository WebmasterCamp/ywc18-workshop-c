import { default as Logo } from "../assets/svg/logo.svg";
import { Button, Layout, Typography } from "antd";
import { user } from "../utilities/constants";

const { Header } = Layout;
const { Link } = Typography;

const NavBar = () => {
  return (
    <Header className="mb-12">
      <div className="max-w-screen-xl m-auto">
        <div className="flex justify-between">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="logo" />
          </a>
          <div className="flex items-center">
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
      className="ml-10 flex items-center"
      type="default"
      size="large"
      shape="round"
      icon={
        <span
          className="bg-no-repeat bg-center bg-primary-200 bg-cover rounded-full h-8 w-8 mr-2 border-px"
          style={{ backgroundImage: `url(${user.picture})` }}
        />
      }
    >
      {user.username}
    </Button>
  );
};

export default NavBar;
