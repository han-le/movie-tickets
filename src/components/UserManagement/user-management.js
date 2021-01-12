import React, {Component} from 'react';
import { Table, Tag, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import Search from "../Search/search";
import { SearchOutlined } from '@ant-design/icons';


class UserManagement extends Component {



    columns = [
        //Column Seq
        {
            title: 'No.',
            dataIndex: '',
            key: '',
        },

        //Column Username
        {
            title: 'Username',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },

        //Column Full name
        {
            title: 'Full Name',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },

        //Column Email
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        //Column Phone number
        {
            title: 'Phone number',
            dataIndex: 'soDt',
            key: 'soDt',
        },

        //Column Password
        {
            title: 'Password',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },

        //Column Action
        {
            title: '',
            key: 'action',
            render: () => (
                <Space>
                    <Button type="primary" shape="circle"><i className="fa fa-plus" /></Button>
                    <Button shape="circle"><i className="fa fa-edit" /></Button>
                    <Button type="primary" danger shape="circle"><i className="fa fa-trash" /></Button>

                </Space>
            ),
        },
    ];

    //Array of data
    data = [
        {
            taiKhoan: "AAADDĐ",
            hoTen: "Trần Minh phúCs",
            email: "as2aagosv2@gmail.com",
            soDt: "0379741460",
            matKhau: "123123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "admin1210",
            hoTen: "admin",
            email: "admin",
            soDt: "0122906666999",
            matKhau: "admin",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "admin994",
            hoTen: "hai",
            email: "123@123",
            soDt: "123",
            matKhau: "123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "asljncsljncsa",
            hoTen: "acsacsacsa",
            email: "ccsacsasac@gmail.com",
            soDt: "232121214214",
            matKhau: "sacsacsc",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "demo",
            hoTen: "demo",
            email: "a@gmail.com",
            soDt: "646",
            matKhau: "demo",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "dinhnhan123",
            hoTen: "Đỗ Đình Nhân",
            email: "dodinhnhanabc@gmail.com",
            soDt: "0969103125",
            matKhau: "123123123",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "AAADDĐ",
            hoTen: "Trần Minh phúCs",
            email: "as2aagosv2@gmail.com",
            soDt: "0379741460",
            matKhau: "123123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "admin1210",
            hoTen: "admin",
            email: "admin",
            soDt: "0122906666999",
            matKhau: "admin",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "admin994",
            hoTen: "hai",
            email: "123@123",
            soDt: "123",
            matKhau: "123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "asljncsljncsa",
            hoTen: "acsacsacsa",
            email: "ccsacsasac@gmail.com",
            soDt: "232121214214",
            matKhau: "sacsacsc",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "demo",
            hoTen: "demo",
            email: "a@gmail.com",
            soDt: "646",
            matKhau: "demo",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "dinhnhan123",
            hoTen: "Đỗ Đình Nhân",
            email: "dodinhnhanabc@gmail.com",
            soDt: "0969103125",
            matKhau: "123123123",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "AAADDĐ",
            hoTen: "Trần Minh phúCs",
            email: "as2aagosv2@gmail.com",
            soDt: "0379741460",
            matKhau: "123123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "admin1210",
            hoTen: "admin",
            email: "admin",
            soDt: "0122906666999",
            matKhau: "admin",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "admin994",
            hoTen: "hai",
            email: "123@123",
            soDt: "123",
            matKhau: "123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "asljncsljncsa",
            hoTen: "acsacsacsa",
            email: "ccsacsasac@gmail.com",
            soDt: "232121214214",
            matKhau: "sacsacsc",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "demo",
            hoTen: "demo",
            email: "a@gmail.com",
            soDt: "646",
            matKhau: "demo",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "dinhnhan123",
            hoTen: "Đỗ Đình Nhân",
            email: "dodinhnhanabc@gmail.com",
            soDt: "0969103125",
            matKhau: "123123123",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "AAADDĐ",
            hoTen: "Trần Minh phúCs",
            email: "as2aagosv2@gmail.com",
            soDt: "0379741460",
            matKhau: "123123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "admin1210",
            hoTen: "admin",
            email: "admin",
            soDt: "0122906666999",
            matKhau: "admin",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "admin994",
            hoTen: "hai",
            email: "123@123",
            soDt: "123",
            matKhau: "123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "asljncsljncsa",
            hoTen: "acsacsacsa",
            email: "ccsacsasac@gmail.com",
            soDt: "232121214214",
            matKhau: "sacsacsc",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "demo",
            hoTen: "demo",
            email: "a@gmail.com",
            soDt: "646",
            matKhau: "demo",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "dinhnhan123",
            hoTen: "Đỗ Đình Nhân",
            email: "dodinhnhanabc@gmail.com",
            soDt: "0969103125",
            matKhau: "123123123",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "AAADDĐ",
            hoTen: "Trần Minh phúCs",
            email: "as2aagosv2@gmail.com",
            soDt: "0379741460",
            matKhau: "123123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "admin1210",
            hoTen: "admin",
            email: "admin",
            soDt: "0122906666999",
            matKhau: "admin",
            maLoaiNguoiDung: "QuanTri"
        },
        {
            taiKhoan: "admin994",
            hoTen: "hai",
            email: "123@123",
            soDt: "123",
            matKhau: "123",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "asljncsljncsa",
            hoTen: "acsacsacsa",
            email: "ccsacsasac@gmail.com",
            soDt: "232121214214",
            matKhau: "sacsacsc",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "demo",
            hoTen: "demo",
            email: "a@gmail.com",
            soDt: "646",
            matKhau: "demo",
            maLoaiNguoiDung: "KhachHang"
        },
        {
            taiKhoan: "dinhnhan123",
            hoTen: "Đỗ Đình Nhân",
            email: "dodinhnhanabc@gmail.com",
            soDt: "0969103125",
            matKhau: "123123123",
            maLoaiNguoiDung: "QuanTri"
        },
    ];

    render() {
        return (
            <div>
                <h1>User Management</h1>
                <Button type="primary">ADD USER <i className="fa fa-plus" /></Button>
                <Search />
                <Table columns={this.columns} dataSource={this.data} />

            </div>
        );
    }
}

export default UserManagement;
