import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddGheFailed } from "./../../containers/GuestLayout/BookingPage/modules/action";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>

        <div className="mt-5">
          <table className="table" border="">
            <thead>
              <tr className="">
                <th>Seat Number</th>
                <th>Price</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
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
    danhSachGheDangDat: state.addGheReducer.danhSachGheDangDat,
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
