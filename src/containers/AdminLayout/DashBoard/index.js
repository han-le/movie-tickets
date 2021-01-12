import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Tabs, Radio } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import UserManagement from "../../../components/UserManagement/user-management";
import MovieManagement from "../../../components/MovieManagement/movie-management";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
    };
  }


  render() {
    const { mode } = this.state;
    return (
      <div className="dashboard__wrap">
        <Tabs defaultActiveKey="1" tabPosition={mode}>
          <TabPane id="han" tab={`User Management`} key={1}>
            <UserManagement />
          </TabPane>

          <TabPane tab={`Movie Management`} key={2}>
            <MovieManagement />
          </TabPane>
        </Tabs>
      </div>
    );
  }

}
