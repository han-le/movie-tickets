import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddGheFailed } from "./../../containers/GuestLayout/BookingPage/modules/action";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="mt-4 gheDuocChon"></button>
          <span className="ml-2 text-light font-weight-bolder">Ghế đã đặt</span>
          <br />
          <button className="mt-1 gheDangChon"></button>
          <span className="ml-2 text-light font-weight-bolder">Ghế đã đặt</span>
          <br />
          <div className="mr-2">
            <button className="mt-1 ghe "></button>
            <span className="ml-2 text-light font-weight-bolder">
              Ghế đã đặt
            </span>
          </div>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 15 }}>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th>Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.tenGhe}</td>
                    <td>{gheDangDat.giaVe}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
