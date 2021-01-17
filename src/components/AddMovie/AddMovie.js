import React, {Component} from 'react';
import {Button} from "antd";

class AddMovie extends Component {
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
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="maPhim">Movie ID</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="tenPhim">Name</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="biDanh">Code</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="trailer">Trailer's link</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                </div>

                                <div className="form-row">

                                    <div className="form-group col-md-4">
                                        <label htmlFor="ngayKhoiChieu">Released date</label>
                                        <input type="date" className="form-control" id="" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleFormControlSelect1">Rating</label>
                                        <select className="form-control" id="">
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
                                    <textarea className="form-control" id="" rows="3" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Poster</label>
                                    <input type="file" className="form-control-file" id="" />
                                </div>
                                <div className="btn-submit">
                                    <Button type="primary">Submit</Button>
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

export default AddMovie;