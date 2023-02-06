import { Menu } from "antd";
import "./index.css";
import React from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  HomeOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Menu
          defaultSelectedKeys={[window.location.pathname]}
          onClick={({ key }) => {
            if (key === "sign-out") {
              //TODO, sign out feature here
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              label: "Home",
              icon: <HomeOutlined />,
              key: "/",
            },
            {
              label: "Dashboard",
              icon: <DashboardOutlined />,
              key: "/dashboard",
            },
            {
              label: "Users List",
              icon: <UnorderedListOutlined />,
              key: "/user-list",
              children: [
                {
                  label: "Active User",
                  key: "/active-user",
                },
                {
                  label: "Disabled User",
                  key: "/disabled-user",
                },
              ],
            },
            {
              label: "Profile",
              icon: <UserOutlined />,
              key: "/profile",
            },
            {
              label: "Sign out",
              icon: <PoweroffOutlined />,
              danger: true,
              key: "sign-out",
            },
          ]}
        ></Menu>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default SideMenu;
