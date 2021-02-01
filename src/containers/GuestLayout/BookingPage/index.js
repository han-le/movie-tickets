import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
import { connect } from "react-redux";
import ThongTinDatGhe from "../../../components/ThongTinDatGhe";
import danhSachGhe from "../../../data/danhSachGhe.json";
import HangGhe from "../../../components/HangGhe";
import "./css/BookingTicket.css";

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
      <div className="ticket-booking">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="text-success font-weight-bolder display-4">
                ĐẶT VÉ XEM PHIM
              </h1>{" "}
              <div className="mt-5 row justify-content-center align-items-center">
                <div className="screen" />
              </div>
              <div className="screen-info">
                <span className="screen-text">Screen</span>
                {this.renderHangGhe()}
              </div>
              <div className="seat-description-wrap">
                <div className="seat-description">
                  <span className="dot reserved" />
                  <span className="">Reserved</span>
                  <span className="dot selected" />
                  <span className="">Selected</span>
                  <span className="dot available" />
                  <span className="">Available</span>
                </div>
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
