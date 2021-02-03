import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actBookGhe } from "./../../containers/GuestLayout/BookingPage/modules/action";

class ThongTinDatGhe extends Component {
  constructor(props) {
    super(props);
  }

  tongTien = (data) => {
    let total = 0;
    data.map((gheDangDat, index) => {
      return (total += gheDangDat.giaVe);
    });
    return <span>{total} đ</span>;
  };

  checkOut = () => {
    this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      let data = {
        maLichChieu: this.props.maLichChieu,
        danhSachVe: [
          {
            maGhe: gheDangDat.maGhe,
            giaVe: gheDangDat.giaVe,
          },
        ],
        taiKhoanNguoiDung: localStorage.getItem("UserAccount").replace(/[^\w\s]/gi, ""),
      };
      this.props.checkOut(data.maLichChieu, data.danhSachVe, data.taiKhoanNguoiDung);
    });
  };

  render() {
    return (
      <div>
        <div className="mt-5 row">
          <div className="col-sm-7 col-xs-7">
            <span>Ghế : </span>
            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <Fragment key={index}>
                  <span className="mr-1">{gheDangDat.tenGhe}</span>
                  {(index + 1) % 5 === 0 && <br />}
                </Fragment>
              );
            })}
          </div>
          <div className="col-sm-5 col-xs-5">
            {this.tongTien(this.props.danhSachGheDangDat)}
          </div>
        </div>
        <div className="mt-5">
          <button
            className="w-100"
            onClick={() => {
              this.checkOut();
            }}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.addGheReducer.danhSachGheDangChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOut: (maLichChieu, danhSachVe, taiKhoanNguoiDung) => {
      dispatch(actBookGhe(maLichChieu, danhSachVe, taiKhoanNguoiDung));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
