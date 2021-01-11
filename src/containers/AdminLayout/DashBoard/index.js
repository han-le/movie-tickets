import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Tabs, Radio } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

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
      <div>

        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 150 }}>
          <TabPane tab={`User Management`} key={1}>
            a
          </TabPane>

          <TabPane tab={`Movie Management`} key={2}>
            b
          </TabPane>
        </Tabs>
      </div>
    );
  }

}
