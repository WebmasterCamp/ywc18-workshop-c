import { default as Logo } from '../assets/svg/logo.svg';
import { Button, Layout } from 'antd';
import { user } from '../utilities/constants';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className="mb-12">
      <div className="max-w-screen-xl m-auto">
        <div className="flex">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center ml-auto">
            <Link to="/about" className="flex whitespace-nowrap">
              เกี่ยวกับเรา
            </Link>
            <div className="hidden md:inline">
              <UserBtn />
            </div>
            <div className=" md:hidden">
              <UserMiniBtn />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

const UserBtn = () => {
  return (
    <Link to="/profile" className="flex items-center">
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
    </Link>
  );
};

const UserMiniBtn = () => {
  return (
    <Link to="/profile" className="flex ml-5">
      <span
        className="bg-no-repeat bg-center bg-primary-200 bg-cover rounded-full h-8 w-8 mr-2 border-px"
        style={{ backgroundImage: `url(${user.picture})` }}
      />
    </Link>
  );
};

export default NavBar;
