import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actAddGheFailed } from "./../../containers/GuestLayout/BookingPage/modules/action";

class ThongTinDatGhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maLichChieu: "",
      danhSachVe: [
        {
          maGhe: "",
          giaVe: "",
        },
      ],
      taiKhoanNguoiDung: "",
    };
  }

  tongTien = (data) => {
    let total = 0;
    data.map((gheDangDat, index) => {
      return (total += gheDangDat.giaVe);
    });
    return <span>{total} đ</span>;
  };

  checkOut = () => {
    // console.log("-----------");
    // console.log(this.props.danhSachGheDangDat);
    
      this.props.danhSachGheDangDat.map((gheDangDat, index) => {
        this.setState({
          maLichChieu: this.props.maLichChieu,
          danhSachVe: [
            {
              maGhe: gheDangDat.maGhe,
              giaVe: gheDangDat.giaVe,
            },
          ],
          taiKhoanNguoiDung: localStorage.getItem("UserAccount"),
        });
        this.props.checkOut(this.state);
        // console.log("======");
        // console.log(this.props.maLichChieu);
        // console.log(gheDangDat.maGhe);
        // console.log(gheDangDat.giaVe);
        // console.log(localStorage.getItem("UserAccount"))
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

const mapDispatchToProps = (dispath) => {
  return {
    huyGhe: (soGhe) => {
      dispatchEvent(actAddGheFailed(soGhe));
    },
    checkOut: (data) => {
      // dispatchEvent(actAddGheFailed(data));
      console.log(data);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
