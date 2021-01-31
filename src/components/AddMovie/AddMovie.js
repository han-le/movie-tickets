import React, {Component} from 'react';
import {Button} from "antd";
import {actAddMovieAPI} from "./modules/actions";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";

class AddMovie extends Component {

    //Lien quan toi form phai co ham khoi tao
    constructor(props) {
        super(props);
        this.state = {
            // "maPhim": 0,
            "tenPhim": "",
            // "biDanh": "",
            "trailer": "",
            "hinhAnh": "",
            "moTa": "",
            "maNhom": "GP07",
            "ngayKhoiChieu": "",
            "danhGia": ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMovie(this.state);
    }

    //Lay du lieu nguoi dung nhap vao va day vao State
    handleOnChange = (event) => {
        const {name, value} = event.target;

        let formVal = {};
        formVal[name] = value;

        let obj = Object.assign({}, this.state, formVal);

        this.setState(obj);
    }

    handleFileChange = (e) => {
        const {name, files} = e.target;

        let formVal = {};
        formVal[name] = files[0];

        let obj = Object.assign({}, this.state, formVal);

        this.setState(obj);
    }

    render() {
        return (
            <div className={"dashboard__content"}>
                <div className="dashboard__card">
                    <div className="card__header">
                        <div className="card__header-title">
                            <h2 className="title">Add a Movie</h2>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__body-wrap">

                        {/*    Form*/}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">

                                    <div className="form-group col-md-6">
                                        <label htmlFor="tenPhim">Name</label>
                                        <input type="text" className="form-control" id="" name="tenPhim" onChange={this.handleOnChange}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="danhGia">Rating</label>
                                        <input type="text" className="form-control" name="danhGia" onChange={this.handleOnChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="trailer">Trailer's link</label>
                                        <input type="text" className="form-control" name="trailer" onChange={this.handleOnChange} />
                                    </div>
                                </div>

                                <div className="form-row">

                                    <div className="form-group col-md-4">
                                        <label htmlFor="ngayKhoiChieu">Released date</label>
                                        <input type="date" className="form-control" id="" name="ngayKhoiChieu" onChange={this.handleOnChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="moTa">Description</label>
                                    <textarea className="form-control" id="" rows="3" name="moTa" onChange={this.handleOnChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Poster</label>
                                    <input type="file" className="form-control-file" id="" name="hinhAnh" onChange={this.handleFileChange} />
                                </div>
                                <div className="btn-submit">
                                    <button>Submit</button>
                                    {/*<Button type="primary">Submit</Button>*/}
                                </div>
                            </form>
                        {/*=======Form ======= */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//Lay du lieu tren state ve
const mapStateToProps = (state) => {
    return {
        loading: state.addMovieReducer.loading,
        err: state.addMovieReducer.err
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (movie) => {
            return dispatch(actAddMovieAPI(movie))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMovie);