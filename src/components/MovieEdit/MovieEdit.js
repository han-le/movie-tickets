import React, { Component } from 'react';
import {Drawer, Form, Button, Col, Row, Input, Select, Space} from 'antd';
import { actMovieUpdateAPI } from "./modules/action";
import { connect } from "react-redux";
import formatDate from "../GlobalFunctions/GlobalFunctions";


class MovieEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maPhim: "",
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP07",
            ngayKhoiChieu: "",
            danhGia: "",
            visible: false
        };
    }
    onFinish = (values) => {
        this.onClose()
        this.setState({
            maPhim: values.maPhim,
            tenPhim: values.tenPhim,
            biDanh: values.biDanh,
            trailer: values.trailer,
            hinhAnh: values.hinhAnh,
            moTa: values.moTa,
            maNhom: "GP07",
            ngayKhoiChieu: formatDate(values.ngayKhoiChieu),
            danhGia: values.danhGia,
        })
        console.log("this.state =")
        console.log(this.state);
        let a = this.props.updateMovie(this.state);
        console.log("this.props.updateMovie(this.state) =")
        console.log(a)
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
        console.log(this.state)
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button shape="circle" style={{background: "#e3c7ff", color: "#6f0dd0", border: "none"}} onClick={this.showDrawer}>
                    <i className="fas fa-pen" /></Button>
                <Drawer

                    title="Update Movie Information"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark onFinish={(values) => { this.onFinish(values) }} on>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="tenPhim"
                                    label="Movie Title"
                                    initialValue={this.props.account.tenPhim}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.tenPhim} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="biDanh"
                                    label="Code"
                                    initialValue={this.props.account.biDanh}
                                >
                                    <Input defaultValue={this.props.account.biDanh} disabled={true} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="trailer"
                                    label="Trailer"
                                    initialValue={this.props.account.trailer}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.trailer} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="hinhAnh"
                                    label="Poster"
                                    initialValue={this.props.account.hinhAnh}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.hinhAnh} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="moTa"
                                    label="Description"
                                    initialValue={this.props.account.moTa}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.moTa} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="ngayKhoiChieu"
                                    label="Released date"
                                    initialValue={this.props.account.ngayKhoiChieu}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.ngayKhoiChieu} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="danhGia"
                                    label="Ratings"
                                    initialValue={this.props.account.danhGia}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.danhGia} />
                                </Form.Item>
                                <Form.Item
                                    name="maPhim"
                                    label="Movie ID"
                                    initialValue={this.props.account.maPhim}
                                    rules={[{ required: true, message: 'Please fulfill' }]}
                                >
                                    <Input defaultValue={this.props.account.maPhim} disabled={true} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                    Cancel
                                </Button>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorUpdate: state.updateMovieReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMovie: (movie) => {
            dispatch(actMovieUpdateAPI(movie));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);