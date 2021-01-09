import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
import { connect } from "react-redux";
import ThongTinDatGhe from "../../../components/ThongTinDatGhe";
import danhSachGhe from "../../../data/danhSachGhe.json";
import HangGhe from "../../../components/HangGhe";
import "./css/BaiTapBookingTicket.css";

export default class index extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe,index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} thuTuHang={index}/>
        </div>
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
                Màng hình
                {this.renderHangGhe()}
              </div>
            </div>
            
            <div className="col-4 text-center  ">
              <h1 className="text-warning font-weight-bolder display-4 mt-5">
                DANH SÁCH CHỌN
              </h1>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
