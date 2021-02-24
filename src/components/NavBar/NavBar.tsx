import React from "react";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

interface IProps {
  selectedKeys: Array<string>;
}

const NavBar: React.FC<IProps> = ({ selectedKeys }) => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/Users">
          <NavLink to="/Users">
            <li>
              <UserOutlined />
              Users
            </li>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/Profile">
          <NavLink to="/Profile">
            <li>Profile</li>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/Dialogs">
          <NavLink to="/Dialogs">
            <li>Dialogs</li>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/Messages">
          <NavLink to="/Messages">
            <li>Messages</li>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/PageError">
          <NavLink to="/PageError">
            <li>PageError</li>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default NavBar;
