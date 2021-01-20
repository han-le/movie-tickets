import React, {Component} from 'react';
import { Tabs } from 'antd';
import UserInformation from "../UserInformation/UserInformation";
const { TabPane } = Tabs;

class UserProfile extends Component {
    render() {
        return (
            <div className="">
                <Tabs defaultActiveKey="1" style={{ marginBottom: 32 }}>
                    <TabPane tab="Personal Information" key="1">
                        <UserInformation />
                    </TabPane>
                    <TabPane tab="Booking History" key="2">
                        Booking History
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default UserProfile;