import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddGheApi } from "./modules/action";
import ThongTinDatGhe from "../../../components/ThongTinDatGhe";
import danhSachGhe from "../../../data/danhSachGhe.json";
import HangGhe from "../../../components/Ghe";
import "./css/BaiTapBookingTicket.css";
import { Fragment } from "react";
import Ghe from "../../../components/Ghe";

class BookingPage extends Component {
  componentDidMount() {
    this.props.getDetailMovie();
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
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
          backgroundSize: "100%",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="text-success font-weight-bolder display-4">
                ĐẶT VÉ XEM PHIM
              </h1>{" "}
              <div className="mt-5 row justify-content-center align-items-center">
                <div className="screen"></div>
              </div>
              <div className="text-light mt-3" style={{ fontSize: "20px" }}>
                <h2>Màn hình</h2>
                {this.renderHangGhe2(this.props.danhSachGheDangDat)}
              </div>
            </div>

            <div className="col-4 text-center   ">
              <h3>{this.props.thongTinPhim.tenPhim}</h3>
              <h3>{this.props.thongTinPhim.tenCumRap}</h3>
              <h3>{this.props.thongTinPhim.ngayChieu}</h3>
              <h3>{this.props.thongTinPhim.gioChieu}</h3>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
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
