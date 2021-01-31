import React, { Component } from 'react';
import {Drawer, Form, Button, Col, Row, Input,} from 'antd';
import { actMovieUpdateAPI } from "./modules/action";
import { connect } from "react-redux";
import formatDate from "../GlobalFunctions/GlobalFunctions";


class MovieEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // maPhim: "",
            tenPhim: "",
            // biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP07",
            ngayKhoiChieu: "",
            danhGia: "",
            visible: false
        };
    }

    //Submit button (Edit Movie)
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify({name: "Old form: ", value: this.props.account}));
        console.log(JSON.stringify({name: "New form: ", value: this.state}));

        let make = Object.assign({}, this.props.account, this.state);
        console.log(JSON.stringify({name: "Merged Form: ", value: make}));
        this.props.updateMovie(make);
    }

    //Upload image
    handleFileChange = (e) => {
        const {name, files} = e.target;
        let formVal = {};
        formVal[name] = files[0];
        let obj = Object.assign({}, this.state, formVal);
        this.setState(obj);
    }
    //
    // onFinish = (values) => {
    //     this.onClose()
    //     this.setState({
    //         tenPhim: values.tenPhim,
    //         trailer: values.trailer,
    //         hinhAnh: values.hinhAnh,
    //         moTa: values.moTa,
    //         // maNhom: "GP07",
    //         ngayKhoiChieu: formatDate(values.ngayKhoiChieu),
    //         danhGia: values.danhGia,
    //     })
    //
    // };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
        console.log("----- State ------")
        console.log(this.state);
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    //Get input from user => set State
    handleOnChange = (event) => {
        const {name, value} = event.target;
        let formVal = {};
        formVal[name] = value;
        let obj = Object.assign({}, this.state, formVal);
        this.setState(obj);
    }

    render() {
        let objMovie = this.props.account;
        console.log("---------Props: account --------");
        console.log(objMovie)
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
                        <div style={{textAlign: 'right'}}/>
                    }
                >
                    <div className={"dashboard__content"}>
                        <div className="dashboard__card">
                            <div className="card__header">
                                <div className="card__header-title">
                                    <h2 className="title">Fill in new information</h2>
                                </div>
                            </div>
                            <div className="card__body">
                                <div className="card__body-wrap">

                                    {/*    Form*/}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="tenPhim">Name</label>
                                                <input type="text" className="form-control" defaultValue={objMovie.tenPhim} name="tenPhim" onChange={this.handleOnChange}/>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="danhGia">Rating</label>
                                                <input type="text" className="form-control" defaultValue={objMovie.danhGia} name="danhGia" onChange={this.handleOnChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="trailer">Trailer's link</label>
                                                <input type="text" className="form-control" defaultValue={objMovie.trailer} name="trailer" onChange={this.handleOnChange} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="ngayKhoiChieu">Released date</label>
                                                <input type="date" className="form-control" defaultValue={objMovie.ngayKhoiChieu} name="ngayKhoiChieu" onChange={this.handleOnChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="moTa">Description</label>
                                            <textarea className="form-control" defaultValue={objMovie.moTa} rows="3" name="moTa" onChange={this.handleOnChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="hinhAnh">Poster</label>
                                            <input type="file" className="form-control-file" name="hinhAnh" onChange={this.handleFileChange} />
                                        </div>
                                        <div className="btn-submit">
                                            <button className={"btn btn-primary"}>Submit</button>
                                        </div>
                                    </form>
                                    {/*=======Form ======= */}
                                </div>
                            </div>
                        </div>
                    </div>
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
            return dispatch(actMovieUpdateAPI(movie));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);