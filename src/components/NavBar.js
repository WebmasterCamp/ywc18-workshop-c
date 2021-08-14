import { default as Logo } from "../assets/svg/logo.svg";
import { Button, Layout } from "antd";
import { user } from "../utilities/constants";
import { Link } from "react-router-dom";
const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className="mb-12">
      <div className="max-w-screen-xl m-auto">
        <div className="flex justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center">
            <Link to="/about">เกี่ยวกับเรา</Link>
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
      onClick={() => {}}
    >
      {user.username}
    </Button>
  );
};

export default NavBar;
