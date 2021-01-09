import React, { Component } from "react";
import { connect } from "react-redux";
import {actAddGheRequest} from "./../../containers/GuestLayout/BookingPage/modules/action"


class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDat = "";
      if (ghe.daDat) {
        cssGheDat = "gheDuocChon";
      }

      let cssGheChon = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheChon = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disable={ghe.daDat}
          className={`ghe text-light ${cssGheDat} ${cssGheChon}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber font-weight-bolder text-light">
          {hang.soGhe}
        </button>
      );
    });
  };
  renderHangNgang = () => {
    if (this.props.thuTuHang === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light font-weight-bolder text-left ml-5 mt-2 "
        style={{ fontSize: "25px" }}
      >
        {this.renderHangNgang()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.addGheReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(actAddGheRequest(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
