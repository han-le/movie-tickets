import React, {Component} from 'react';
import { Table, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import Search from "../Search/search";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actUserListAPI} from "./modules/actions";

class UserManagement extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Did mount")
        this.props.userListAPI();
    }

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
                    <Button shape="circle" style={{background: "#aff4f9", color: "#128f98", border: "none"}}><i className="fa fa-plus" /></Button>
                    <Button shape="circle" style={{background: "#e3c7ff", color: "#6f0dd0", border: "none"}}><i className="fas fa-pen" /></Button>
                    <Button shape="circle" style={{background: "#baf5c0", color: "#09a519", border: "none"}}><i className="fa fa-trash" /></Button>
                </Space>
            ),
        },
    ];

    render() {
        return (
            <div className={"dashboard__content"}>
                <div className="dashboard__card">
                    <div className="card__header">
                        <div className="card__header-title">
                            <h2 className="title">User Management</h2>
                        </div>
                        <div className="card__header-actions">
                            <Search />
                            <Link to={"/dashboard/add-user"} className={"add-btn btn-shadow"} >
                                <span style={{marginRight: 9}}>ADD USER </span>
                                <i className="fa fa-plus" />
                            </Link>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__body-wrap">
                            <Table columns={this.columns} dataSource={this.props.userList} style={{border: '1px solid #f0f0f0'}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state) => {
    return {
        loading: state.userListReducer.loading,
        userList: state.userListReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userListAPI: () => {
            dispatch(actUserListAPI())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserManagement);
