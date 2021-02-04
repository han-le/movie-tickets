import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actAddGheApi } from "./modules/action";
import ThongTinDatGhe from "../../../components/ThongTinDatGhe";
import danhSachGhe from "../../../data/danhSachGhe.json";
import HangGhe from "../../../components/Ghe";
import "./css/BookingTicket.css";
import { Fragment } from "react";
import Ghe from "../../../components/Ghe";

class BookingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDetailMovie(this.props.match.params.id);
  }

  renderHangGhe2 = (danhSachGheDangDat) => {
    return danhSachGheDangDat.danhSachGhe?.map((item, index) => {
      return (
        <Fragment key={index}>
          <Ghe ghe={item} />
          {(index + 1) % 16 === 0 && <br />}
        </Fragment>
      );
    });
  };
  render() {
    if (localStorage.getItem("User") == null) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="ticket-booking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h3 className="">Choose your seat</h3>
                <div className="mt-5 row justify-content-center align-items-center">
                  <div className="screen"></div>
                </div>
                <div className="text-light mt-3" style={{ fontSize: "20px" }}>
                  {this.renderHangGhe2(this.props.danhSachGheDangDat)}
                </div>
                <div className="seat-description-wrap">
                  <span className="dot available" />
                  <span className="">Available</span>
                  <span className="dot reserved" />
                  <span className="">Reserved</span>
                  <span className="dot selected" />
                  <span className="">Selected</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="ticket-wrap theme-background">
                  <ThongTinDatGhe
                    movieInfo={this.props.thongTinPhim}
                    maLichChieu={this.props.match.params.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.addGheReducer.danhSachGheDangDat,
    thongTinPhim: state.addGheReducer.thongTinPhim,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(actAddGheApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(BookingPage);
