import React, {Component} from 'react';
import {Button} from "antd";
import {actAddMovieAPI} from "./modules/actions";
import {connect} from "react-redux";

class AddMovie extends Component {

    //Lien quan toi form phai co ham khoi tao
    constructor(props) {
        super(props);
        this.state = {
            // "maPhim": 0,
            "tenPhim": "",
            "biDanh": "",
            "trailer": "",
            "hinhAnh": "",
            "moTa": "",
            "maNhom": "GP07",
            "ngayKhoiChieu": "25-01-2021",
            "danhGia": 9
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted");
        this.props.addMovie(this.state);
        console.log(this.props.addMovie(this.state))
    }

    //Lay du lieu nguoi dung nhap vao va day vao State
    handleOnChange = (event) => {
        const {name, value} = event.target;

        let formVal = {};
        formVal[name] = value;

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
                                        <label htmlFor="biDanh">Code</label>
                                        <input type="text" className="form-control" id="" name="biDanh" onChange={this.handleOnChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="trailer">Trailer's link</label>
                                        <input type="text" className="form-control" id="" name="trailer" onChange={this.handleOnChange} />
                                    </div>
                                </div>

                                <div className="form-row">

                                    <div className="form-group col-md-4">
                                        <label htmlFor="ngayKhoiChieu">Released date</label>
                                        <input type="date" className="form-control" id="" name="ngayKhoiChieu" onChange={this.handleOnChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleFormControlSelect1">Rating</label>
                                        <select className="form-control" id="" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="moTa">Description</label>
                                    <textarea className="form-control" id="" rows="3" name="moTa" onChange={this.handleOnChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Poster</label>
                                    <input type="file" className="form-control-file" id="" name="hinhAnh" onChange={this.handleOnChange} />
                                    
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
            dispatch(actAddMovieAPI(movie))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMovie);