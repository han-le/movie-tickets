import React, {Component} from 'react';
import { Descriptions } from 'antd';

class UserInformation extends Component {
    render() {
        return (
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="Email">test email</Descriptions.Item>
                <Descriptions.Item label="Username">test username</Descriptions.Item>
                <Descriptions.Item label="Name">test name</Descriptions.Item>
                <Descriptions.Item label="Password">test password</Descriptions.Item>
            </Descriptions>
        );
    }
}

export default UserInformation;