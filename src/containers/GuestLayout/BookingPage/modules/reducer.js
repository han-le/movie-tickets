import { ADD_GHE_REQUESET, ADD_GHE_SUCCESS, ADD_GHE_FAILED } from "./constant";

let stateDefault = {
  danhSachGheDangDat: [
    
  ],
};
const addGheReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_GHE_REQUESET: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case ADD_GHE_FAILED :{
      return{...state}
    }
    default:
      return { ...state };
  }
};

export default addGheReducer;
