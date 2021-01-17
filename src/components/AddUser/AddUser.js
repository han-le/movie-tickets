import React, { useState } from 'react';


import {
    Form,
    Input,
    Select,
    Button
} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const AddUser = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <div className="card__header-title">
                <h2 className="title">Add a User</h2>
            </div>
            <Form

                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
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

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};

export default AddUser;