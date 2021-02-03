import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actAddGheFailed } from "../../containers/GuestLayout/BookingPage/modules/action";
import "./CheckOutInfo.css"


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
    return <span>{total}</span>;
  };

  checkOut = () => {
    // console.log("-----------");
    // console.log(this.props.danhSachGheDangDat);
    {
      this.props.danhSachGheDangDat.map((gheDangDat, index) => {
        this.setState({
          maLichChieu: "",
          danhSachVe: [
            {
              maGhe: gheDangDat.maGhe,
              giaVe: gheDangDat.giaVe,
            },
          ],
          taiKhoanNguoiDung: "",
        });
        this.props.checkOut(this.state);
      });
    }
  };

  render() {
    const movieInfo = this.props.movieInfo;
    console.log("Ticket ==============================")
    console.log(movieInfo);

    return (
      <div className="container">
        <div className="row">
          <widget type="ticket" className="--flex-column">
            <div className="top --flex-column">
              <div className="movie-title">{movieInfo.tenPhim}</div>
              <div className="tourname">{movieInfo.tenCumRap}</div>
              <div className="date">{movieInfo.ngayChieu} - {movieInfo.gioChieu}</div>
              <img src="https://image.freepik.com/free-vector/addicted-junk-food-snacks_53876-43705.jpg" alt="poster"/>
              <div className="deetz --flex-row-j!sb">
                <div className="event --flex-column">
                  <div className="date">Your seat(s):</div>
                  <div className="location -bold">
                    {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                      return (
                          <Fragment key={index}>
                            <span className="mr-1">{gheDangDat.tenGhe}</span>
                            {(index + 1) % 5 === 0 && <br />}
                          </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="price --flex-column">
                  <div className="label">Price</div>
                  <div className="cost -bold">{this.tongTien(this.props.danhSachGheDangDat)} VND</div>
                </div>
              </div>
            </div>
            <div className="rip" />
            <div className="bottom --flex-row-j!sb">
              <div className="barcode" />
              <button
                  className="buy"
                  onClick={() => {
                    this.checkOut();
                  }}
              >
                CHECK OUT
              </button>
            </div>
          </widget>
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
