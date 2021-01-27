import React, {Component} from 'react';
import {Button, Space, Table} from "antd";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import {actNowPlayingMovieAPI} from "../../containers/GuestLayout/HomePage/modules/actions";
import { connect } from "react-redux";


class MovieManagement extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.movieListAPI()
    }

    columns = [
        {
            title: 'Title',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
        },
        {
            title: 'Code',
            dataIndex: 'biDanh',
            key: 'biDanh',
        },

        {
            title: 'Poster',
            key: 'hinhAnh',
            dataIndex: 'hinhAnh',
            render:  (image) => <img src={image} width={45} height={45} alt="poster" />
        },
        {
            title: 'Trailer',
            key: 'trailer',
            dataIndex: 'trailer',
            render: (trailer) => <a href={trailer}>Link</a>
        },
        {
            title: 'Description',
            dataIndex: 'moTa',
            key: 'moTa',
        },
        {
            title: 'Released date',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
        },
        {
            title: 'Ratings',
            dataIndex: 'danhGia',
            key: 'danhGia',
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
                            <h2 className="title">Movie Management</h2>
                        </div>
                        <div className="card__header-actions">
                            <Search />

                            <Link to={"/dashboard/add-movie"} className={"add-btn btn-shadow"} >
                                <span style={{marginRight: 9}}>ADD MOVIE </span>
                                <i className="fa fa-plus" />
                            </Link>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__body-wrap">
                            <Table columns={this.columns} dataSource={this.props.movieList} style={{border: '1px solid #f0f0f0'}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.listNowPlayingReducer.loading,
        movieList: state.listNowPlayingReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        movieListAPI: () => {
            dispatch(actNowPlayingMovieAPI());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieManagement);