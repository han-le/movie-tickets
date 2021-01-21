import React, { useState } from 'react';

import {
    Form,
    Input,
    Select,
    Button, Card} from 'antd';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const AddUser = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
            <div className="card-shadow" style={{width: 700, margin: '30px auto'}}>
                <Card title="Add a User" bordered={false}>
                    <Form
                        labelCol={{span: 12,}}
                        wrapperCol={{span: 24,}}
                        layout="vertical"
                        initialValues={{size: componentSize}}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >
                        <Form.Item label="Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Username">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            <Input />
                        </Form.Item>
                        <Form.Item label="User category">
                            <Select>
                                <Select.Option value="demo">Quan Tri</Select.Option>
                                <Select.Option value="demo">Khach Hang</Select.Option>
                            </Select>
                        </Form.Item>
                        <div className="text-center">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card>

            </div>


    );
};

export default AddUser;