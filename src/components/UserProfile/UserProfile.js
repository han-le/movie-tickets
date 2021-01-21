import React, {Component} from 'react';
import {Button, Col, Row, Card } from 'antd';
import "./user-profile.css";

class UserProfile extends Component {

    render() {
        return (
            <div className="profile-container">
                <div className="profile-content">
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} style={{margin: 32}}>
                        <Col className="gutter-row" span={10}>
                            <div className="profile-card">
                                <Card title="User Information" bordered={false}>
                                    <table className="">
                                        <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td>Han Le</td>
                                        </tr>
                                        <tr>
                                            <td>Username:</td>
                                            <td>mimi</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>mimi@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Phone number:</td>
                                            <td>354325435</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Card>
                                <div className="text-center">
                                    <Button type="primary">Edit</Button>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={14}>
                            <div className="profile-card">
                                <Card title="History" bordered={false}>
                                    Nothing to show
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default UserProfile;