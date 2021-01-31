import { GET_GHE_REQUEST, GET_GHE_SUCCESS, GET_GHE_FAILED, CHANGE_SELECT_GHE } from "./constant";
import Axios from "axios";


export const actAddGheApi = (id) => {
  return (dispatch) => {
    dispatch(actAddGheRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=18532`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actAddGheSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actAddGheFailed(err));
      });
  };
};

export const actAddGheRequest = () => {
  return {
    type: GET_GHE_REQUEST,
  };
};

export const actAddGheSuccess = (ghe) => {
  return {
    type: GET_GHE_SUCCESS,
    ghe,
  };
};

export const actAddGheFailed = (soGhe) => {
  return {
    type: GET_GHE_FAILED,
    soGhe,
  };
};

export const actChangeSelectGhe = (ghe) => {
  return {
    type: CHANGE_SELECT_GHE,
    ghe,
  };
};

// let subArr =[]
// arr = [[],[],[],[]]
// let Arr = array [160 object].map(object,index) => {
//     if (index *10 === 0) {
//         subArr = []
//         subArr = []
//     }
// }

// return (
//     arr.map(asdas)
// )
